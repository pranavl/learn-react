
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

var token = ''

function getHealth() {
	var config = {
		headers: {
			Authorization: 'Bearer ' + token
		}
	}
	axios.get('http://localhost:8000/health/auth', config)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
}
