import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import { Link } from "react-router-dom"
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import './ServiceCard.css';

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
});

class ServiceCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

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
              image={'https://picsum.photos/300/200/?random'}
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
    );
  }
}

ServiceCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServiceCard);
