
        // navbar color change
        $(document).ready(function() {
        if($(this).scrollTop() > 0) { 
        $('.navbar').addClass('solid');
        } else {
        $('.navbar').removeClass('solid');
        }
        // Transition effect for navbar 
        $(window).scroll(function() {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if($(this).scrollTop() > 0) { 
        $('.navbar').addClass('solid');
        } else {
        $('.navbar').removeClass('solid');
        }
        });
        });
    
        // aboutaccordation

        $(document).ready(function() {
        $(".set > a").on("click", function() {
        if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this)
        .siblings(".content")
        .slideUp(200);
        $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
        } else {
        $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
        $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
        $(".set > a").removeClass("active");
        $(this).addClass("active");
        $(".content").slideUp(200);
        $(this)
        .siblings(".content")
        .slideDown(200);
        }
        });
        });


        // ===== Scroll to Top ==== 
        $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
        });
        $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
        }, 100);
        });
  