$('a[href^="#"]').on('click', function(event) {
    let $target = $(this.getAttribute('href'));
    if($target.length){
        $('html,body').stop().animate({
            scrollTop:$target.offset().top
        },1000, 'easeInOutBack')
    }
})