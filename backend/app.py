from flask import Flask, jsonify, request
from flask_cors import CORS
from datetime import datetime, timedelta
import jwt
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, resources={
    r"/api/*": {
        "origins": ["http://localhost:3000"],
        "methods": ["GET", "POST", "PUT", "DELETE"],
        "allow_headers": ["Content-Type", "Authorization"],
        "supports_credentials": True
    }
})

app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'your-secret-key-here')

# Mock database
users = []
metrics_data = {
    "carbon_footprint": 1250,
    "energy_consumption": 4500,
    "waste_reduction": 320,
    "employee_participation": 75
}

training_modules = [
    {
        "id": 1,
        "title": "Sustainable HR Practices",
        "department": "hr",
        "duration": "2 hours",
        "description": "Learn how to implement sustainable practices in HR operations"
    },
    {
        "id": 2,
        "title": "Green Investment Strategies",
        "department": "finance",
        "duration": "3 hours",
        "description": "Understanding sustainable investments and ESG criteria"
    },
    {
        "id": 3,
        "title": "Sustainable Operations",
        "department": "operations",
        "duration": "4 hours",
        "description": "Implementing eco-friendly operational practices"
    }
]

# API Routes
@app.route('/api/sustainability-metrics', methods=['GET'])
def get_sustainability_metrics():
    return jsonify(metrics_data)

@app.route('/api/auth/login', methods=['POST'])
def handle_login():
    data = request.get_json()
    
    user = next((user for user in users if user['email'] == data.get('email')), None)
    
    if user and user['password'] == data.get('password'):
        token = jwt.encode({
            'email': user['email'],
            'exp': datetime.utcnow() + timedelta(days=1)
        }, app.config['SECRET_KEY'], algorithm='HS256')
        
        return jsonify({
            'success': True,
            'token': token,
            'user': {
                'email': user['email'],
                'company': user['company'],
                'department': user['department']
            }
        })
    
    return jsonify({'error': 'Invalid credentials'}), 401

@app.route('/api/auth/register', methods=['POST'])
def handle_register():
    data = request.get_json()
    
    required_fields = ['company', 'email', 'department', 'password']
    if not all(field in data for field in required_fields):
        return jsonify({'error': 'Missing required fields'}), 400
    
    if any(user['email'] == data['email'] for user in users):
        return jsonify({'error': 'Email already registered'}), 400
    
    new_user = {
        'company': data['company'],
        'email': data['email'],
        'department': data['department'],
        'password': data['password']  # In production, hash this!
    }
    users.append(new_user)
    
    return jsonify({'message': 'Registration successful'}), 201

@app.route('/api/modules', methods=['GET'])
def get_modules():
    return jsonify(training_modules)

if __name__ == '__main__':
    app.run(port=5001, debug=True) 