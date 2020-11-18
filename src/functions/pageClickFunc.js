const pageClickFunc = (p) => {
  let page;
  if (p) {
    const splittedPage = p.split("_");
    page = splittedPage[1];
  } else {
    page = 1;
  }
  return page;
};

export default pageClickFunc;
