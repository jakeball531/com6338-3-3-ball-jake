// Your code here

var questionsArr = [
    {
      question: 'Jake is in the top percentile of all Sudoku.com players. \n(Click "OK" for yes and "Cancel" for no)',
      answer: true
    },
    { 
      question: 'Jake played baseball in high school. \n(Click "OK" for yes and "Cancel" for no)',
      answer: false
    },
    {
      question: 'Jake played the saxophone. \n(Click "OK" for yes and "Cancel" for no)',
      answer: true
    },
    
    {
      question: 'Jake has his boating license. \n(Click "OK" for yes and "Cancel" for no)',
      answer: false
    },
    {
      question: 'Jake lives in CT. \n(Click "OK" for yes and "Cancel" for no)',
      answer: false
    },
    {
      question: 'Jake has seven concussions. \n(Click "OK" for yes and "Cancel" for no)',
      answer: true
    }
    /** 
    ,
    {
      question: 'Jake has played basketball in the Netherlands \n(Click "OK" for yes and "Cancel" for no)',
      answer: true
    },
    {
      question: 'Jake was a GM/raid leader in WoW \n(Click "OK" for yes and "Cancel" for no)',
      answer: true
    },
    {
      question: 'Jake drinks tea. \n(Click "OK" for yes and "Cancel" for no)',
      answer: false
    },
    {
      question: 'Jake is a morning person. \n(Click "OK" for yes and "Cancel" for no)',
      answer: false
    }
      **/

]  


function runQuiz(){
    var score = 0
    alert("How well do you know Jake?")

    for(var i = 0; i < questionsArr.length; i++){
      if (confirm(questionsArr[i].question) == (questionsArr[i].answer)){
      score ++;
      }
    }

    alert("Your score was " + (Math.round(score / questionsArr.length * 100)) + "%")   
}











