var $page = $('html, body');
$('a[href="#"]').click(function() {
    $page.animate({scrollTop: 0}, 1000);
    return false;
});


