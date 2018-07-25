<?php

	// if($_POST['Submit'])
	// 	{

		$email = $_POST['email'];
		$Header = 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$Header .= 'From: West Half <info@westhalf.com>' . "\r\n";
		$Header .=  "X-Mailer: php\r\n";
		$Header .= "MIME-Version: 1.0\r\n";

		ini_set('SMTP', "relay-hosting.secureserver.net");
		ini_set('smtp_port', "25");

		//mail($email, $subject, $message, $Header);

		$name 		= $_POST['name'];		
		$phone 		= $_POST['tel'];
		$aptSize 	= $_POST['choice'];	

		$aptSizeList = "";
		$len = count($aptSize);

		if($len > 0){
			foreach($aptSize  as $key => $value) {
				if($key==($len-1)){
					$aptSizeList .= $value;
				}else{
					$aptSizeList .= $value . ", ";
				}
			}
		}

		//echo $aptSizeList;

		$toAdmin = "bg@realestatearts.com";

		$subject2 = "WestHalf Contact Entries";
		$message2 = "<div style='width: 500px;'>
							<h2> WestHalf Contact Entry </h2>
							<p> Name : " . $name .  " </p>
							<p> Phone : " . $phone . " </p>		
							<p> Email : " . $email . " </p>
							<p> AptSizes: " . $aptSizeList . " </p>
							
					</div>
					";

		mail($toAdmin, $subject2, $message2, $Header);

		//header('Location: http://westhalf.com/contact');
		include_once 'connect.php';

		$sql1 = 'CREATE TABLE IF NOT EXISTS `westhalfContact` ( '.
			   '`Sr` int(3) NOT NULL,'.
			   '`Name` varchar(70) default NULL,'.
			   '`Email` varchar(180) default NULL,'.
			   '`Phone` varchar(15) default NULL,'.
			   '`AptSize` varchar(30) default NULL,'.
			   '`Timestamp` timestamp NULL default NULL,'.
			   'PRIMARY KEY  (`Sr`)'.
			 ') ENGINE=MyISAM DEFAULT CHARSET=latin1';
			 
			 mysql_query($sql1);

			$result = mysql_query("SELECT max(Sr) FROM `westhalfContact`");
			if (mysql_num_rows($result) > 0) 
			{
				$row = mysql_fetch_array($result);
					$val=$row[0];
					if( $val=="")
					   $val=1;
					else
						$val=$val+1;			
				
			}

			$sql="INSERT INTO `westhalfContact`(`Sr`, `Name`, `Email`, `Phone`, `AptSize`, `Timestamp`) VALUES($val, '$name', '$email', '$phone', '$aptSizeList', now())";

			mysql_query($sql);
			//----------------------------------------------------------------------------------------------------------
			mysql_close($dbhandle);

		//}

?>

<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>WestHalf</title>

  <meta http-equiv="refresh" content="3;url=http://westhalf.com/contact"> 


  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="stylesheet" href="assets/css/style.css" />
</head>
<body>
<div id="preloader">
</div>
<script type="text/javascript" src="styles.bundle.js"></script>
</body>
</html>

