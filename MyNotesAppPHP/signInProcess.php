<?php
require "./connection.php";

$loginDetails = json_decode(file_get_contents("php://input"));
$mobile = $loginDetails->mobile;
$pass = $loginDetails->pass;

if(empty($mobile)){
    echo "Enter mobile";
}else if(empty($pass)){
    echo "Enter password";
}else{
    $rs = Database::search("SELECT * FROM `user` WHERE `mobile`='".$mobile."' AND `password`='".$pass."' ");
    if($rs->num_rows == 1){
        echo "true";
    }else{
        echo "false";
    }
}




?>