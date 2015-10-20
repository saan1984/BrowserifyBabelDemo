import {multiplication,addition} from "./operation";
let mulResult = multiplication(2,7,3);
let message1 = `<h2>Multiplication Result ${mulResult}</h2>`
let addResult = addition(2,7,3);
let message2 =`<h2>Addition Result ${addResult}</h2>`

document.body.innerHTML = message1 + message2;
