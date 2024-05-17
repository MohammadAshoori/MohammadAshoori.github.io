/***************************************************
==================== JS INDEX ======================
****************************************************
01. ScrollToTop Js
02. Smooth Scroll
03. WOW Js
04. NiceSelect
05. Number Input
06. Mean-menu Navbar
07. OwlCarousel for home page 
08. Sticky Menu 
09. CounterUp
10. Isotope Js
11. Fancy Box
12. Search Box
13. Info bar
14. Feather Icon Js
15. Testimonial slider
16. Counter Js home 02
17. OwlCarousel for Testimonial
18. OwlCarousel for Client
19. Progress-skill
20. Preloader Js
****************************************************/

(function ($) {
  "use strict";

  ////////////////////////////////////////////////////
  // 01. ScrollToTop Js
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 1000) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
  });
  $(".scrollToTop").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      250
    );
    return false;
  });

  ////////////////////////////////////////////////////
  // 02. Smooth Scroll
  $("a.smooth-scroll").on("click", function (event) {
    event.preventDefault();
    var section_smooth = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(section_smooth).offset().top,
      },
      1250,
      "easeInOutExpo"
    );
  });

  ////////////////////////////////////////////////////
  // 03. WOW Js
  new WOW().init();

  ////////////////////////////////////////////////////
  // 04. NiceSelect
  $("select").niceSelect();

  ////////////////////////////////////////////////////
  // 05. Number Input
  jQuery(
    '<div class="quantity-nav"><div class="quantity-button quantity-up"><i class="fas fa-plus"></i></div><div class="quantity-button quantity-down"><i class="fas fa-minus"></i></div></div>'
  ).insertAfter(".quantity input");
  jQuery(".quantity").each(function () {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");
    btnUp.on("click", function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
    btnDown.on("click", function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  //////////////////////////////////////////////////////
  // 06. Mean-menu Navbar
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "991",
  });

  ////////////////////////////////////////////////////
  // 07. OwlCarousel for home page
  function homeSlider1() {
    var slider = $(".slider1__active");
    slider.owlCarousel({
      loop: true,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      autoplay: true,
      nav: false,
      dots: true,
      navText: [
        '<i class="ti-angle-double-left"></i>',
        '<i class="ti-angle-double-right"></i>',
      ],
      smartSpeed: 450,
      margin: 0,
      stagePadding: 0,
      autoplayTimeout: 8000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
    slider.on("translate.owl.carousel", function () {
      var layer = $("[data-animation]");
      layer.each(function () {
        var slider_animation = $(this).data("animation");
        $(this)
          .removeClass("animated " + slider_animation)
          .css("opacity", "0");
      });
    });
    $("[data-delay]").each(function () {
      var animation_delay = $(this).data("delay");
      $(this).css("animation-delay", animation_delay);
    });
    $("[data-duration]").each(function () {
      var animation_dutation = $(this).data("duration");
      $(this).css("animation-duration", animation_dutation);
    });
    slider.on("translated.owl.carousel", function () {
      var layer = slider.find(".owl-item.active").find("[data-animation]");
      layer.each(function () {
        var slider_animation = $(this).data("animation");
        $(this)
          .addClass("animated " + slider_animation)
          .css("opacity", "1");
      });
    });
  }
  homeSlider1();

  function homeSlider2() {
    var slider = $(".slider2__active");
    slider.owlCarousel({
      loop: true,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      autoplay: true,
      nav: true,
      dots: false,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      smartSpeed: 450,
      margin: 0,
      stagePadding: 0,
      autoplayTimeout: 8000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
    slider.on("translate.owl.carousel", function () {
      var layer = $("[data-animation]");
      layer.each(function () {
        var slider_animation = $(this).data("animation");
        $(this)
          .removeClass("animated " + slider_animation)
          .css("opacity", "0");
      });
    });
    $("[data-delay]").each(function () {
      var animation_delay = $(this).data("delay");
      $(this).css("animation-delay", animation_delay);
    });
    $("[data-duration]").each(function () {
      var animation_dutation = $(this).data("duration");
      $(this).css("animation-duration", animation_dutation);
    });
    slider.on("translated.owl.carousel", function () {
      var layer = slider.find(".owl-item.active").find("[data-animation]");
      layer.each(function () {
        var slider_animation = $(this).data("animation");
        $(this)
          .addClass("animated " + slider_animation)
          .css("opacity", "1");
      });
    });
  }
  homeSlider2();

  ////////////////////////////////////////////////////
  // 08. Sticky Menu
  if (screen.width >= 992) {
    $(document).on("scroll", function (e) {
      var scrollPos = $(this).scrollTop();
      if (scrollPos > 400) {
        $(".header__menu-wrapper").addClass("menu_sticky");
        $(".header__menu-wrapper").addClass("animated");
        $(".header__menu-wrapper").addClass("slideInDown");
      } else {
        $(".header__menu-wrapper").removeClass("menu_sticky");
        $(".header__menu-wrapper").removeClass("animated");
        $(".header__menu-wrapper").removeClass("slideInDown");
      }
    });
  }

  ////////////////////////////////////////////////////
  // 09. CounterUp
  $(".counter").counterUp({
    delay: 10,
    time: 1500,
  });

  ////////////////////////////////////////////////////
  // 10. Isotope Js
  $(".your_class_name li").on("click", function () {
    $(".your_class_name li").removeClass("active");
    $(this).addClass("active");
    var selector = $(this).attr("data-filter");
    $("#isotope-container").isotope({
      filter: selector,
    });
  });
  $(window).on("load", function () {
    $("#isotope-container").isotope();
  });

  //////////////////////////////////////////////////
  // 11. Fancy Box
  $('[data-fancybox="gallery_1"]').fancybox({
    loop: true,
    buttons: [
      "zoom",
      "share",
      "slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close",
    ],
    animationEffect: "zoom-in-out",
    transitionEffect: "circular",
  });

  ////////////////////////////////////////////////////
  // 12. Search Box
  if ($(".search_box_container").length) {
    var searchToggleBtn = $(".search_btn");
    var searchContent = $(".search_form");
    var body = $("body");

    searchToggleBtn.on("click", function (e) {
      searchContent.toggleClass("search_form_toggle");
      e.stopPropagation();
    });

    body
      .on("click", function () {
        searchContent.removeClass("search_form_toggle");
      })
      .find(searchContent)
      .on("click", function (e) {
        e.stopPropagation();
      });
  }

  ////////////////////////////////////////////////////
  // 13. Info bar
  $(".extra_info_btn").on("click", function () {
    $(".extra_info").addClass("extra_info_open");
  });

  $(".extra_info_close").on("click", function () {
    $(".extra_info").removeClass("extra_info_open");
  });

  ////////////////////////////////////////////////////
  // 14. Feather Icon Js
  feather.replace();

  ////////////////////////////////////////////////////
  // 15. Testimonial slider
  $(".testimonial1__Carousel").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 300,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    margin: 40,
    dots: true,
    nav: false,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1199: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  ////////////////////////////////////////////////////
  // 16. Counter Js home 02
  $("#counter2").waypoint(
    function () {
      // Counter Js
      $(".circlechart").circlechart();
    },
    {
      offset: "bottom-in-view",
    }
  );

  ////////////////////////////////////////////////////
  // 17. OwlCarousel for Testimonial
  $(".testimonial2__slider").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    margin: 30,
    autoplayTimeout: 5000,
    nav: true,
    navText: [
      '<i class="ti-angle-left"></i>',
      '<i class="ti-angle-right"></i>',
    ],
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      991: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  ////////////////////////////////////////////////////
  // 18. OwlCarousel for Client
  $(".client1__active").owlCarousel({
    loop: true,
    autoplay: false,
    smartSpeed: 500,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 60,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 2,
      },
      480: {
        items: 3,
      },
      700: {
        items: 4,
      },
      1000: {
        items: 5,
        margin: 20,
      },
    },
  });

  ////////////////////////////////////////////////////
  // 19. Progress-skill
  $("#progress-elements").waypoint(
    function () {
      $(".progress-bar").each(function () {
        $(this).animate(
          {
            width: $(this).attr("aria-valuenow") + "%",
          },
          2000
        );
      });
      this.destroy();
    },
    {
      offset: "bottom-in-view",
    }
  );

  //////////////////////////////////////////////////////
  // Window load function
  $(window).on("load", function () {
    //////////////////////////////////////////////////////
    // 20. Preloader Js
    $(".preloader").delay(100).fadeOut("slow");
  });

  // window.onload = function() {
  //     document.body.style.zoom = "15%"
  // };

  const azarbayjan_gharbiText = document.getElementById("azarbayjan-gharbi");
  const systan_blochestanText = document.getElementById("systan-blochestan");
  const bousherText = document.getElementById("bousher");
  const kermanText = document.getElementById("kerman");
  const farsText = document.getElementById("fars");
  const semnanText = document.getElementById("semnan");
  const esfehanText = document.getElementById("esfehan");
  const kohkeloyeText = document.getElementById("kohkeloye");
  const ilamText = document.getElementById("ilam");
  const tehranText = document.getElementById("tehran");
  const kermanshaText = document.getElementById("kermansha");
  const ghazvinText = document.getElementById("ghazvin");
  const zanganText = document.getElementById("zangan");
  const azarbayjan_sharghiText = document.getElementById("azarbayjan-sharghi");
  const loc_tehranText = document.getElementById("loc-tehran");
  const loc_bousherText = document.getElementById("loc-bousher");

  const popup = document.getElementById("popup");

  loc_tehranText.addEventListener("mouseover", function () {
    popup.style.display = "block";
    popup.innerText = "شرکت هیوا آتی شعبه تهران";
  });

  loc_bousherText.addEventListener("mouseover", function () {
    popup.style.display = "block";
    popup.innerText = "شرکت هیوا آتی شعبه بوشهر";
  });

  azarbayjan_gharbiText.addEventListener("mouseover", function () {
    popup.style.display = "block";
    popup.innerText =
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است";
  });

  systan_blochestanText.addEventListener("mouseover", function () {
    popup.style.display = "block";
    popup.innerText =
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است";
  });
  bousherText.addEventListener("mouseover", function () {
    popup.style.display = "block";
    popup.innerText =
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است";
  });
  kermanText.addEventListener("mouseover", function () {
    popup.style.display = "block";
    popup.innerText =
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است";
  });

  farsText.addEventListener("mouseover", function () {
    popup.style.display = "block";
    popup.innerText =
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است";
  });
  semnanText.addEventListener("mouseover", function () {
    popup.style.display = "block";
    popup.innerText =
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است";
  });
  esfehanText.addEventListener("mouseover", function () {
    popup.style.display = "block";
    popup.innerText =
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است";
  });

  kohkeloyeText.addEventListener("mouseover", function () {
    popup.style.display = "block";
    popup.innerText =
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است";
  });
  ilamText.addEventListener("mouseover", function () {
    popup.style.display = "block";
    popup.innerText =
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است";
  });
  tehranText.addEventListener("mouseover", function () {
    popup.style.display = "block";
    popup.innerText =
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است";
  });

  kermanshaText.addEventListener("mouseover", function () {
    popup.style.display = "block";
    popup.innerText =
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است";
  });
  ghazvinText.addEventListener("mouseover", function () {
    popup.style.display = "block";
    popup.innerText =
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است";
  });
  zanganText.addEventListener("mouseover", function () {
    popup.style.display = "block";
    popup.innerText =
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است";
  });

  azarbayjan_sharghiText.addEventListener("mouseover", function () {
    popup.style.display = "block";
    popup.innerText =
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است";
  });

  loc_tehranText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });

  loc_tehranText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });

  loc_bousherText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });

  loc_bousherText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });
  azarbayjan_gharbiText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });

  azarbayjan_gharbiText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });

  systan_blochestanText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });

  systan_blochestanText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });

  bousherText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });

  bousherText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });
  kermanText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });

  kermanText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });
  farsText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });

  farsText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });
  semnanText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });

  semnanText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });
  esfehanText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });

  esfehanText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });
  kohkeloyeText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });

  kohkeloyeText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });
  ilamText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });

  ilamText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });
  tehranText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });

  tehranText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });
  kermanshaText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });

  kermanshaText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });
  ghazvinText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });

  ghazvinText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });
  zanganText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });

  zanganText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });
  azarbayjan_sharghiText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });

  azarbayjan_sharghiText.addEventListener("mouseout", function () {
    popup.style.display = "none";
  });

  const xValues = ["Italy", "France", "Spain", "USA", "Argentina", "mohammad"];
  const yValues = [55, 49, 44, 24, 25, 60, 100];
  const barColors = ["red", "green", "blue", "orange", "brown", "#000"];

  new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "World Wine Production 2018",
      },
    },
  });
})(jQuery);
