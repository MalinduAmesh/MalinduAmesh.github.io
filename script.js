
$(".rotate").textrotator({
    animation: "fade", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
    separator: "&", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
    speed: 1500 // How many milliseconds until the next word show.
  });
  
          $(document).ready(function(){
              $(".sidemenu-toggler").click(function(){
                  $(".sidemenu").addClass("active");
              });
              $(".close").click(function(){
                  $(".sidemenu").removeClass("active"); 
              });
  
  
              $(window).scroll(function(){
                  var sc = $(window).scrollTop();
                  if(sc > 150){
                      $(".header").addClass("sticky");
  
                  }else{
  
                  }
              });
  
  
              $(window).on("load",function(){
                  var $container = $('.filterContainer');
                  $container.isotope({
                      filter:'*',
                      animationOptions:{
                          queue:true
                      }
                  });
  
  
                  $('.partfolio-nav li').click(function(){
                       $('.partfolio-nav .current').removeClass('current');
                       var selector = $(this).attr('data-filter');
                       $container.isotope({
                           filter: selector,
                           animationOptions: {
                              queue: true
                           }
  
                       });
                       return false
                  });
              });
  
              $('#gallery-filter').mixItUp();
  
  
  
          });
  
          const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  