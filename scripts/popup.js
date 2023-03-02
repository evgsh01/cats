export class Popup {
  #handleEscUp = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };
  constructor(classPopup) {
    this._popupElement = document.querySelector(`.${classPopup}`);
  }

  open() {
    this._popupElement.classList.add(`active`);
    document.addEventListener("keyup", this.#handleEscUp);
  }

  close() {
    this._popupElement.classList.remove(`active`);
    document.removeEventListener("keyup", this.#handleEscUp);
  }

  setEventListener() {
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains("popup") ||
        !!evt.target.closest(".popup__close")
      ) {
        this.close();
      }
    });
  }
}