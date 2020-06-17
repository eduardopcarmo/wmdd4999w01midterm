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
    height: '45ch',
    marginBottom: '16px'

  },
  cover: {
    width: '30%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'lightgrey',
    padding: '0',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center'
  },
  subTitle: {
    textAlign: 'center',
    margin: '0'
  }
}));

const DisplayContent = (props) => {
  const { posterUrl, title, releaseDate, popularity, overview } = props;
  const classes = getStyles();

  return (
    <Card className={classes.root}>
      {posterUrl ? <CardMedia image={posterUrl} title={title} className={classes.cover} /> : <CardContent className={classes.cover}></CardContent>}
      <CardContent className={classes.details}>
        <Typography component="h3" variant="h5" className={classes.title}>
          {title}
        </Typography>
        <p className={classes.subTitle}>{`Release Date: ${releaseDate} | Popularity: ${popularity}`}</p>
        <p>{overview}</p>
      </CardContent>
    </Card>
  );
};

export default DisplayContent;
