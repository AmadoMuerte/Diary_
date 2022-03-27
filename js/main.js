const btnAdd = document.querySelector('.btn2');
const list = document.querySelector('.list');
const btnCreate = document.querySelector('.createPage'); 
const inputTitle = document.querySelector('.form__title');
const inputDate = document.querySelector('.form__date');
const description = document.querySelector('.description');


let pageArray = [];

btnAdd.addEventListener('click', () => {
    showWindow();
});

btnCreate.addEventListener('click', () => {
    showWindow();
    let page = new Pages( inputTitle.value, inputDate.value, description.value );
    page.createPage();
    console.log(page);

});


function showWindow() {
    document.querySelector('.formModal').classList.toggle('invisible');
    document.querySelector('.main').classList.toggle('invisibleMain');
    document.querySelector('.search').classList.toggle('invisibleMain');
}

function updateLocal() {
    localStorage.setItem('page', JSON.stringify(pageArray)); 
}