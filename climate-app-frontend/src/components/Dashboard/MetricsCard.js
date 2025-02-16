import React from "react";
import { Card, CardContent, Typography, CircularProgress } from "@mui/material";

function MetricsCard({ title, value, loading, error }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>

        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography color="error">Failed to load metrics</Typography>
        ) : (
          <Typography variant="h4" color="primary">
            {value ?? "N/A"}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default MetricsCard;
