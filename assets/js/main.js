(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 
  

// Cart Item menu 
  const cardBtn = document.querySelectorAll('.menu-area ul li a')
  const cardBtnSelect = cardBtn[cardBtn.length - 1]
  const mcardBtn = document.querySelector('.mbl_last ul li a')
  // const mcardBtnSelect = mcardBtn[mcardBtn.length -]


  $(cardBtnSelect).click( function (){ 
    $('.card_list').addClass('show');   
  }); 
  $(mcardBtn).click( function (){ 
    $('.card_list').addClass('show');   
  }); 
  $('.cls_card').click( function (){ 
    $('.card_list').removeClass('show');   
  }); 

  

  // owlCarousel
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 6
      }
    }
  });

  // Nice Select
  if (document.querySelector('select')) {
    $('select').niceSelect(); 
  }
 

  // accordion
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }


  // select Circle Created
  const rdoBtn = document.querySelectorAll('.card_opt a')
  rdoBtn.forEach(rdoBtns => {
    rdoBtns.addEventListener('click', () => {
      removeRedCircle()
      rdoBtns.classList.add('active')
    })
  })

  function removeRedCircle() {
    rdoBtn.forEach(rdoBtns => {
      rdoBtns.classList.remove('active')
    })
  }
 
  const ardoBtn = document.querySelectorAll('.accordion-button')

  ardoBtn.forEach(ardoBtns => {
    ardoBtns.addEventListener('click', () => {
      aremoveRedCircle()
      ardoBtns.classList.add('active')
    })
  })

  function aremoveRedCircle() {
    ardoBtn.forEach(ardoBtns => {
      ardoBtns.classList.remove('active')
    })
  }



})(jQuery);
