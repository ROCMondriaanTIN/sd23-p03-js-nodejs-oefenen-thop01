
// fetch("/thearray").then(data => data.json()).then(array => {
//     console.log(array);
//     const dataView = document.querySelector("div.data-container");
//     dataView.innerHTML = array[0].name;
// })


const sendButton = document.querySelector(".send-button");
sendButton.addEventListener("click", onSubmit);

function onSubmit(event){
    console.log(event);
}