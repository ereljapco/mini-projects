function getElement(select) {
  const element = document.querySelector(select);

  if (element) {
    return element;
  } else {
    throw new Error(
      `Pleas check "${select}" selector. No such element exists.`
    );
  }
}

function Gallery(element) {
  this.container = element;
  this.imgs = [...element.querySelectorAll('.gallery__img')];

  console.log(this.imgs);

  this.modal = getElement('.gallery__modal');

  this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);

  this.container.addEventListener(
    'click',
    function (e) {
      if (e.target.src) {
        this.openModal();
        this.imgSrc = e.target.src;
        this.imgTitle = e.target.title;
        this.modalMainImg = this.modal.querySelector(
          '.gallery__modal-main-img'
        );
        this.modalTitle = this.modal.querySelector('.gallery__modal-title');

        this.modalMainImg.src = this.imgSrc;
        this.modalTitle.textContent = this.imgTitle;
      }
    }.bind(this)
  );
}

Gallery.prototype.openModal = function () {
  this.modal.classList.add('gallery__modal--open');

  this.closeBtn = this.modal.querySelector('.gallery__modal-close-btn');
  this.closeBtn.addEventListener('click', this.closeModal);
};

Gallery.prototype.closeModal = function () {
  this.modal.classList.remove('gallery__modal--open');
};

const montessori = new Gallery(getElement('.gallery__montessori'));
