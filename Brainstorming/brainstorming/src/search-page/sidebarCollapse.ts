function sidebarCollapse() {
  const divElement = document.getElementById("sidebar");

  if (!divElement) {
    console.error("Div element not found");
    return;
  }

  if (divElement.classList.contains("is-collapsed")) {
    divElement.classList.remove("is-collapsed");
  } else {
    divElement.classList.add("is-collapsed");
  }

  const wrapperElement = document.getElementById("wrapper");

  if (!wrapperElement) {
    console.error("Div element not found");
    return;
  }

  if (wrapperElement.classList.contains("is-collapsed")) {
    wrapperElement.classList.remove("is-collapsed");
  } else {
    wrapperElement.classList.add("is-collapsed");
  }

  const createHidden = document.getElementById("create-div");

  if (!createHidden) {
    console.error("Div element not found");
    return;
  }

  if (createHidden.classList.contains("create-collapsed")) {
    createHidden.classList.remove("create-collapsed");
  } else {
    createHidden.classList.add("create-collapsed")
  }
}

export default sidebarCollapse;
