// here we will create some dummy texts, not relevant for the demo
const dummyArea = document.getElementById('dummy-area');
for (let i = 0; i < 15; i++) {
  const p = document.createElement('p');
  p.textContent = 'Some dummy text';
  dummyArea.appendChild(p);
}

// here we will create some dummy table, not relevant for the demo except that we want one of the rows to be speacial
const tableBody = document.getElementById('table-body');
for (let i = 0; i < 30; i++) {
  const tr = document.createElement('tr');
  if (i === 23) {
    tr.classList.add('special');
  }
  for (let j = 0; j < 3; j++) {
    const td = document.createElement('td');
    td.textContent = 'Some random text';
    tr.appendChild(td);
  }
  tableBody.appendChild(tr);
}

const button = document.getElementById('btn');
button.addEventListener('click', () => {
  const specialRow = document.querySelector('tr.special');

  // with the below method called on the element we will make it visible on the screen by scrolling both body and table scrolls
  specialRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
