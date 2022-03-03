     
var timeout = null;
window.addEventListener('scroll', function() {
    if(timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(function() {
        var scrollTop = this.scrollY;
        console.log(scrollTop);
    }.bind(this), 500);
});

if ($(window).width() >= 960) {
    $(window).scroll(function(){
            if( $(window).scrollTop() > $('#first').offset().top - 1000 ){
                $('.first-img').addClass('animate__animated');
                $('.first-img').toggle(true);
            }
            else  {

            }
    });
    $(window).scroll(function(){
            if( $(window).scrollTop() > $('#second').offset().top - 1000 ){
                $('.first-img-02').addClass('animate__animated');
                $('.first-img-02').toggle(true);
            }
            else{
            }
    });
    $(window).scroll(function(){
            if( $(window).scrollTop() > $('#third').offset().top - 800 ){
                $('.first-img-03').addClass('animate__animated');
                $('.first-img-03').toggle(true);
            }
            else{
            }
    });
    $(window).scroll(function(){
            if( $(window).scrollTop() > $('#fourth').offset().top - 800 ){
                $('.first-img-04').addClass('animate__animated');
                $('.first-img-04').toggle(true);
            }
            else{
            }
    });
    $(window).scroll(function(){
            if( $(window).scrollTop() > $('#fifth').offset().top - 500 ){
                $('.first-img-05').addClass('animate__animated');
                $('.first-img-05').toggle(true);
            }
            else{
            }
    });
    $(window).scroll(function(){
            if( $(window).scrollTop() > $('#sixth').offset().top - 1000 ){
                $('.first-img-06').addClass('animate__animated');
                $('.first-img-06').toggle(true);
            }
            else{
            }
    });
   
    $(window).scroll(function(){
            if( $(window).scrollTop() > $('#seventh').offset().top - 900 ){
                $('.first-img-08').addClass('animate__animated');
                $('.first-img-08').toggle(true);
            }
            else{
            }
    });

    $(window).scroll(function(){
        
            if( $(window).scrollTop() > $('#eighth').offset().top - 900 ){
                $('.first-img-09').addClass('animate__animated');
                $('.first-img-09').toggle(true);
            }
            else{
            }
        
    });
    $(window).scroll(function(){
        
            if( $(window).scrollTop() > $('#nine').offset().top - 800 ){
                $('.first-img-10').addClass('animate__animated');
                $('.first-img-10').toggle(true);
            }
            else{
            }
        
    });
    
};


if ($(window).width() <= 960) {
    $(window).scroll(function(){
            if( $(window).scrollTop() > $('#first').offset().top - 1000 ){
                $('.first-img').addClass('animate__animated');
                $('.first-img').toggle(true);
            }
            else  {

            }
    });
    $(window).scroll(function(){
            if( $(window).scrollTop() > $('#second').offset().top - 1000 ){
                $('.first-img-02').addClass('animate__animated');
                $('.first-img-02').toggle(true);
            }
            else{
            }
    });
    $(window).scroll(function(){
            if( $(window).scrollTop() > $('#third').offset().top - 500 ){
                $('.first-img-03').addClass('animate__animated');
                $('.first-img-03').toggle(true);
            }
            else{
            }
    });
    $(window).scroll(function(){
            if( $(window).scrollTop() > $('#fourth').offset().top - 1100 ){
                $('.first-img-04').addClass('animate__animated');
                $('.first-img-04').toggle(true);
            }
            else{
            }
    });
    $(window).scroll(function(){
            if( $(window).scrollTop() > $('#fifth').offset().top - 800 ){
                $('.first-img-05').addClass('animate__animated');
                $('.first-img-05').toggle(true);
            }
            else{
            }
    });
    $(window).scroll(function(){
            if( $(window).scrollTop() > $('#sixth').offset().top - 600 ){
                $('.first-img-06').addClass('animate__animated');
                $('.first-img-06').toggle(true);
                $('.line_btn10').addClass('anm_01');
            }
            else{
            }
    });
   
    $(window).scroll(function(){
            if( $(window).scrollTop() > $('#seventh').offset().top - 900 ){
                $('.first-img-08').addClass('animate__animated');
                $('.first-img-08').toggle(true);
            }
            else{
            }
    });

    $(window).scroll(function(){
        
            if( $(window).scrollTop() > $('#eighth').offset().top - 800 ){
                $('.first-img-09').addClass('animate__animated');
                $('.first-img-09').toggle(true);
            }
            else{
            }
        
    });
    $(window).scroll(function(){
        
            if( $(window).scrollTop() > $('#nine').offset().top - 800 ){
                $('.first-img-10').addClass('animate__animated');
                $('.first-img-10').toggle(true);
            }
            else{
            }
        
    });
    
};


   
