import React from "react"
import moment from "moment"
import Calendar from "react-big-calendar"

import "react-big-calendar/lib/css/react-big-calendar.css"

Calendar.setLocalizer(Calendar.momentLocalizer(moment))

export default class Agenda extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      events: [
        {
          start: new Date(),
          end: new Date(moment().add(1, "days")),
          title: "Some title"
        }
      ]
    }
  }

  render () {
    return (
      <div>
        <h2>Minha agenda</h2>
        <Calendar
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
        />
      </div>
    )
  }
}