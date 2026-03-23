import exportTestValue from "./exportcheck.js"

const h1 = document.createElement("h1")
h1.innerText = "Hello From JS"
document.body.appendChild(h1)

console.log("Exported Value:", exportTestValue)

