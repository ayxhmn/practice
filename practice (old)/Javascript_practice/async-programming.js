// ASYNC PROGRAMMING
let happy = true;

async function myAsyncFn() {
    console.log("Working...")

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(happy) {
                resolve("Done! :D");
            }
            else {
                reject("Oops! Reverting... Need to be happy!");
            }
        }, 2000)
    });
}

myAsyncFn().then((result) => console.log(result)).catch((error) => console.error(error));

const fetchData = async () => {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
};

fetchData();
console.log("Ok, bye. Take care! :)");