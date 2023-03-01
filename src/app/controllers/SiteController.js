class SiteController {
    // [GET] / (Home page)
    index(req, res) {
        res.render('home');
    }

    // [GET] /search (Search page)
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
