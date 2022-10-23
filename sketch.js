var input
var button
var words,bulls,cows
var r
var computerword
var userword
var wordresult,cowresult,bullresult
var y=100

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
input=createInput().position(200,200)
input.attribute('placeholder',"enter word")
button=createButton('submit').position(250,300)
words=createElement('H2').html('Words').position(600,50)
bulls=createElement('H2').html('Bulls').position(1050,50)
cows=createElement('H2').html('Cows').position(1550,50)
r=Math.round(random(0,s.length-1))
computerword=s[r]
console.log(r)
console.log(computerword)
button.mousePressed(gamestart)
}

function draw() {
  background('blue'); 
   
  drawSprites();
}
function gamestart(){
  var numberofbulls=0
var numberofcows=0
  var inputvalue=input.value()
  if(inputvalue.length!=4){
    alert("Enter a 4 letter word")
  }
  userword=inputvalue.toLowerCase()
  console.log(userword)
  //These conditions are for checking the number of bulls
  if(userword.charAt(0)==computerword.charAt(0)){
    numberofbulls+=1
  }
  if(userword.charAt(1)==computerword.charAt(1)){
    numberofbulls+=1
  }
  if(userword.charAt(2)==computerword.charAt(2)){
    numberofbulls+=1
  }
  if(userword.charAt(3)==computerword.charAt(3)){
    numberofbulls+=1
  }
  //These conditions are for checking the number of cows
  if(userword.charAt(0)==computerword.charAt(1)||userword.charAt(0)==computerword.charAt(2)||userword.charAt(0)==computerword.charAt(3)){
    numberofcows+=1
  }
  if(userword.charAt(1)==computerword.charAt(0)||userword.charAt(1)==computerword.charAt(2)||userword.charAt(1)==computerword.charAt(3)){
    numberofcows+=1
  }
  if(userword.charAt(2)==computerword.charAt(1)||userword.charAt(2)==computerword.charAt(0)||userword.charAt(2)==computerword.charAt(3)){
    numberofcows+=1
  }
  if(userword.charAt(3)==computerword.charAt(2)||userword.charAt(3)==computerword.charAt(0)||userword.charAt(3)==computerword.charAt(1)){
    numberofcows+=1
  }
  if(inputvalue.length==4){
    for(var i=0;i<s.length;i++){
      if(s[i].includes(userword)){
        break
      }
    }
if(i<s.length){
wordresult=createElement('H2')
wordresult.html(userword)
wordresult.position(600,y)

bullresult=createElement('H2')
bullresult.html(numberofbulls)
bullresult.position(1050,y)

cowresult=createElement('H2')
cowresult.html(numberofcows)
cowresult.position(1550,y)
y+=50
}
else{alert('enter valid word')}
if(numberofbulls==4){
  alert('YOU WON!')
 // window.location.reload()
}
  }

}