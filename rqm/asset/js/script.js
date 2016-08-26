$(document).ready(function(){
    updateQuote();
    $("#button").click(function(){
        updateQuote();
    });
})

var quotes = [
        {quote: "No is easier to do. Yes is easier to say.", author: "Jason Fried"}, 
        {quote: "Excellence is to do a common thing in an uncommon way.", author:"Booker Washington"}, 
        {quote: "The energy of the mind is the essence of life.", author: "Aristotle"}
    ];

var currentIdx;

function updateQuote(){
    var idx = Math.floor(Math.random() * quotes.length);
    do{
        idx = Math.floor(Math.random() * quotes.length);
    }while(currentIdx === idx);
    currentIdx = idx;
    $("#quote").html(quotes[idx].quote);
    $("#author").html("--" + "<i>" + quotes[idx].author + "</i>");
}
