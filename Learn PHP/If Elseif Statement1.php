<?php
  $per = 72 ;


  if($per >= 80 && $per <= 100):
    echo "Your are in merit.";

  elseif ($per >= 60 && $per <= 80) :
      echo "Your are in 1st Division";

  elseif ($per >= 45 && $per <= 60) :
      echo "Your are in 2nd Division";

  elseif ($per >= 33 && $per <= 45) :
      echo "Your are in 3rd Division";

  elseif ($per < 33) :
      echo "Your are fail.";

  else :
    echo "Please Enter the Valid Percentage.";
  endif;



 ?>
