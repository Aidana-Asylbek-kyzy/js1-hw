//////////Third H/W

const color = prompt('Укажите цвет')

if (color === "зеленый") {
    alert("идти")
    console.log(color + " идти");
} else if (color === "желтый") {
    alert('ждать')
    console.log(color + " ждать")
} else if (color === "красный") {
    alert("стоять")
    console.log(color + " стоять");
} else {
    alert("unknown color")
    console.log(color + " неизветный");
}


//////////First H/W

const name = prompt("Укажите имя")
const lastName = prompt("Укажите фамилие")

if (lastName) {
    alert(name + lastName)
}
console.log("Привет " + name + lastName )


/////////second H/W

let first = prompt("Первое число")
let second = prompt("Второе число")  

if (first > second) {
    alert(first + " Больше чем " + second)
} else if (first < second) {
    alert(first + " Меньше чем " + second)
} else if (first == second) {
    alert("равны")
} else {
    alert("Пусто")
}