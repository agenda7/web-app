import React from 'react'
import Grid from 'material-ui/Grid'

import TextField from 'material-ui/TextField';
import Search from '@material-ui/icons/Search';

const SearchBar = (props) => {
  const { data = [] } = props
  return (
    <div>
      <Grid container spacing={8} alignItems="flex-end">
				<Grid item>
					<Search />
				</Grid>
				<Grid item>
					<TextField id="input-with-icon-grid" label="With a grid" />
				</Grid>
			</Grid>
    </div>
  )
}

export default SearchBar