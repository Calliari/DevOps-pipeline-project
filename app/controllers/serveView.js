// Serves the single page app view
function serveAppPage(req, res) {
    res.status(200).render('index', {
        title: "Outliner"
    });
}

module.exports = {
    index: serveAppPage
};