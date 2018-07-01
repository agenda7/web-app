import React from "react"
import moment from "moment"
import Calendar from "react-big-calendar"
import agenda from '../mocks/agenda'
import Container from "../components/base/Container"

import "react-big-calendar/lib/css/react-big-calendar.css"

Calendar.setLocalizer(Calendar.momentLocalizer(moment))

export default class Agenda extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      events: agenda
    }
  }

  onSelectEvent (event) {
    window.location.href = '/s/' + event.data.id
  }

  render () {
    return (
      <Container>
        <h2>Minha agenda</h2>
        <Calendar
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          onSelectEvent={this.onSelectEvent.bind(this)}
          style={{ height: "100vh" }}
        />
      </Container>
    )
  }
}