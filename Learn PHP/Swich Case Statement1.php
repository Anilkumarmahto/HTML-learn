<?php
    $weekday = 2;

    switch ($weekday) {
      case 1: case 2: case 3:
          echo "Today is Monday";
        break;

            case 4:
                echo "Today is Thuresday";
              break;

              case 5:
                  echo "Today is Friday";
                break;

                case 6:
                    echo "Today is Saturday";
                  break;

                  case 7:
                      echo "Today is Sunday";
                    break;
      default:
        echo "Enter the valid week day.";

    }

 ?>
