const someText = document.querySelector(`#name-input`);
const titleH1 = document.querySelector(`#name-output`);

const onTargetListner = someText.addEventListener(`input`, event => {
    someText.oninput = function() {
        //  titleH1.textContent = this.target.value;  
     if(someText.value !== ``) {     
        titleH1.innerHTML = someText.value;
     }
        else {
            titleH1.textContent = `Anonymous`;   
        }
    };
    
//     else {
//         titleH1.textContent = someText.textContent; 
    
});
// console.log(elInput);
// if (document.getElementById('#name-input').value !== '') {
//     someText.innerText === someText.innerText
// } else {
//     titleH1.innerText = someText.innerText; 
// }        
// if (document.getElementById('#name-input').value === '') {
//     someText.innerText === someText.innerText;
// };