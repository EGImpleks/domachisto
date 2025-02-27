<?php

$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;
if ( $method === 'POST' ) {
	$site_mail = 'site@domachisto.su';
	$admin_email = 'vm@domachisto.su';
	$project_name = 'DomaChisto';
	$form_subject = 'DomaChisto';


	$massive = [];
	
	$massive['name'] = htmlspecialchars(trim($_POST["name"]), ENT_QUOTES);

	$massive['email'] = htmlspecialchars(trim($_POST["email"]), ENT_QUOTES);

	$massive['number']  = htmlspecialchars(trim($_POST["number"]), ENT_QUOTES);


	foreach ( $massive as $key => $value ) {
		if ( $value != "") {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
		}
	}
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$site_mail.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers );

header('Location: http://'.$_SERVER['HTTP_HOST'].'');
exit;