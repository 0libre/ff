const express = require('express')
const bodyParser = require('body-parser')
const pino = require('express-pino-logger')()
const axios = require('axios')

const apiKeyPath = `?api_key=${process.env.movieDBaccessKey}`
const movieDBbaseURL = 'https://api.themoviedb.org/3/'
const trendingMovies = 'trending/all/day'

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(pino)

app.get('/api/greeting', async (req, res) => {
  const { data } = await getFromMovieDB(trendingMovies)
  const { results } = data
  console.log('results', results)
  const name = req.query.name || 'World'
  res.setHeader('Content-Type', 'application/json')
  res.send(results)
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
)

const getFromMovieDB = (urlSuffix, queryParams = []) => axios.get(`${movieDBbaseURL}${urlSuffix}${apiKeyPath}${queryParams.length ? `&${queryParams.join('&')}` : ''}`)