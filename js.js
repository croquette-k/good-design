$(function(){
    
    /* nav */
    $(".openbtn").click(function () {
        $(this).toggleClass('active');
        $("#g-nav").toggleClass('panelactive');
    });

    $("#g-nav a").click(function () {
        $(".openbtn").removeClass('active');
        $("#g-nav").removeClass('panelactive');
    });


    // swiper
    const swiper = new Swiper(".swiper", {});

    new Swiper('.swiper', {
        speed: 2000,
        autoplay: {
          delay: 2000
        },
        loop: true,
        allowTouchMove: false,
        parallax: true
      });

    new Swiper('.living', {
      speed: 1000,
      autoplay: {
        delay: 2000
      },
      loop: true,
      allowTouchMove: true,
      parallax: true
    });

    new Swiper('.store', {
      speed: 1000,
      autoplay: {
        delay: 2000
      },
      loop: true,
      allowTouchMove: true,
      parallax: true
    });

    // gsap
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll(".fdin_up").forEach((item) => {
      gsap.from(
        item,
        {
          y: 10,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: 'center 75%',
          },
        },
      );
    });
    document.querySelectorAll(".fdin_right").forEach((item) => {
      gsap.from(
        item,
        {
          x: 60,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: 'center center',
          },
        },
      );
    });
    document.querySelectorAll(".fdin_left").forEach((item) => {
      gsap.from(
        item,
        {
          x: -60,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: 'top 75%',
          },
        },
      );
    });
});