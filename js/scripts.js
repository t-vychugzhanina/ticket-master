$(function() {		
	$('.burger-icon').click(function(){
					$('.burger-menu').toggleClass('burger-menu_opened');
					$('.content__aside').removeClass('content__aside_opened');
				});
							
	$('.setting').click(function(){
		$('.content__aside').toggleClass('content__aside_opened');
		$('.burger-menu').removeClass('burger-menu_opened');
	});
	
	anchorHeight = (function() {
		var headerHeight = $('.header').outerHeight();
        $('a').on('click', function(e) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerHeight
        }, 900, 'easeInOutExpo');
        event.preventDefault();
		history.pushState({}, "", this.href);})	
	});
	
	window.onload = anchorHeight();
	window.onresize = anchorHeight();
	
	$(document).click(function(event) {
    if ($(event.target).closest(".burger-menu").length) return;
	if ($(event.target).closest(".burger-icon").length) return;
	if ($(event.target).closest(".content__aside").length) return;
	if ($(event.target).closest(".setting").length) return;
	$('.burger-menu').removeClass('burger-menu_opened');
	$('.content__aside').removeClass('content__aside_opened');
    event.stopPropagation();
});
	
	webshims.setOptions('waitReady', false);
	webshims.setOptions('forms-ext', {types: 'date'});
	webshims.polyfill('forms forms-ext');
	
	Date.prototype.addDays = (function(days) {
                var dat = new Date(this.valueOf());
                dat.setDate(dat.getDate() + days);
                return dat;
            });
	
	document.getElementById('datePicker').valueAsDate = new Date();
	var inWeek = new Date();
	inWeek = inWeek.addDays(1);
	document.getElementById('datePicker2').valueAsDate = inWeek;	
});
