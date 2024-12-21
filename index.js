const button = document.querySelector("button")

button.addEventListener("click", updateName); 

// clickした時に何が起こるかの処理を書く
function updateName() {
    const name = prompt("名前を入力してください。");
    button.textContent = `Player 1 = ${name}`;
}
