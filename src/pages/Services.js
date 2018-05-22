import React from "react"

import ServiceList from "../components/service/ServiceList"
import SearchBar from "../components/common/SearchBar"

const services = [
  {
    id: 1,
    title: 'servico 1',
    price: 'R$ 1',
    company: {
      name: 'Company 1'
    }
  },
  {
    id: 2,
    title: 'servico 2',
    price: 'R$ 2',
    company: {
      name: 'Company 2'
    }
  },
  {
    id: 3,
    title: 'servico 3',
    price: 'R$ 3',
    company: {
      name: 'Company 3'
    }
  },
  {
    id: 4,
    title: 'servico 4',
    price: 'R$ 4',
    company: {
      name: 'Company 4'
    }
  },
  {
    id: 5,
    title: 'servico 5',
    price: 'R$ 5',
    company: {
      name: 'Company 5'
    }
  },
  {
    id: 6,
    title: 'servico 6',
    price: 'R$ 6',
    company: {
      name: 'Company 6'
    }
  }
]

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
    const { match } = this.props
    const { filteredServices } = this.state
    return (
      <div>
        <h2>Serviços</h2>
        <SearchBar onChange={this.setSearch.bind(this)} />
        <ServiceList data={filteredServices} />
      </div>
    )
  }
}