<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $message = trim($_POST['message']);

    $errors = array();

    if(empty($name)) {
        $errors[] = 'Nombre es obligatorio./Name is required.';
    }

    if(empty($email)) {
        $errors[] = 'Correo electrónico es obligatorio./Email is required.';
    } elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Correo electrónico no es válido./Email is not valid.';
    }

    if(empty($phone)) {
        $errors[] = 'Número de teléfono es obligatorio./Phone number is required.';
    }

    if(empty($errors)) {
        $to = 'peralta.steven01@gmail.com';
        $subject = 'Nuevo mensaje de contacto / New Contact Message' . $name;

        $email_body = 'You have received a new messsage from NR contact form. \n\n';
        $email_body .= 'Name: ' . $name . '\n';
        $email_body .= 'Email: ' . $email . '\n';
        $email_body .= 'Phone: ' . $phone . '\n\n';
        $email_body .= 'Message:\n' . $message . '\n';

        $headers = 'From: ' . $email . '\r\n';
        $headers .= 'Reply-To: ' . $email . '\r\n';

        if(mail($to, $subject, $email_body, $headers)) {
            echo '<h2>Gracias por contactarnos. Nos pondremos en contacto con usted pronto./Thank you for contacting us. We will reach out to you soon.</h2>';
            echo '<p>Su mensaje ha sido enviado correctamente./Your message has been sent successfully.</p>';
        } else {
            echo '<h2>Error al enviar el mensaje./Error sending message.</h2>';
            echo '<p>Hubo un problema al enviar su mensaje. Por favor, inténtelo de nuevo más tarde./There was a problem sending your message. Please try again later.</p>';
        }
    } else {
        echo '<h2>Se encontraron los siguientes errores:/The following errors were found:</h2>';
        echo '<ul>';
        foreach($errors as $error) {
            echo '<li>' . htmlspecialchars($error) . '</li>';
        }
        echo '</ul>';
        echo '<p><a href= 'javascript:history.back()'>Volver/Go back</a></p>';
    } else {
        echo 'Invalid request';
    }
}
?>
