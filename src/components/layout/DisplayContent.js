import React from 'react';

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from '@material-ui/core';

const getStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const DisplayContent = (props) => {
  const { posterUrl, title, releaseDate, popularity, overview } = props;
  const classes = getStyles();

  return (
    <Card className={classes.root}>
      <CardMedia image={posterUrl} title={title} className={classes.cover} />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h3" variant="h3">
            {title}
          </Typography>
          <p>{`Release Date: ${releaseDate} | Popularity: ${popularity}`}</p>
          <p>{overview}</p>
        </CardContent>
      </div>
    </Card>
  );
};

export default DisplayContent;
