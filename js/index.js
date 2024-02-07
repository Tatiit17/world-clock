function updateTime() {
	//new-york

	let newYorkElement = document.querySelector("#new-york");
	let newYorkDateElement = newYorkElement.querySelector(".date");
	let newYorkTimeElement = newYorkElement.querySelector(".time");
	let newYorkTime = moment().tz("America/New_York");

	newYorkDateElement.innerHTML = newYorkTime.format("MMMM D, YYYY");
	newYorkTimeElement.innerHTML = newYorkTime.format(
		"h:mm:ss:SSS [<small>]A[<small>]"
	);

	//paris

	let parisElement = document.querySelector("#paris");
	let parisDateElement = parisElement.querySelector(".date");
	let parisTimeElement = parisElement.querySelector(".time");
	let parisTime = moment().tz("Europe/Paris");

	parisDateElement.innerHTML = parisTime.format("MMMM D, YYYY");
	parisTimeElement.innerHTML = parisTime.format(
		"h:mm:ss:SSS [<small>]A[<small>]"
	);
}

setInterval(updateTime, 1);
