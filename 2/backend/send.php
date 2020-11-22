<?php
$reviews_file = 'data.csv';
$servicestatus = array();

if (isset($_GET['review_code']) && isset($_GET['idea']) && isset($_GET['city'])) {
    $rc = trim($_GET['review_code']);
    $id = trim($_GET['idea']);
    $city = trim($_GET['city']);

    if(!$id){ $idea = "Не продумано"; }
    else{ $idea = $id; }

    $sender = $rc . ";" . $idea . ";" . $city . PHP_EOL;

    $proccess = fopen($reviews_file,'a');
    $write = fwrite($proccess, $sender);

    if($write){
        $status = 0;
    }
    else{
        $status = 1;
    }

    fclose($proccess);

    if($status == 0){ $servicestatus['code'] = "Success"; }
    else{ $servicestatus['code'] = "Error"; }

}
else{
    $servicestatus['code'] = "Access error!";
}

echo $servicestatus['code'];
?>