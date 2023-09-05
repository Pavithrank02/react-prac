import React from "react";
import Grid from '@mui/material/Grid';
const Component1 = () => {
  return (

    <Grid
      container
      spacing={2}
      style={{ backgroundColor: "blue" }}
      >
      <Grid item xs={6} style={{ backgroundColor: "green" }} sx={{
        height: 200,
        width: {
          xs: 100,
          sm: 200,
          md: 300,
          lg: 400,
          xl: 500
        }
      }} md={4}>
        Grid 1
      </Grid>
      <Grid item xs={6} style={{ backgroundColor: "red" }} md={8}>
        Grid 2
      </Grid>
    </Grid>
  )

}

export default Component1