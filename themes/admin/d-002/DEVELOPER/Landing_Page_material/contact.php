<?php
 
    $to = "john@doe.com";   // Enter your Email
    $from = $_REQUEST['email']; 
    $name = $_REQUEST['name']; 
    $headers = "From: $from"; 
    $subject = $_REQUEST['subject']; 

    error_reporting (E_ALL); 

    $fields = array(); 
    $fields{"name"} = "name"; 
    $fields{"email"} = "email"; 
    $fields{"subject"} = "subject"; 
    $fields{"message"} = "message";
 
    $body = "Message From " . $name .":\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }
 
    $send = mail($to, $subject, $body, $headers);
 
?>