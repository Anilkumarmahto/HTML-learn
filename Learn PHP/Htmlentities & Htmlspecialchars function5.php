<?php

//  $str = "A 'quote' is <b>bold</b>";
  $str = '<a href="https://www.yahoobaba.net">Yahoo Baba Website</a>';

  echo $str . "<br><br>";

  echo htmlspecialchars($str, ENT_QUOTES);

 ?>
