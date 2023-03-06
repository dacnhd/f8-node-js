const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    // [GET] / (Home page)
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', { courses: multipleMongooseToObject(courses) })
            })
            .catch(next);
        // .catch(next) == .catch(error => next(error))
    }

    // [GET] /search (Search page)
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
