function displayBreadcrumb(productName) {
  const currenPageContainer = document.querySelector(
    '.breadcrumb__current-page'
  );

  if (productName) {
    currenPageContainer.innerText = productName;
    document.title = `${productName.toUpperCase()} | Comfy`;
    return;
  }

  currenPageContainer.innerText = 'Products';
}

export default displayBreadcrumb;
