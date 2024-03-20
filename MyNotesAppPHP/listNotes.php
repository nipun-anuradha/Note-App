<?php
require "./connection.php";

$mainArray = array();

    $rs = Database::search("SELECT * FROM `note` ");
    while($notes = $rs->fetch_assoc()){
        $a=array("title"=>$notes["title"], "description"=>$notes["description"], "ntype"=>$notes["type"]);
        array_push($mainArray,$a);
    }


echo json_encode($mainArray);
?>