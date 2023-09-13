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
  
  var index = 0;

  $('.principal-img img').attr('src', images[index]);
  $('.principal-card-text p').html(texts[index]);

  setInterval(function() {
    index = (index + 1) % images.length;

    $('.principal-img img').attr('src', images[index]);
    $('.principal-card-text p').html(texts[index]);
    
    $(window).resize(function() {
      if ($(window).width() <= 830) {
        $("#dot1").animate({left: '50px'}, 500);
        $("#dot3").animate({left: '0px'}, 500);
      }
      else {
        $("#dot1").animate({left: '0px'}, 500);
        $("#dot3").animate({left: '102px'}, 500);
      }
    });
    
    setTimeout(function() {
      $("#dot1").attr("id", "dotTemp");
      $("#dot3").attr("id", "dot1");
      $("#dotTemp").attr("id", "dot3");
    }, 500);
  }, 10000);
});

$(document).ready(function() {
  var cards = [
    {image: '../assets/background/arcos.png', status: 'Lançamento', name: 'Arcos', location: 'Cabo Branco', city: 'João Pessoa/PB'},
    {image: '../assets/background/reservacard.png', status: 'Lançamento', name: 'Reserva da Mata', location: 'Altiplano Cabo Branco', city: 'João Pessoa/PB'},
    {image: '../assets/background/arua.png', status: 'Em Obras', name: 'Áurea', location: 'Cabo Branco', city: 'João Pessoa/PB'},
  ];

  function createCard(card) {
    return `
        <div class="card">
            <div class="container">
                <div class="card-img">
                    <img src="${card.image}" alt="Imagem de Arco" />
                    <button class="button-lancamento">${card.status}</button>
                </div>
                <div class="card-info">
                    <span class="card-info-text">${card.name}</span>
                    <span class="card-info-text-2">${card.location}</span>
                    <span class="card-info-text-3">${card.city}</span>
                </div>
            </div>
          


        </div>
    `;
  }

  //  <button class="button"> 
  // <img src="../assets/arrow.svg" alt="">Conheça
  // </button>

  $.each(cards, function(index, card) {
    $('.container-card-info').append(createCard(card));
  });
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
