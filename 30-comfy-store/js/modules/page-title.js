function displayPageTitle(productName) {
  document.title = `${productName.toUpperCase()} | Comfy`;

  const currentPageContainer = document.querySelector(
    '.breadcrumb__current-page'
  );

  if (currentPageContainer) {
    currentPageContainer.innerText = productName;
    return;
  }
}

export default displayPageTitle;
