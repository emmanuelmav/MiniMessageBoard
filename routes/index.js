var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "What's Up!",
    user: "James",
    added: new Date()
  },
  {
    text: "Hey There!",
    user: "Sadie",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

/* GET send new message page. */
router.get('/new', (req, res, next) => {
  res.render('form', { title: "New Message Page" })
})


/* CREATE new message      */
router.post('/new', (req, res, next) => {
  const messageText = req.body.text
  const author = req.body.user
  messages.push({ text: messageText, user: author, added: new Date() })
  res.redirect('/')
})
module.exports = router;
