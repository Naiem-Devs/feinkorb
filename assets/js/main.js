(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
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



  if (document.querySelector('select')) {
   
    $('select').niceSelect(); 

  }


  // Dasboard mobile menu
  function DasboardMobileMenu() {
    let MenuBlk = document.querySelector('.dasboard-sidebar-menu')
    let allBtn = document.querySelectorAll('.dmBtn');
    allBtn.forEach(btn => {
      btn.addEventListener('click', (e) => {
        MenuBlk.classList.toggle('active')
      })
    });
  }
  DasboardMobileMenu()

 

  // accordion
  function Accordion() {
    
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

  }
  Accordion()



})(jQuery);
