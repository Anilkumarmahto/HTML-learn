<?php
  echo date("d-m-Y",strtotime("3 march 2005")) . "<br>";

  echo date("d-m-Y H:m",strtotime("+5 hours")) . "<br>";

  echo date("d-m-Y H:m",strtotime("+1 week")) . "<br>";

  echo date("d-m-Y H:m",strtotime("+1 week 3 days 7 hours 5 seconds")) . "<br>";

  echo date("d-m-Y H:m",strtotime("next monday")) . "<br>";

  echo date("d-m-Y H:m",strtotime("last sunday")) . "<br>";
  
  echo date("d-m-Y H:m",strtotime("First day of last month")) . "<br>";

 ?>
