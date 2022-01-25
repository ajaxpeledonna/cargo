<?php 

$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['tel'];
$message = $_POST['email'];
$mail->Body = "Поступила заявка от $name\nТелефон $phone\nСообщение: $email";
$mail->Body = wordwrap($mail->Body, 70);


var_dump(mail('test@yandex.ru', 'Заявка с сайта', $mail->Body));


?>