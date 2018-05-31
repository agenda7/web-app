import Grid from '@material-ui/core/Grid'
import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'
import RequestService from '../components/service/RequestService'

const data = {
  id: 6,
  title: 'servico 6',
  description: 'servico 6servico 6servico 6servico 6servico 6servico 6servico 6servico 6servico 6servico 6servico 6servico 6servico 6servico 6servico 6',
  price: 'R$ 6',
  duration: '00:30',
  company: {
    id: 'company6',
    name: 'Company 6'
  }
}

const styles = theme => ({
  card: {},
  media: {
    height: 0,
    paddingTop: '30%', // 16:9
  },
  actions: {},
  expand: {},
  avatar: {
    backgroundColor: red[500],
  },
  textField: {
    marginBottom: '200px'
  }
})

class Service extends React.Component {
  state = { expanded: false }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const { classes, match } = this.props
    const avatar = (
      <Avatar aria-label="Company" className={classes.avatar}>
        {data.company.name.substring(0, 1).toUpperCase()}
      </Avatar>
    )

    return (
      <article>
        <Card className={classes.card}>
          <CardHeader avatar={avatar} title={data.company.name} />
          <CardMedia className={classes.media} image={'https://picsum.photos/300/200/?random'} title={data.title} />
          <CardContent>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={7} lg={8}>
                <Typography gutterBottom variant="headline" component="h1">
                  {data.title}
                </Typography>
                <br />
                <Typography component="p" gutterBottom>
                  {data.description}
                </Typography>
                <br />
                <Typography variant="body1" gutterBottom>
                  <b>Duração:</b> {data.duration}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={5} lg={4}>
                <RequestService data={data} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </article>
    )
  }
}

Service.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Service)
