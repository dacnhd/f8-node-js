const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        let courseQuery = Course.find({})
        if (req.query.hasOwnProperty('_sort')) {
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query.type
            })
        }
        Promise.all([courseQuery, Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => res.render('me/stored-courses', {
                deletedCount,
                courses: multipleMongooseToObject(courses)
            })).catch(next);

        // tương đương gọi 2 function bên dưới, nhưng đã có thêm promise
        // Course.countDocumentsDeleted().then(deletedCourse => console.log(deletedCourse)).catch(next)

        // Course.find({}).then(courses => res.render('me/stored-courses', {
        //     courses: multipleMongooseToObject(courses)
        // })).catch(next);
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({}).then(courses => res.render('me/trash-courses', {
            courses: multipleMongooseToObject(courses)
        })).catch(next);
    }
}

module.exports = new MeController();
