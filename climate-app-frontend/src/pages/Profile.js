import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, LinearProgress } from '@mui/material';

function Profile() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Employee Profile
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Completed Modules</Typography>
                  <Typography variant="h3" color="primary">12</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Carbon Saved</Typography>
                  <Typography variant="h3" color="primary">245 kg</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Achievement Points</Typography>
                  <Typography variant="h3" color="primary">850</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>Current Progress</Typography>
          <Card>
            <CardContent>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="h6">Sustainable HR Practices</Typography>
                  <Typography variant="caption" sx={{ bgcolor: 'info.main', color: 'white', px: 1, py: 0.5, borderRadius: 1 }}>
                    In Progress
                  </Typography>
                </Box>
                <LinearProgress variant="determinate" value={60} sx={{ height: 10, borderRadius: 5 }} />
                <Typography variant="body2" sx={{ mt: 1 }}>60% Complete</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>Achievements</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h2" sx={{ mb: 2 }}>🌟</Typography>
                  <Typography variant="h6">Sustainability Champion</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Completed all core modules
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h2" sx={{ mb: 2 }}>🌱</Typography>
                  <Typography variant="h6">Green Initiative</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Started 5 eco-friendly projects
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile; 