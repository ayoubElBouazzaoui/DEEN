
    <?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];
        $subject = $_POST['message'];
        $to = "2000elb@gmail.com";
        $headers = "From: " . $email . "\r\n";
        $headers .= "Reply-To: ". $email . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        $message = "<b>Name:</b> " . $name . "<br>";
        $message .= "<b>Email:</b> " . $email . "<br>";
        $message .= "<b>Message:</b> " . $message . "<br>";
        mail($to, $subject, $message, $headers);
        echo "Thank you for contact us. We will contact you soon!";
    }
    ?>
