// React
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Material UI - Lab
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '5ch',
        marginBottom: '5ch',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
}));

const PaginationResult = (props) => {
    const { count, page, handleChange } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Pagination count={count} page={page} onChange={handleChange} variant="outlined" shape="rounded" />
        </div>
    );
};

export default PaginationResult;
