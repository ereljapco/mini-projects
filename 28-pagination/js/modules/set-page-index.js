function setPageIndex(followersList, btn) {
  const pageCount = Math.ceil(followersList.length / 10);
  let index = localStorage.getItem('index');

  if (btn === 'next') {
    if (index == pageCount - 1) {
      index = 0;
    } else {
      index++;
    }

    return index;
  }

  if (index == 0) {
    index = pageCount - 1;
  } else {
    index--;
  }

  return index;
}

export default setPageIndex;
