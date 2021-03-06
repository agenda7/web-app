import React from "react"
import moment from "moment"
import Calendar from "react-big-calendar"
import Schedule from '../mocks/schedule'
import Container from "../components/base/Container"
import { withRouter } from 'react-router-dom'

import "react-big-calendar/lib/css/react-big-calendar.css"

Calendar.setLocalizer(Calendar.momentLocalizer(moment))

class Agenda extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      events: Schedule.getEvents()
    }
  }

  onSelectEvent (event) {
    this.props.history.push('/s/' + event.data.id)
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

export default withRouter(Agenda)