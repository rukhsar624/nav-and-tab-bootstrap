$(document).ready(function(){
	$('button[data-bs-toggle="tab"]').on('show.bs.tab', function(e) {
		localStorage.setItem('activeTab', $(e.target).attr('data-bs-target'));
	});
	var activeTab = localStorage.getItem('activeTab');
	if(activeTab){
		$('#nav-tab button[data-bs-target="' + activeTab + '"]').tab('show');
	}
	else{
		$('#nav-tab button[data-bs-target="'+ activeTab +'"]').tab('hide')
	}
});

//

