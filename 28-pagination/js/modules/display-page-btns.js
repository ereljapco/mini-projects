function displayPageBtns(list) {
  const followers = list;
  const pageCount = Math.ceil(followers.length / 10);

  let displayBtns = ``;

  for (let i = 0; i < pageCount; i++) {
    if (i === 0) {
      displayBtns += `<button class="users__page-btn users__page-btn--active" data-index="${i}">
      ${i + 1}
      </button>`;
    } else {
      displayBtns += `<button class="users__page-btn" data-index="${i}">${
        i + 1
      }</button>`;
    }
  }

  return `<button class="users__prev-btn">Prev</button> 
    ${displayBtns}
    <button class="users__next-btn">Next</button>`;
}

export default displayPageBtns;
