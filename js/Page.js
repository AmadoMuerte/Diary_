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
        <div class="list__item">
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
        </div>
        `
        list.innerHTML += block;
    }
    
}