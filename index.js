const readlineSync = require('readline-sync');
const chalk = require('chalk');


var highScores=[
  {
    name:'sam',
    score:'7'
  }
]

var playerName = readlineSync.question(chalk.cyanBright('your good name please ? '));

console.log('');
console.log(chalk.yellow('Welcome',playerName,'to the How-well-do-You-Know-ME quiz !'));
console.log(chalk.yellow('Here we go!'));
console.log('');
var score = 0;

var questions = [
  {
    question:'What is my nickname ?',
    answer:'sam'
  },
  {
    question:'Which is my lucky number ?',
    answer:'7'
  },
  {
    question:'What is my favorite activity to do ?',
    answer:'sleep'
  },
  {
    question:'Do I like to read books (yes/no) ?',
    answer:'yes'
  },
  {
    question:'Where do I live ?',
    answer:'chennai'
  },
  {
    question:'Which is my favourite color ?',
    answer:'blue'
  },
  {
    question:'In which year was I born ?',
    answer:'2000'
  }
];


function check(question,answer){
  var playerAnswer = readlineSync.question(chalk.magentaBright(question));
  if (playerAnswer===answer){
    console.log(chalk.green('right answer!'));
    score++;
  }else{
    console.log(chalk.redBright('wrong answer!'));
  }
  console.log('--------------')
}

for(var i=0;i<questions.length;i++){
  check(questions[i].question,questions[i].answer);
}




console.log('You scored :',score);
console.log('Thank you for taking the quiz <3')

console.log('');
console.log('High score player :',highScores[0].name);
console.log('High score :',highScores[0].score);