const btnAdd = document.querySelector('.btn2');
const list = document.querySelector('.list');
const btnCreate = document.querySelector('.createPage'); 
const inputTitle = document.querySelector('.form__title');
const inputDate = document.querySelector('.form__date');
const description = document.querySelector('.description');
const slimeList = document.querySelector('.search__smile-modal');
const smileItem = document.querySelector('#smile');

let pageArray = [];

btnAdd.addEventListener('click', () => {
    showWindow();
});

btnCreate.addEventListener('click', () => {
    showWindow();
    let page = new Pages( inputTitle.value, inputDate.value,
                          smileItem.innerHTML,
                          description.value );

    pageArray.push(page);
    page.createPage();
    clearForm();
    updateLocal();
    console.log(pageArray);
});

document.querySelector('.smile1').addEventListener('click', () => {
    slimeList.classList.toggle('invisibleSmile');
    buttonSlime();
});


if (localStorage.page ) {
    pageArray = JSON.parse( localStorage.getItem('page'));

    pageArray.forEach((item, index) => {
        pageArray[index] = new Pages(item.title, item.date, item.smile,  item.description);
        pageArray[index].createPage();
    });
} else {pageArray = [];}

function showWindow() {
    document.querySelector('.formModal').classList.toggle('invisible');
    document.querySelector('.main').classList.toggle('invisibleMain');
    document.querySelector('.search').classList.toggle('invisibleMain');
}


function clearForm() {
    inputTitle.value = '';
    inputDate.value = '';
    description.value = '';
};


function updateLocal() {
    localStorage.setItem('page', JSON.stringify(pageArray)); 
}

function buttonSlime() {
    let smile = document.querySelectorAll('.smiles');

        smile.forEach((item) => {
            item.addEventListener('click', () => {
                smileItem.innerHTML = item.textContent;
                return a = item.textContent;
            });
        });

}