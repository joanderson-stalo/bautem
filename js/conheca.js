$(document).ready(function() {
    
    $('.nav-conheca button').click(function() {

        $('.nav-conheca button').removeClass('active');
        $(this).addClass('active');
        

        $('.conheca-banner, .conheca-banner-quem-faz, .conheca-banner-conceito, .conheca-banner-historia').css('display', 'none');
        

        $('.conteudo-conheca-floresta, .quem-faz, .conceito, .nossa-historia').css('display', 'none');

    
        switch ($(this).text()) {
            case 'Floresta Branca':
                $('.conheca-banner').css('display', 'flex');
                $('.conteudo-conheca-floresta').css('display', 'flex');
                break;
            case 'Quem Faz':
                $('.conheca-banner-quem-faz').css('display', 'flex');
                $('.quem-faz').css('display', 'flex');
                break;
            case 'Conceito':
                $('.conheca-banner-conceito').css('display', 'flex');
                $('.conceito').css('display', 'flex');
                break;
            case 'História':
                $('.conheca-banner-historia').css('display', 'flex');
                $('.nossa-historia').css('display', 'flex');
                break;
        }
    });
});


$(document).ready(function() {
    var menuButton = $('.menu-hamburguer');
    var mobileMenu = $('.mobile-menu');
    var closeButton = $('.close-icon');
    
    menuButton.click(function() {
      console.log('Botão de menu clicado');
      mobileMenu.show(); 
    });
  
    closeButton.click(function() {
      console.log('Botão de fechamento clicado');
      mobileMenu.hide(); 
    });
  });
  
  