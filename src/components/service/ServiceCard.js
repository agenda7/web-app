import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import './ServiceCard.css'

const styles = theme => ({
  card: {},
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {},
  expand: {},
  avatar: {
    backgroundColor: red[500],
  },
})

class ServiceCard extends React.Component {
  state = { expanded: false }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const { classes, data } = this.props

    return (
      <article>
        <Link to={`/s/${data.id}`}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Company" className={classes.avatar}>
                  {data.company.name.substring(0, 1).toUpperCase()}
                </Avatar>
              }
              title={data.company.name}
              subheader={data.price}
            />
            <CardMedia
              className={classes.media}
              image={'https://picsum.photos/300/200/?image=' + data.id}
              title={data.title}
            />
            <CardContent>
              <Typography component="p">
                {data.title}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </article>
    )
  }
}

ServiceCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ServiceCard)
