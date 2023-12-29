<?php

//  $str = "A 'quote' is <b>bold</b>";
  $str = '<a href="https://www.yahoobaba.net">Yahoo Baba Website</a>';

//  echo $str . "<br><br>";

  $htmlent = htmlentities($str, ENT_NOQUOTES);

  echo $htmlent;

  echo html_entity_decode($htmlent);

 ?>
