export const getTotalPage = (totalPage, limit) => {
  return Math.ceil(totalPage / limit);
};

export const getPageArray = (tpage) => {
  let arr = [];
  for (let i = 0; i < tpage; i++) {
    arr.push(i + 1);
  }
  return arr;
};
