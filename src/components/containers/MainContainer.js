// React
import React, { Component } from 'react';

// Forms
import SearchForm from '../forms/SearchForm';

// Layout
import Loading from '../layout/Loading';
import MoviesResult from '../layout/MoviesResult';
import SearchResult from '../layout/SearchResult';
import TvResult from '../layout/TvResult';
import PaginationResult from '../layout/PaginationResult';

// Material UI
import { Paper, AppBar, Tabs, Tab } from '@material-ui/core';

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
        result: null,
        resultPage: 1,
        resultTotalPages: 0,
        resultTotalResults: 0
    };

    /******************************************
    /* Region: SEARCH
    /******************************************/
    // Search Input Change
    handleSearchInputChange = (searchQuery) => {
        if (searchQuery === '') {
            this.setState({
                searchQuery,
                result: null
            });
        } else {
            this.setState({
                searchQuery,
            });
        }

    };
    // Search Type Change
    handleSearchTypeChange = (searchType) => {
        this.setState({
            searchType,
        });
    };
    // Execute search
    fetchSearchContent = (page) => {
        const { searchQuery, searchType } = this.state;
        // check if has a searchQuery value
        if (searchQuery) {
            this.setState({
                isLoading: true,
                container: "2"
            });
            searchByType(searchQuery, searchType, page)
                .then((result) => {
                    this.setState({
                        result: result.content,
                        resultPage: result.page,
                        resultTotalPages: result.totalPages,
                        resultTotalResults: result.totalResults,
                        isLoading: false,
                    });
                })
                .catch((error) => {
                    alert('Error', `Something went wrong! ${error}`);
                });
        }

    };

    handleSearchExc = (e) => {
        e.preventDefault();
        this.fetchSearchContent(1);
    }
    /******************************************
    /* EndRegion: SEARCH
    /******************************************/

    /******************************************
    /* Region: TAB
    /******************************************/
    // Tab selection Change
    handleTabChange = (event, container) => {

        // Actions according to type
        switch (container) {
            // Movies
            case "1":
                this.setState({
                    isLoading: true,
                    container,
                    searchQuery: '',
                    searchType: 'movie',
                    result: null
                })
                this.fetchMovieContent(this.state.movieType, this.state.resultPage);
                break;
            // Search
            case "2":
                this.setState({
                    isLoading: false,
                    container,
                    searchQuery: '',
                    searchType: 'movie',
                    result: null,
                    resultPage: 1,
                    resultTotalPages: 0,
                    resultTotalResults: 0
                })
                break;
            // TV Shows
            case "3":
                this.setState({
                    isLoading: true,
                    container,
                    searchQuery: '',
                    searchType: 'movie',
                    result: null
                })
                this.fetchTVContent(this.state.tvType, this.state.resultPage);
                break;
            default:
                break;
        }
    }
    /******************************************
    /* EndRegion: TAB
    /******************************************/

    /******************************************
    /* Region: MOVIES
    /******************************************/
    // Load Movie Content
    fetchMovieContent = (movieType, page) => {
        getList('movie', movieType, page)
            .then((result) => {
                this.setState({
                    result: result.content,
                    resultPage: result.page,
                    resultTotalPages: result.totalPages,
                    resultTotalResults: result.totalResults,
                    isLoading: false,
                });
            })
            .catch((error) => {
                alert('Error', `Something went wrong! ${error}`);
            });
    }

    // Movie Type Change
    handleMovieTypeChange = (movieType) => {
        this.setState({
            isLoading: true,
            movieType
        })
        this.fetchMovieContent(movieType, 1);
    }
    /******************************************
    /* EndRegion: MOVIES
    /******************************************/

    /******************************************
    /* Region: TV SHOWS
    /******************************************/
    // Load TV Content
    fetchTVContent = (tvType, page) => {
        getList('tv', tvType, page)
            .then((result) => {
                this.setState({
                    result: result.content,
                    resultPage: result.page,
                    resultTotalPages: result.totalPages,
                    resultTotalResults: result.totalResults,
                    isLoading: false,
                });
            })
            .catch((error) => {
                alert('Error', `Something went wrong! ${error}`);
            });
    }
    // TV Show Type Change
    handleTvShowTypeChange = (tvType) => {
        this.setState({
            isLoading: true,
            tvType
        })
        this.fetchTVContent(tvType, 1);
    }
    /******************************************
    /* EndRegion: MOVIE
    /******************************************/

    /******************************************
    /* Region: PAGINATION
    /******************************************/
    handlePaginationChange = (e, page) => {
        // Actions according to type
        switch (this.state.container) {
            // Movies
            case "1":
                this.fetchMovieContent(this.state.movieType, page);
                break;
            // Search
            case "2":
                this.fetchSearchContent(page);
                break;
            // TV Shows
            case "3":
                this.fetchTVContent(this.state.tvType, page);
                break;
            default:
                break;
        }
    }
    /******************************************
    /* EndRegion: PAGINATION
    /******************************************/

    render() {
        const { isLoading, container, searchQuery, searchType, result, movieType, tvType, resultPage, resultTotalPages, resultTotalResults } = this.state
        return (
            <>
                <SearchForm
                    searchQuery={searchQuery}
                    searchType={searchType}
                    handleSearchInputChange={this.handleSearchInputChange}
                    handleSearchTypeChange={this.handleSearchTypeChange}
                    fetchSearchContent={this.handleSearchExc} />
                <Paper variant="outlined" elevation={0} square >
                    <AppBar position="static" color="default">
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
                    </AppBar>
                    {isLoading ? <Loading /> : null}
                    {container === "1" ? <MoviesResult result={result} handleChange={this.handleMovieTypeChange} movieType={movieType} /> : null}
                    {container === "2" ? <SearchResult searchQuery={searchQuery} result={result} /> : null}
                    {container === "3" ? <TvResult result={result} handleChange={this.handleTvShowTypeChange} tvType={tvType} /> : null}
                    {resultTotalResults > 0 ? <PaginationResult count={resultTotalPages} page={resultPage} handleChange={this.handlePaginationChange} /> : null}
                </Paper>
            </>
        )
    }
}


export default MainContainer;