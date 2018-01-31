$(function() {		
	$('.burger-icon, .burger-menu').click(function(){
					$('.burger-menu').toggleClass('burger-menu_opened');
				});
				$(document).click(function(event) {
					if ($(event.target).closest(".burger-icon").length ) return;
					$('.burger-menu').removeClass('burger-menu_opened');
					event.stopPropagation();
				});
				
	$('.setting').click(function(){
		$('.content__aside').toggleClass('content__aside_opened');
	});
	
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
