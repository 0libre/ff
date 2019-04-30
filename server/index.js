const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { get } = require('axios')

const api_key = process.env.movieDBaccessKey
const movieDBbaseURL = 'https://api.themoviedb.org/3/'
const paths = {
  trending: 'trending/movie/day',
  upcoming: 'discover/movie?language=en-US&sort_by=release_date.desc',
  oldest: 'discover/movie?language=en-US&sort_by=release_date.asc'
}

const getFromMovieDB = (urlSuffix) => get(`${movieDBbaseURL}${urlSuffix}`, { 
  params: {
    api_key
  }
})

const server = express()

server.use(bodyParser.urlencoded({ extended: false }))

server.get('/api/movies', cors(), async (req, res) => {
  try {
    const filterPath = paths[req.query.filter]
    const { data } = await getFromMovieDB(filterPath)
    const { results } = data
    res.setHeader('Content-Type', 'application/json')
    res.send(results)
  } catch(error){
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 404
    res.send({error})
  }
})

server.get('*', (req, res) => {
  res.status(404).end();
})

server.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
)

module.exports = server;