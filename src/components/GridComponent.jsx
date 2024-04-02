import { Grid, Typography } from '@mui/material'
import React from 'react'
const styles = {
  container: {
    display: 'flex',
    height: '100vh', // Set the height of the container
  },
  grid1: {
    flex: '0 0 25%', // Make Grid 1 take 25% of the container width and not grow or shrink
    padding: '10px',
    backgroundColor: 'red',
    overflow: 'auto', // Enable scrolling if content overflows
  },
  grid2: {
    flex: '1', // Make Grid 2 take remaining space
    padding: '10px',
    backgroundColor: 'blue',
    overflow: 'auto', // Enable scrolling if content overflows
  },
};
const GridComponent = () => {

  return (
    <div style={styles.container}>
      <Grid container style={styles.grid1}>
        <Grid item >
          <Typography variant='h2'>Grid 1</Typography>
        </Grid>
      </Grid>
      <Grid container style={styles.grid2}>
        <Grid item >
          {/* Place your content for Grid 2 here */}
          {/* Example content to test scrolling */}
          {Array.from(Array(20).keys()).map((index) => (
            <div key={index} style={{ padding: '20px' }}>Grid 2 - Item {index + 1}</div>
          ))}
        </Grid>
      </Grid>
    </div>
  )
}

export default GridComponent