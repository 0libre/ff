const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const api_key = process.env.movieDBaccessKey
const movieDBbaseURL = 'https://api.themoviedb.org/3/'
const paths = {
  trending: 'trending/all/day',
  upcoming: 'discover/movie?language=en-US&sort_by=release_date.desc',
  oldest: 'discover/movie?language=en-US&sort_by=release_date.asc'
}

const getFromMovieDB = (urlSuffix) => axios.get(`${movieDBbaseURL}${urlSuffix}`, { 
  params: {
    api_key
  }
})

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api/movies', async (req, res) => {
  const filterPath = paths[req.query.filter]
  const { data } = await getFromMovieDB(filterPath)
  const { results } = data
  res.setHeader('Content-Type', 'application/json')
  res.send(results)
})

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
)

