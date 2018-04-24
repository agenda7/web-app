import React from "react"

const Service = ({ match }) => {
	const { serviceId } = match.params

  return (
  	<div>
	    <h2>Serviço {serviceId}</h2>
	  </div>
  )
}

export default Service