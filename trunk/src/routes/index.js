
// GET Home Page
exports.home = function(req, res){
  res.render('home.html', { title: 'Craigslist Home' })
};

// GET Search Page
exports.search = function(req, res){
  res.render('search.html', { title: 'Craigslist Search' })
};

// GET Product Page
exports.product = function(req, res){
  res.render('product.html', { title: 'Craigslist Product' })
};

// GET Location Page
exports.location = function(req, res){
  res.render('location.html', { title: 'Craigslist Locations' })
};

exports.deadpage = function(req, res){
	res.render('deadpage.html', {title: '404 - Page Not Found'})
};
