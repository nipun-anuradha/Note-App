<?php
require "./connection.php";

$regDetails = json_decode(file_get_contents("php://input"));
$fname = $regDetails->fname;
$lname = $regDetails->lname;
$mobile = $regDetails->mobile;
$pass = $regDetails->pass;

if(empty($fname)){
    echo "Enter first name";
}else if(empty($lname)){
    echo "Enter last Name";
}else if (strlen($mobile) != 10) {
    echo "Invalid Mobile Number";
} else if (!preg_match("/07[0,1,2,4,5,6,7,8][0-9]/",$mobile)) {
    echo "Invalid Mobile Number";
}else if(empty($pass)){
    echo "Enter password";
}else{
    
    Database::iud("INSERT INTO `user`(`fname`,`lname`,`mobile`,`password`) VALUES('".$fname."','".$lname."','".$mobile."','".$pass."') ");
    
    echo "success";
    
}


?>