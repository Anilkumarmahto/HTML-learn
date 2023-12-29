<?php

  $marks = [
    "Anil" => [
      "Physics" => 85,
      "Maths" => 78,
      "Chemistry" => 89
    ],

    "Bhola" => [
      "Physics" => 65,
      "Maths" => 58,
      "Chemistry" => 79
    ],

    "Shiv" => [
      "Physics" => 62,
      "Maths" => 65,
      "Chemistry" => 92
    ]
  ];
  echo "<table border='2px' cellpadding='5px' cellspacing='0'>
        <tr>
            <th>Student name</th>
            <th>Physics</th>
            <th>Maths</th>
            <th>Chemistry</th>
        </tr>";
        
  foreach ($marks as $key => $v1) {
    echo "<tr>
          <td>$key</td>";
    foreach ($v1 as $v2) {
        echo "<td> $v2 </td>";
    }
    echo "</tr>";
  }
  echo "</table>";

  echo "<pre>";
  print_r($marks);
  echo "</pre>";
 ?>
