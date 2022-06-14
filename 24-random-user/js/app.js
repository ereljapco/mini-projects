const randomUserURL = 'https://randomuser.me/api/';
const randomUserBtn = document.querySelector('.random-user__random-btn');

displayUser();

randomUserBtn.addEventListener('click', () => {
  displayUser();
});

async function displayUser() {
  fetchUser();
}

async function fetchUser() {
  const response = await fetch(randomUserURL);
  const data = await response.json();
  const user = data.results[0];

  displayUserImg(user);

  displayUserInfoBtns(user);

  displayUserInfo();
}

function displayUserImg(user) {
  const userImg = document.querySelector('.random-user__img');
  const { picture, name } = user;
  const img = picture.large;

  userImg.src = img;
  userImg.alt = `${name.first} ${name.last}`;
}

function displayUserInfoBtns(user) {
  const { name, email, dob, location, phone, login } = user;
  const { first, last } = name;
  const { number, name: streetName } = location.street;
  const fullName = `${first} ${last}`;
  const age = dob.age;
  const streetAddress = `${number} ${streetName}`;
  const password = login.password;

  const infoBtnsContainer = document.querySelector('.random-user__info-btns');

  infoBtnsContainer.innerHTML = `<button
  class="random-user__info-btn random-user__info-btn--active" data-title="name"
  data-info="${fullName}"
  >
  <svg
  class="random-user__btn-icon"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 448 512"
  >
  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
  <path
  d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"
              />
              </svg>
              </button>
              <button class="random-user__info-btn" data-title="email" data-info="${email}">
              <svg
              class="random-user__btn-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
              d="M493.6 163c-24.88-19.62-45.5-35.37-164.3-121.6C312.7 29.21 279.7 0 256.4 0H255.6C232.3 0 199.3 29.21 182.6 41.38C63.88 127.6 43.25 143.4 18.38 163C6.75 172 0 186 0 200.8v247.2C0 483.3 28.65 512 64 512h384c35.35 0 64-28.67 64-64.01V200.8C512 186 505.3 172 493.6 163zM464 448c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V276.7l136.1 113.4C204.3 406.8 229.8 416 256 416s51.75-9.211 71.97-26.01L464 276.7V448zM464 214.2l-166.8 138.1c-23.19 19.28-59.34 19.27-82.47 .0156L48 214.2l.1055-13.48c23.24-18.33 42.25-32.97 162.9-120.6c3.082-2.254 6.674-5.027 10.63-8.094C229.4 65.99 246.7 52.59 256 48.62c9.312 3.973 26.62 17.37 34.41 23.41c3.959 3.066 7.553 5.84 10.76 8.186C421.6 167.7 440.7 182.4 464 200.8V214.2z"
              />
              </svg>
              </button>
              <button class="random-user__info-btn" data-title="age" data-info="${age}">
              <svg
              class="random-user__btn-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
              d="M257.9 328L304.1 375C314.3 384.4 314.3 399.6 304.1 408.1C295.6 418.3 280.4 418.3 271 408.1L224 361.9L176.1 408.1C167.6 418.3 152.4 418.3 143 408.1C133.7 399.6 133.7 384.4 143 375L190.1 328L143 280.1C133.7 271.6 133.7 256.4 143 247C152.4 237.7 167.6 237.7 176.1 247L224 294.1L271 247C280.4 237.7 295.6 237.7 304.1 247C314.3 256.4 314.3 271.6 304.1 280.1L257.9 328zM128 0C141.3 0 152 10.75 152 24V64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0zM400 192H48V448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192z"
              />
              </svg>
              </button>
              <button class="random-user__info-btn" data-title="street" data-info="${streetAddress}">
              <svg
              class="random-user__btn-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
              d="M565.6 36.24C572.1 40.72 576 48.11 576 56V392C576 401.1 569.8 410.9 560.5 414.4L392.5 478.4C387.4 480.4 381.7 480.5 376.4 478.8L192.5 417.5L32.54 478.4C25.17 481.2 16.88 480.2 10.38 475.8C3.882 471.3 0 463.9 0 456V120C0 110 6.15 101.1 15.46 97.57L183.5 33.57C188.6 31.6 194.3 31.48 199.6 33.23L383.5 94.52L543.5 33.57C550.8 30.76 559.1 31.76 565.6 36.24H565.6zM48 421.2L168 375.5V90.83L48 136.5V421.2zM360 137.3L216 89.3V374.7L360 422.7V137.3zM408 421.2L528 375.5V90.83L408 136.5V421.2z"
              />
              </svg>
              </button>
              <button class="random-user__info-btn" data-title="phone" data-info="${phone}">
              <svg
              class="random-user__btn-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
              d="M18.92 351.2l108.5-46.52c12.78-5.531 27.77-1.801 36.45 8.98l44.09 53.82c69.25-34 125.5-90.31 159.5-159.5l-53.81-44.04c-10.75-8.781-14.41-23.69-8.974-36.47l46.51-108.5c6.094-13.91 21.1-21.52 35.79-18.11l100.8 23.25c14.25 3.25 24.22 15.8 24.22 30.46c0 252.3-205.2 457.5-457.5 457.5c-14.67 0-27.18-9.968-30.45-24.22l-23.25-100.8C-2.571 372.4 5.018 357.2 18.92 351.2z"
              />
              </svg>
              </button>
              <button class="random-user__info-btn" data-title="password" data-info="${password}">
              <svg
              class="random-user__btn-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
              d="M592 288H576V212.7c0-41.84-30.03-80.04-71.66-84.27C456.5 123.6 416 161.1 416 208V288h-16C373.6 288 352 309.6 352 336v128c0 26.4 21.6 48 48 48h192c26.4 0 48-21.6 48-48v-128C640 309.6 618.4 288 592 288zM496 432c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S513.6 432 496 432zM528 288h-64V208c0-17.62 14.38-32 32-32s32 14.38 32 32V288zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM320 336c0-8.672 1.738-16.87 4.303-24.7C308.6 306.6 291.9 304 274.7 304H173.3C77.61 304 0 381.7 0 477.4C0 496.5 15.52 512 34.66 512h301.7C326.3 498.6 320 482.1 320 464V336z"
              />
              </svg>
              </button>`;
}

function displayUserInfo() {
  const infoBtns = [...document.querySelectorAll('.random-user__info-btn')];
  const infoTitle = document.querySelector('.random-user__title');
  const infoValue = document.querySelector('.random-user__value');

  infoBtns[0].classList.add('random-user__info-btn--active');
  infoTitle.textContent = `My ${infoBtns[0].dataset['title']} is`;
  infoValue.textContent = infoBtns[0].dataset['info'];

  infoBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      infoBtns.forEach((btn) => {
        btn.classList.remove('random-user__info-btn--active');
      });

      btn.classList.add('random-user__info-btn--active');

      infoTitle.textContent = `My ${btn.dataset['title']} is`;
      infoValue.textContent = btn.dataset['info'];
    });
  });
}
