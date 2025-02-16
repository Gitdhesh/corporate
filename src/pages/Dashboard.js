import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Alert, CircularProgress, Box } from '@mui/material';
import MetricsCard from '../components/Dashboard/MetricsCard';
import { fetchMetrics } from '../services/api';

function Dashboard() {
  const [metrics, setMetrics] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMetrics = async () => {
      try {
        setLoading(true);
        const data = await fetchMetrics();
        setMetrics(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching metrics:', error);
        setError('Failed to load metrics. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getMetrics();
  }, []);

  if (loading) {
    return (
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 4 }}>
        <Alert 
          severity="error" 
          sx={{ 
            '& .MuiAlert-message': { 
              display: 'flex', 
              alignItems: 'center' 
            } 
          }}
        >
          {error}
          <Button 
            color="inherit" 
            size="small" 
            onClick={() => window.location.reload()} 
            sx={{ ml: 2 }}
          >
            Retry
          </Button>
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom color="primary">
        Corporate Sustainability Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <MetricsCard 
            title="Carbon Footprint"
            value={`${metrics?.carbon_footprint || 0} kg CO2`}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricsCard 
            title="Energy Consumption"
            value={`${metrics?.energy_consumption || 0} kWh`}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricsCard 
            title="Waste Reduction"
            value={`${metrics?.waste_reduction || 0} kg`}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricsCard 
            title="Employee Participation"
            value={`${metrics?.employee_participation || 0}%`}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard; 