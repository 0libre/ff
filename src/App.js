import React, { Component } from 'react';
import ReactTable from "react-table";
import Select from 'react-select'
import logo from './logo.svg';
import './App.css';
import "react-table/react-table.css";

class App extends Component {
  
  state = {
    name: '',
    greeting: '',
    movieList: [],
    gettingMovies: false
  }

  options = [
    { value: 'trending', label: 'Trending' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'white' : 'blue',
      padding: 20,
    }),
    control: (provided) => ({
      ...provided,
      minWidth: 200,
      width: '50vw'
    })
  }

  handleChange = (event) => this.setState({selectedFilter: event.value})
  
  getSelectedMovies = () => {
    this.setState({gettingMovies: true})
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(list => this.setState({movieList: list}))
      .then(_ => this.setState({gettingMovies: false}))
  }

  render() {
    console.log(this.state.movieList)
    return (
      <div className="App">
        <header className="App-header">
          <Select 
            options={this.options}
            styles={this.customStyles}
            onChange={this.handleChange}
            defaultValue={this.options[0]}
          />
          <button onClick={this.getSelectedMovies}>
            Get movies
          </button>
          <img src={logo} className={`App-logo${this.state.gettingMovies ? ' loading' : ''}`} alt="logo" />
          <ReactTable
            data={this.state.movieList.filter(movie => movie.title).map(movie => {
              return {
                name: movie.title,
                info: movie.overview
              }
            })}
            columns={[
              {
                Header: "Name",
                accessor: "name"
              },{
                Header: "Info",
                accessor: "info"
              }
            ]}
            defaultPageSize={10}
            className={`Table${this.state.gettingMovies ? ' loading' : ''}`}
          />
        </header>
      </div>
    );
  }
}

export default App;
