"use strict";

var services = {
  "Residential Buildings": {
    name: "Residential Buildings",
    images: [
      "assets/img/service/residential/1.jpg",
      "assets/img/service/residential/2.jpg",
      "assets/img/service/residential/3.jpg",
      "assets/img/service/residential/4.jpg",
      "assets/img/service/residential/5.jpg",
      "assets/img/service/residential/6.jpg",
      "assets/img/service/residential/7.jpg",
      "assets/img/service/residential/8.jpg",
      "assets/img/service/residential/9.jpg",
      "assets/img/service/residential/10.jpg",
    ],
    desc:
      "A building, is a structure with a roof and walls standing more or less permanently in one place, such as a house or factory.",
  },
  Bungalow: {
    name: "Bungalow",
    images: ["assets/img/service/bungalow/1.jpg"],
    desc:
      "A bungalow is a small house or cottage that is built into a sloping roof, and may be surrounded by wide verandas.",
  },
  "Structural Repairs": {
    name: "Structural Repairs",
    images: [
      "assets/img/service/structureRepair/1.jpg",
      "assets/img/service/structureRepair/2.jpg",
      "assets/img/service/structureRepair/3.jpg",
      "assets/img/service/structureRepair/4.jpg",
      "assets/img/service/structureRepair/5.jpg",
      "assets/img/service/structureRepair/6.jpg",
      "assets/img/service/structureRepair/7.jpg",
      "assets/img/service/structureRepair/8.jpg",
      "assets/img/service/structureRepair/9.jpg",
      "assets/img/service/structureRepair/10.jpg",
    ],
    desc:
      "Repairs and replacements to the Building's foundations, load-bearing walls, columns and joints and replacement of roofing and roof deck",
  },
  Demolition: {
    name: "Demolition",
    images: [
      "assets/img/service/demolition/1.jpg",
      "assets/img/service/demolition/2.jpg",
      "assets/img/service/demolition/3.jpg",
      "assets/img/service/demolition/4.jpg",
      "assets/img/service/demolition/5.jpg",
      "assets/img/service/demolition/6.jpg",
      "assets/img/service/demolition/7.jpg",
      "assets/img/service/demolition/8.jpg",
      "assets/img/service/demolition/9.jpg",
      "assets/img/service/demolition/10.jpg",
    ],
    desc:
      "The Demolition of a building is dismantling a structure after its life span or serviceability by pre-planning and controlled demolition methods.",
  },
  "Special Repairs": {
    name: "Special Repairs",
    images: [
      "assets/img/service/specialRepair/11.jpg",
      "assets/img/service/specialRepair/2.jpg",
      "assets/img/service/specialRepair/3.jpg",
      "assets/img/service/specialRepair/4.jpg",
      "assets/img/service/specialRepair/5.jpg",
      "assets/img/service/specialRepair/6.jpg",
      "assets/img/service/specialRepair/7.jpg",
      "assets/img/service/specialRepair/8.jpg",
      "assets/img/service/specialRepair/9.jpg",
      "assets/img/service/specialRepair/10.jpg",
    ],
    desc:
      "Special repairs of building are undertaken to replace the existing parts of buildings and services which get deteriorated on ageing of buildings. ",
  },
  Fabrication: {
    name: "Fabrication",
    images: [
      "assets/img/service/fabrication/1.jpg",
      "assets/img/service/fabrication/2.jpg",
      "assets/img/service/fabrication/3.jpg",
      "assets/img/service/fabrication/4.jpg",
      "assets/img/service/fabrication/5.jpg",
      "assets/img/service/fabrication/6.jpg",
      "assets/img/service/fabrication/7.jpg",
      "assets/img/service/fabrication/8.jpg",
      "assets/img/service/fabrication/9.jpg",
      "assets/img/service/fabrication/10.jpg",
    ],
    desc:
      "Fabrication is the process used to manufacture steelwork components that will, when assembled and joined, form a complete frame.",
  },
  "Industrial Shed": {
    name: "Industrial Shed",
    images: [
      "assets/img/service/industrySheds/1.jpg",
      "assets/img/service/industrySheds/2.jpg",
      "assets/img/service/industrySheds/3.jpg",
      "assets/img/service/industrySheds/4.jpg",
      "assets/img/service/industrySheds/5.jpg",
    ],
    desc:
      "As an industrial shed builder, we understand the way people use a shed differs depending on their industry, needs, and storage requirements.",
  },
  Painting: {
    name: "Painting",
    images: [
      "assets/img/service/painting/1.jpg",
      "assets/img/service/painting/2.jpg",
      "assets/img/service/painting/3.jpg",
      "assets/img/service/painting/4.jpg",
      "assets/img/service/painting/5.jpg",
    ],
    desc:
      "Painting protect the surface from the effects of weathering, prevent from decay/corrosion, and obtain healthy living atmosphere.",
  },
  "Tremix flooring": {
    name: "Tremix flooring",
    images: [
      "assets/img/service/tremix/1.jpg",
      "assets/img/service/tremix/2.jpg",
      "assets/img/service/tremix/3.jpg",
      "assets/img/service/tremix/4.jpg",
      "assets/img/service/tremix/5.jpg",
    ],
    desc:
      "Tremix flooring is a special type of flooring mostly being done in the industrial sector. It provides better wearing and tearing properties",
  },
  "Epoxy Flooring": {
    name: "Epoxy Flooring",
    images: [
      "assets/img/service/epoxy/1.jpg",
      "assets/img/service/epoxy/2.jpg",
      "assets/img/service/epoxy/3.jpg",
      "assets/img/service/epoxy/4.jpg",
      "assets/img/service/epoxy/5.jpg",
    ],
    desc:
      "Epoxy flooring is a unique floor material that has steadily grown in popularity. Once a concrete floor has been smoothed and prepped",
  },
  "RCC Road": {
    name: "RCC Road",
    images: [
      "assets/img/service/rcc/1.jpg",
      "assets/img/service/rcc/2.jpg",
      "assets/img/service/rcc/3.jpg",
      "assets/img/service/rcc/4.jpg",
      "assets/img/service/rcc/5.jpg",
    ],
    desc:
      "Roller compacted concrete (RCC) is a tough, durable type of concrete pavement that is well suited for heavy industrial applications",
  },
};

var clients = [
  { name: "Naiknaware Developers" },
  { name: "R.C. Bidve Groups" },
  { name: "ARV Group of Construction" },
  { name: "Akruti Consultant" },
  { name: "R.B. Dande and Associates" },
  { name: "Ashwini Constrictions" },
  { name: "A.M. Gore and Associates" },
  { name: "Relaince" },
];

var projects = {
  "Project 1": {
    name: "Project 1",
    images: ["assets/img/service/residential/1.jpg"],
    projectType: "Residential Buildings",
    desc: "Project description",
    client: "Client 1",
    date: "",
    address: "Address 1",
  },
  "Project 2": {
    name: "Project 2",
    images: [
      "assets/img/service/rcc/2.jpg",
      "assets/img/service/rcc/3.jpg",
      "assets/img/service/rcc/4.jpg",
    ],
    projectType: "RCC Road",
    desc: "Project description",
    client: "Client 2",
    date: "",
    address: "Address 2",
  },
  "Project 3": {
    name: "Project 3",
    images: ["assets/img/service/residential/3.jpg"],
    projectType: "Residential Buildings",
    desc: "Project description",
    client: "Client 3",
    date: "",
    address: "Address 3",
  },
  "Project 4": {
    name: "Project 4",
    images: [
      "assets/img/service/industrySheds/3.jpg",
      "assets/img/service/industrySheds/4.jpg",
      "assets/img/service/industrySheds/5.jpg",
    ],
    projectType: "Industrial Shed",
    desc: "",
    client: "Client 4",
    date: "",
    address: "Address 4",
  },
  "Project 5": {
    name: "Project 5",
    images: [
      "assets/img/service/specialRepair/6.jpg",
      "assets/img/service/specialRepair/7.jpg",
      "assets/img/service/specialRepair/8.jpg",
      "assets/img/service/specialRepair/9.jpg",
      "assets/img/service/specialRepair/10.jpg",
    ],
    projectType: "Special Repairs",
    desc: "Project description",
    client: "Client 5",
    date: "",
    address: "Address 5",
  },
};

function applySwiper(swiperClass) {
  var sclass = swiperClass || ".swiper";
  /**
   * Swiper
   */
  $(sclass).each(function () {
    var self = $(this),
      wrapper = $(".swiper-wrapper", self),
      optData = eval("(" + self.attr("data-options") + ")"),
      optDefault = {
        loop: true,
        paginationClickable: true,
        pagination: self.find(".swiper-pagination-custom"),
        nextButton: self.find(".swiper-button-next-custom"),
        prevButton: self.find(".swiper-button-prev-custom"),
        spaceBetween: 30,
      },
      options = $.extend(optDefault, optData);
    wrapper.children().wrap('<div class="swiper-slide"></div>');
    var swiper = new Swiper(self, options);

    function thumbnails(selector) {
      if (selector.length > 0) {
        var wrapperThumbs = selector.children(".swiper-wrapper"),
          optDataThumbs = eval("(" + selector.attr("data-options") + ")"),
          optDefaultThumbs = {
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 3,
            touchRatio: 0.3,
            slideToClickedSlide: true,
            pagination: selector.find(".swiper-pagination-custom"),
            nextButton: selector.find(".swiper-button-next-custom"),
            prevButton: selector.find(".swiper-button-prev-custom"),
          },
          optionsThumbs = $.extend(optDefaultThumbs, optDataThumbs);
        wrapperThumbs.children().wrap('<div class="swiper-slide"></div>');
        var swiperThumbs = new Swiper(selector, optionsThumbs);
        swiper.params.control = swiperThumbs;
        swiperThumbs.params.control = swiper;
      }
    }
    thumbnails(self.next(".swiper-thumbnails"));
  });
}
(function ($) {
  /**
   * [isMobile description]
   * @type {Object}
   */
  window.isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };
  window.isIE = /(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
  window.windowHeight = window.innerHeight;
  window.windowWidth = window.innerWidth;

  /**
   * Match height
   */
  $('.row-eq-height > [class*="col-"]').matchHeight();
  $(".team__img").matchHeight();

  var myEfficientFn = debounce(function () {
    $('.row-eq-height > [class*="col-"]').matchHeight();
    $(".team__img").matchHeight();
  }, 250);

  window.addEventListener("resize", myEfficientFn);

  /**
   * [debounce description]
   * @param  {[type]} func      [description]
   * @param  {[type]} wait      [description]
   * @param  {[type]} immediate [description]
   * @return {[type]}           [description]
   */
  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  /**
   * Masonry
   */
  $(".grid__inner").masonry({
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
  });

  /**
   * grid css
   */
  function work() {
    $(".grid-css").each(function () {
      var workWrapper = $(this),
        workContainer = $(".grid__inner", workWrapper),
        filters = $(".filter", workWrapper),
        filterCurrent = $(".current a", filters),
        filterLiCurrent = $(".current", filters),
        duration = 0.3;
      workContainer.imagesLoaded(function () {
        workContainer.isotope({
          layoutMode: "masonry",
          itemSelector: ".grid-item",
          transitionDuration: duration + "s",
          masonry: {
            columnWidth: ".grid-sizer",
          },
          // hiddenStyle: {},
          // visibleStyle: {}
        });
      });
      filters.on("click", "a", function (e) {
        e.preventDefault();
        var $el = $(this);
        var selector = $el.attr("data-filter");
        filters.find(".current").removeClass("current");
        $el.parent().addClass("current");
        workContainer.isotope({
          filter: selector,
        });
      });
    });
  }
  work();

  /**
   * Header
   */

  var header_main = $("header"),
    toggle_search = $(".search-btn"),
    close_search = $(".searchbar__close"),
    toggleMenu = $(".header-menu__toggle"),
    headerMenu = $(".header-01__menu");

  toggle_search.on("click", function () {
    header_main.toggleClass("search-active");
  });

  close_search.on("click", function () {
    header_main.removeClass("search-active");
  });

  $(document).on("click", function () {
    $(".page-wrap").removeClass("active");
    $(".raising-menu").removeClass("active");
  });

  $(".searchbar__close").on("click", function (e) {
    e.stopPropagation();
  });

  $(window)
    .on("load resize", function () {
      var hHeader = $("header").height();

      $("#loading").hide();
      $("body").css("overflow", "auto");

      $("#senWhatsApp").on("click", function (e) {
        e.stopPropagation();
        e.preventDefault();
        download("whatsapp");
      });

      $("#sendEmail").on("click", function (e) {
        e.stopPropagation();
        e.preventDefault();
        download();
      });

      if (header_main.hasClass("header-fixheight")) {
        if ($(".md-content").children(".fix-header").length == 0) {
          $(".md-content").prepend(
            '<div class="fix-header" style="height:' + hHeader + 'px"></div>'
          );
        } else {
          $(".fix-header").css("height", hHeader);
        }
      }
    })
    .trigger("resize");

  $(".raising-nav").dropdownMenu({
    menuClass: "raising-menu",
    breakpoint: 1200,
    toggleClass: "active",
    classButtonToggle: "navbar-toggle",
    subMenu: {
      class: "sub-menu",
      parentClass: "menu-item-has-children",
      toggleClass: "active",
    },
  });

  $(".navbar-toggle").on("click", function () {
    $(".page-wrap").toggleClass("active");
    $(".raising-menu").toggleClass("active");
  });

  $(window)
    .on("resize", function () {
      var ww = $(window).width();

      if (ww < 1200) {
        //console.log("khanh");
      } else {
        $(".page-wrap").removeClass("active");
        $(".raising-menu").removeClass("active");
      }
    })
    .trigger("resize");

  var header_height = header_main.height();

  $(".raising-nav").onePageNav({
    currentClass: "current",
    scrollOffset: header_height,
  });
  /**
   * Gallery
   */
  $(".gallery-wrap").each(function () {
    var gallery = $(this);
    if (gallery.length) {
      if (gallery.hasClass("gallery-album") == false) {
        gallery.magnificPopup({
          type: "image",
          delegate: "a",
          closeOnContentClick: true,
          closeBtnInside: false,
          fixedContentPos: true,
          mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
          callbacks: {
            beforeOpen: function () {
              // just a hack that adds mfp-anim class to markup
              this.st.image.markup = this.st.image.markup.replace(
                "mfp-figure",
                "mfp-figure mfp-with-anim"
              );
              this.st.mainClass = this.st.el.attr("data-effect");
            },
          },
          image: {
            verticalFit: true,
          },
        });
      } else {
        gallery.magnificPopup({
          gallery: {
            enabled: true,
            preload: [0, 1],
          },
          delegate: "a",
          type: "image",
          removalDelay: 500, //delay removal by X to allow out-animation
          callbacks: {
            beforeOpen: function () {
              // just a hack that adds mfp-anim class to markup
              this.st.image.markup = this.st.image.markup.replace(
                "mfp-figure",
                "mfp-figure mfp-with-anim"
              );
              this.st.mainClass = this.st.el.attr("data-effect");
            },
            buildControls: function () {
              // re-appends controls inside the main container
              this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
            },
          },
          image: {
            verticalFit: true,
          },
          closeOnContentClick: false,
          showCloseBtn: false,
          midClick: false, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        });
      }
    }
  });

  $(".modal-close").on("click", function (e) {
    e.stopPropagation();
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    $(".modal-body").empty();
    $("body").css("overflow", "auto");
  });

  /**
   * Counter animation
   */
  $(".counter").counterUp({
    delay: 60,
    time: 2500,
  });

  /**
   * services
   */
  Object.values(services).map(function (srvc) {
    var serviceItem = `<div class="col-sm-6 col-md-6 col-lg-4">
	   <div class="services">
       <div class="services__img" style="background-image: url(${
         srvc.images && srvc.images.length > 0
           ? srvc.images[0]
           : "assets/img/service/residential/1.jpg"
       }  );">
             
       </div>
		   <h2 class="services__title"><a href="#">${srvc.name}</a></h2>
		   <div class="services__desc">${srvc.desc}</div>

       <button class="text-highlight modal-opener" id="service_${srvc.name.replace(
         " ",
         "_"
       )}">More</button>
	   </div>
	 
	 </div>`;
    $("#service_item_list").append(serviceItem);
  });

  Object.values(projects).map(function (proj) {
    var projItem = `
      <div class="col-lg-4 col-md-6">
      <div class="single-project mb-30">
        <div class="project-img" style="background-image: url(${
          proj.images && proj.images.length > 0
            ? proj.images[0]
            : "assets/img/service/gallery/1.jpg"
        })">
          
        </div>
        <div class="project-cap">
          <a class="plus-btn modal-opener" id="project_${proj.name.replace(
            " ",
            "_"
          )}">
            <i class="fa fa-plus"></i>
          </a>
          <h4><a>${proj.name}</a></h4>
          <h4><a>${proj.projectType}</a></h4>
        </div>
      </div>
    </div>
      
      `;
    $("#project-item-list").append(projItem);
  });

  applySwiper();
})(jQuery);

window.onload = function () {
  $(".modal-opener").on("click", function (e) {
    e.stopPropagation();
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    $("body").css("overflow", "hidden");
    var splitId = this.id.split("_");
    var type = splitId[0];
    var id = splitId.splice(1).join(" ");
    var srvc = type === "service" ? services[id] : projects[id];
    var html = `
    <div>
      <h2 class="text-center text-highlight"><a>${srvc.name}</a></h2>
      <div >
        <div class="col-md-12">
            <div class="swiper-${this.id} swiper-container"
            data-options='{"speed": 5000,"slidesPerView":1,"spaceBetween":30}'>
            <div class="swiper-wrapper">
              ${
                srvc.images
                  ? srvc.images
                      .map(function (i) {
                        return `
                        <div class="myheight"	style="background-image: url(${i});">
                        </div>
                        `;
                      })
                      .join(" ")
                  : '<img src="assets/img/service/1.jpg" alt="" />'
              }
            </div>
            <div class="swiper-button-custom">
                <div class="swiper-button-prev-custom"><i class="fa fa-angle-left"></i></div>
                <div class="swiper-button-next-custom"><i class="fa fa-angle-right"></i></div>
            </div>
            
          </div>
        </div>
        <div class="col-md-12 mt-20">
        ${
          type === "project" &&
          `
          <div> <span class="widget-contact__title">Client: </span> ${
            srvc.client
          }</div>
          <br />
          <div> <span class="widget-contact__title">Date to complete: </span>${new Date()}</div>
          <br />
          <div> <span class="widget-contact__title">Address: </span></div>
          <div> ${srvc.address}</div>
          <br />
          `
        }
          <div class="">${
            srvc.desc ||
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis a rerum ratione aliquam placeat labore nemo itaque voluptas laudantium consequuntur ut quam, aperiam harum ipsam?"
          } </div>
        </div>
      </div>
    </div
    `;

    $(".modal-body").append(html);
    applySwiper(`.swiper-${this.id}`);
  });
};

function download(type) {
  var href =
    "mailto:khot.harish1207@gmail.com?subject=Inquiry From Wetsite&Body=";
  if (type === "whatsapp")
    href = "https://api.whatsapp.com/send?phone=917709170025&text=";

  var name = document.querySelector(
    "#contactUs > div.container > div > div > div > div:nth-child(1) > form > div:nth-child(2) > input"
  ).value;
  var email = document.querySelector(
    "#contactUs > div.container > div > div > div > div:nth-child(1) > form > div:nth-child(3) > input"
  ).value;
  var phone = document.querySelector(
    "#contactUs > div.container > div > div > div > div:nth-child(1) > form > div:nth-child(4) > input"
  ).value;
  var msg = document.querySelector(
    "#contactUs > div.container > div > div > div > div:nth-child(1) > form > div:nth-child(5) > textarea"
  ).value;

  if (!email && !phone) {
    $("#error-in-form").text("Enter either phone or email");
    return;
  }

  var emailBody =
    "Hi,\n\n" + msg + "\n\nThanks\n" + name + "\n" + email + "\n" + phone;

  var element = document.createElement("a");
  element.setAttribute("href", href + encodeURIComponent(emailBody));
  element.setAttribute("target", "_blank");

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
  $("#error-in-form").text("");
}
