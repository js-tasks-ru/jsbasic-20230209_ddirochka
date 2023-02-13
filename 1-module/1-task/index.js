function factorial(n) {
  let result = 1; // итоговый результат
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return (n == 1 || n == 0) ? result : result;
}
