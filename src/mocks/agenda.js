import moment from 'moment'
import services from './services'

const list = [
  // {
  //   id: services[14].id,
  //   start: new Date(moment().add(1, "days")),
  //   end: new Date(moment().add(1, "days").add(1, "hour")),
  //   title: moment().add(1, "days").format('h:mm') + ' - ' + services[14].title,
  //   data: services[14]
  // },
  // {
  //   id: services[10].id,
  //   start: new Date(moment().add(3, "days").add(3, "hour")),
  //   end: new Date(moment().add(3, "days").add(5, "hour")),
  //   title: moment().add(3, "days").add(3, "hour").format('h:mm') + ' - ' + services[10].title,
  //   data: services[10]
  // },
  // {
  //   id: services[5].id,
  //   start: new Date(moment().add(1, "days").add(4, "hour")),
  //   end: new Date(moment().add(1, "days").add(5, "hour")),
  //   title: moment().add(1, "days").add(4, "hour").format('h:mm') + ' - ' + services[5].title,
  //   data: services[5]
  // }
]

export const push = (service, start) => {
  const event = {
    id: service.id,
    start: new Date(moment(start)),
    end: new Date(moment(start).add(service.duration, "minutes")),
    title: moment(start).format('h:mm') + ' - ' + service.title,
    data: service
  }
  list.push(event)
  return list
}

export default list