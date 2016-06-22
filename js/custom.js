$(document).ready(function(){
  setTimeout(function(){
    initialize_owl($('.latest'));
    initialize_owl($('.today'));

  alert("lun war gaya jy");
    $('a[href="#coming_soon"]').on('shown.bs.tab', function () {
        initialize_owl($('.coming_soon'));
    }).on('hide.bs.tab', function () {
            //destroy_owl($('.coming_soon'));
        });

    $('a[href="#top_rated"]').on('shown.bs.tab', function () {
        initialize_owl($('.top_rated'));
    }).on('hide.bs.tab', function () {
            //destroy_owl($('.top_rated'));
        });
    $('a[href="#today"]').on('shown.bs.tab', function () {
        initialize_owl($('.today'));
    }).on('hide.bs.tab', function () {
            //destroy_owl($('.top_rated'));
        });
    $('a[href="#this_week"]').on('shown.bs.tab', function () {
        initialize_owl($('.this_week'));
    }).on('hide.bs.tab', function () {
            //destroy_owl($('.top_rated'));
        });
    $('a[href="#this_month"]').on('shown.bs.tab', function () {
        initialize_owl($('.this_month'));
    }).on('hide.bs.tab', function () {
            //destroy_owl($('.top_rated'));
        });
    $('a[href="#future_events"]').on('shown.bs.tab', function () {
        initialize_owl($('.future_events'));
    }).on('hide.bs.tab', function () {
            //destroy_owl($('.top_rated'));
        });
    function initialize_owl(el) {
        el.owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            autoWidth:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });
        setTimeout(function(){
        $('.latest, .coming_soon, .top_rated, .today, .this_week, .this_month, .future_events').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
        $('.latest, .coming_soon, .top_rated, .today, .this_week, .this_month, .future_events').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
        }, 10);
    }
    function destroy_owl(el) {
        el.data('owlCarousel').destroy();
    }
  },4000);
});
