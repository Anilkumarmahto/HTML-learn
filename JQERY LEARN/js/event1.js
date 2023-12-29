$(document).ready(function(){
  $("#box").scroll(function(){
    console.log("You are scrolling");
  });

  $(Window).resize(function(){
    console.log("You are resizing window");
  });
});
