$(document).ready(function() {
	var tab = $('.tab');
	tab.click(function() {
	  var dip = $(this).attr('data-target');
	  $('.tab-cont').hide();
	  $('.' + dip).show();

	  $('#int').css('background', 'none').css('color', '#000');
	  $('#abo').css('background', 'none').css('color', '#000');
	  $('#fea').css('background', 'none').css('color', '#000');
	  $('#' + dip).css('background', '#1abc9c').css('color', '#fff');
	});
});
