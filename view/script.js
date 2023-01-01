
document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);
document.getElementById("signUpBtn").addEventListener('click', signup)
document.getElementById("signInBtn").addEventListener('click', signin)


const baseUrl = "http://localhost:3000/"
async function signup(e){
	// e.preventDefault()
	let name = document.getElementById("signUpName").value;
	let email = document.getElementById("signUpEmail").value;
	let password = document.getElementById("signUpPassword").value;
	let confPassword = document.getElementById("signUpConfPassword").value;

	if (name == '' || email == '' || password == '' || confPassword == ''){
		alert("all fields must be filled ")
		return;
	}
	if (! validateEmail(email)){
		alert("enter a valid email")
		return;
	}

	if(password != confPassword){
		alert("passwords don't match!")
		return;
	}
	const res = await fetch(baseUrl+"signUp", {
		method: 'POST',
		headers:{
			'Content-Type': "application/json"
		},
		body: JSON.stringify({
			name,
			email, 
			password,
			confPassword
		})
	})
	

}

async function signin(e){
	// e.preventDefault();
	let email = document.getElementById("signInEmail").value;
	let password = document.getElementById("signInPassword").value;
	if(!validateEmail(email)){
		alert("enter a vaild email.");
		return;
	}

	const req = await fetch(baseUrl + "signIn", {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body:JSON.stringify({
			email,
			password
		})
	})

	const res = await fetch(baseUrl+ 'isAdmin',{
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body:JSON.stringify({
			email,
			password,
		})
	});
	console.log(res)
	if(res.ok){
			window.location.href="admin dashboard/admin.html"
			return;
	}

	if(req.ok){window.location.href="home/home.html"}


}
const validateEmail = (email) => {
	return String(email)
	  .toLowerCase()
	  .match(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	  );
  };