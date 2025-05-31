const addBtn = document.querySelector('#add');
const nameInput = document.querySelector('#operationName');
const list = document.querySelector('#list');
const sum = document.querySelector('#sum')
const category = document.querySelector('#category')
const sumAll = document.querySelector('.sumAll')
let total = 0;
addBtn.addEventListener('click', () => {
    // Создание элемента "li" в памяти (на странице его пока что нет)
    const newItem = document.createElement('li');
    // Добавить элементу newItem класс item (элемент еще не на странице)
    newItem.classList.add('item');
    // Добавить элементу текстовое содержимое из поля ввода
    newItem.textContent = nameInput.value + "" + sum.value
    newItem.innerHTML = `
        <li>
                <h2 class="name">${nameInput.value}</h2>
                <p class="categoty">${category.value}</p>
                <p class="price">${sum.value}</p>
            </li>`
    // Добавить элемент в список
    list.appendChild(newItem);
total=total+PromiseRejectionEvent.value;
sumAll.textContent.total

    // Отчистить поле ввода
    nameInput.value = '';

    // creat button
    const deleteButton = document.createElement("button");
    // добавляем текст кнопке
    deleteButton.textContent = 'delete'
    // добавить кнопку в элимент списка
    newItem.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
total=total- +newItem.querySelector('.price').textContent
console.log(total)
        // удаление элимента из списка
        list.removeChild(newItem);
    })
})



