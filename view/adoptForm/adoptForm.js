const baseUrl = "http://localhost:3000/"
document.getElementById("submitButton").addEventListener('click', adopt)


async function adopt(e){
    e.preventDefault();
    let name = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("adress").value;
	let phone = document.getElementById("Phone").value;

	if (name == '' || email == '' || age == '' || address == ''){
		alert("all fields must be filled ")
		return;
	}

	const res = await fetch(baseUrl + "adopt", {
		method: 'POST',
		headers:{
			'Content-Type': "application/json"
		},
		body: JSON.stringify({
			name,
			email, 
			age,
			address,
			phone
		})
	})
	

}