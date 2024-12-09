
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container1');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#FF6600';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
  
    // var animation2 = document.getElementById("preloader");
    // window.addEventListener("load", function name() {
    //     animation2.style.display ="none";
    // })
    window.addEventListener('load',
      function(){
        setTimeout(function () {
            document.getElementById("preloader").style.display = "none";
         }, 3000);
      }
    );
    $(function () {  
      
      
      
      
      
        $(document).ready(function () {
          $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $(this).toggleClass('active');
          });
        });
      
        
        $('#blogCarousel').carousel({
          interval: 5000
        });
      
      
      });
      
      
      
      function openNav() {
        document.getElementById("mySidepanel").style.width = "250px";
      }
      
      function closeNav() {
        document.getElementById("mySidepanel").style.width = "0";
      }
         
      $(document).ready(function () {
        
        $(".collapse.show").each(function () {
          $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
        });
      
        
        $(".collapse").on('show.bs.collapse', function () {
          $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function () {
          $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        });
      });
      
      
      
      