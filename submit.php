<?php
  if(!empty($_POST['name']) AND !empty($_POST['phone'])){

    $headers = 'From: '.
               'Reply-to: bryuzgin2010@yandex.ru\r\n';
    $theme = 'Новое сообщение ';

    $letter = 'Данные сообщения: ';
    $letter .= 'Имя:'.$_POST['name'].'\r\n';
    $letter .= 'Номер телефона: '.$_POST['phone'].'\r\n';
    $letter .= 'Дополнительная информация:'.$_POST['information'].'\r\n';

    if (mail('bryuzgin2010@yandex.ru', $theme, $letter, $headers)) {
      header('Location:/thankyou.php');
    } else {
      header('Location:/');
    }
  } else {
    header('Location:/');
  }