const btnAdd = document.querySelector('.btn2');
const list = document.querySelector('.list');
const btnCreate = document.querySelector('.createPage'); 
const inputTitle = document.querySelector('.form__title');
const inputDate = document.querySelector('.form__date');
const description = document.querySelector('.description');
const smileIcon = document.querySelector('.search__smile-item');
const slimeList = document.querySelector('.search__smile-modal');

let pageArray = [];


if (localStorage.page ) {
    pageArray = JSON.parse( localStorage.getItem('page'));

    pageArray.forEach((item, index) => {
        pageArray[index] = new Pages(item.title, item.date, item.description);
        pageArray[index].createPage();
    });
} else {pageArray = [];}


btnAdd.addEventListener('click', () => {
    showWindow();
});





btnCreate.addEventListener('click', () => {
    showWindow();
    let page = new Pages( inputTitle.value, inputDate.value, description.value );
    pageArray.push(page);
    page.createPage();
    clearForm();
    updateLocal();
    console.log(pageArray);
});


function showWindow() {
    document.querySelector('.formModal').classList.toggle('invisible');
    document.querySelector('.main').classList.toggle('invisibleMain');
    document.querySelector('.search').classList.toggle('invisibleMain');
}

function clearForm() {
    inputTitle.value = '';
    inputDate.value = '';
    description.value = '';
    smileIcon.innerHTML = '';
};

function updateLocal() {
    localStorage.setItem('page', JSON.stringify(pageArray)); 
}
