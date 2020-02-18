AOS.init();
new WOW().init();

let welcome = document.getElementById("welcome-link"),
  menu = document.getElementById("menu-link"),
  video = document.getElementById("video-link"),
  contact = document.getElementById("contact-link"),
  welcomeMobile = document.getElementById("welcome-link__mobile"),
  menuMobile = document.getElementById("menu-link__mobile"),
  videoMobile = document.getElementById("video-link__mobile"),
  contactMobile = document.getElementById("contact-link__mobile"),
  menuView = document.getElementById("menu-view"),
  videoView = document.getElementById("video-view"),
  contactView = document.getElementById("contact-view"),
  navToggle = document.querySelector(".nav__toggle"),
  mobileNav = document.querySelector(".mobile-nav__menu");

(function smoothScrolling() {
  let obj;
  let arr;
  let obj1 = {
    welcome: 0,
    menu: menuView,
    video: videoView,
    contact: contactView
  };
  let obj2 = {
    welcomeMobile: 0,
    menuMobile: menuView,
    contactMobile: videoView,
    contactMobile: contactView
  };
  let arr1 = [welcome, menu, video, contact];
  let arr2 = [welcomeMobile, menuMobile, contactMobile, contactMobile];

  let currentWindowWidth = document.documentElement.clientWidth;

  // Enable scrolling to in mobile
  currentWindowWidth < 900
    ? ((obj = obj2), (arr = arr2))
    : ((obj = obj1), (arr = arr1));

  arr.forEach(each => {
    each.addEventListener("click", e => {
      e.preventDefault();
      console.log(each);
      let tag = each.getAttribute("data");
      let y = each === welcome ? 0 : obj[tag].offsetTop - 80;

      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
    });
  });
})();

navToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});
