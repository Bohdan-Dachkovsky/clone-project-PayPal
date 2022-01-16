var words = document.getElementsByTagName('input');
for (let i = 0; i < words.length; i++) {
    words[i].addEventListener('blur', func);
}
function func() {
    var correctLength = this.dataset.length; 
    var inputDataLength = this.value.length;  
    if(inputDataLength = 6){
        this.style.borderColor = 'green';
    } else {
        this.style.borderColor = 'red';
    }

// input.onblur = function() {
//     if (!this.value.includes('data-length')) { 
//         this.classList.add("error");
//         input.focus();
//     } else {
//         this.classList.remove("error");
//       }
//     };