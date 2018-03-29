
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