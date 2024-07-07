const express = require('express')

const PostsController = require('./controller/PostsController')

const routes = express.Router()


routes.get('/', PostsController.getPosts)
routes.get('/about', (req, res) => res.render("about"))

module.exports = roules