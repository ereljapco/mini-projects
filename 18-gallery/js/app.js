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

  this.modal = getElement('.gallery__modal');
  this.modalMainImg = this.modal.querySelector('.gallery__modal-main-img');
  this.modalTitle = this.modal.querySelector('.gallery__modal-title');
  this.modalImgsContainer = this.modal.querySelector('.gallery__modal-imgs');
  this.nextBtn = this.modal.querySelector('.gallery__modal-next-btn');
  this.prevBtn = this.modal.querySelector('.gallery__modal-prev-btn');

  this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);

  this.container.addEventListener(
    'click',
    function (e) {
      if (e.target.src) {
        this.openModal(e.target, this.imgs);
      }
    }.bind(this)
  );
}

Gallery.prototype.openModal = function (imgSelected, imgs) {
  this.modal.classList.add('gallery__modal--open');

  this.modalMainImg.src = imgSelected.src;
  this.modalTitle.textContent = imgSelected.title;

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
          this.modalMainImg.src = img.src;
          this.modalTitle.textContent = img.title;

          this.highlightImageSelected(img);
        }.bind(this)
      );
    }.bind(this)
  );

  this.nextImg = this.nextImg.bind(this);
  this.nextBtn.addEventListener('click', this.nextImg);
  this.prevImg = this.prevImg.bind(this);
  this.prevBtn.addEventListener('click', this.prevImg);

  this.closeBtn = this.modal.querySelector('.gallery__modal-close-btn');
  this.closeBtn.addEventListener('click', this.closeModal);

  this.modalMainImg.dataset['id'] = imgSelected.dataset['id'];
};

Gallery.prototype.closeModal = function () {
  this.modal.classList.remove('gallery__modal--open');
  this.prevBtn.removeEventListener('click', this.prevImg);
  this.nextBtn.removeEventListener('click', this.nextImg);
};

Gallery.prototype.prevImg = function () {
  const imgSelected = this.modalMainImg;
  let imgSelectedId = imgSelected.dataset['id'];
  imgSelectedId--;

  if (imgSelectedId < this.imgs[0].dataset['id']) {
    imgSelectedId = this.imgs[this.imgs.length - 1].dataset['id'];
  }

  const prevImg = this.imgs.filter(function (img) {
    return img.dataset['id'] == imgSelectedId;
  });

  this.modalMainImg.src = prevImg[0].src;
  this.modalMainImg.dataset['id'] = imgSelectedId;
  this.modalTitle.textContent = prevImg[0].title;

  this.highlightImageSelected(prevImg[0]);
};

Gallery.prototype.nextImg = function () {
  const imgSelected = this.modalMainImg;
  let imgSelectedId = imgSelected.dataset['id'];
  imgSelectedId++;

  if (imgSelectedId > this.imgs.length) {
    imgSelectedId = this.imgs[0].dataset['id'];
  }

  const nextImg = this.imgs.filter(function (img) {
    return img.dataset['id'] == imgSelectedId;
  });

  this.modalMainImg.src = nextImg[0].src;
  this.modalMainImg.dataset['id'] = imgSelectedId;
  this.modalTitle.textContent = nextImg[0].title;

  this.highlightImageSelected(nextImg[0]);
};

Gallery.prototype.highlightImageSelected = function (imgSelected) {
  const imgs = [
    ...this.modalImgsContainer.querySelectorAll('.gallery__modal-img'),
  ];

  imgs.forEach(function (img) {
    if (imgSelected.dataset['id'] !== img.dataset['id']) {
      img.classList.remove('gallery__modal-img--selected');
    } else {
      img.classList.add('gallery__modal-img--selected');
    }
  });
};

const montessori = new Gallery(getElement('.gallery__montessori'));
const home = new Gallery(getElement('.gallery__home'));
