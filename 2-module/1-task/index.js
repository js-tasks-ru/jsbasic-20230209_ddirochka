function sumSalary(salaries) {
  let result = 0; // Cумма зарплаты всей команды
  for (let key in salaries) {
    if (Number.isFinite(salaries[key])) {
      result += salaries[key];
    }
  }
  return result;
}
let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
};
