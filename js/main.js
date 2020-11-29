


/*
ООП структура страницы. Объекты - элементы на странице
Имеет иерархическую структуру

document - во главе объектов, все обращения начинаются с него

Далее выбираем элемент, к которому нужно обратиться:

1 способ: querySelector('наш селектор: просто тег, обращение через класс или id')
2 способ: querySelectorAll круче 1 так как можно обратиться более точным способом. Тут поддерживаются псевдоэлементы, псевдоклассы и т.д. (например будет работать: ul > li:last-child)
3 способ: getElements*  (*: ByTagName, ById, getElementsByClassName, getElementsByName)

Допы:

Обращение к body document.body

Перезапись elem.innerHTML="значение"

Создание элемента: let tag=document.createElement(tag) let tag=document.createTextNode(text)

tag.className = "задаем класс";
tag.innerHTML = "задаем содержимое тега";

Стили элемент.style.свойство для переопределения

*/
document.body.style.background = "black";




//TODO: 1) поменяй фон header, 2)перезаписать текст внутри кнопки

document.getElementById("header").style.background = "green";


//TODO: на все кнопки повешать соответствующие события, на одну сделать динамический вывод количества действий с этими кнопками



//TODO:повторить для событий ввода с клавиатуры, плюс сделать вывод символа, который сейчас нажат. Показывать динамически в другом section
// btn btn-onClick
document.getElementById("on_click").value = "нажмииииииииииииииииииииииииииииииииииииииииииииииииииииииииииииииииииииииииииииииииииииииииииииии";

let Flag_menu = false;

document.getElementById("gamburger_menu_show").onclick = function(){
    if (Flag_menu){
        document.getElementById("gamburger_menu").style.display = "none";
    Flag_menu = false;
    document.getElementById("header").style.background = "green";
    }
    else{
        document.getElementById("gamburger_menu").style.display = "block";
        Flag_menu = true;
        document.getElementById("header").style.background = "tomato";
    }
};

function hi(name){
    console.log("Привет!", name ,"рад тебя видеть");

}


let names = ["саша","паша","коля"]
for(let i = 0; i < names.length; i++){
    hi(names[i])
}

$('.my-slider').slick({
      arrows: false,
    });



