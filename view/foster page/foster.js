// const main=document.querySelector("#maincontent")
// function buildcolumn (text,img ){
//     const column = document.createElement("div") 
//     column.classList.add("column1")
//     column.innerText=text
//     column.innerHTML
//     main.appendChild(column)
// }
// buildcolumn("ggdtg")
// const data =["dfrfr","dfrfr","dfrfr","dfrfr","dfrfr","dfrfr",]
// data.map(e=>buildcolumn(e))


baseUrl = "http://localhost:3000/"

const pets = document.getElementsByClassName("column1");

(async() =>{
    let res = await fetch(baseUrl+ 'animals');
    let animalData = await res.json();
    for(let i = 0; i< pets.length; i++){
        document.getElementsByClassName("animalname")[i].innerText = animalData[i].name;
        document.getElementsByClassName("animalplace")[i].innerText = animalData[i].location;
        document.getElementsByClassName("imgs")[i].src = animalData[i].picture;

        document.getElementsByClassName("viewProfileBtn")[i].addEventListener('click',()=>{
            window.location.href = "../details/animaldetails.html"
            index = i;
            if (index ==2){
                animalData[i].age = "2 month";
            }else{
                animalData[i].age = "3 years"
            }
            if (index == 1){
                localStorage.setItem('type', "cat")
            }else{
                localStorage.setItem('type', 'dog')
            }

            localStorage.setItem("animalname",animalData[i].name);
            localStorage.setItem("animalplace",animalData[i].location);
            localStorage.setItem("imgs",animalData[i].picture);
            localStorage.setItem("age",animalData[i].age);
        })
        
    }

})();