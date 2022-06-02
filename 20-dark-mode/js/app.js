const darkModeBtn = document.querySelector('.navbar__toggle-btn');
const blogPostsContainer = document.querySelector('.blog-posts-container');

darkModeBtn.addEventListener('click', () => {
  const body = document.body.classList.toggle('dark-mode');
});

const posts = blogPosts
  .map((blogPost) => {
    const { title, date, length, snippet } = blogPost;
    const formattedDate = moment(date).format('MMMM Do YYYY');

    return `<article class="blog-post">
            <h2 class="blog-post__title">${title}</h2>
            <div class="blog-post__info">
              <span class="blog-post__date">${formattedDate}</span>
              <span class="blog-post__min-read">${length} min read</span>
            </div>
            <p class="blog-post__text">
              ${snippet}
            </p>
          </article>`;
  })
  .join('');

blogPostsContainer.innerHTML = posts;
