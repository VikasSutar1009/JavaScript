let pizzaOrder = new Promise((resolve, reject) => {
    let pizzaReady = true;

    setTimeout(() => {
        if (pizzaReady){
            resolve("Pizza delivered!");
        } else {
            reject("sorry, pizza cancelled");
        }
    }, 3000);
});