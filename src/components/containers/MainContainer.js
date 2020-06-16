// React
import React, { Component } from 'react';

// Forms
import SearchForm from '../forms/SearchForm';

// Layout
import Loading from '../layout/Loading';
import MoviesResult from '../layout/MoviesResult';
import SearchResult from '../layout/SearchResult';
import TvResult from '../layout/TvResult';

// Material UI
import { Paper, Tabs, Tab } from '@material-ui/core';

// The Mobie DB API
import { searchByType, getList } from '../../Core/services/themoviedb';

// Main Container
class MainContainer extends Component {
    // Start Start
    state = {
        isLoading: false,
        container: "2",
        searchQuery: '',
        searchType: 'movie',
        movieType: 'popular',
        tvType: 'popular',
        result: null
    };

    /******************************************
    /* Region: SEARCH
    /******************************************/
    // Search Input Change
    handleSearchInputChange = (searchQuery) => {
        this.setState({
            searchQuery,
        });
    };
    // Search Type Change
    handleSearchTypeChange = (searchType) => {
        this.setState({
            searchType,
        });
    };
    // Execute search
    fetchSearchContent = (e) => {
        const { searchQuery, searchType } = this.state;
        e.preventDefault();
        // check if has a searchQuery value
        if (searchQuery) {
            this.setState({
                isLoading: true,
            });
            searchByType(searchQuery, searchType)
                .then((result) => {
                    this.setState({
                        result,
                        isLoading: false,
                    });
                })
                .catch((error) => {
                    alert('Error', `Something went wrong! ${error}`);
                });
        }

    };
    /******************************************
    /* EndRegion: SEARCH
    /******************************************/

    /******************************************
    /* Region: TAB
    /******************************************/
    // Tab selection Change
    handleTabChange = (event, container) => {
        this.setState({
            container
        })
    }
    /******************************************
    /* EndRegion: TAB
    /******************************************/

    /******************************************
    /* Region: MOVIES
    /******************************************/
    // Movie Type Change
    handleMovieTypeChange = (movieType) => {
        this.setState({
            isLoading: true,
            movieType
        })

        getList('movie', movieType)
            .then((result) => {
                this.setState({
                    result,
                    isLoading: false,
                });
            })
            .catch((error) => {
                alert('Error', `Something went wrong! ${error}`);
            });
    }
    /******************************************
    /* EndRegion: MOVIES
    /******************************************/

    /******************************************
    /* Region: TV SHOWS
    /******************************************/
    // TV Show Type Change
    handleTvShowTypeChange = (tvType) => {
        this.setState({
            isLoading: true,
            tvType
        })

        getList('tv', tvType)
            .then((result) => {
                this.setState({
                    result,
                    isLoading: false,
                });
            })
            .catch((error) => {
                alert('Error', `Something went wrong! ${error}`);
            });
    }
    /******************************************
    /* EndRegion: MOVIE
    /******************************************/

    render() {
        const { isLoading, container, searchQuery, result } = this.state
        return (
            <>
                <SearchForm
                    handleSearchInputChange={this.handleSearchInputChange}
                    handleSearchTypeChange={this.handleSearchTypeChange}
                    fetchSearchContent={this.fetchSearchContent} />
                <Paper>
                    <Tabs
                        value={container}
                        onChange={this.handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                        <Tab label="Movies" value="1" />
                        <Tab label="Search Result" value="2" />
                        <Tab label="TV Shows" value="3" />
                    </Tabs>
                    {isLoading ? <Loading /> : null}
                    {container === "1" ? <MoviesResult result={result} handleChange={this.handleMovieTypeChange} /> : null}
                    {container === "2" ? <SearchResult searchQuery={searchQuery} result={result} /> : null}
                    {container === "3" ? <TvResult result={result} handleChange={this.handleTvShowTypeChange} /> : null}
                </Paper>
                <h1>Main Container</h1>

            </>
        )
    }
}


export default MainContainer;