<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['message'];

  $email_from = 'christina.petris@outlook.com';

  $email_subject = "New Form Submission";

  $email_body = "User Name : $name.\n".
                  "User Email: $visitor_email.\n".
                      "User Message: $message.\n";

  $to = "christina.petris@outlook.com";

  $headers = "From: $email_from \r\n";

  $headers = "reply-To: $visitor_email \r\n";

  mail($to,$email_subject,$email_body,$headers);

  header("Location: contact.html");
 ?>