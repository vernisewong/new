
console.log('hello!')


var backgrounds = ['GEM','DURIAN']


$( document ).ready(function(){
  $('h3').on('click', function () {
    console.log("you've clicked the button")
    alert("don't look i'm changing")
    var randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    var imageUrl = "url('./images/" + randomBackground + ".jpg')"
    $('body').css('background',imageUrl)
  })
})

$( document ).ready(function(){
  $('p').on('click', function () {
    console.log("you've clicked the button")
    alert("r u ready")
    var randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    var imageUrl = "url('./images/" + randomBackground + ".jpg')"
    $('body').css('background',imageUrl)
  })
})
