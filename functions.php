<?php



if(!empty($_POST))

{

foreach($_POST as $key=>$val)

{

$arr[]= $key.": ".$val."      " ;



}

$str=implode('',$arr);



$to="shubham.pandey128@gmail.com";

$subject="Query On Website";

$msg=$str;

$header="Website Query";



if(mail($to,$subject,$msg,$header))

{



echo "<script type='text/javascript'>alert('Thanks. Mail Sent'); window.location='index.html';</script>";

}

else

{



echo "<script type='text/javascript'>alert('oops! Error occured.'); window.location='index.html';</script>";





}





}





?>