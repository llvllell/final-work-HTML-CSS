<?php
if (!empty($_POST['name'])){
  $to = "bryuzgin2010@yandex.ru";
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $information = $_POST['information'];
  $subject = "Форма отправки сообщений с сайта";
  $headers2 = "From:" . $to;

  mail($to,$subject,$name,$phone);
}

?>