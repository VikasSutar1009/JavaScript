let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello! promise completed");
    }, 2000);
});

promise.then(result =>{
    console.log(result);
});