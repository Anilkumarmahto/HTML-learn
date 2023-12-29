<?php

//  $str = "A 'quote' is <b>bold</b>";
  $str = '<a href="https://www.yahoobaba.net">Yahoo Baba Website</a>';

//  echo $str . "<br><br>";

  $htmlent = htmlspecialchars($str, ENT_QUOTES);

  echo $htmlent;

  echo htmlspecialchars_decode($htmlent);

 ?>
