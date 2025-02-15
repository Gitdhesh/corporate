from flask import Flask, render_template, jsonify, request, session
from flask_cors import CORS
from config import Config

app = Flask(__name__, 
    template_folder='../frontend/templates',
    static_folder='../frontend/static'
)
app.config.from_object(Config)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/training')
def training():
    return render_template('training.html')

@app.route('/api/sustainability-metrics')
def get_metrics():
    # Dummy data - in production, this would come from a database
    return jsonify({
        'carbon_footprint': 2500,
        'energy_consumption': 1500,
        'waste_reduction': 350,
        'employee_participation': 75
    })

@app.route('/api/login', methods=['POST'])
def login_api():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    # In production, validate against database
    if email == "test@example.com" and password == "password":
        session['user'] = email
        return jsonify({"success": True})
    return jsonify({"success": False, "message": "Invalid credentials"}), 401

@app.route('/api/modules')
def get_modules():
    # In production, fetch from database
    modules = [
        {
            "id": 1,
            "title": "Sustainable HR Practices",
            "department": "hr",
            "duration": "2 hours",
            "description": "Learn how to implement sustainable practices in HR operations"
        }
    ]
    return jsonify(modules)

@app.route('/register')
def register():
    return render_template('register.html')

@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/api/register', methods=['POST'])
def register_api():
    data = request.get_json()
    # In production, validate and save to database
    if data.get('email') and data.get('password'):
        return jsonify({"success": True})
    return jsonify({"success": False, "message": "Invalid registration data"}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5001) 