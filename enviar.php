<?php

if (isset($_POST['email']) && !empty($_POST['email'])) {
    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $mensagem = addslashes($_POST['mensagem']);

    $to = "contato@academiacompcederj.com.br";
    $subjet = "Contato - Academia CompCEDERJ";
    
    $body = "Nome: $nome \r\n
            E-mail: $email \r\n
            Mensagem: $mensagem";

    $header = "From:suporte@academiacompcederj.com.br"."\r\n"
    ."Reply-To:".$email
    ."\r\n"."X=Mailer:PHP/".phpversion();

    if(mail($to, $subjet, $body, $header)){

        echo ("Sua mensagem foi enviada com sucesso, responderemos o mais breve possível.");

    }else{

        echo ("Erro ao enviar a mensagem!");
        
    }
}

?>