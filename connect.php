<?php
$username = "westhreausr";
$password = "adm%wEsiTnh17Alf";
$hostname = "localhost";
$dbName = "westhDB";

//connection to the database
$dbhandle = mysql_connect($hostname, $username, $password)
        or die("Unable to connect to MySQL");
//echo "Connected to MySQL<br>";
$selected = mysql_select_db($dbName,$dbhandle)
  or die("Could not select examples");
?>