import React, { Component } from 'react';
import { Table } from "./Components/Table/Table"
import { selectOptions, selectCustomStyles } from "./Components/Select/options"
import Select from 'react-select'
import logo from './logo.svg';
import "react-table/react-table.css";
import './App.css';

class App extends Component {
  
  state = {
    movieList: [],
    gettingMovies: false,
    selectedFilter: selectOptions[0]
  }

  handleChange = (event) => this.setState({selectedFilter: event.value})
  
  getSelectedMovies = () => {
    this.setState({gettingMovies: true})
    fetch(`/api/movies?filter=${encodeURIComponent(this.state.selectedFilter.value)}`)
      .then(response => response.json())
      .then(list => {
        const movieList = list.filter(movie => movie.title || movie.original_name)
        this.setState({
          movieList,
          gettingMovies: false
        })
      })
  }

  render = () => (
    <div className="App">
      <header className="App-header">
        <Select 
          options={selectOptions}
          styles={selectCustomStyles}
          onChange={this.handleChange}
          defaultValue={this.state.selectedFilter}
        />
        <button 
          onClick={this.getSelectedMovies}
          className="getMoviesButton"
        >
          Get movies
        </button>
        <img src={logo} className={`App-logo${this.state.gettingMovies ? ' loading' : ''}`} alt="logo" />
        <Table
          tableData={this.state.movieList}
        />
      </header>
    </div>
  );
}

export default App;
