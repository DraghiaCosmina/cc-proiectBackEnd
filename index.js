const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const connection = require('./db')
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json())
const port = process.env.PORT || 40354;

app.get("/movies", (req, res) => {
    connection.query("SELECT * FROM movies", (err, results) => {
        if (err) {
            console.log(err);
            return res.send(err);
        }

        return res.json({
            movies: results,
        })
    })
});
app.post("/movies", (req, res) => {

    const {
        movieId,
        movieTitle,
        moviePathPoster,

    } = req.body;

    connection.query(`INSERT INTO movies (movieId, movieTitle,moviePathPoster) values (${mysql.escape(movieId)}, ${mysql.escape(movieTitle)}, ${mysql.escape(moviePathPoster)})`, (err, results) => {
        if (err) {
            console.log(err);
            return res.send(err);
        }

        return res.json({
            movies: res.body,
        })
    })

});

app.delete("/movies/:id", (req, res) => {
    const { id } = req.params;
    connection.query(`DELETE FROM movies where movieId = ${mysql.escape(id)}`, (err, results) => {
        if (err) {
            console.log(err);
            return res.send(err);
        }
        return res.json({
            results,
        })
    })
});
app.listen(port, () => {
    console.log(`Cloud computing app listening on port ${port}!`)
})
