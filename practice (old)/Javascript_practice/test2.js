// Importing commonJS module and using it
const mod = require("./commonJS_module")

mod.greet()


// Testing super simple API
const fetchApiData = async () => {
    try {
        let response = await fetch('http://localhost:3000/hello');
        let data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}

fetchApiData();