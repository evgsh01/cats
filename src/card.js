export class Card {
    
    constructor(data, selectorTemplate, handleClickCatImage, handleCatTitle, handleLikeCard) {
        this._data = data;
        this._selectorTemplate =selectorTemplate;
        this._handleClickCatImage = handleClickCatImage;
        this._handleCatTitle = handleCatTitle;
        this._handleLikeCard = handleLikeCard;
    }

    _updateViewLike() {
        if (this._data.favorite) {
            this.cardLikeElement.classList.add('card__like_active');
        } else {
            this.cardLikeElement.classList.remove('card__like_active');
        }
    }

    _setLikeCat = () => {
        this._data.favorite = !this._data.favorite;

        this._handleLikeCard(this._data, this);
    }

    _getTemplate(){
        const template = document.querySelector(this._selectorTemplate).content.querySelector('.card');
        return template
    }

    getElement() {
        this._element = this._getTemplate().cloneNode(true);
        this.cardTitleElement = this._element.querySelector('.card__name');
        this.cardImageElement = this._element.querySelector('.card__image');
        this.cardLikeElement = this._element.querySelector('.card__like');

        this.updateView();

        this.cardImageElement.addEventListener('click', () => {
            this._handleClickCatImage(this._data.image);
        })
        //Наполнять карточку
        this.setEventListener();
        return this._element;
    }

    getData() {
        return this._data;
    }

    getId() {
        return this._data.id;
    }

    setData(newData) {
        this._data = newData;
    }

    updateView() {
        this.cardTitleElement.textContent = this._data.name;
        this.cardImageElement.src = this._data.image;

        this._updateViewLike();
    }

    deleteViev() {
        this._element.remove();
        this._element = null;
    }

    setEventListener() {
        this.cardTitleElement.addEventListener('click', () => this._handleCatTitle(this));
        this.cardLikeElement.addEventListener('click', this._setLikeCat)
    }

}