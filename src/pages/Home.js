import React from "react"

import ServiceList from "../components/service/ServiceList"

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
	}
]

const Home = () => (
  <div>
    <h2>Serviços Recentes</h2>
    <ServiceList data={services} />
  </div>
)

export default Home