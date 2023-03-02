function showSalary(users, age) {
  return (users.filter(item => item.age <= age).map(data => `${data.name}, ${data.balance}`)).join('\n');
}
