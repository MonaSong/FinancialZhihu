export const format = value => {
  var date = new Date(value);
  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var day = date.getDate();
  var hh = date.getHours()<10 ? '0' + date.getHours() : date.getHours();
  var mm = date.getMinutes()<10 ? '0' + date.getMinutes() : date.getMinutes();
  return `${year}-${month}-${day} ${hh}:${mm}`;
}

