class NewsController {
    // [GET] /news (News page)
                    index(req, res) {
                        res.render('news');
                    }

    // [GET] /news/:slug (News detail page)
                show(req, res) {
                res.send('news-detail');
    }
}

module.exports = new NewsController();
