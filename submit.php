<?php
if (isset($_POST['submit'])){
  $to = "bryuzgin2010@yandex.ru";
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $information = $_POST['information'];
  $subject = "Форма отправки сообщений с сайта";
  $message = $name . " оставил вам сообщение:" . "\n\n" . $_POST['messege'];
  $headers = "From:" . $from;
  $headers2 = "From:" . $to;

  mail($to,$subject,$message,$headers);

  echo "Сообщение отправлено. Спасибо Вам!" . $name;
}

?>