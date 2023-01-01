const baseUrl = "http://localhost:3000/"
document.getElementById("submitButton").addEventListener('click', addAnimal)




async function addAnimal(e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    let type = document.getElementById("type").value;
    let age = document.getElementById("age").value;
    let location = document.getElementById("location").value;
	let file = document.getElementById("myFile").value;

	if (name == '' || type == '' || age == '' || location == '' || file == ''){
		alert("all fields must be filled ")
		return;
	}

	const res = await fetch(baseUrl + "createAnimal", {
		method: 'POST',
		headers:{
			'Content-Type': "application/json"
		},
		body: JSON.stringify({
			name,
			age,
			location,
			file
		})
	})
	

}
