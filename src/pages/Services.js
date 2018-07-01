import React from "react"

import ServiceList from "../components/service/ServiceList"
import SearchBar from "../components/common/SearchBar"
import services from "../mocks/services"
import Container from "../components/base/Container"

export default class Services extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      services,
      filteredServices: services,
      query: ''
    }
  }

  setSearch (query = '') {
    this.setState({
      query,
      filteredServices: query.length ? this.state.services.filter(service => {
        const title = service.title.toLowerCase()
        return title.indexOf(query.toLowerCase()) >= 0
      }) : services
    })
  }

  render () {
    const { filteredServices } = this.state
    return (
      <Container>
        <h2>Serviços</h2>
        <SearchBar onChange={this.setSearch.bind(this)} />
        <ServiceList data={filteredServices} />
      </Container>
    )
  }
}