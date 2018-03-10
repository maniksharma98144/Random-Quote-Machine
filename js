$(document).ready(function(){
  var quotes=["Eat Healthy,Live Healty","Health Is Wealth","Life is Short,Live to The Fullest"];
  var quote;
  var randomNum;
   
function generateQuote(){
randomNum=Math.floor(Math.random()*quotes.length);
  quote=quotes[randomNum];
$("#quotearea").text(quote);
  };
  
  $("#quotebtn").on("click",function(){
    generateQuote()});
  
  $("#tweet").on("click",function(){
  window.open("https://twitter.com/intent/tweet?text="+quote);
  });
  
});
