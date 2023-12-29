<?php
  date_default_timezone_set("Asia/Kolkata");
  echo date_default_timezone_get() . "<br>";

  $tz = timezone_open("Asia/Kolkata");
  echo timezone_name_get($tz);

  echo "<pre>";
  print_r(timezone_location_get($tz));
  echo "</pre>";

 ?>
