const paginationFunc = (total, setPages) => {
  console.log(setPages);
  const newPages = [];
  let i = 0,
    j = 1;
  while (i < total) {
    newPages.push(j);
    j++;
    i = i + 100;
  }
  setPages(newPages);
};

export default paginationFunc;
