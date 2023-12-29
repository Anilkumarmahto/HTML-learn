  /*.................document.all.....................*/
/*  var element;

  element = document.all[9];

  console.log(element); */

  /*.................document.head.....................*/
/*  var element;

  element = document.head;

  console.log(element); */

  /*.................document.title.....................*/
/*  var element;

  element = document.title;

  console.log(element); */

  /*.................document.body.....................*/
/*  var element;

  element = document.body;

  console.log(element); */

  /*.................document.body.....................*/
/*  var element;

  element = document.links[0];

  console.log(element); */

  /*.................document.images.....................*/
/*  var element;

  element = document.images;

  console.log(element); */

  /*.................document.doctype.....................*/
/*  var element;

  element = document.doctype;

  console.log(element); */

  /*.................document.URL.....................*/
/*  var element;

  element = document.URL;

  console.log(element); */

  /*.................document.baseURI.....................*/
/*  var element;

  element = document.domain;

  console.log(element); */

  /*.................document.body.....................*/
/*  var element;

  element = document.baseURI;

  console.log(element); */

  /*.................document.getElementById.....................*/
/*  var element;

  element = document.getElementById("header");

  console.log(element); */

  /*.................document.getElementByClassName.....................*/
/*  var element;

  element = document.getElementsByClassName("list")[0];

  console.log(element); */

  /*.................document.getElementByClassName.....................*/
/*  var element;

  element = document.getElementsByTagName("ul");

  console.log(element); */

  /*.................get method : innerText.....................*/
/*  var element;

  element = document.getElementById("content").innerText;

  console.log(element); */

  /*.................innerHTML.....................*/
/*  var element;

  element = document.getElementById("content").innerHTML;

  console.log(element); */

  /*.................get method : getAttribute.....................*/
/*  var element;

  element = document.getElementById("header").getAttribute("onClick");

  console.log(element); */

  /*.................get method : getAttributeNode.....................*/
/*  var element;

  element = document.getElementById("header").getAttributeNode("style").value;

  console.log(element); */

  /*.................get method : attributes.....................*/
/*  var element;

  element = document.getElementById("header").attributes[2].value;

  console.log(element); */

  /*.................get method : attributes.....................*/
/*  var element;

  element = document.getElementById("header").attributes[2].name;

  console.log(element); */

  /*.................set method : innerHTML.....................*/
/*  var element;

  element = document.getElementById("header").innerHTML;

  console.log(element);

   document.getElementById("header").innerHTML = "<h1>wow</h1>";

  element = document.getElementById("header").innerHTML;

  console.log(element);

  /*.................set method : setAttribute.....................*/
/*  var element;

   document.getElementById("header").innerHTML = "<h1>wow</h1>";

   document.getElementById("header").setAttribute("style","border : 10px dotted yellow;");

  element = document.getElementById("header").getAttribute("class");

  console.log(element);  */


  /*.................set method : Attribute.....................*/
/*  var element;

   document.getElementById("header").innerHTML = "<h1>wow</h1>";

   document.getElementById("header").attributes[1].value = "xyz";

  element = document.getElementById("header").getAttribute("class");

  console.log(element);  */

  /*.................set method : removeAttribute.....................*/
/*  var element;

   document.getElementById("header").innerHTML = "<h1>wow</h1>";

   document.getElementById("header").attributes[1].value = "xyz";

   document.getElementById("header").removeAttribute("style");

   document.getElementById("header").removeAttribute("class");

  element = document.getElementById("header").getAttribute("class");

  console.log(element);  */

  /*.................querySelector.....................*/
/*  var element;

   document.querySelector("#header").innerHTML = "<h1>Wow</h1>";

  element = document.querySelector("#header").getAttribute("class");

  console.log(element); */

  /*.................querySelector.....................*/
/*  var element;

   document.querySelector("#header").innerHTML = "<h1>Wow</h1>";

  element = document.querySelector(".list");

  console.log(element); */

  /*.................querySelectorAll.....................*/
/*  var element;

   document.querySelector("#header").innerHTML = "<h1>Wow</h1>";

  element = document.querySelectorAll("ul")[1].innerHTML;

  console.log(element); */

  /*.................css style.....................*/
/*  var element;

   document.querySelector("#header").style.color;

  console.log(element); */

  /*.................css style.....................*/
/*  var element;

    document.querySelector("#header").style.backgroundColor = "tan";
    document.querySelector("#header").style.color = "blue";
   element = document.querySelector("#header").style.color;

  console.log(element);   */

  /*.................css style.....................*/
/*  var element;

    document.querySelector("#header").className = "abc xyz";
   element = document.querySelector("#header").className;

  console.log(element);  */

  /*.................css style.....................*/
/*  var element;

    document.querySelector("#header").classList = "abc xyz";
   element = document.querySelector("#header").classList;

  console.log(element);   */


  /*.................css style.....................*/
/*  var element;

    document.querySelector("#header").classList.add("xyz","efg");
   element = document.querySelector("#header").classList;

  console.log(element);  */


  /*.................css style.....................*/
/*  var element;

    //document.querySelector("#header").classList.add("xyz","efg");
   element = document.querySelector("#header").classList;

  console.log(element);  */


  /*.................css style.....................*/
/*  var element;

   document.querySelector("#header").classList.remove("xyz");
   element = document.querySelector("#header").classList;

  console.log(element);    */


  /*.................css style.....................*/
/*  var element;

   document.getElementById("header").onmouseenter = abc;

   function abc(){
      document.getElementById("header").style.background = "green";
   }

  //console.log(element);    */


  /*.................Add EventListener.....................*/
/*  var element;

   document.getElementById("header").addEventListener("click",abc);

   function abc(){
      document.getElementById("header").style.background = "green";
   }

  //console.log(element);   */


  /*.................Add EventListener.....................*/
/*  var element;

   document.getElementById("header").addEventListener("mouseenter",abc);
   document.getElementById("header").addEventListener("click",function(){
       document.getElementById("header").style.border = "10px solid red";
   });

   function abc(){
      document.getElementById("header").style.background = "green";
   }

  //console.log(element);  */

  /*.................Add EventListener.....................*/
/*  var element;

   document.getElementById("header").addEventListener("click",abc);
   document.getElementById("header").addEventListener("click",function(){
       this.style.border = "10px solid red";
   });

   function abc(){
      document.getElementById("header").style.background = "green";
   }

  //console.log(element);   */

  /*.................Add EventListener.....................*/
/*  var element;

   document.getElementById("header").addEventListener("mouseleave",abc);
   document.getElementById("header").addEventListener('click',xyz);

   function abc(){
      document.getElementById("header").style.background = "green";
   }

   function xyz(){
     document.getElementById("header").removeEventListener('mouseleave',abc);
   }

  //console.log(element);   */


  /*.................classList method.....................*/
/*  var element;

   document.getElementById("header").addEventListener('click',abc);

   function abc(){
      document.getElementById("header").classList.add("xyz","efg");

    var a = document.getElementById("header").classList;
    console.log(a);
  }   */


   /*.................classList method.....................*/
/*   var element;

    document.getElementById("header").addEventListener('click',abc);

    function abc(){
      // document.getElementById("header").classList.add("xyz","efg");
       document.getElementById("header").classList.remove("xyz");
     var a = document.getElementById("header").classList;
     console.log(a);
   }    */


    /*.................classList method.....................*/
/*    var element;

     document.getElementById("header").addEventListener('click',abc);

     function abc(){
        document.getElementById("header").classList.toggle("xyz");

      var a = document.getElementById("header").classList;
      console.log(a);
    }    */


     /*.................classList method.....................*/
/*     var element;

      document.getElementById("header").addEventListener('click',abc);

      function abc(){
      //   document.getElementById("header").classList.toggle("xyz");

       var a = document.getElementById("header").classList.item(0);
       console.log(a);
     }    */


      /*.................classList method.....................*/
      var element;

       document.getElementById("header").addEventListener('click',abc);

       function abc(){
       //   document.getElementById("header").classList.toggle("xyz");

        var a = document.getElementById("header").classList.contains("xyz");
        console.log(a);
       }
