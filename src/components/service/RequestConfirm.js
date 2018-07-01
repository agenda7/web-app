import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import TodayIcon from '@material-ui/icons/Today'
import AddIcon from '@material-ui/icons/Add'
import dates from '../../mocks/dates'

export default class RequestConfirm extends React.Component {
  handleListItemClick (date) {
    this.props.onClose(date.valueOf())
  }

  render() {
    const { ...other } = this.props

    return (
      <Dialog onClose={this.handleListItemClick.bind(this, null)} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Horários disponíveis</DialogTitle>
        <div>
          <List>
            {dates.map(date => (
              <ListItem button onClick={this.handleListItemClick.bind(this, date)} key={date.unix()}>
                <ListItemAvatar>
                  <Avatar>
                    <TodayIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={date.calendar()} />
              </ListItem>
            ))}
          </List>
        </div>
      </Dialog>
    )
  }
}

RequestConfirm.propTypes = {
  onClose: PropTypes.func,
  selectedValue: PropTypes.string
}