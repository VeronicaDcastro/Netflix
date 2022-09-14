$(document).ready(function(e) {
		
    if($('modal') !== undefined){
        
        $('#modal').css('display','none');
    }

    $('#modalMRV').click(function(){
            $('#modal').fadeIn(1000);
    });
    
    $('.fechar, #modal').click(function(event){
        if(event.target !== this){
            return;
        }
        $('#modal').fadeOut(500);
        $.cookie('modal', '1', { expires: 7 });
        
    });
});