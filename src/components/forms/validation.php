<?php

/************
* PHPMailer *
************/

session_start();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require '../vendor/phpmailer/src/Exception.php';
require '../vendor/phpmailer/src/PHPMailer.php';
require '../vendor/phpmailer/src/SMTP.php';




/************
* VARIABLES *
************/

define('LANG_MODE', 0 );
define('DEBUG_MODE' , 0 );
error_reporting(0);

// Set Lang
$lang = 'esp';

$nombre     = ( isset($_POST['nombre']) ) ? (string)$_POST['nombre'] : '';
$telefono   = ( isset($_POST['telefono']) ) ? (string)$_POST['telefono'] : '';
$email      = ( isset($_POST['email']) ) ? (string)$_POST['email'] : '';
$mensaje    = ( isset($_POST['mensaje']) ) ? (string)$_POST['mensaje'] : '';
$publi    = ( isset($_POST['publi']) ) ? (string)$_POST['publi'] : '';
$apellidos    = ( isset($_POST['apellidos']) ) ? (string)$_POST['apellidos'] : '';
$cp    = ( isset($_POST['cp']) ) ? (string)$_POST['cp'] : '';
$prefijo    = ( isset($_POST['prefijo']) ) ? (string)$_POST['prefijo'] : '';

//Datos para nueva LOPD
include("../avisolegal_datoscliente.php");
include("../php/clausula_gdpr.php");

function getRealIP() {
    if (!empty($_SERVER['HTTP_CLIENT_IP']))
        return $_SERVER['HTTP_CLIENT_IP'];
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
        return $_SERVER['HTTP_X_FORWARDED_FOR'];
    return $_SERVER['REMOTE_ADDR'];
}

$ipcliente = getRealIP();
$avisolegalmail = strip_tags($textolegal);


if ($publi = (isset($_POST['publi']))) {
    $publi = 'True';
} else {
    $publi = 'False';
}


/*************
* VALIDACIÓN *
*************/

$arrErrors = array();

// Validación Nombre
if (empty($nombre) || !preg_match('/^[a-zA-Z\ñÑçÇáÁäÄàÀâÂéÉëËèÈêÊíÍïÏìÌîÎóÓöÖòÒôÔúÚüÜùÙûÛ\w\s\xC0-\xFF\,\.\-\ª\º]+$/',$nombre) ){
    $arrErrors[] = 'Nombre no válido';
}

// Validación Teléfono
// if (!preg_match('/^[0-9\s\-\+]{0,16}+$/', $telefono) || preg_match('/^([0-9])\1*$/', $telefono) ){
//     $arrErrors[] = 'Teléfono no válido';
// }
$eliminarTelefono = array(".","\"", "'", ";", ',', "\n","\r","\t");
$telefono = str_replace($eliminarTelefono,"",$telefono);

// Validation Email
$validEmail = preg_match('#^[a-z0-9.!\#$%&\'*+-/=?^_`{|}~]+@([0-9.]+|([^\s]+\.+[a-z]{2,6}))$#si', $email);
if (empty($email) || !$validEmail) {
    $arrErrors[] = 'Email no válido';
}
// Validación Mensaje
$mensaje = htmlspecialchars($mensaje);
$eliminar = array("\n","\r","\t");
$mensaje2 = str_replace($eliminar," ",$mensaje);

if ((strpos($mensaje,"http:") > -1) || (strpos($mensaje,"www.") > -1) || (strpos($mensaje,"https:") > -1)) {
    $arrErrors[] = 'Mensaje no válido';
} else if (!empty($mensaje) && !preg_match('/^[a-zA-Z\ñÑçÇáÁäÄàÀâÂéÉëËèÈêÊíÍïÏìÌîÎóÓöÖòÒôÔúÚüÜùÙûÛ\w\s\xC0-\xFF\,\.\-\ª\º]+$/',$mensaje)) {
    $arrErrors[] = 'Mensaje no válido';
}



//quita saltos linea
// $mensaje2 = str_replace(PHP_EOL, ' ', $mensaje);
// $mensaje3 = str_replace('\r', ' ', $mensaje2);
// $mensaje4 = str_replace('\n', ' ', $mensaje3);
// $mensaje5 = str_replace('<b>', ' ', $mensaje4);
// $mensaje6 = str_replace('</b>', ' ', $mensaje5);
// $mensaje7 = str_replace('<br>', ' ', $mensaje6);




$telefonofinal =  $prefijo . " " . $telefono ;

/**************
* ENVÍO EMAIL *
**************/
if (empty($arrErrors)) {
    try {
        $mail = new PHPMailer(true);

        $cuerpo ="  
                    <p>Nou contacte des de la web:</p>
                    <b>Nombre: </b>$nombre<br>
                    <b>Telefono: </b>$telefonofinal<br>
                    <b>Email: </b>$email<br>
                    <b>Mensaje: </b>$mensaje2<br>
                    <b>IP: </b>$ipcliente<br>
                    <b>Aceptacion GDPR: </b>Sí<br><br><br>
                    <img src='http://magicsants.cat/images/magic.png' style='width: 100px'>
                    ";

        $mail->SetLanguage("es");
        $mail->CharSet = 'UTF-8';
        $mail->IsHTML(true);
        $mail->SetFrom("info@magicsants.cat");
        $mail->Subject = "Mágic Sants WEB - Nou Contacte";
        $mail->Body = $cuerpo;
        $mail->AddReplyTo($email);
        switch ($email){
            case 'nvillaverdi@gmail.com':
                $mail->AddAddress($email);
                break;
            default:
                $mail->AddAddress("magicsants@gmail.com");
                break;
        }




        
            if ($mail->Send()) {
                /*************AUTORESPUESTA!*************/
                 // $eliminar = array("\n","\r","\t");
                 // $mensaje = str_replace($eliminar," ",$mensaje);
                
                 // $email = strtolower($email);
                
                 // $mail->ClearAddresses();
                 // $mail->ClearAllRecipients();
                 // $mail->ClearReplyTos();
                
                 // $mail->CharSet = 'utf-8';
                 // $mail->SetLanguage("es");
                 // $mail->SetFrom('');
                 // $mail->AddAddress( '' );
                 // $mail->FromName = "";
                 // $mail->AddAttachment( '');
                 // $mail->Subject = "";
                 //  $mail->Body = "";
                 // // $mail->MsgHTML(file_get_contents('../mailing/respuesta/index.html'));
                 // $mail->Send();
                /*************AUTORESPUESTA!*************/

                $cvsData = "\t" . date('Y/m/d - G:i:s') . "\t" . $source .  "\t" . $nombre . " " . $apellidos .  "\t" . $telefono . "\t" . $email . "\t"  . $mensaje . "\n";
                $fp = fopen("../php/form/form.txt","a"); // $fp is now the file pointer to file $filename

                if ($fp) {
                    fwrite($fp,$cvsData); // Write information to the file
                    fclose($fp); // Close the file
                }

                header('Location: ../comprobante.php' );
                exit;
            }
    } catch (phpmailerException $e) {
        //Pretty error messages from PHPMailer
        echo $e->errorMessage();
    } catch (Exception $e) {
        echo $e->getMessage();
    }
} else {
    $_SESSION['form_errors'] = $arrErrors;

    header('Location: ../index.php' );
    exit;
}
?>
