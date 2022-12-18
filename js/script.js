$(function () {

    // $(this).remove("footer + div");
    // $(this).remove("footer + script");

    /* NAVBAR ANNIMATION */
    $(".navbar a, footer .scrollup a").on("click", function (event) {
        event.preventDefault();
        var hash = this.hash;

        $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
    
    });

    /* PAERICLES-JS ANIMATION | ABOUT-SECTION */
    particlesJS.load('particles-js', 'js/particles.json');

    /* TYPED-JS ANIMATION | ABOUT-SECTION */
    var typed = new Typed('.typed', {
        strings: ['Web developper.', 'Android App developper.','E-commerce.', 'Student.'],
        typeSpeed: 60,
        backSpeed: 30,
        showCursor: false,
        loop: true,
        startDelay: 500
    });

    /* FORM REQUERMENT | AJAX */
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        $('.comments').empty();
        var postdata = $('#contact-form').serialize();

        $.ajax({
            type: 'POST',
            url: 'php/contact.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {

                if(json.isSuccess)
                {
                    $('#contact-form').append("<p class='thank-you'>Votre message a bien été envoyé. Merci de m'avoir contacté :)</p>");
                    $('#contact-form')[0].reset();
                }
                else
                {
                    $('#firstname + .comments').html(json.firstnameError);
                    $('#name + .comments').html(json.nameError);
                    $('#email + .comments').html(json.emailError);
                    $('#phone + .comments').html(json.phoneError);
                    $('#message + .comments').html(json.messageError);
                }
            }
        });
    });

})
