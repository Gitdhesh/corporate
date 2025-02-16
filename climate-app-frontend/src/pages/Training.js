import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function Training() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const modules = [
    {
      id: 1,
      title: "Sustainable HR Practices",
      department: "hr",
      duration: "2 hours",
      description: "Learn how to implement sustainable practices in HR operations"
    },
    {
      id: 2,
      title: "Green Investment Strategies",
      department: "finance",
      duration: "3 hours",
      description: "Understanding sustainable investments and ESG criteria"
    },
    {
      id: 3,
      title: "Sustainable Operations",
      department: "operations",
      duration: "4 hours",
      description: "Implementing eco-friendly operational practices"
    }
  ];

  const filteredModules = modules.filter(module => 
    selectedDepartment === 'all' || module.department === selectedDepartment
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Training Modules
      </Typography>

      <FormControl sx={{ mb: 4, minWidth: 200 }}>
        <InputLabel>Filter by Department</InputLabel>
        <Select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          label="Filter by Department"
        >
          <MenuItem value="all">All Departments</MenuItem>
          <MenuItem value="hr">Human Resources</MenuItem>
          <MenuItem value="finance">Finance</MenuItem>
          <MenuItem value="operations">Operations</MenuItem>
          <MenuItem value="marketing">Marketing</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3}>
        {filteredModules.map(module => (
          <Grid item xs={12} sm={6} md={4} key={module.id}>
            <Card>
              <CardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    {module.title}
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      bgcolor: 'primary.main', 
                      color: 'white', 
                      px: 1, 
                      py: 0.5, 
                      borderRadius: 1 
                    }}
                  >
                    {module.department.toUpperCase()}
                  </Typography>
                </div>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {module.description}
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" color="text.secondary">
                    {module.duration}
                  </Typography>
                  <Button variant="contained" color="primary">
                    Start Module
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Training; 