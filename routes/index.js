var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/event/amogus/sussy',function (req,res){
  res.render('finalpuzzle')
});
router.get('/event',(req,res)=>{
  res.render('secondpuzzle')
})
router.get('/brainfuck',(req,res)=>{
  res.render('brainfuck');
})

module.exports = router;
