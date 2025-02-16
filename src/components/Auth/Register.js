import React, { useState } from "react";
import { 
  Container, 
  Card, 
  CardContent, 
  Typography, 
  TextField, 
  Button, 
  Box, 
  MenuItem,
  FormControl,
  InputLabel,
  Select
} from '@mui/material';
import { Link as RouterLink, useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    department: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Form Submitted", formData);
    // Add API call here to handle registration
    navigate("/dashboard");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Card sx={{ 
        boxShadow: (theme) => theme.shadows[3],
        borderRadius: 2,
        '&:hover': {
          boxShadow: (theme) => theme.shadows[6],
        },
        transition: 'box-shadow 0.3s ease-in-out'
      }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center" color="primary" sx={{ mb: 4 }}>
            Register for EcoLearn Corporate
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Company Name"
              name="company"
              value={formData.company}
              onChange={handleChange}
              margin="normal"
              required
              sx={{ mb: 2 }}
            />
            
            <TextField
              fullWidth
              label="Work Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
              sx={{ mb: 2 }}
            />
            
            <FormControl fullWidth margin="normal" sx={{ mb: 2 }}>
              <InputLabel>Department</InputLabel>
              <Select
                value={formData.department}
                label="Department"
                name="department"
                onChange={handleChange}
                required
              >
                <MenuItem value="">Select Department</MenuItem>
                <MenuItem value="hr">Human Resources</MenuItem>
                <MenuItem value="finance">Finance</MenuItem>
                <MenuItem value="operations">Operations</MenuItem>
                <MenuItem value="marketing">Marketing</MenuItem>
              </Select>
            </FormControl>
            
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              margin="normal"
              required
              sx={{ mb: 2 }}
            />
            
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              margin="normal"
              required
              sx={{ mb: 3 }}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              sx={{ 
                mt: 2, 
                mb: 3,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 2,
                textTransform: 'none'
              }}
            >
              Register
            </Button>
            
            <Typography variant="body1" align="center" sx={{ mt: 2 }}>
              Already have an account?{' '}
              <RouterLink 
                to="/login" 
                style={{ 
                  color: '#2C6E49',
                  textDecoration: 'none',
                  fontWeight: 500
                }}
              >
                Login here
              </RouterLink>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Register; 