$(document).ready(function(){
    console.log("el documento cargó completamente")

    $('#enviarCorreo').click(function(){
        alert("El correo fue enviado correctamente..."  )
    })

    $('#ingredientes').dblclick(function(){
        $(this).addClass('rojo');
    })

    $('#preparacion').dblclick(function(){
        $(this).addClass('rojo');
    })

    $('.card-title').click(function(){
        $('p').toggle();
    })
})