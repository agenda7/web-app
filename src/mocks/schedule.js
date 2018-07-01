import moment from 'moment'
import services from './services'

class Schedule {
  constructor () {
    this.events = this.getCachedEvents() || []
  }

  getCachedEvents () {
    const cached = localStorage.getItem('schedule')
    if (cached) {
      return JSON.parse(cached)
    }
    return undefined
  }

  setCachedEvents () {
    if (this.events && this.events.length) {
      localStorage.setItem('schedule', JSON.stringify(this.events))
    }
    return this.getCachedEvents()
  }

  getEvents () {
    return this.events
  }

  createEvent (service, start) {
    return {
      id: service.id,
      start: new Date(moment(start)),
      end: new Date(moment(start).add(service.duration, "minutes")),
      title: moment(start).format('h:mm') + ' - ' + service.title,
      data: service
    }
  }

  push (service, start) {
    const event = this.createEvent(service, start)
    this.events.push(event)
    this.setCachedEvents()
    return this.events
  }

  pop (serviceId) {
    this.events = this.events.filter(event => {
      return event.id !== serviceId
    })
    this.setCachedEvents()
    return this.events
  }

  isScheduled (eventId) {
    return this.events.some(event => event.id === eventId)
  }
}

export default new Schedule()