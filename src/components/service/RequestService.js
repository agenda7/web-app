import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import RequestConfirm from './RequestConfirm'

const styles = theme => ({
  textField: {
    marginBottom: '200px'
  }
})

class RequestService extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      form: {
        datetime: null,
        open: false
      }
    }
  }

  handleClickOpen () {
    this.setState({
      open: true
    })
  }

  handleClose (value) {
    this.setState({ open: false })
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
    console.log(this.state.form)
  }

  render() {
    const { classes, data } = this.props
    const { form } = this.state

    return (
      <div>
        <Typography variant="display1">
          {data.price}
        </Typography>
        <br />
        <Typography component="p" gutterBottom>
          <TextField
            label="Data e horário do serviço:"
            type="datetime-local"
            className={classes.TextField}
            onChange={this.handleChange('datetime')}
            InputLabelProps={{
              shrink: true
            }}
          />
        </Typography>
        <br />
        <Typography component="p" gutterBottom>
          <Button variant="raised" size="large" color="primary" onClick={this.handleClickOpen.bind(this)}>
            Solicitar serviço
          </Button>
          <RequestConfirm
            open={this.state.open}
            onClose={this.handleClose.bind(this)}
          />
        </Typography>
        <br />
      </div>
    )
  }
}

RequestService.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RequestService)
