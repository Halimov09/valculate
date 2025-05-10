const display = document.querySelector(".top")
const del = document.querySelector(".del")

console.log(display.value);


const tozalash = document.querySelector(".reset")
const teng = document.querySelector(".teng")


document.querySelector(".bir").addEventListener("click", () => display.value += "1");
document.querySelector(".ikki").addEventListener("click", () => display.value += "2");
document.querySelector(".uch").addEventListener("click", () => display.value += "3");
document.querySelector(".tort").addEventListener("click", () => display.value += "4");
document.querySelector(".besh").addEventListener("click", () => display.value += "5");
document.querySelector(".olti").addEventListener("click", () => display.value += "6");
document.querySelector(".yetti").addEventListener("click", () => display.value += "7");
document.querySelector(".sakkiz").addEventListener("click", () => display.value += "8");
document.querySelector(".toqqiz").addEventListener("click", () => display.value += "9");

document.querySelector(".nol").addEventListener("click", () => display.value += "0");

document.querySelector(".bolish").addEventListener("click", () => display.value += "/");

document.querySelector(".plus").addEventListener("click", () => display.value += "+")
document.querySelector(".minus").addEventListener("click", () => display.value += "-")
document.querySelector(".kopaytirish").addEventListener("click", () => display.value += "*")


tozalash.addEventListener("click", () => {
   display.value = ""
})

del.addEventListener("click", () =>{
    display.value = display.value.slice(0, -1)
})

teng.addEventListener("click", () =>{
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.getHTML("hatolik sodir boldi")
    }
})

