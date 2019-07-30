$(document).ready(function(){
  var quoteSource=[
  {
    quote: "Cold wash",
    name:" "
    },
    {
      quote:"Compost all soiled paper",
      name:" "
    },
    {
      quote:"Put recycling bins in your bedroom",
      name:" "
    },
    {
      quote:"Only have ceiling fan on while you are in the room",
      name:" "
    },
    {
      quote:"Whenever possible line dry instead of using a dryer",
      name:" "
    },
    {
      quote:"Switch from incandescent to LED bulbs to save energy",
      name:" "
    },
    {
      quote:"Keep tires properly inflated to increase fuel mileage",
      name:" "
    },
    {
      quote:"Remove excess weight from your car to increase fuel mileage",
      name:" "
    },
    {
      quote:"Avoid air travel whenever possible, and fly economy when you do fly",
      name:" "
    },
    {
      quote:"Turn off bulbs when you leave a room",
      name:" "
    },
    {
      quote:"Try to limit consumption of animal products. Animal products create large amounts of waste and emissions",
      name:" "
    },
    {
      quote:"Try to reduce shower time to no more than 10 minutes a day",
      name:" "
    },
    {
      quote:"Buy in bulk when possible, and use reusable packaging, (reuse plastic containers and bags or use glass jars)",
      name:" "
    },
    {
      quote:"Reuse produce bags at the grocery store, and only get new bags when necessary",
      name:" "
    },
    {
      quote:"Bring reusable bags to the grocery store. Store them in your car so you don’t forget",
      name:" "
    },
    {
      quote:"When buying packaged goods, try to make sure the packaging is recyclable",
      name:" "
    },
    {
      quote:"Put extra effort into recycling. For instance, wash out yogurt containers and recycle instead of just trashing them",
      name:" "
    },
    {
      quote:"When buying packaged goods, try to make sure the packaging is recyclable",
      name:" "
    },
    {
      quote:"Put extra effort into recycling. For instance, wash out yogurt containers and recycle instead of just trashing them",
      name:" "
    },
    {
      quote:"Try to buy local, (supports the community but also helps cut down on emissions produced in transportation)",
      name:" "
    },
    {
      quote:"Try to buy used products, bc they cut down on the “provision of goods” (resources used to produce new goods)",
      name:" "
    },
    {
      quote:"Better insulate your home in order to use less energy on heating and cooling",
      name:" "
    },
    {
      quote:"Use air conditioning and heating as sparingly as possible",
      name:" "
    },
    {
      quote:"When possible, buy organic food, as many pesticides are produced using fossil fuels",
      name:" "
    },
    {
      quote:"Turn down the hot water in the shower",
      name:" "
    },
    {
      quote:"Try to use reusable containers instead of sandwich or Ziploc bags",
      name:" "
    },
    {
      quote:"Do research into the Austin recycling system to get to know what you can and can’t recycle",
      name:" "
    },
    {
      quote:"Do research into the Austin composting system to get to know what you can and can’t compost",
      name:" "
    },
    {
      quote:"Shop more sparingly at the grocery store to try to reduce food waste. Only buy food you know you will eat",
      name:" "
    },
    {
      quote:"Instead of buying new products, try to fix old ones",
      name:" "
    },
    {
      quote:"Avoid disposable utensils, plates, and the like whenever possible",
      name:" "
    },
    {
      quote:"Use reusable water bottles whenever possible",
      name:" "
    },
    {
      quote:"Bring your own utensils to restaurants in case they have only plastic cutlery",
      name:" "
    },
    {
      quote:"Use cloth napkins in lieu of paper ones",
      name:" "
    },
    {
      quote:"Use rags instead of paper towels for cleaning",
      name:" "
    },
    {
      quote:"When possible, reuse or avoid using trash bags in trash cans",
      name:" "
    }
];


  $('#quoteButton').click(function(evt){
    //define the containers of the info we target
    var quote = $('#quoteContainer p').text();
    var quoteGenius = $('#quoteGenius').text();
    //prevent browser's default action
    evt.preventDefault();
    //getting a new random number to attach to a quote and setting a limit
    var sourceLength = quoteSource.length;
    var randomNumber= Math.floor(Math.random()*sourceLength);
    //set a new quote
    for(i=0;i<=sourceLength;i+=1){
    var newQuoteText = quoteSource[randomNumber].quote;
    var newQuoteGenius = quoteSource[randomNumber].name;
    //console.log(newQuoteText,newQuoteGenius);
    var timeAnimation = 500;
    var quoteContainer = $('#quoteContainer');
    //fade out animation with callback
    quoteContainer.fadeOut(timeAnimation, function(){
      quoteContainer.html('');
      quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+newQuoteGenius+'</p>');
      //fadein animation.
      quoteContainer.fadeIn(timeAnimation);
    });

    break;
  };//end for loop

});//end quoteButton function


});//end document ready




// var NumberOfWords = 28
//
// var words = new BuildArray(NumberOfWords)
//
// // Use the following variables to
// // define your random words:
// words[1] = "escapology"
// words[2] = "brightwork"
// words[3] = "verkrampte"
// words[4] = "protectrix"
// words[5] = "nudibranch"
// words[6] = "grandchild"
// words[7] = "newfangled"
// words[8] = "flugelhorn"
// words[9] = "mythologer"
// words[10] = "pluperfect"
// words[11] = "jellygraph"
// words[12] = "quickthorn"
// words[13] = "rottweiler"
// words[14] = "technician"
// words[15] = "cowpuncher"
// words[16] = "middlebrow"
// words[17] = "jackhammer"
// words[18] = "triphthong"
// words[19] = "wunderkind"
// words[20] = "dazzlement"
// words[21] = "jabberwock"
// words[22] = "witchcraft"
// words[23] = "pawnbroker"
// words[24] = "thumbprint"
// words[25] = "motorcycle"
// words[26] = "cryptogram"
// words[27] = "torchlight"
// words[28] = "bankruptcy"
//
// function BuildArray(size){
// this.length = size
// for (var i = 1; i <= size; i++){
// this[i] = null}
// return this
// }
//
// function PickRandomWord(frm) {
// // Generate a random number between 1 and NumberOfWords
// var rnd = Math.ceil(Math.random() * NumberOfWords)
//
// // Display the word inside the text box
// frm.WordBox.value = words[rnd]
// }

// var tips = [
//   'Cold wash',
//   'Compost all soiled paper',
//   'Put recycling bins in your bedroom',
//   'Only have ceiling fan on while you are in the room. It doesn’t actually change the temperature of the room, just makes people in the room more comfortable',
//   'Whenever possible line dry instead of using a dryer.\',
//   'Switch from incandescent to LED bulbs to save energy',
//   'Keep tires properly inflated to increase fuel mileage',
//   'Remove excess weight from your car to increase fuel mileage',
//   'Avoid air travel whenever possible, and fly economy when you do fly',
//   'Turn off bulbs when you leave a room',
//   'Try to limit consumption of animal products. Animal products create large amounts of waste and emissions',
//   'Try to reduce shower time to no more than 10 minutes a day',
//   'Buy in bulk when possible, and use reusable packaging. For example, reuse plastic containers and bags or use glass jars',
//   'Reuse produce bags at the grocery store, and only get new bags when necessary',
//   'Bring reusable bags to the grocery store. Store them in your car so you don’t forget',
//   'When buying packaged goods, try to make sure the packaging is recyclable',
//   'Put extra effort into recycling. For instance, wash out yogurt containers and recycle instead of just trashing them',
//   'Try to buy local, as buying local not only supports the community but also helps cut down on emissions produced in transportation',
//   'Try to buy used products (like thrift shopping) when possible, as used products cut down on the “provision of goods”, which refers to all the resources which are used to produce new goods',
//   'Better insulate your home in order to use less energy on heating and cooling',
//   'Use air conditioning and heating as sparingly as possible. While the use of A/C and heating is unavoidable, keeping your house a few degrees warmer in the summer and a few degrees cooler in the winter can save a great amount of energy or fuel',
//   'When possible, buy organic food, as many pesticides are produced using fossil fuels',
//   'Turn down the hot water in the shower. While it is not realistic for everyone to take cold showers, taking a lukewarm shower instead of a steaming hot one can save a lot of energy',
//   'Try to use reusable containers instead of sandwich or Ziploc bags',
//   'Do research into the Austin recycling system to get to know what you can and can’t recycle, and make sure you are always recycling when possible',
//   'Do research into the Austin composting system to get to know what you can and can’t compost, and make sure you are always composting when possible',
//   'Shop more sparingly at the grocery store to try to reduce food waste. Only buy food you know you will eat',
//   'Instead of buying new products, try to fix old ones',
//   'Avoid disposable utensils, plates, and the like whenever possible',
//   'Use reusable water bottles whenever possible',
//   'Bring your own utensils to restaurants in case they have only plastic cutlery',
//   'Use cloth napkins in lieu of paper ones',
//   'Use rags instead of paper towels for cleaning',
//   'When possible, reuse or avoid using trash bags in trash cans'
// ]
//
// function newTip() {
//   var randomNumber = Math.floor(Math.random() * (tips.length));
//   document.getElementById('tipDisplay').innerHTML = tips[randomNumber];
//
// }
