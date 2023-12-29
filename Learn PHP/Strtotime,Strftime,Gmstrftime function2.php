
<?php
  echo strftime("%B %d %Y, %X %Z") . "<br>";

  echo strftime("%B %d %Y, %X %Z", mktime(21,30,0,05,18,2005)) . "<br>";

  echo strftime("%d/%m/%Y %H:%M:%S", mktime(21,30,0,05,18,2005)) . "<br>";

  echo gmstrftime("%d/%m/%Y %H:%M:%S", mktime(21,30,0,05,18,2005)) . "<br>";


 ?>
