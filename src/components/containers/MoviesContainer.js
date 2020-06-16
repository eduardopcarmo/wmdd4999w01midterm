import React, { Component } from 'react';

import { LinearProgress, Paper, Tabs, Tab } from '@material-ui/core';

import { searchByType } from '../../Core/services/themoviedb';

import SearchForm from '../forms/SearchForm';
import SearchResult from '../layout/SearchResult';
import MovieResult from '../layout/MoviesResult';
import TvResult from '../layout/TvResult';

class MoviesContainer extends Component {
  // Default State
  state = {
    isLoading: false,
    searchQuery: '',
    searchType: 'movie',
    contentType: 2,
    content: null,
    movieSearchType: 'popular',
    tvSearchType: 'popular',
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
        .then((searchResult) => {
          this.setState({
            contentType: 2,
            content: searchResult,
            isLoading: false,
          });
        })
        .catch((error) => {
          alert('Error', `Something went wrong! ${error}`);
        });
    }

    console.debug('fetchSearchContent', this.state.content);
  };

  /******************************************
  /* Endregion: SEARCH
  /******************************************/

  /******************************************
  /* Region: TABS
  /******************************************/
  handleTabChange = (event, contentType) => {
    this.setState({
      contentType: parseInt(contentType),
      content: null,
    });
  };
  /******************************************
  /* Endregion: TABS
  /******************************************/

  /******************************************
  /* Region: MOVIES
  /******************************************/
  handleMoviesChange = (event) => {
    alert('handleMoviesChange');
  };
  /******************************************
  /* Endregion: MOVIES
  /******************************************/

  /******************************************
  /* Region: TV
  /******************************************/
  handleTVChange = (event) => {
    alert('handleTVChange');
  };
  /******************************************
  /* Endregion: TV
  /******************************************/

  render() {
    const {
      isLoading,
      contentType,
      content,
      searchQuery,
      movieSearchType,
      tvSearchType,
    } = this.state;
    return (
      <div>
        {isLoading ? <LinearProgress /> : null}
        <br />
        <br />
        <SearchForm
          handleSearchInputChange={this.handleSearchInputChange}
          handleSearchTypeChange={this.handleSearchTypeChange}
          fetchSearchContent={this.fetchSearchContent}
        />
        <br />
        <br />
        <Paper>
          <Tabs
            value={contentType.toString()}
            onChange={this.handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Movies" value="1" />
            <Tab label="Search Result" value="2" />
            <Tab label="TV Shows" value="3" />
          </Tabs>
          {contentType === 1 ? (
            <MovieResult
              movieSearchType={movieSearchType}
              content={content}
              handleMoviesChange={this.handleMoviesChange}
            />
          ) : null}
          {contentType === 2 ? (
            <SearchResult searchQuery={searchQuery} content={content} />
          ) : null}
          {contentType === 3 ? (
            <TvResult
              tvSearchType={tvSearchType}
              content={content}
              handleTVChange={this.handleTVChange}
            />
          ) : null}
        </Paper>
      </div>
    );
  }
}

export default MoviesContainer;
