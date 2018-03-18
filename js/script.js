
/* Carousel settings */
$('.carousel').carousel({
    interval: 3000,
    pause: false
});


/* Page JQ settings */
$(document).ready(function () {

    function navMenuToggle (clicked, hide, show) {
        $(clicked).click(function () {
            $(hide).hide();
            $(show).show();
        });
    }

    navMenuToggle(".nav-item:nth-child(1)", '.second-article, .first-action-dropdown, .second-action-dropdown, .third-action-dropdown', '.index');
    navMenuToggle(".nav-item:nth-child(2)", '.index, .first-action-dropdown, .second-action-dropdown, .third-action-dropdown', '.second-article');
    navMenuToggle(".dropdown-item:nth-of-type(1)", '.index, .second-article, .second-action-dropdown, .third-action-dropdown', '.first-action-dropdown');
    navMenuToggle(".dropdown-item:nth-of-type(2)", '.index, .second-article, .first-action-dropdown, .third-action-dropdown', '.second-action-dropdown');
    navMenuToggle(".dropdown-item:nth-of-type(3)", '.index, .second-article, .first-action-dropdown, .second-action-dropdown', '.third-action-dropdown');

});