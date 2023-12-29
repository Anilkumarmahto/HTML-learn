<?php

  function testing(&$string){
    $string .= " and something extra.";
  }

  $str = "This is a String";
  testing($str);
  echo $str;

 ?>
