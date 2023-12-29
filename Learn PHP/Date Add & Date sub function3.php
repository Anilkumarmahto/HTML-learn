<?php
  $date = date_create("2015-05-15");
  date_modify($date, "-10 days");

  echo date_format($date, "d-m-Y");
 ?>
