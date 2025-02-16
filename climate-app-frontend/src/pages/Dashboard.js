import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Alert } from '@mui/material';
import MetricsCard from '../components/Dashboard/MetricsCard';
import { fetchMetrics } from '../services/api';

function Dashboard() {
  const [metrics, setMetrics] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMetrics = async () => {
      try {
        const data = await fetchMetrics();
        setMetrics(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching metrics:', error);
        setError('Failed to load metrics. Please try again later.');
      }
    };

    getMetrics();
  }, []);

  if (error) return (
    <Container>
      <Alert severity="error">{error}</Alert>
    </Container>
  );

  if (!metrics) return (
    <Container>
      <Typography>Loading...</Typography>
    </Container>
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Corporate Sustainability Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <MetricsCard 
            title="Carbon Footprint"
            value={`${metrics.carbon_footprint} kg CO2`}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricsCard 
            title="Energy Consumption"
            value={`${metrics.energy_consumption} kWh`}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricsCard 
            title="Waste Reduction"
            value={`${metrics.waste_reduction} kg`}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricsCard 
            title="Employee Participation"
            value={`${metrics.employee_participation}%`}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard; 