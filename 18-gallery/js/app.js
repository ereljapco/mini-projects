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
        this.displayModalImgs(e.target);
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

Gallery.prototype.displayModalImgs = function (imgSelected) {
  this.imgSrc = imgSelected.src;
  this.imgTitle = imgSelected.title;
  this.modalMainImg = this.modal.querySelector('.gallery__modal-main-img');
  this.modalTitle = this.modal.querySelector('.gallery__modal-title');

  this.modalMainImg.src = this.imgSrc;
  this.modalTitle.textContent = this.imgTitle;

  this.modalImgsContainer = this.modal.querySelector('.gallery__modal-imgs');
  this.modalImgs = this.imgs
    .map(function (img) {
      if (imgSelected === img) {
        return `<img class="gallery__modal-img gallery__modal-img--selected" title="${img.title}" data-id="${img.dataset['id']}" src="${img.src}" alt="${img.alt}"/>`;
      }

      return `<img class="gallery__modal-img" title="${img.title}" data-id="${img.dataset['id']}" src="${img.src}" alt="${img.alt}"/>`;
    })
    .join('');

  this.modalImgsContainer.innerHTML = this.modalImgs;
};

const montessori = new Gallery(getElement('.gallery__montessori'));
