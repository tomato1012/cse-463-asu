
var url = require("url");
var mailer = require("mailer");


// GET Home Page
exports.home = function(req, res){

	var getLocation = url.parse(req.url, true).query["location"];
	//if you recieved a location varaible in the string then we need to set the locaiton cookie to this value and go to the home page
	console.log("get Location="+getLocation);
	if(getLocation != null)	
	{
		if(getLocation == "test")
			res.render('location.html', { title: 'Craigslist Locations' , possiblesDisplay : "inline"})
		
		res.setHeader('Set-Cookie', ['location='+getLocation]);
		res.render("home.html", { title: 'Craigslist Home', location: getLocation})
		return;
	}
	//else search to see if the locaiton cookie is included

	var cookies = {};
	req.headers.cookie && req.headers.cookie.split(';').forEach(function( cookie )
	{
	  var parts = cookie.split('=');
	  cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
	});

	var locationCookie;
	var hasLocation = false;
	for(cookie in cookies)
	{
		if(cookie == "location")
		{
			locationCookie = cookies[cookie];
			hasLocation = true;
		}
	}		
	console.log("Cookies: %j", cookies);
	
	//if the location cookie exists, then go to the home page, else go to the locaitons page
	if(hasLocation)
		res.render("home.html", { title: 'Craigslist Home', location: locationCookie})
	else
		res.render('location.html', { title: 'Craigslist Locations', possiblesDisplay : "none" })
};

// GET Search Page
exports.search = function(req, res){
  res.render('search.html', { title: 'Craigslist Search' })
};

// GET Product Page
exports.product = function(req, res){
  res.render('product.html', { title: 'Craigslist Product', message:"" })
};

// POST send message to product owner
exports.sendmessage = function(req, res){
	/*var body = req.body;
	var ToEmail = body.ToEmail;
	var Email = body.Email;
	var subject = body.Subject;
	var message = "Message from:"+body.Name + "\nMessage:\n"+body.Message;
	
	console.log(body.Copy);
	
	mailer.send
	({
		host: "localhost",
		port: "25",
		ssl: false,
		domain: "localhost",
		to: "rssanders3@gmail.com",
		from: "rssanders3@gmail.com",
		subject: "subject",
		body: "message"
	},function(err, result){});*/
	
	res.render('product.html', { title: 'Craigslist Product', message: 'Your email has been sent!!!' })
}

// GET Location Page
exports.location = function(req, res){
  res.render('location.html', { title: 'Craigslist Locations', possiblesDisplay : "none" })
};

exports.deadpage = function(req, res){
	res.render('deadpage.html', {title: '404 - Page Not Found'})
};
