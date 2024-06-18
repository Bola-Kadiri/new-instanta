//Toggle Sidebar
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})


//Initiate Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

//Displaying Table Content and dynamically control the length of the table based on the select input

const userFacilityBody = document.getElementById('userFacility-body');
const userFacilityRowCount = document.getElementById('userFacility-rows')
const secondModalContent = document.querySelector('second-modal_body');
const secondModal = document.querySelector('.second');
const userFacilityData = [
  {
    number: '1',
    firstName: 'Adebayo',
    lastName: "Awolola",
    email: "adebayo.awolola@alphamead.com",
    loginCount: "0",
    workCount: "0",
    visitorCount: "0",
    itemCount: "0",
  },
  {
    number: '2',
    firstName: 'Oluwatosin',
    lastName: "Oyeleye",
    email: "oluwatosin.oyeleye@alphamead.com",
    loginCount: "0",
    workCount: "0",
    visitorCount: "0",
    itemCount: "0",
  },
  {
    number: '3',
    firstName: 'Tine',
    lastName: "Eboh",
    email: "tine.eboh@alphamead.com",
    loginCount: "0",
    workCount: "0",
    visitorCount: "0",
    itemCount: "0",
  },
  {
    number: '4',
    firstName: 'Oluseyi',
    lastName: "Ekundayo",
    email: "oluseyi.ekundayo@alphamead.com",
    loginCount: "0",
    workCount: "0",
    visitorCount: "0",
    itemCount: "0",
  },
  {
    number: '5',
    firstName: 'Jane',
    lastName: "Edoze-oye",
    email: "jane.edoze-oye@alphamead.com",
    loginCount: "0",
    workCount: "0",
    visitorCount: "0",
    itemCount: "0",
  },
  {
    number: '6',
    firstName: 'Ayo',
    lastName: "Bomolope",
    email: "ayo.bomolope@alphamead.com",
    loginCount: "0",
    workCount: "0",
    visitorCount: "0",
    itemCount: "0",
  },
  {
    number: '7',
    firstName: 'Oluwatoyosi',
    lastName: "Beyioku-alase",
    email: "oluwatoyosi.beyioku@alphamead.com",
    loginCount: "0",
    workCount: "0",
    visitorCount: "0",
    itemCount: "0",
  },
  {
    number: '8',
    firstName: 'Emmanuel',
    lastName: "Ojomu",
    email: "emmanuel.ojomu@alphamead.com",
    loginCount: "0",
    workCount: "0",
    visitorCount: "0",
    itemCount: "0",
  },
  {
    number: '9',
    firstName: 'Olufemi',
    lastName: "Abass",
    email: "olufemi.abass@alphamead.com",
    loginCount: "0",
    workCount: "0",
    visitorCount: "0",
    itemCount: "0",
  },
  {
    number: '10',
    firstName: 'Hasta',
    lastName: "Cherry",
    email: "hasta.cherry@alphamead.com",
    loginCount: "0",
    workCount: "0",
    visitorCount: "0",
    itemCount: "0",
  },
  
  
];

function populateUserFacilityTable() {
  userFacilityData.forEach(item => {
    const row = document.createElement('tr');
  
    const col1 = document.createElement('td');
    col1.innerHTML = item.number;
    col1.classList.add('table-row')
    row.appendChild(col1);
  
    const col2 = document.createElement('td');
    col2.innerHTML = item.firstName;
    col2.classList.add('table-row')
    row.appendChild(col2);
  
    const col3 = document.createElement('td');
    col3.innerHTML = item.lastName;
    col3.classList.add('table-row')
    row.appendChild(col3);
  
    const col4 = document.createElement('td');
    col4.innerHTML = item.email;
    col4.classList.add('table-row')
    row.appendChild(col4);
  
    const col5 = document.createElement('td');
    col5.innerHTML = item.loginCount;
    col5.classList.add('table-row')
    row.appendChild(col5);
  
    const col6 = document.createElement('td');
    col6.innerHTML = item.workCount;
    col6.classList.add('table-row')
    row.appendChild(col6);
  
    const col7 = document.createElement('td');
    col7.innerHTML = item.visitorCount;
    col7.classList.add('table-row')
    row.appendChild(col7);
  
    const col8 = document.createElement('td');
    col8.innerHTML = item.itemCount;
    col8.classList.add('table-row')
    row.appendChild(col8);
  
    userFacilityBody.appendChild(row);
  })
}

function updateRows() {
  const rowCount = parseInt(userFacilityRowCount.value);
  const rows = userFacilityBody.children;
  for (let i = 0; i < rows.length; i++) {
    if (i < rowCount) {
      rows[i].style.display = ''; // Show the row
    } else {
      rows[i].style.display = 'none'; // Hide the row
    }
  }
}

userFacilityRowCount.addEventListener('change', updateRows);

populateUserFacilityTable();

//Logic for the spinner and the modal
const loadButton = document.getElementById('load-button');
const loader = document.getElementById('loader');
const myModal = new bootstrap.Modal(document.getElementById('ExtralargeModal'));

loadButton.addEventListener('click', () => {

  loader.style.display = 'block';

  setTimeout(() => {
    loader.style.display = 'none';
    myModal.show();
  }, 3000);
});

//Logic for search functionality

function searchTable() {
  const searchQuery = document.getElementById('searchInput').value.toLowerCase();

  const rows = tableBody.children;

  for (let i = 0; i < rows.length; i++) {
    const rowData = rows[i].innerText.toLowerCase();
    if (rowData.includes(searchQuery)) {
      rows[i].style.display = ''; // Show the row if it matches the search query
    } else {
      rows[i].style.display = 'none'; // Hide the row if it doesn't match
    }
  }
}

