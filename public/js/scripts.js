$(function(){
    
    $('.year').mask('0000');
    $('.date').mask('00/00/0000');
    $('.cpf').mask('000.000.000-00', {reverse: true});
    $('.km').mask("##.#00", {reverse: true, maxlength: false});
    $('.placa').mask("AAA-9999", {reverse: true, maxlength: false});
})