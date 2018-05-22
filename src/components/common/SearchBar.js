import React from 'react'
import Grid from 'material-ui/Grid'

import TextField from 'material-ui/TextField';
import Search from '@material-ui/icons/Search';

export default class SearchBar extends React.Component {
  handleChange (e) {
    this.props.onChange(e.target.value)
  }

  render () {
    return (
      <div>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <Search />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" onChange={this.handleChange.bind(this)} />
          </Grid>
        </Grid>
      </div>
    )
  }
}
