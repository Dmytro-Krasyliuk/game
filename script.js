let sheep = document.getElementsByClassName("sheep")[0];
let balanceText = document.getElementsByClassName("balance-text")[0];

balanceText.textContent = localStorage.getItem("balance") || 0;

function getWool (e) {
    let newWool = document.createElement('img')
    newWool.src = "wool.png";
    newWool.style.width = "50px";
    newWool.style.top = "500px";
    newWool.style.left = e.clientX + "px";
    newWool.style.position = 'absolute'
    document.body.append(newWool)

    newWool.addEventListener('mousemove', function () {
        balanceText.textContent = Number(balanceText.textContent) + 1;
        newWool.remove()
        localStorage.setItem('balance', balanceText.textContent)
    })
}

sheep.addEventListener("click", (e) => {
  getWool(e);
});
sheep.addEventListener("mousemove", (e) => {
  getWool(e);
});


