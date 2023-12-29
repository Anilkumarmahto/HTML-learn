<?php

  $emp = [
    [
      "id" => 1,
      "name" => "Krishna",
      "designation" => "Manager",
      "salary" => 50000
    ],

     [
       "id" => 2,
       "name" => "Salman",
       "designation" => "Salesman",
       "salary" => 20000
    ],

     [
       "id" => 3,
       "name" => "Mohan",
       "designation" => "Computer Operator",
       "salary" => 12000
    ],

    [
      "id" => 4,
      "name" => "Amir",
      "designation" => "Driver",
      "salary" => 5000
    ],

    [
      "id" => 5,
      "name" => "Anil",
      "designation" => "Driver",
      "salary" => 4000
    ],
  ];

  echo "<table border='1px' cellpadding='5px' cellspacing='0px'>
        <tr>
            <th>Emp Id.</th>
            <th>Name</th>
            <th>designation</th>
            <th>Salary</th>
        </tr>";
  foreach ($emp as list("id" => $id,"name" => $name,"designation" => $designation,"salary" => $salary)) {
    echo "<tr><td>$id</td> <td>$name</td> <td>$designation</td> <td>$salary </td></tr>";
  }
  echo "</table>";
 ?>
