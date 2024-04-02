import { Grid } from '@mui/material'
import React from 'react'

const GridComponent = () => {
  return (
    <Grid container>
      <Grid item xs={3} style={{ padding: '10px', backgroundColor: 'red', position: 'fixed' }}>
        Grid 1
      </Grid>
      <Grid xs item style={{ padding: '10px', backgroundColor: 'blue' }}>
        grid 2
      </Grid>

    </Grid>
  )
}

export default GridComponent