export class Card {
    #data;
    #selectorTemplate;
    #element;
    #handleClickCatImage;
    
    constructor(data, selectorTemplate, handleClickCatImage) {
        this.#data = data;
        this.#selectorTemplate =selectorTemplate;
        this.#handleClickCatImage = handleClickCatImage;
    }

    #getTemplate(){
        const template = document.querySelector(this.#selectorTemplate).content.querySelector('.card');
        return template
    }

    getElement() {
        this.#element = this.#getTemplate().cloneNode(true);
        const cardTitleElement = this.#element.querySelector('.card__name');
        const cardImageElement = this.#element.querySelector('.card__image');
        const cardLikeElement = this.#element.querySelector('.card__like');

        cardTitleElement.textContent = this.#data.name
        cardImageElement.src = this.#data.image

        if(!this.#data.favorite) {
            cardLikeElement.remove()
        }

        cardImageElement.addEventListener('click', () => {
            this.#handleClickCatImage(this.#data.image);
        })
        //Наполнять карточку
        return this.#element;
    }

}