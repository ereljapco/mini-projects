function displayPage(list, pageBtns, index) {
  const usersContainer = document.querySelector('.users-container');
  const followers = list;
  const start = index * 10;
  const end = start + 10;

  localStorage.setItem('index', index);

  const currentBtn = pageBtns.find((btn) => {
    return index == btn.dataset['index'];
  });

  pageBtns.forEach((btn) => {
    if (btn.classList.contains('users__page-btn--active')) {
      btn.classList.remove('users__page-btn--active');
    }
  });

  currentBtn.classList.add('users__page-btn--active');

  const displayFollowers = followers
    .slice(start, end)
    .map((follower) => {
      const { login: username, avatar_url: img, html_url: url } = follower;
      return `<article class="user">
                    <div class="user__img-container">
                      <img
                        class="user__img"
                        src="${img}"
                        alt="${username}"
                      />
                    </div>
                    <h2 class="user__name">${username}</h2>
                    <a class="user__profile-link" href="${url}">view profile</a>
                  </article>`;
    })
    .join('');

  usersContainer.innerHTML = displayFollowers;
}

export default displayPage;
