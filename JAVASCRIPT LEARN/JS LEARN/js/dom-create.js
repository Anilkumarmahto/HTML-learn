  /*.................createElement.....................*/
/*    var newElement = document.createElement("p");

    var newText = document.createTextNode("This is just text");

    var newComment = document.createComment("This is just comment");

    console.log(newElement);
    console.log(newText);
    console.log(newComment);   */


    /*.................Append method.....................*/
/*      var newElement = document.createElement("h2");

    var newText = document.createTextNode("This is just text");

    newElement.appendChild(newText);

    var target = document.getElementById("test");

    target.insertAdjacentElement("beforebegin",newElement);  */


    /*.................Append method.....................*/
    /*        var newElement = document.createElement("h2");

    var newText = document.createTextNode("This is just text");

    newElement.appendChild(newText);

    var target = document.getElementById("test");

    target.insertAdjacentElement("afterbegin",newElement);   */


    /*.................Append method.....................*/
    /*      //  var newElement = document.createElement("h2");

    //  var newText = document.createTextNode("This is just text");

    //    newElement.appendChild(newText);

    var target = document.getElementById("test");

    var newElement = "<h2>This is Heading</h2>";

    target.insertAdjacentHTML("afterbegin",newElement);    */


    /*.................Append method.....................*/
    /*          //  var newElement = document.createElement("h2");

    //  var newText = document.createTextNode("This is just text");

    //    newElement.appendChild(newText);

    var target = document.getElementById("test");

    var newElement = "<h2>This is Heading</h2>";

    target.insertAdjacentHTML("afterend",newElement);    */


    /*.................Append method.....................*/
    /*          //  var newElement = document.createElement("h2");

    //  var newText = document.createTextNode("This is just text");

    //    newElement.appendChild(newText);

    var target = document.getElementById("test");

    var newElement = "<h2>This is Heading</h2>";

    target.insertAdjacentHTML("beforeend",newElement);   */


    /*.................Append method.....................*/
    /*            //  var newElement = document.createElement("h2");

    //  var newText = document.createTextNode("This is just text");

    //    newElement.appendChild(newText);

    var target = document.getElementById("test");

    var newElement = "This is Heading";

    target.insertAdjacentText("beforeend",newElement);   */


    /*.................Append method.....................*/
    /*                //  var newElement = document.createElement("h2");

    //  var newText = document.createTextNode("This is just text");

    //    newElement.appendChild(newText);

      var target = document.getElementById("test");

      var newElement = "This is Heading";

      target.insertAdjacentText("afterend",newElement);   */


      /*.................Append method.....................*/
    /*              //  var newElement = document.createElement("h2");

      //  var newText = document.createTextNode("This is just text");

    //    newElement.appendChild(newText);

        var target = document.getElementById("test");

        var newElement = "This is Heading";

        target.insertAdjacentText("beforebegin",newElement);  */


        /*.................Append method.....................*/
    /*                    //  var newElement = document.createElement("h2");

        //  var newText = document.createTextNode("This is just text");

      //    newElement.appendChild(newText);

          var target = document.getElementById("test");

          var newElement = "This is Heading";

          target.insertAdjacentText("afterbegin",newElement);   */


    /*.................Append method.....................*/

/*    var newElement = document.createElement("li");
    var newText = document.createTextNode("WOW new Text");

    newElement.appendChild(newText);

    var target = document.getElementById("list");
    var oldElement = target.children[0];

    console.log(oldElement);   */


    /*.................Append method.....................*/

/*    var newElement = document.createElement("li");
    var newText = document.createTextNode("WOW new Text");

    newElement.appendChild(newText);

    var target = document.getElementById("list");
    var oldElement = target.children[0];

  //  console.log(oldElement);

  target.replaceChild(newElement,oldElement);  */


  /*.................Append method.....................*/

/*  //  var newElement = document.createElement("li");
  //  var newText = document.createTextNode("WOW new Text");

  //  newElement.appendChild(newText);

  var target = document.getElementById("list");
  var oldElement = target.children[0];

//  console.log(oldElement);

target.removeChild(oldElement);    */

/*.................CloneNode.....................*/

/*    var target = document.getElementById("list1").children[0];
    var copyElement  = target.cloneNode(true);

    console.log(copyElement);  */

    /*.................CloneNode.....................*/

  /*      var target = document.getElementById("list1").children[0];
        var copyElement  = target.cloneNode(true);

        console.log(copyElement);

        document.getElementById("list2").appendChild(copyElement);  */

/*.................CloneNode.....................*/

/*    var target = document.getElementById("list1").children[0];
    var copyElement  = target.cloneNode(true);

    console.log(copyElement);

    document.getElementById("test").appendChild(copyElement); */

/*.................Contains method.....................*/

/*  var parentElement = document.getElementById("test");
  var target = document.getElementById("abc");

  var find = parentElement.contains(target);

  console.log(find);  */

/*.................hasAttribute & hasChildAttribute.....................*/

/*  var target = document.getElementById("test");

  var find = target.hasAttribute("class");

  console.log(find);  */

  /*.................hasAttribute & hasChildNodes.....................*/

/*    var target = document.getElementById("test");

    var find = target.hasChildNodes("class");

    console.log(find);  */

  /*.................EqualNodes.....................*/
/*  var target1 = document.getElementById("list-1").firstElementChild;

  var target2 = document.getElementById("list-2").firstElementChild;

  var equal = target1.isEqualNode(target2);

  console.log(equal);   */


  /*.................EqualNodes.....................*/
  var target1 = document.getElementById("list-1").firstElementChild;

  var target2 = document.getElementById("list-2").children[1];

  var equal = target1.isEqualNode(target2);

  console.log(equal);
