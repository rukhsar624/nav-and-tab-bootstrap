$(document).ready(function(){
	$('button[data-bs-toggle="tab"]').on('show.bs.tab', function(e) {
		localStorage.setItem('activeTab', $(e.target).attr('data-bs-target'));
	});
	var activeTab = localStorage.getItem('activeTab');
	if(activeTab){
		$('#nav-tab button[data-bs-target="' + activeTab + '"]').tab('show');
	}
	else{
		$('#nav-tab button[data-bs-target="'+ activeTab +'"]').tab('hide')
	}
});

//
// ===============Great OutDoor======================= //
//========================Navbar Js OPen====================//
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 90) {
      $("#navbar-fixed-top").css("background", "none");
      $("#navbar-fixed-top").css("box-shadow", "rgb(0 0 0 / 46%) 8px 8px 33px");
      $(".destop-nav-bar .header_links").css("color", "#fff");
      $(".destop-nav-bar .logo h1").css("color", "#ffffff");
      $(".destop-nav-bar .header_links.active").css(
        "border-bottom",
        "2px solid #fff"
      );
      $(".hamburger div").css(
        "background", "#000"
      );
      $(".hamburger.active div").css(
        "background", "#8b0129"
      );
      $(".destop-nav-bar .example" ).css("border" ,"2px solid #000");
      $(".destop-nav-bar .example" ).css("border-radius" ,"10px");


    } else {
      $("#navbar-fixed-top").css("background", "none");
      $("#navbar-fixed-top").css("box-shadow", "none");
      $(".destop-nav-bar .header_links").css("color", "#fff");
      $(".destop-nav-bar .logo h1").css("color", "#1a1a1a");
      $(".destop-nav-bar .header_links.active").css(
        "border-bottom",
        "2px solid #fff"
      );
      $(".hamburger div").css(
        "background", "red"
      );
      $(".hamburger.active div").css(
        "background", "#00000"
      );
    }
  });
  // 
  // MOBILE SCREEN SIDE NAV
  var sidebarBox = document.querySelector("#box");
  var sidebarBtn = document.querySelector("#btn");
  var pageWrapper = document.querySelector("#main-content");

  sidebarBtn.addEventListener("click", function (event) {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
      sidebarBox.classList.remove("active");
      $("#main-content #btn div").css(
        "background", "#ffffff"
      );
    } else {
      this.classList.add("active");
      sidebarBox.classList.add("active");
      $("#main-content #btn div").css(
        "background", "#000"
      );
    }
  });

  pageWrapper.addEventListener("click", function (event) {
    if (sidebarBox.classList.contains("active")) {
      sidebarBtn.classList.remove("active");
      sidebarBox.classList.remove("active");
    }
  });
  window.addEventListener("keydown", function (event) {
    if (sidebarBox.classList.contains("active") && event.keyCode === 27) {
      sidebarBtn.classList.remove("active");
      sidebarBox.classList.remove("active");
    }
  });
//========================Navbar Js Closed==================//

// =====================shooting star ==================== //
/* ==========================counter up to number js open========================== */
$(".counter1").each(function () {
	var $this = $(this),
	  countTo = $this.attr("data-countto");
	countDuration = parseInt($this.attr("data-duration"));
	$({ counter: $this.text() }).animate(
	  {
		counter: countTo
	  },
	  {
		duration: countDuration,
		easing: "linear",
		step: function () {
		  $this.text(Math.floor(this.counter));
		},
		complete: function () {
		  $this.text(this.counter);
		}
	  }
	);
  });
  
/* ==========================counter up to number js closed========================== */