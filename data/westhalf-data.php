<?php
 ob_start();
 include_once 'connect.php';

 $sql = "SELECT * from westhalfContact WHERE Email!='' ORDER BY Sr ASC";
 $res = mysql_query( $sql) or die();
 $count = mysql_num_fields($res);

 // fetch table header from database
 $header = '';
 for ($i = 0; $i < $count; $i++){
    $header .= mysql_field_name($res, $i)."\t";
    }

 // fetch data each row, store on tabular row data
 while($row = mysql_fetch_row($res)){
   $line = '';
   foreach($row as $value){
   if(!isset($value) || $value == ""){
     $value = "\t";
   }else{
     $value = str_replace('"', '""', $value);
     $value = '"' . $value . '"' . "\t";
   }
   $line .= $value;
   }
   $data .= trim($line)."\n";
   $data = str_replace("\r", "", $data);
  }
 
date_default_timezone_set('America/New_York');
 $name='WestHalf'.date('d-m-y').'-list.xls';
 header("Content-type:application/vnd.ms-excel;name='excel'");
 header("Content-Disposition: attachment; filename=$name");
 header("Pragma: no-cache");
 header("Expires: 0");

 // Output data
 echo $header."\n\n".$data;
 ?>