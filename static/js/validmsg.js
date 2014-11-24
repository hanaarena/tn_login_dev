;var f1 = $('.f1'), f2 = $('.f2'), sub = $('.sub');

/* clear alert message */
f1.bind('click', function() {
	$('.form li:first-child').html('');
});

f2.bind('focus', function() {
	$('.form li:first-child').html('');
});

/* f2 on foucs */
f2.focus(function() {
	if(f1.val() == '') {
		f1.css('background-color', '#fee').focus();
		rxdai.doFailed('f1 must have value');
		setTimeout(function() {
			f1.css("background-color","");
		}, 1300);
	}
});

/* submit */
sub.click(function() {
	$('.form li:first-child').html('');
	if(f1.val() == '') {
		f2.focus();
	} else if(f2.val() == '') {
		f2.css('background-color', '#fee').focus();
		rxdai.doFailed('f2 must hava value');
		setTimeout(function() {
			f2.css("background-color","");
		}, 1000);
	} else {
		return ;
	}
});