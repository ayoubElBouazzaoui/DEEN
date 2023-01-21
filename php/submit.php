<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = "2000elb@gmail.com";
    $subject = "Contact Form Submission";
    $headers = "From: $email";
    mail($to, $subject, $message, $headers);
    echo "Your message has been sent!";
?>