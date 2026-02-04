function withdrawMoney() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Cash withdrawn");
    }, 2000);
  });
}

async function atmProcess() {
  console.log("Insert card");
  const money = await withdrawMoney();
  console.log(money);
  console.log("Take receipt");
}

atmProcess();
