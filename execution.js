function outer(){
    return ()=>{
        console.log("This is the function that is returned !");
    }
}

const inner = outer();
inner();