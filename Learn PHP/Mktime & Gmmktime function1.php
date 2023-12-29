<?php

  echo "Time & Date : " . date("d-m-Y h:i:sa") . "<br><br>";

  echo date("d-m-Y h:i:sa", mktime(0,0,0,10,15,1999)) . "<br><br>";
  
  echo date("d-m-Y h:i:sa", gmmktime(0,0,0,10,15,1999));

 ?>
