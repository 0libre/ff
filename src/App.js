import React, { Component } from 'react'
import { Table } from './Components/Table/Table'
import { selectOptions, selectCustomStyles } from './Components/Select/options'
import { Button } from './Components/Button/button'
import { LoadingSpinner } from './Components/LoadingSpinner/loadingSpinner'
import Select from 'react-select'
import logo from './logo.svg'
import 'react-table/react-table.css'
import './App.css'

class App extends Component {
  
  state = {
    movieList: [],
    gettingMovies: false,
    selectedFilter: selectOptions[0]
  }

  handleChange = (selectedFilter) => this.state.selectedFilter !== selectedFilter && this.setState({selectedFilter, movieList: []})
      
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
    <div className='App'>
      <header className='App-header'>
        <Select 
          options={selectOptions}
          styles={selectCustomStyles}
          onChange={this.handleChange}
          defaultValue={this.state.selectedFilter}
        />
        <Button
          onClick={this.getSelectedMovies}
          className={'getMoviesButton'}
          buttonText={'Get movies'}
        />
        <LoadingSpinner
          src={logo}
          className='App-logo'
          loading={this.state.gettingMovies}
        />
        <Table
          tableData={this.state.movieList}
        />
      </header>
    </div>
  );
}

export default App;
