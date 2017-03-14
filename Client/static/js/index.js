$(function ()
{
	$('form').submit(function (event) {
		var input = $("#search_input").val()
		
		if (input.length > 0)
		{
			
			
			$("#search").removeClass("open");
			$("#search").addClass("close");
			
			//
			// REQUETE SUR L'API
			//
			var result = {
				datas: {
					//SIREN: 123456789,
					SIRET: "1234567980123",
					NIC: 123
				},
				missing: [
					'emails', 'address'
				]
			};
			
			$('#table_infos_siren').html(result.datas.SIREN != undefined ? result.datas.SIREN : "<img class='btn-warning' style='padding: 10px;'>");
			
			
			var socket = io();
			socket.emit('', input);
		}
		
		event.preventDefault();
        return false;
		
        /*var input = $("#search_input").val();
        if (input.length > 0) {
            var object = {
                "value": input
            };
            $.ajax({
                type: "POST",
                data: JSON.stringify(object),
                url: "172.16.1.198/api/POST",
                contentType: "application/json"
            })
            $('#search').removeClass('open');
        }
        event.preventDefault();
        return false;*/
    });

	$('a[href="#search"]').on('click', function (event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
	
    $('#search, #search button.close').on('click keyup', function (event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
});

$(document).ready(function(){
    $('#table_members').DataTable();
});

function search()
{
	var val = $('#search_input').value;
	alert(JSON.stringify($('#search_input')));
}




































