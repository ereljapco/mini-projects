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

class Gallery {
  constructor(element) {
    this.container = element;
    this.imgs = [...element.querySelectorAll('.gallery__img')];

    this.modal = getElement('.gallery__modal');
    this.modalMainImgContainer = this.modal.querySelector(
      '.gallery__modal-main-img--container'
    );
    this.modalMainImg = this.modal.querySelector('.gallery__modal-main-img');
    this.modalTitle = this.modal.querySelector('.gallery__modal-title');
    this.modalImgsContainer = this.modal.querySelector('.gallery__modal-imgs');
    this.nextBtn = this.modal.querySelector('.gallery__modal-next-btn');
    this.prevBtn = this.modal.querySelector('.gallery__modal-prev-btn');

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.nextImg = this.nextImg.bind(this);
    this.prevImg = this.prevImg.bind(this);

    this.container.addEventListener(
      'click',
      function (e) {
        if (e.target.src) {
          this.openModal(e.target, this.imgs);
        }
      }.bind(this)
    );
  }

  openModal(imgSelected, imgs) {
    this.modal.classList.add('gallery__modal--open');

    this.setMainImg(imgSelected);

    this.modalImgsContainer.innerHTML = imgs
      .map(function (img) {
        if (imgSelected === img) {
          return `<img class="gallery__modal-img gallery__modal-img--selected" title="${img.title}" data-id="${img.dataset['id']}" src="${img.src}" alt="${img.alt}"/>`;
        }

        return `<img class="gallery__modal-img" title="${img.title}" data-id="${img.dataset['id']}" src="${img.src}" alt="${img.alt}"/>`;
      })
      .join('');

    this.modalImgs = [
      ...this.modalImgsContainer.querySelectorAll('.gallery__modal-img'),
    ];

    this.modalImgs.forEach(
      function (img) {
        img.addEventListener(
          'click',
          function () {
            this.setMainImg(img);
          }.bind(this)
        );
      }.bind(this)
    );

    this.nextBtn.addEventListener('click', this.nextImg);
    this.prevBtn.addEventListener('click', this.prevImg);

    this.closeBtn = this.modal.querySelector('.gallery__modal-close-btn');
    this.closeBtn.addEventListener('click', this.closeModal);
  }

  setMainImg(imgSelected) {
    const imgs = [
      ...this.modalImgsContainer.querySelectorAll('.gallery__modal-img'),
    ];

    this.modalMainImgContainer.innerHTML = `<img
            class="gallery__modal-main-img"
            title="${imgSelected.title}"
            data-id="${imgSelected.dataset['id']}"
            src="${imgSelected.src}"
            alt="${imgSelected.alt}"
          />`;
    this.modalMainImg = imgSelected;
    this.modalTitle.textContent = imgSelected.title;

    imgs.forEach(function (img) {
      if (imgSelected.dataset['id'] !== img.dataset['id']) {
        img.classList.remove('gallery__modal-img--selected');
      } else {
        img.classList.add('gallery__modal-img--selected');
      }
    });
  }

  closeModal() {
    this.modal.classList.remove('gallery__modal--open');
    this.prevBtn.removeEventListener('click', this.prevImg);
    this.nextBtn.removeEventListener('click', this.nextImg);
  }

  prevImg() {
    const imgSelected =
      this.modalMainImg.previousElementSibling ||
      this.modalImgs[this.modalImgs.length - 1];
    this.setMainImg(imgSelected);
  }

  nextImg() {
    const imgSelected =
      this.modalMainImg.nextElementSibling || this.modalImgs[0];
    this.setMainImg(imgSelected);
  }
}

const montessori = new Gallery(getElement('.gallery__montessori'));
const home = new Gallery(getElement('.gallery__home'));
