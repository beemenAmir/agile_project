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
console.log(pets);

let res = fetch(baseUrl+ 'animals');
console.log(res);

for(let i = 0; i< pets.length; i++){
    
}