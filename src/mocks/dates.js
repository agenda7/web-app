import moment from 'moment'

export default [
  moment().add(1, 'days'),
  moment().add(2, 'days'),
  moment().add(3, 'days'),
  moment().add(4, 'days'),
  moment().add(4, 'days').add(2, 'hours'),
  moment().add(4, 'days').add(4, 'hours')
]