function makeFriendsList(friends) {
  let ul = document.createElement('ul');

  for (item of friends){
    let li = document.createElement('li');
    li.innerHTML = friends.map(item => item.firstName + ' ' +  item.lastName).join('\n');
    ul.append(li);
  }
  return ul;
 }
