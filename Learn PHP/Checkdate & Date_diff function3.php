<?php
  $date1 = date_create("2013-12-15");
  $date2 = date_create("2013-03-12");

  $diff = date_diff($date1, $date2);
  echo $diff->format("%R%a days");

//  echo $diff->days . "days";
  echo "<pre>";
  print_r($diff);
  echo "</pre>";
 ?>
