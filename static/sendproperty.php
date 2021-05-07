<?php 
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    header('content-type: application/json; charset=utf-8, ');

    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);


    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'vendor/autoload.php';

    $mail = new PHPMailer(true);

    try{
        var_dump($_POST);
        $subject = isset( $_POST['subject']) ? $_POST['subject'] : 'contacto';
        $name = isset( $_POST['name'] ) ? $_POST['name'] : '';
        $email = isset( $_POST['email'] ) ? $_POST['email'] : '';
        $phone = isset( $_POST['phone'] ) ? $_POST['phone'] : '';
        $operation = isset( $_POST['operation'] ) ? $_POST['operation'] : '';
        $propertyType = isset( $_POST['propertyType'] ) ? $_POST['propertyType'] : '';
        $observations = isset( $_POST['observations'] ) ? $_POST['observations'] : '';
        $commune = isset( $_POST['commune'] ) ? $_POST['commune'] : '';
        $images = isset( $_POST['images'] ) ? $_POST['images'] : [];
        
        $message = isset( $_POST['message']) ? $_POST['message'] : '';
        $emailAgent = isset( $_POST['emailAgent']) && $_POST['emailAgent'] != "null" ? $_POST['emailAgent']: '';
        $nameAgent = isset( $_POST['nameAgent']) && $_POST['nameAgent'] != "null" ? $_POST['nameAgent'] : '-';
                
        $mensajeCompleto = 
        "Recibiste una consulta desde Movahome web<br>
        <br>
        <b><u>Agente:</u> </b>".$nameAgent."<br/>
        <b><u>Asunto:</u> </b>Recibiste una consulta desde movahome.cl<br/>
        <b><u>Cliente:</u> </b>".$name."<br/>
        <b><u>Email:</u> </b><a href='mailto:".$email."'>".$email."</a><br/>
        <b><u>Celular:</u> </b>".$phone."<br/><br/>
        <b><u>Mensaje:</u> </b>".$message."<br/><br/>

        <a href='http://propiedadesmyc.cl/'>www.propiedadesmyc.cl</a>
        ";
        
        $mail->isSMTP();                     
        //$mail->Host = 'c2120007.ferozo.com';  
        $mail->Host = 'smtp.gmail.com';  
        $mail->SMTPAuth = true;                
        $mail->Username = 'clasihomemailer@gmail.com';
        $mail->Password = '18417052=Felix!';                
        $mail->SMTPSecure = 'ssl';                            
        $mail->Port = 465;          
        
        $mail->SetFrom( $email , 'Un cliente quiere contactar con propiedadesmyc.cl' );
        $mail->addAddress( "felixtineo05@gmail.com", 'Mensaje desde la web');   
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
            $mail->SetFrom( $email , 'Un cliente quiere contactar contigo' );
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