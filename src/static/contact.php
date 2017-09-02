<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
// error_reporting(E_ALL);
// phpMailer integration
require './_phpmailer/PHPMailerAutoload.php';
// http://gura.4dd-communication.com/contact.php?userName=D.&userSurname=G.&userMail=dmitri.galakhov@gmail.com&usrMsg=TEST\nTEST\t\tTEST
// phpMailer configuration

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = '87.106.65.26';                         // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->SMTPKeepAlive = true; // SMTP connection will not close after each email sent, reduces SMTP overhead
$mail->Username = 'gura@4dd-communication.com';        // SMTP username
$mail->Password = '';                    // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 25;                                     // TCP port to connect to
$mail->CharSet = "UTF-8";

$mail->setFrom('info@gura-verwaltung.de', 'Gura Verwaltungs GmbH');
//$mail->addAddress('ellen@example.com');             // Name is optional
$mail->addReplyTo('info@gura-verwaltung.de', 'Gura Verwaltungs GmbH');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');       // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');  // Optional name
$mail->isHTML(true);                                  // Set email format to HTML
$mail->setLanguage('de', './_phpmailer/language/');


  $err = 0;
  $name = '';
  $surname = '';
  $email = '';
  $msg = '';

  if (isset($_POST['userName']) and !empty($_POST['userName'])) {
    $name = htmlspecialchars($_POST['userName'], ENT_QUOTES, 'UTF-8');
  } else {
    $err++;
  }

  if (isset($_POST['userSurname']) and !empty($_POST['userSurname'])) {
    $surname = htmlspecialchars($_POST['userSurname'], ENT_QUOTES, 'UTF-8');
  } else {
    $err++;
  }

  if (isset($_POST['userMail']) and !empty($_POST['userMail'])) {
    $email = htmlspecialchars($_POST['userMail'], ENT_QUOTES, 'UTF-8');
  } else {
    $err++;
  }

  if (isset($_POST['userMsg']) and !empty($_POST['userMsg'])) {
    $msg = htmlspecialchars($_POST['userMsg'], ENT_QUOTES, 'UTF-8');
  } else {
    $err++;
  }

  //$empfaenger = "info@rbu-germany.com";
  //$empfaenger = "d.galakhov@4dd.de";
  $full_name = $name . ' ' . $surname;
  $mail->addAddress($email, $full_name);     // Add a recipient

  /*$header = "MIME-Version: 1.0\r\n";
  $header .= "Content-type: text/html; charset=utf-8\r\n";
  $header .= "Return-Path: <".$empfaenger.">\r\n";
  $header .= "From: info@rbu-germany.com\r\n";
  $header .= "Reply-To: info@rbu-germany.com" . "\r\n" .
  $header .= "X-Mailer: PHP/" . phpversion();*/

  $kundebetreff = "Kontaktformularanfrage von der Gura Verwaltungs GmbH Seite";

  $kundetext = "Sehr geehrte(r) " .$name . " " . $surname. ",<br /><br />Vielen Dank für Ihre Nachricht:<br /><br />";

  $kundetext .= $msg;

  $kundetext .= "<br /><br />Wir setzen uns schnellstmöglich mit Ihnen in Verbindung.<br /><p>Mit freundlichen Gr&uuml;&szlig;en<br>Ihre Gura Verwaltungs GmbH.<br /><br />GURA Verwaltungs GmbH & Co KG<br />An der Gasse 29 - 33<br />D-51789 Lindlar<br />Tel: +49 (0) 2266 4 77 87 - 0<br />Fax: +49 (0) 2266 4 77 87 - 10<br /><br />E-Mail: <a href='mailto:info@gura-verwaltung.de'>info@gura-verwaltung.de</a><br />Web: <a href='http://www.gura-verwaltung.de' target='_blank'>gura-verwaltung.de</a><br />";

  $mail->Subject = $kundebetreff;
  $mail->Body    = $kundetext;
  $mail->AltBody = 'Nutzen Sie bitte einen HTML-fähigen E-Mail Client, um sich die komplette Nachricht anzuschauen.';
  //$mail->AltBody = $text;

  if($err <= 0) {
    //mail($empfaenger, $betreff, $text, $header);
    //mail($kundemail, $kundebetreff, $kundetext, $header);
    //echo "<script type='text/javascript'>$(document).ready(function(){$('#messeform').fadeOut('fast');$('#danke').fadeIn(1000).css('display','block');});</script>";

    // send mail to a user
    if(!$mail->send()) {
        $mail_status = 'Die Bestätigunsmail konnte an die von Ihnen angegebene E-Mail leider nicht versendet werden.<br />';
        $mail_status .= 'Fehlercode: "' . $mail->ErrorInfo . '"';
        $mail_status .= '<br />Bitte versuchen Sie es später <a href="../contact/">erneut</a>.';
        // https://hilfe-center.1und1.de/hosting/e-mail-und-office-c10082645/1und1-postmaster-c10085388/smtp-fehlermeldungen-der-1und1-mailserver-a10795753.html
    } else {
        $mail_status = 'Vielen Dank für Ihre Nachricht. In Kürze erhalten Sie eine Bestätigunsmail.';

        $empfaenger = "d.galakhov@4dd.de";
        //$empfaenger = "info@gura-verwaltung.de";
        // send a confirmation e-mail to admin
        $mail = new PHPMailer;

        //$mail->SMTPDebug = 3;                               // Enable verbose debug output

        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = '87.106.65.26';                         // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->SMTPKeepAlive = true; // SMTP connection will not close after each email sent, reduces SMTP overhead
        $mail->Username = 'gura@4dd-communication.com';        // SMTP username
        $mail->Password = '';                                 // SMTP password
        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 25;                                     // TCP port to connect to
        $mail->CharSet = "UTF-8";

        $mail->addAddress($empfaenger);                       // Name is optional
        $mail->setFrom('info@gura-verwaltung.de', 'Gura Verwaltungs GmbH');
        //$mail->addAddress('ellen@example.com');             // Name is optional
        $mail->addReplyTo('info@gura-verwaltung.de', 'Gura Verwaltungs GmbH');
        //$mail->addCC('cc@example.com');
        //$mail->addBCC('bcc@example.com');
        $mail->isHTML(true);
        $mail->setLanguage('de', './_phpmailer/language/');

        $betreff = "Kontaktformularanfrage auf der Gura Verwaltungs GmbH Seite von ". $name . " " . $surname;

        $text = "Sehr geehrte Damen und Herren,<br /><br />";
        $text .= "Ein Nutzer Ihrer Seite hat eine Nachricht an Sie gesendet:<br><p>Folgender Nutzer hat sich bei Ihnen gemeldet:<br />Name, Vorname: ". $name . " " . $surname . "<br />E-Mail: " .$email. "<br />Nachricht des Nutzers:<br /><br />".$msg."<br /><br />Gesendet von der Gura Verwaltungs GmbH Seite</p>";

        $mail->Subject = $betreff;
        $mail->Body    = $text;
        $mail->AltBody = 'Nutzen Sie bitte einen HTML-fähigen E-Mail Client, um sich die komplette Nachricht anzuschauen.';

        $mail->send();
    }
    $mail_status .= '<br /><p>Name: ' . $name . '<br />Nachname: ' . $surname . '<br />E-Mail: ' . $email . '<br />Text:<br />' . $msg . '</p><br />Errors: ' . $err;
    echo '<p style="color:#f00;">' . $mail_status . '</p>';
    /* // RBU-EINLADUNG-2017
       $mysqli = new mysqli("db687902619.db.1and1.com", "dbo687902619", "\zxXCq&fpU", "db687902619");
    // check connection
    if (mysqli_connect_errno()) {
        printf("Verbindung zur Datenbank fehlgeschlagen: %s\n", mysqli_connect_error());
        exit();
    }
      $err = 0;

      //mysqli_set_charset($mysqli, "utf8");
      $mysqli->set_charset("utf8");

      $sql_query = "INSERT INTO rbu_einladung_2017 (id, datum, name, firma, email, companionship) VALUES (NULL, CURRENT_TIMESTAMP, ?, ?, ?, ?)";

      if (!($stmt = $mysqli->prepare($sql_query))) {
          echo "<p>Ein Fehler beim Vorbereiten von Daten: (" . $mysqli->errno . ") " . $mysqli->error."</p>";
      }
      $stmt->bind_param("ssss", $name, $unternehmen, $kundemail, $companionship);

      if (!$stmt->execute()) {
          echo "<p>Ein Fehler beim Einfügen der Daten in die Datenbank:<br />(" . $stmt->errno . ") " . $stmt->error . "</p><br /><br />";
      }
      else {
        echo '<span id="danke">Vielen Dank für Ihre Bestätigung.<br /><p style="color:#fff;">'.$mail_status.'</p>';
        echo '<p style="color:#fff;">Ihre Daten wurden erfolgreich gespeichert.</p>';
        //$jsonha = "200";
        //echo $jsonha;
      }
      //exit();


    //$sql_alu = "INSERT INTO `usr_c2web27_1`.`intec2015` (`id`, `datum`, `formular`, `name`, `firma`, //`ansprechpartner`, `email`, `wann`, `begleitung`) VALUES (NULL, CURRENT_TIMESTAMP, //'euroblech2014', '" .$_POST['name']. "', '" .$_POST['unternehmen']. "', '" //.$_POST['ansprechpartner']. "', '" .$_POST['mail']. "', '" .$datum. "', '');";
    //  $result44 = mysql_query($sql_alu);
    */
  } else {
    echo '<p style="color:#f00;">Das Formular war unvollständig ausgefüllt und es wurden leider keine E-Mails gesendet.<br />Bitte versuchen Sie es später <a href="../contact/">erneut</a>.</p>';
    echo '<p>Name: ' . $name . '<br />Nachname: ' . $surname . '<br />E-Mail: ' . $email . '<br />Text:<br />' . $msg . '</p><br />Errors: ' . $err;
  }
?>
