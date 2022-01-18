
document.getElementById("validation-input").onblur = function() {
    console.log(this.value.length);
    if (this.getAttribute('data-length') > this.value.length) { 
      this.classList.remove('valid');
      this.classList.add('invalid');
    } else {
      this.classList.remove('invalid');
      this.classList.add('valid');
    }
  };
   // var correctLength = this.dataset.length; 
   // var inputDataLength = this.value.length; 
// input.onblur = function() {
//     if (!this.value.includes('data-length')) { 
//         this.classList.add("error");
//         input.focus();
//     } else {
//         this.classList.remove("error");
//       }
//     };