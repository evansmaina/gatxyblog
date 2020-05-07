//jQuery
 $(window).on('load',function(){
        $('.loadery').addClass('complete');
     $('.pre-loader').addClass('complete');
    })


//adding the pictures in the navigation bar
      var $cursor = $(".cursor"),
        $overlay = $(".project-overlay");

      function moveCircle(e) {
        TweenLite.to($cursor, 0.5, {
          css: {
            left: e.pageX,
            top: e.pageY
          },
          delay: 0.03
        });
      }

      $(".nav-link-1").hover(function() {
        $(".cursor").css({ "background-image": "url(img/af07.gif)" });
      });
      $(".nav-link-2").hover(function() {
        $(".cursor").css({ "background-image": "url(img/chopard.gif)" });
      });
      $(".nav-link-3").hover(function() {
        $(".cursor").css({ "background-image": "url(img/dirk-980.gif)" });
      });
      $(".nav-link-4").hover(function() {
        $(".cursor").css({ "background-image": "url(img/Lincoln_Cinemagraph_615.gif)" });
      });

      var flag = false;
      $($overlay).mousemove(function() {
        flag = true;
        TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
        $($overlay).on("mousemove", moveCircle);
      });

      $($overlay).mouseout(function() {
        flag = false;
        TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
      });

//adding the pictures in the navigation bar



//animating the navigation bar

var t1= new TimelineMax({paused:true});

t1.to(".one",0.8,{
    y:6,
    rotation:45,
    ease:Expo.easeInOut
})
.to(".two",0.8,{
    y:-6,
    rotation:-45,
    ease:Expo.easeInOut,
    delay:-0.8 
})
.to(".menuy",2,{
    top:"0%",
    ease:Expo.easeInOut,
    delay:-2
})
.staggerFrom(".menuy a",2,
{x:-200,
opacity:0,
 ease:Expo.easeOut},0.3)
.reverse();

$(document).on("click",".toggle-btn",function(){
    t1.reversed(!t1.reversed());
})

$(document).on("click",".menuy a",function(){
    t1.reversed(!t1.reversed());
})

//animating the navigation bar

//animating the about me page

TweenMax.from(".logo",1.6,{
    delay:6.4,
    opacity:0,
    y:30,
    ease:Expo.easeInOut
});

TweenMax.from(".toggle-btn",1.6,{
    delay:6.5,
    opacity:0,
    y:30,
    ease:Expo.easeInOut
});
TweenMax.from(".heading",1.6,{
    delay:6.6,
    opacity:0,
    y:30,
    ease:Expo.easeInOut
});
TweenMax.from(".desc",1.6,{
    delay:6.7,
    opacity:0,
    y:30,
    ease:Expo.easeInOut
});
TweenMax.from(".learn-btn",1.6,{
    delay:6.8,
    opacity:0,
    y:30,
    ease:Expo.easeInOut
});
TweenMax.staggerFrom(".media ul li",2,{
    delay:7,
    opacity:0,
    y:40,
    ease:Expo.easeInOut
},0.2);
TweenMax.from(".body-content",1.6,{
    delay:6.8,
    display:"none",
    x:1000,
    ease:Expo.easeInOut
});


//animating the about me page

//animating the services area

    
    var tmfirstScroll = new TimelineMax();
    tmfirstScroll
      .from(".oyaa",6,{
        y:"-100%",
        
    })
     .from(".service-card-2",6,{
        autoAlpha:0,
        scale:3,
        
    },"-=6")
    .from(".service-card-1",6,{
        autoAlpha:0,
        x:"100%",
        
    },"-=6")
   .from(".service-card-3",6,{
        autoAlpha:0,
        x:"-100%",
        
    },"-=6")
   .from(".header-services",6,{
        autoAlpha:0,
        x:"-100%",
        
    },"-=6")  

    
    

 var servicecontroller= new ScrollMagic.Controller();
 
 var scene1= new ScrollMagic.Scene({
    triggerElement:".skill" ,
     trigerHook:0,
     duration:"50%",
 })
 
 .setTween(tmfirstScroll)
 .setPin(".skill") 
 .addTo(servicecontroller)

 
//animating the services area
 
 
// animating the blog posts page
 
 
var slider = new Swiper(".swiper-container", {
  slidesPerView: 'auto',
  spaceBetween: 150,
  centeredSlides: true,
  mousewheel: true
})

slider.on('slideChange', function () {
  TweenMax.to('.slide-text span', .2, {
    y: '-100px',
  })
  TweenMax.to('.slide-number span', .2, {
    x: '-100px',
  })
  TweenMax.to('.swiper-slide-active', .5, {
    scale: .85
  })
})

slider.on('slideChangeTransitionEnd', function () {

  TweenMax.to('.slide-text span', .2, {
    y: 0,
    delay: .5
  })
  TweenMax.to('.slide-text span', 0, {
    y: '100px',
  })

  TweenMax.to('.slide-number span', .2, {
    x: 0,
    delay: .7
  })
  TweenMax.to('.slide-number span', 0, {
    x: '100px',
  })

  TweenMax.to('.swiper-slide-active', .5, {
    scale: 1,
    ease: Power4.easeOut,
  })

  TweenMax.to('.swiper-slide-active .slide-text', 0, {
    autoAlpha: 1
  })
  TweenMax.to('.swiper-slide-active .slide-number', 0, {
    autoAlpha: 1
  })

  TweenMax.to('.swiper-slide-next .slide-text', 0, {
    autoAlpha: 0
  })
  TweenMax.to('.swiper-slide-prev .slide-text', 0, {
    autoAlpha: 0
  })

  TweenMax.to('.swiper-slide-next .slide-number', 0, {
    autoAlpha: 0
  })
  TweenMax.to('.swiper-slide-prev .slide-number', 0, {
    autoAlpha: 0
  })
})

TweenMax.to('.swiper-slide-next .slide-text', 0, {
  autoAlpha: 0
})
TweenMax.to('.swiper-slide-prev .slide-text', 0, {
  autoAlpha: 0
})

TweenMax.to('.swiper-slide-next .slide-number', 0, {
  autoAlpha: 0
})
TweenMax.to('.swiper-slide-prev .slide-number', 0, {
  autoAlpha: 0
})

TweenMax.to('.swiper-slide', 0, {
  scale: .85,
})

TweenMax.to('.swiper-slide-active', 0, {
  scale: 1,
})

 
 
// animating the blog posts page





