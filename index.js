var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);
var Chats = require('./models/chats.js');
var startChat = 0;


// Configure our app
var store = new MongoDBStore({
  uri: process.env.MONGO_URL,
  collection: 'sessions'
});
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// Configure session middleware that will parse the cookies
// of an incoming request to see if there is a session for this cookie.
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: 'auto' },
  store: store
}));

// NEW FUNCTIONS GO BELOW THIS

// Return the home page after loading tasks for users, or not.
app.get('/', function (req, res) {
      res.render('index');
});

// GET request to robots.txt
app.get('/robots.txt', function (req, res) {
      res.header("Content-Type", "text/plain; charset=utf-8");
      res.send('woot');
});

// GET request to /mrw/semester-ends.gif
app.get('/mrw/semester-ends.gif', function (req, res) {
      res.redirect(`https://i.imgur.com/pXjrQ.gif`);
});


// store chats into database
app.post('/posts/new', function (req, res) {
  var chatData = req.body.data;
  var newChat = new Chats();
  newChat.text = chatData;
  newChat.insertOrder = startChat;
  newChat.save(function(err, savedChat){
    if(err || !savedChat){
      res.send('Error saving task!');
    }else{
      startChat = startChat + 1;
      res.redirect('/posts/:id');
    }
  });
});

// delete all posts in database, reset the chat count to zero
app.get('/posts/delete', function(req, res){
  Chats.find({}).remove().exec();
  startChat = 0;
  res.redirect('/');
});

// identify chat in terms of post order
app.get('/posts/:id', function (req, res) {
  Chats.findOne({insertOrder: req.params.id}, function(err, chat){

    if(err || !chat){
      return res.status(404).send("Not found");
    }
  
    return res.send(chat.text);
    
  });
});


// Start the server
app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT);
});
