let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("saveEl")
let count = 0;
function increment() {
    count = count + 1
    countEl.textContent = count

}
function save() {
    let saveStr = count + " - "
    saveEl.textContent += saveStr
    countEl.textContent = 0
    count = 0
}
