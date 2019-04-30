# MovieDB Work sample

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Then an Express server was added in the `server` directory. The server is proxied via the `proxy` key in `package.json`.

It fetches information from [The movie DB](https://www.themoviedb.org/) about upcoming, trending and really old movies and let's the consumer of the application - choose the top-20 list of your choice.

A lot of the UI is bits and pieces from the Boilerplate provided by [Create React App](https://github.com/facebookincubator/create-react-app) - but I choose to use [React table](https://github.com/tannerlinsley/react-table) to list the result because it comes with a lot of ready features that can be used to grow the list, add sorting, pagination (already in use), expanding rows (also already in use). 

## Using this project

Clone the project, change into the directory and install the dependencies.

```bash
git clone https://github.com/0libre/ff.git
cd ff
npm install
```

Create a `.env` file for environment variables in your server.
In the `.env` file, add the following line:
`movieDBaccessKey=<THE MOVIE DB API KEY>`
You'll need to provied your own The movie DB API-key for the application to work.

You can start the server on its own with the command:

```bash
npm run server
```

Run the React application on its own with the command:

```bash
npm start
```

Run both applications together with the command:

```bash
npm run dev
```

The React application will run on port 3000 and the server port 3001.