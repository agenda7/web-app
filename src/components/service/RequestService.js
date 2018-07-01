import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'

import RequestConfirm from './RequestConfirm'
import Schedule from '../../mocks/schedule'

const styles = theme => ({
  textField: {
    marginBottom: '200px'
  }
})

class RequestService extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dialogOpen: false,
      isScheduled: Schedule.isScheduled(props.data.id),
      form: {
        datetime: null
      }
    }
  }

  handleClickOpen () {
    this.setState({
      dialogOpen: true
    })
  }

  handleClose (value) {
    if (value && typeof value === 'number') {
      this.setState({
        form: {
          ...this.state.form,
          datetime: value
        },
        dialogOpen: false
      }, this.submit.bind(this))
    } else {
      this.setState({ dialogOpen: false })
    }
  }

  handleChange (field) {
    return event => {
      this.setState({
        form: {
          ...this.state.form,
          [field]: event.target.value
        }
      })
    }
  }

  submit () {
    const { data, history } = this.props
    Schedule.push(data, this.state.form.datetime)
    this.setState({ isScheduled: true })
    history.push('/agenda')
  }

  cancelEvent () {
    const { data } = this.props
    Schedule.pop(data.id)
    this.setState({ isScheduled: false })
  }

  render() {
    const { data } = this.props
    const { form, isScheduled } = this.state
    
    const requestBtn = isScheduled ? null : (
      <Button variant="raised" size="large" color="primary" onClick={this.handleClickOpen.bind(this)}>
        Solicitar serviço
      </Button>
    )

    const cancelBtn = isScheduled ? (
      <Button variant="raised" size="large" color="secondary" onClick={this.cancelEvent.bind(this)}>
        Cancelar serviço
      </Button>
    ) : null

    return (
      <div>
        <Typography variant="display1">
          {data.price}
        </Typography>
        <br />
        <Typography component="p" gutterBottom>
          {requestBtn}
          {cancelBtn}
          <RequestConfirm
            open={this.state.dialogOpen}
            onClose={this.handleClose.bind(this)}
          />
        </Typography>
        <br />
      </div>
    )
  }
}

RequestService.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(withRouter(RequestService))
