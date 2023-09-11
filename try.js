async function take() {
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            console.log("Yes inside the promise !!");
            resolve("Done the execution");
            console.log("Yes after done the resolve !!!");
        },5000)
    })
}


async function execution() {
    let t = await take();
    console.log(`Hello ${t}`);
}

execution();