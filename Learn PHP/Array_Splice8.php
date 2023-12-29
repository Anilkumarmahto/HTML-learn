<?php

  $color = ["red","green","blue","yellow","brown"];

  $fruit = ["orange","Apple"];

  array_splice($color,2,count($color),$fruit);

  echo "<pre>";
  print_r($color);
  echo "<pre>";


 ?>
