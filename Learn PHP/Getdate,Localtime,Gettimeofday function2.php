<?php
  $olddata = mktime(0,0,0,03,15,2015);

  $date = getdate($olddata);
  echo $date['month']. " - ". $date['year'];

  echo "<pre>";
  print_r(getdate($olddata));
  echo "</pre>";


 ?>
