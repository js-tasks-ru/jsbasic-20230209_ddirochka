function highlight(table) {
  let statusIndex
  let genderIndex
  let ageIndex

  table
    .querySelectorAll('thead td')
    .forEach((headCell, idx) => {
      if (headCell.innerText === 'Status') {
        statusIndex = idx
      }
      if (headCell.innerText === 'Gender') {
        genderIndex = idx
      }
      if (headCell.innerText === 'Age') {
        ageIndex = idx
      }
    });

    table
    .querySelectorAll('tbody tr')
    .forEach((tableRowElement, rIdx) => {

      tableRowElement
        .querySelectorAll('td')
        .forEach((tableCellElement, cIdx) => {

          if (cIdx === statusIndex) {
            if (tableCellElement.dataset.hasOwnProperty('available')) {
              if (tableCellElement.dataset.available === "true") {
                tableRowElement.classList.add('available')
              }
              if (tableCellElement.dataset.available === "false") {
                tableRowElement.classList.add('unavailable')
              }
            } else {
              tableRowElement.setAttribute('hidden', true)
            }
          }

          if (cIdx === genderIndex) {
            if (tableCellElement.innerText === 'm') {
              tableRowElement.classList.add('male')
            }
            if (tableCellElement.innerText === 'f') {
              tableRowElement.classList.add('female')
            }
          }

          if (cIdx === ageIndex) {
            if (parseInt(tableCellElement.innerText) < 18) {
              tableRowElement.style="text-decoration: line-through"
            }
          }

      
        });
    
    });
}
