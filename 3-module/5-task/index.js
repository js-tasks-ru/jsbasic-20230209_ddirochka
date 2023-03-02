function getMinMax(inputData) {
  let array = inputData.split(' ').map(Number);
  let filteredArray = array.filter(item => isFinite(item))
  let min = Math.min( ...filteredArray)
  let max = Math.max( ...filteredArray)
  let result = {
    min,
    max,
  }
  return result;
}
