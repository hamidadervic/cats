<?php 
header('Access-Control-Allow-Origin: http://localhost:4200', false);

$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['message'];

if ( $_SERVER['REQUEST_METHOD'] == 'POST' ) {

		if ( isset($_POST['name']) && isset($_POST['email']) &&
			isset($_POST['message'])) {
			$name = test_input($_POST['name']);
		    $from = test_input($_POST['email']);
		    $subject = 'E-mail from CAT';
		    $msg = test_input($_POST['message']);
            $headers = 'From: ' . $name . '' . "\r\n" .
                       'Reply-To: ' . $from . '' . "\r\n" .
                       'X-Mailer: PHP/' . phpversion(); 
                     $msg = $msg .'' . "\r\n" . "\r\n" . $headers;

            mail('hamida.dervic@outlook.com', $subject, $msg );
	    }

    }

function test_input($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
}
