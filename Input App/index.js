let outputButton = document.getElementById('first-name-button')
let testOutput = document.getElementById("console")
let txtFirstName = document.getElementById("first-name-input")
let outputDiv = document.getElementById("output")

outputButton.addEventListener("click", evt => {
    let input = Number(txtFirstName.value)
    let output = input + 10;
    console.log(typeof(input));


    outputDiv.innerHTML += `<p> ${output}</p>`
})

