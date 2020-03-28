$(function(){
    $(".status").hide();
    $("#formulario-contato").ajaxForm({     
        target: '.status',
        success: function(retorno){
            $(".status").show();
            $("#formulario-contato").resetForm();
            setTimeout(() => {
                $(".status").hide();
            }, 8000);
        }
    });
});