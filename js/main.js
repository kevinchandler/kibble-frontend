//get url parameters
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

var communicate = function( ) {
	$.ajax({
		  url: "http://localhost:3000/so/get_new_address",
		  context: document.body
		}).done(function(data) {
			$('.generatedAddress').text('Send all coinz to: ' + data.data);
			$('.troll').removeClass('hidden'); 
	});
}


// ???? how2redirect if user doesn't include url params ?recipient=

if (getUrlVars()['recipient']) { 
		// validate user-input recipient address
		$('.monies').hide();
  		communicate();
} else {
	$('.getNewAddress').click(function() {
		// validate user-input recipient address
		$('.monies').hide();
		communicate();

	})
}



