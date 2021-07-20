<?php 
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    header('content-type: application/json; charset=utf-8, ');

    #$rest_json = file_get_contents("php://input");
    #$_POST = json_decode($rest_json, true);


    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'vendor/autoload.php';

    $mail = new PHPMailer(true);

    try{
        #var_dump($_POST);
        $subject = isset( $_POST['subject']) ? $_POST['subject'] : 'Quiero trabajar con ustedes';
        $name = isset( $_POST['name'] ) ? $_POST['name'] : '';
        $email = isset( $_POST['email'] ) ? $_POST['email'] : '';
        $phone = isset( $_POST['phone'] ) ? $_POST['phone'] : '';
        $jobTitle = isset( $_POST['jobTitle'] ) ? $_POST['jobTitle'] : '';
        $message = isset( $_POST['message'] ) ? $_POST['message'] : '';
        $curriculum = isset( $_FILES['curriculum'] ) ? $_FILES['curriculum'] : '';

        $mail->AddAttachment($_FILES['curriculum']['tmp_name'], $_FILES['curriculum']['name']);
        
        $message = isset( $_POST['message']) ? $_POST['message'] : '';
        $emailAgent = isset( $_POST['emailAgent']) && $_POST['emailAgent'] != "null" ? $_POST['emailAgent']: '';
        $nameAgent = isset( $_POST['nameAgent']) && $_POST['nameAgent'] != "null" ? $_POST['nameAgent'] : '-';
                
        $mensajeCompleto = 
        "Recibiste una consulta desde Movahome web<br>
            <br>
            <b><u>Solicitante:</u> </b>".$name."<br/>
            <b><u>Asunto:</u> </b>".$subject."<br/>
            <b><u>Email:</u> </b><a href='mailto:".$email."'>".$email."</a><br/>
            <b><u>Teléfono:</u> </b>".$phone."<br/><br/>
            <b><u>Mensaje:</u> </b>".$message."<br/>
        ";
        
        $mail->isSMTP();                     
        //$mail->Host = 'c2120007.ferozo.com';  
        $mail->Host = 'mail.movahome.cl';  
        $mail->SMTPAuth = true;                
        $mail->Username = 'contacto@movahome.cl';
        $mail->Password = 'Propiedades2021';                
        $mail->SMTPSecure = 'ssl';                            
        $mail->Port = 465;          
        
        $mail->SetFrom( $email , $name );
        $mail->addAddress( "contacto@movahome.cl", 'Mensaje desde la web');   
        $mail->isHTML(true);                                 
        $mail->Subject = $subject;
        $body = "$mensajeCompleto";
        $mail->MsgHTML( $body );
        $mail->CharSet = 'UTF-8';
        $sendEmail = $mail->Send();

        if($sendEmail){
            echo("success");
        } else{
            echo("error enviando el mensaje");
        }

        if($emailAgent != ''){
            $mail->SetFrom( $email , 'Un cliente quiere contaiar contigo' );
            $mail->addAddress( $emailAgent, 'Mensaje desde la web');   
            $mail->isHTML(true);                                 
            $mail->Subject = $subject;
            $body = "$mensajeCompleto";
            $mail->MsgHTML( $body );
            $mail->CharSet = 'UTF-8';
            $sendEmail = $mail->Send();
        }

    }catch (Exception $e){
        var_dump($e);
    }
?>