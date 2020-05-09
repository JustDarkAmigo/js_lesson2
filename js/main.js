

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





//TODO: 1) поменяй фон header, 2)перезаписать текст внутри кнопки



//TODO: на все кнопки повешать соответствующие события, на одну сделать динамический вывод количества действий с этими кнопками



//TODO:повторить для событий ввода с клавиатуры, плюс сделать вывод символа, который сейчас нажат. Показывать динамически в другом section
