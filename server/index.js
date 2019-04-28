const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const apiKeyPath = `?api_key=${process.env.movieDBaccessKey}`
const movieDBbaseURL = 'https://api.themoviedb.org/3/'
const trending = 'trending/all/day'

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api/movies', async (req, res) => {

  // TODO: HANDLE DIFFERENT CASES HERE

  let filter = trending

  const { data } = await getFromMovieDB(filter)
  const { results } = data
  res.setHeader('Content-Type', 'application/json')
  res.send(results)
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
)

const getFromMovieDB = (urlSuffix, queryParams = []) => axios.get(`${movieDBbaseURL}${urlSuffix}${apiKeyPath}${queryParams.length ? `&${queryParams.join('&')}` : ''}`)