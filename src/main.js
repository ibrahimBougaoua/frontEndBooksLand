  window.$(document).ready(function(){
    window.$(".fixed-top").addClass("nav-bg-color");
    window.$(".disable-search-form").css({"display":"none"});
    window.$(window).scroll(function() { // check if scroll event happened
        window.$(".fixed-top").addClass("navbar-dark");
      if (window.$(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
        window.$(".disable-search-form").css({"display":"block"});
        window.$(".fixed-top").removeClass("navbar-dark");// if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        window.$(".fixed-top").removeClass("nav-bg-color");// if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        window.$(".fixed-top").addClass("navbar-light");// if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        window.$(".fixed-top").addClass("nav-fixed-top");// if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
      } else {
        window.$(".disable-search-form").css({"display":"none"});
        window.$(".fixed-top").removeClass("nav-fixed-top");// if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        window.$(".fixed-top").removeClass("navbar-light");// if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        window.$(".fixed-top").addClass("navbar-dark");// if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        window.$(".fixed-top").addClass("nav-bg-color");// if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
      }
    });
      function scroll_to_top(div) {
        window.$(div).click(function() {
            window.$('html,body').animate({scrollTop: 0}, 'slow');
          });
          window.$(window).scroll(function(){
              if(window.$(window).scrollTop()<500){
                window.$(div).fadeOut();
              } else{
                window.$(div).fadeIn();
              }
          });
      }
      scroll_to_top(".scrollTop");
  });