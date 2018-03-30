
function hide() {
	var x = document.getElementsByClassName("city");
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
}

function reveal() {
	var x = document.getElementsByClassName("city");
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = "block";
	}
}

function getHealth() {
	console.log('Hello')
	var config = {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	}
	axios.get('http://localhost:8000/health', config)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
}
