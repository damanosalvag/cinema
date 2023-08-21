export function validateDataList(data) { 
  const idList = data
    .map((movie) => (movie.title ? movie.id : null))
    .filter((item) => item !== null);
  const trimmedList = idList.slice(0, 9);
  return trimmedList;
};
