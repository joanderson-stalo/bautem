$(document).ready(function() {
  var currentYear = new Date().getFullYear();
  $("#currentYear").text(currentYear);

  $("#myForm").submit(function(event) {
    event.preventDefault();

    var nome = $("input[name='nome']").val();
    var email = $("input[name='email']").val();
    var telefone = $("input[name='telefone']").val();

    if (nome === "" || email === "" || telefone === "") {
      alert("Por favor, preencha todos os campos.");
    } else {
      alert("Formulário enviado com sucesso!");
    }
  });
});

$(document).ready(function() {
  var images = ['../assets/background/reserva.png', '../assets/background/reserva2.png'];
  var texts = [
    'Onde a natureza faz morada e você <span>descobre a plenitude.</span>',
    'Através do movimento, construímos narrativas que dão <span>sentido à vida.</span>',
  ];
  var bgColors = ['#888686', '#7F735E']; 

  var index = 0;

  function switchDots() {
      if ($("#dot1").css("left") === "0px") {
        $("#dot1").animate({left: '100px'}, 500);
        $("#dot3").animate({left: '0px'}, 500);
      } else {
        $("#dot1").animate({left: '0px'}, 500);
        $("#dot3").animate({left: '50px'}, 500);
      }

      setTimeout(function() {
        $("#dot1").attr("id", "dotTemp");
        $("#dot3").attr("id", "dot1");
        $("#dotTemp").attr("id", "dot3");
      }, 500);
  }

  function updateContent() {
    $('.principal-img img').addClass('fade-up').one('animationend', function(){
        $(this).removeClass('fade-up');
    });

    $('.principal-img img').attr('src', images[index]);
    $('.principal-card-text p').html(texts[index]);
    $('.principal-card').css('background', bgColors[index]); 
}


  updateContent();

  setInterval(function() {
      index = (index + 1) % images.length;
      updateContent();
      switchDots();
  }, 10000);

  $(window).resize(switchDots);
});



$(document).ready(function(){
    
  $(".button, .card-img").hover(
      function() {
          var container = $(this).closest('.card').find('.container');
          container.find('.card-img img').addClass('hover-effect-img');
          container.find('.card-info-text-2, .card-info-text-3').addClass('hover-effect-text');
      },
      function() {
          var container = $(this).closest('.card').find('.container');
          container.find('.card-img img').removeClass('hover-effect-img');
          container.find('.card-info-text-2, .card-info-text-3').removeClass('hover-effect-text');
      }
  );
})



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

