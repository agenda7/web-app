import React from 'react'
import Grid from '@material-ui/core/Grid'

import ServiceCard from './ServiceCard'

const parseCards = service => {
  return (
    <Grid item xs={12} sm={6} lg={4} key={service.id}>
      <ServiceCard data={service} />
    </Grid>
  )
}

const ServiceList = (props) => {
  const { data = [] } = props
  return (
    <div>
      <Grid container spacing={24}>
        {data.map(parseCards)}
      </Grid>
    </div>
  )
}

export default ServiceList