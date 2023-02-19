import React from "react";
import { Skeleton, Grid } from "@mui/material";

const SkeletonLoader = () => {
  return (
    <Grid container marginBottom={5} spacing={4}>
      {[...Array(8)].map((_, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <Skeleton variant="rectangular" width="100%" height={200} />
          <Skeleton variant="text" width="80%" height={40} />
          <Skeleton variant="text" width="60%" height={40} />
          <Skeleton variant="text" width="90%" height={40} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SkeletonLoader;
