import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <Typography variant="h3" gutterBottom>
          Corporate Climate Change Education Platform
        </Typography>
        <Typography variant="h5" color="textSecondary">
          Empowering organizations to drive sustainable change
        </Typography>
      </div>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Employee Engagement
              </Typography>
              <Typography variant="body1">
                Personalized action plans and sustainability challenges
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Sustainability Dashboard
              </Typography>
              <Typography variant="body1">
                Track company-wide environmental impact
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Custom Training
              </Typography>
              <Typography variant="body1">
                Department-specific sustainability modules
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home; 