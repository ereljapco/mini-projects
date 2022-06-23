function displayPage(list, start, end) {
  const followers = list;
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

  return displayFollowers;
}

export default displayPage;
