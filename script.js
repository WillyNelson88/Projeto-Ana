// ---------Responsive-navbar-active-animation-----------
function test(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  $(document).ready(function(){
    setTimeout(function(){ test(); });
  });

  $(window).on('resize', function(){
    setTimeout(function(){ test(); }, 500);
  });

  function navbarToggler(){
    $(".navbar-collapse").slideToggle(300);
    setTimeout(function(){ test(); });
  };

  // --------------add active class-on another-page move----------
  jQuery(document).ready(function($){
    // Get current path and find target link
    var path = window.location.pathname.split("/").pop();
  
    // Account for home page with empty path
    if ( path == '' ) {
      path = 'index.html';
    }
  
    var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
    // Add active class to target link
    target.parent().addClass('active');
  });

  function ativar(){
    
    let el = document.getElementById('ativo');
    el.classList.remove('active');

  }
  
  //Validar formulário
  function mensagem(){

    var filtro = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var nome = document.getElementById("exampleInputText").value;
    var email = document.getElementById("exampleInputEmail1").value;
    var msg = document.getElementById("exampleInputText3").value;

    if(!filtro.test(exampleInputEmail1.value)){
      alert("email invalido");
    }else if((nome == "") || (email == "") || (msg == "")){
      alert("Todos os campos devem ser preenchidos!");
    }else{
      alert("Obrigada " + nome + "! Sua mensagem foi enviada com sucesso.");
      document.getElementById("exampleInputText").value = '';
      document.getElementById("exampleInputEmail1").value = '';
      document.getElementById("exampleInputText3").value = '';
    }    
  }

  //Atualiza a página
  function msg(){
    var url = window.location.href;
   alert("Servidor local: " + url);
  }

  // Add active class on another page linked
  // ==========================================
  // $(window).on('load',function () {
  //     var current = location.pathname;
  //     console.log(current);
  //     $('#navbarSupportedContent ul li a').each(function(){
  //         var $this = $(this);
  //         // if the current path is like this link, make it active
  //         if($this.attr('href').indexOf(current) !== -1){
  //             $this.parent().addClass('active');
  //             $this.parents('.menu-submenu').addClass('show-dropdown');
  //             $this.parents('.menu-submenu').parent().addClass('active');
  //         }else{
  //             $this.parent().removeClass('active');
  //         }
  //     })
  // });
