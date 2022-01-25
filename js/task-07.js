


    let input = document.getElementById(`font-size-control`); //rng - это Input
    let span = document.getElementById(`text`); // span - блок test
  
    input.addEventListener("input", handleInputRange);
    function handleInputRange(event) {
      span.style.fontSize = event.currentTarget.value + "px";
    }