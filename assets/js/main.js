$(document).ready(function () {
    /*start the loading page */
    window.addEventListener("load", function () {
        const loader = document.querySelector(".loader");
        loader.className += " hidden";
    });
    let theme = localStorage.getItem('theme');
    theme === 'light' ? enableDarkMode() : disableDarkMode();

    function enableDarkMode() {
        localStorage.setItem('theme', 'light');
        document.body.classList.add('light-mode');
        $('.lightTheme').addClass('active');
        $('.theme').addClass('lightMode');
    }

    function disableDarkMode() {
        localStorage.setItem('theme', 'light');
        document.body.classList.remove('light-mode');
        $('.darkTheme').addClass('active');
        $('.theme').removeClass('lightMode');
    }

    $('.darkTheme').on('click', () => {
        enableDarkMode();
        console.log('Dark Btn  ', theme);
        // $('.themeBtn').removeClass('active');
        // $(this).addClass('active');
    });

    $('.lightTheme').on('click', () => {
        disableDarkMode();
        console.log('light Btn', theme);
        // $('.themeBtn').removeClass('active');
        // $(this).addClass('active');
    });
    //scroll to top make fade for button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }
    });
    //scroll to top button
    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
     //Wow intit
     wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();
    //start active navbar
     //start active navbar
     $('.navbar-toggler').click(function(){
        $('.navbar-toggler').toggleClass('active');
        $('.nav-conent').toggleClass('acitve-nav');
        $('body').toggleClass('overflowNone')
    });

});