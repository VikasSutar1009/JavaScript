// Create a promise that resolves after 2 seconds with "Data loaded".
const loadData = new Promise((resolve) =>{
    setTimeout(() => resolve("Data loaded"),
2000);
});

loadData.then(msg => console.log(msg));