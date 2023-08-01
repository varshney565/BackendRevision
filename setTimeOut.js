function Hello(){
    console.log("Phchan Kon !");
}

console.log("Before Hi !");
setTimeout(Hello,2000);
console.log("After Hi !");

/*------------------------------------*/

console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function () {
    console.log('promise1');
})
.then(function () {
    console.log('promise2');
});
