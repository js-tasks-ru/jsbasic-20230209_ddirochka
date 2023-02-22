function camelize(str) {
  let arr = str.split('');
  for ( let i = 0; i < arr.length; i ++) {
    if (arr[i] == '-') {
      arr.splice (i,1);
      arr[i] = arr[i].toUpperCase();
    }
  }
  result = arr.join('');
  return result;
}
