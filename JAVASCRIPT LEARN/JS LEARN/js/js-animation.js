 /*...................setInterval & clearInterval..........................*/
/*    var a = 0;
   var id = setInterval(Anim, 500);

   function Anim(){
     a = a + 10;

     if (a == 200) {
       clearInterval(id);
     }else{
       var target = document.getElementById("test");
       target.style.width = a + 'px';
     }
   }
    */
/*...................setTimeout & clearTimeout..........................*/
/*  var id = setTimeout(Anim, 3000);

  function Anim(){
    console.log("Hello");
  }
     */
/*...................setTimeout & clearTimeout..........................*/
/*    var id = setTimeout(Anim, 3000);

    function Anim(){
      var target = document.getElementById("test");
      target.style.width = "500px";
    }
    */
/*...................setTimeout & clearTimeout..........................*/
/*        var id = setTimeout(Anim, 5000);

        function Anim(){
          var target = document.getElementById("test");
          target.style.width = "500px";
        }

        function stopAnimation(){
          clearTimeout("id");
        }   */

/*...................setTimeout & clearTimeout..........................*/
                var id = setTimeout(function(){
                  var target = document.getElementById("test");
                  target.style.width = "500px";
                }, 5000);
        
                function stopAnimation(){
                  clearTimeout("id");
                }
