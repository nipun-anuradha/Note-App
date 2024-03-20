<?php
require "./connection.php";

$noteDetails = json_decode(file_get_contents("php://input"));
$title = $noteDetails->title;
$note = $noteDetails->note;


if(empty($title)){
    echo "Enter note title";
}else if(empty($note)){
    echo "Enter your note";
}else{
    
    Database::iud("INSERT INTO `note`(`title`,`description`) VALUES('".$title."','".$note."') ");
    
    echo "success";
    
}


?>