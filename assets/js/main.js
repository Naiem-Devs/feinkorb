(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 
 
  

// Cart Item menu 
  const cardBtn       = document.querySelectorAll('.menu-area ul li a')
  const cardBtnSelect = cardBtn[cardBtn.length - 1]
  const mcardBtn      = cardBtn[0]


  $(cardBtnSelect).click( function (){ 
    $('.card_list').addClass('show');   
  });  
  $('.cls_card').click( function (){ 
    $('.card_list').removeClass('show');   
  }); 

  // All card button button click to hide show the quantity
  function CardQuantityHideShow() {
      let allCardBtn = document.querySelectorAll('.mf_food a.btn_card');
      let rcmd_blkBtn = document.querySelectorAll('.rcmd_blk a');
      if (allCardBtn) { 
        allCardBtn.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const target                = e.target;
                const targetParentElement   = target.parentElement;
                if (targetParentElement.classList.contains('mf_food')) {
                    targetParentElement.classList.toggle('show_quantity')
                }
            })
        })
      }
      if (rcmd_blkBtn) { 
        rcmd_blkBtn.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const target                = e.target;
                const targetParentElement   = target.parentElement.parentElement;
                if (targetParentElement.classList.contains('rcmd_blk')) {
                    targetParentElement.classList.toggle('show_quantity')
                }
            })
        })
      }
  }
  CardQuantityHideShow()

  // Mister or Mises selecting
  function mrs_or_ms() {
    let mst_ms = document.querySelectorAll(".Deliver_form a")
    if (mst_ms) {
      mst_ms.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault()
          mst_ms.forEach(all_a => {
            all_a.classList.remove('active')
          })
          e.target.classList.add('active')

        })
      })
      
    }
  }
  mrs_or_ms()

   
  // owlCarousel
  // $(".brand-active").owlCarousel({
  //   loop: true,
  //   margin: 30,
  //   items: 6,
  //   navText: [
  //     '<i class="fa fa-angle-left"></i>',
  //     '<i class="fa fa-angle-right"></i>'
  //   ],
  //   nav: false,
  //   dots: false,
  //   responsive: {
  //     0: {
  //       items: 2
  //     },
  //     767: {
  //       items: 3
  //     },
  //     992: {
  //       items: 6
  //     }
  //   }
  // });
 
  // Nice Select
  if (document.querySelector('select')) {
    $('select').niceSelect(); 
  }


  // Dasboard mobile menu
  function DasboardMobileMenu() {
    let MenuBlk = document.querySelector('.dasboard-sidebar-menu')
    let allBtn = document.querySelectorAll('.dmBtn');
    if (allBtn) {
      allBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
          MenuBlk.classList.toggle('active')
        })
      }); 
    }
  }
  DasboardMobileMenu()

 

  // accordion
  function Accordion() {
    
    var acc = document.getElementsByClassName("accordion");
    if (acc) {
      
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
 
  }
  Accordion()


 
  const rdoBtn = document.querySelectorAll('.card_opt a')  
  if (rdoBtn) {
    
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
 
  }


  const ardoBtn = document.querySelectorAll('.accordion-button')
  if (ardoBtn) {
      
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

  }

 
})(jQuery);
