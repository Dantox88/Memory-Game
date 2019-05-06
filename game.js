const cards = ["angular.png","backbone.png","ember.png","meteor.png","mithril.png","react.png",
"backbone.png","angular.png","meteor.png","react.png","mithril.png","ember.png"];


let t0 = document.getElementById("t0");
let t1 = document.getElementById("t1");
let t2 = document.getElementById("t2");
let t3 = document.getElementById("t3");
let t4 = document.getElementById("t4");
let t5 = document.getElementById("t5");
let t6 = document.getElementById("t6");
let t7 = document.getElementById("t7");
let t8 = document.getElementById("t8");
let t9 = document.getElementById("t9");
let t10 = document.getElementById("t10");
let t11 = document.getElementById("t11");




t0.addEventListener("click",function(){reverseCards(0)});
t1.addEventListener("click",function(){reverseCards(1)});
t2.addEventListener("click",function(){reverseCards(2)});
t3.addEventListener("click",function(){reverseCards(3)});
t4.addEventListener("click",function(){reverseCards(4)});
t5.addEventListener("click",function(){reverseCards(5)});
t6.addEventListener("click",function(){reverseCards(6)});
t7.addEventListener("click",function(){reverseCards(7)});
t8.addEventListener("click",function(){reverseCards(8)});
t9.addEventListener("click",function(){reverseCards(9)});
t10.addEventListener("click",function(){reverseCards(10)});
t11.addEventListener("click",function(){reverseCards(11)});

let attempts = 0;
let lock = false;
let isFirst = true;
let firstNr;
let pairs = 6;
//Reverse cards
function reverseCards(nr){

  let element = document.getElementById("t"+nr);
  let opacity = element.style.opacity;

  if(opacity !="0" && lock == false)
  {


  element.style.backgroundImage ="url(img/"+cards[nr]+")";
  //First card
  if(isFirst)
  {

    isFirst = false;
    firstNr = nr;
  }

  //Second card
  else
  {
    //Pair
    if(cards[nr] == cards[firstNr])
    {
      setTimeout(function(){deleteCards(nr,firstNr)},1200);
      lock = true;
      pairs--;

      //Win
      if(pairs == 0)
      {
        setTimeout(function(){win();},300);
      }
    }


    //Not pair
    else
    {
      setTimeout(function(){restoreCards(nr,firstNr)},1200);
      lock = true;
    }

    attempts++;
    document.getElementById("attempts").innerHTML ="Your attempts:"+attempts;





    isFirst = true;
  }
}


}

function deleteCards(nr1,nr2)
{
  let element1 = document.getElementById("t"+nr1);
  let element2 = document.getElementById("t"+nr2);

  element1.style.opacity ="0";
  element2.style.opacity ="0";

  lock = false;
}

function restoreCards(nr1,nr2) {

  let element1 = document.getElementById("t"+nr1);
  let element2 = document.getElementById("t"+nr2);

  element1.style.backgroundImage = "url(img/javascript.png)";
  element2.style.backgroundImage = "url(img/javascript.png)";
  lock = false;

}

function win(){
  element = document.getElementById("game-board");
  element.innerHTML = '<span class="win">You win!<br/><span class="restart" onclick="location.reload();">Again?</span></span>'
}
