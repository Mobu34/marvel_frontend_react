const paginationFunc = (total, setPages, p, skip) => {
  const splittedPage = p.split("_");
  const page = Number(splittedPage[1]);
  const newPages = [];
  let i = 0,
    j = 1;
  while (i < total) {
    if (page < 7) {
      if (newPages.length < 7) {
        newPages.push(j);
      } else if (newPages.length === 7) {
        newPages.push("...");
      } else if (total - i <= 100) {
        newPages.push(j);
      }
    } else if (total - skip < 500) {
      if (i === 0) {
        newPages.push(j);
      } else if (newPages.length === 1) {
        newPages.push("...");
      } else if (j >= page - 5) {
        newPages.push(j);
      } else if (total - i <= 100) {
        newPages.push(j);
      }
    } else if (page >= 7) {
      if (i === 0) {
        newPages.push(j);
      } else if (newPages.length === 1 || newPages.length === 7) {
        newPages.push("...");
      } else if (newPages.length === 2) {
        newPages.push(page - 2);
      } else if (newPages.length === 3) {
        newPages.push(page - 1);
      } else if (newPages.length === 4) {
        newPages.push(page);
      } else if (newPages.length === 5) {
        newPages.push(page + 1);
      } else if (newPages.length === 6) {
        newPages.push(page + 2);
      } else if (total - i <= 100) {
        newPages.push(j);
      }
    }

    j++;
    i = i + 100;
  }
  setPages(newPages);
};

export default paginationFunc;
