import React from 'react';

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
} from '@material-ui/core';

const getStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  select: {
    width: '25ch',
  },
}));

const OnlyOneSelectForm = (props) => {
  const { handleSearchTypeChange, options, defaultOption } = props;

  const classes = getStyles();
  return (
    <form noValidate className={classes.root}>
      <FormControl variant="outlined" className={classes.select}>
        <InputLabel>Search Type</InputLabel>
        <Select
          label="Search Type"
          defaultValue={defaultOption}
          onChange={(event) => handleSearchTypeChange(event.target.value)}
        >
          {options.map((item, index) => {
            return (
              <MenuItem value={item} key={index}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </form>
  );
};

export default OnlyOneSelectForm;
