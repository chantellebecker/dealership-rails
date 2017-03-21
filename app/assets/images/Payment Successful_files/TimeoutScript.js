
$(document).ready(function(){

	$('#pageBodyTimeoutContent').hide();
	setTimeout(timeout_trigger, 900000); // 15 Minutes

});

function timeout_trigger()
{
	$('#pageBodyContent').hide();
	$('#pageBodyTimeoutContent').show();
}