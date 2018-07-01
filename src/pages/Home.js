import React from "react"

import ServiceList from "../components/service/ServiceList"
import services from "../mocks/services"
import Container from "../components/base/Container"

const Home = () => (
  <Container>
    <h2>Serviços Recentes</h2>
    <ServiceList data={[services[7], services[14], services[19]]} />
  </Container>
)

export default Home