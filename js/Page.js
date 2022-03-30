class Pages {
    constructor(title, date, smile, description, /*image*/) {
        this.title = title,
        this.date = date,
        this.smile = smile,
        this.description = description
       // this.image = image
    }

    createPage() {
        let block = 
        `
            <div class="list__item-img">
                <div class="smile">
                    <p class="smile-item">${this.smile}</p>
                </div>
            </div>
            <div class="text">
                <div class="top-text">
                    <div class="text__title">${this.title}</div>
                    <div class="text__date">${this.date}</div>
                </div>
                <div class="bottom-text">
                    ${this.description}
                </div>
            </div>
        `
        let div = document.createElement('div');
        div.classList.add('list__item');
        div.innerHTML = block;
        list.append(div);

        div.addEventListener('click', () => {
            document.querySelector('.header__inner').classList.add('blur');
            list.classList.add('blur');
            let block = 
                `
                <div class="container">
                    <div class="noteModal__inner">
                        <div class="noteModalBtn">
                            <button class="btnBack" onclick="btnBack()">X</button>
                        </div>
                        <div class="topBlock">
                            <div class="topBlock__title">${this.smile} ${this.title}</div>
                            <div class="topBlock__date">${this.date}</div>
                        </div>
                        <div class="buttomBlock">
                            <div class="buttomBlock__img">
                            <img src="/image/bg/virshem_germaniya_zamok_tropa_vecher_nebo_119771_1920x1080.jpg" alt="">
                        </div>
                            <div class="buttomBlock__text">${this.description}</div>
                        </div>
                    </div>
                </div>   
                `
            document.querySelector('.noteModal').innerHTML = block;
        });
    }
}