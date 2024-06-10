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

const tableBody = document.getElementById('tableBody');
const rowCountSelect = document.getElementById('rows')
const secondModalContent = document.querySelector('second-modal_body');
const secondModal = document.querySelector('.second');
const tableData = [
  {
    id: 1,
    items: '1',
    category: '331',
    subCategory: "1KZ04885",
    model: "Generator",
    partNumber: "Generator 1(1250KVA)",
    assetTag: "Ado Bayero Mall Generator Plant",
    serialNumber: "9",
    quantity: "625,112.67",
    unitPrice: "0",
    amount: "0",
    reorderLevel: "11,047,586.23",
    minimum: "0",
    maximum: "0",
    location: "",
  },
  {
    id: 2,
    items: '2',
    category: '331',
    subCategory: "1KZ04885",
    model: "Generator",
    partNumber: "Generator 1(1250KVA)",
    assetTag: "Ado Bayero Mall Generator Plant",
    serialNumber: "9",
    quantity: "625,112.67",
    unitPrice: "0",
    amount: "0",
    reorderLevel: "11,047,586.23",
    minimum: "0",
    maximum: "0",
    location: "",
  },
  {
    id: 3,
    items: '3',
    category: '331',
    subCategory: "1KZ04885",
    model: "Generator",
    partNumber: "Generator 1(1250KVA)",
    assetTag: "Ado Bayero Mall Generator Plant",
    serialNumber: "9",
    quantity: "625,112.67",
    unitPrice: "0",
    amount: "0",
    reorderLevel: "11,047,586.23",
    minimum: "0",
    maximum: "0",
    location: "",
  },
  {
    id: 4,
    items: '4',
    category: '331',
    subCategory: "1KZ04885",
    model: "Generator",
    partNumber: "Generator 1(1250KVA)",
    assetTag: "Ado Bayero Mall Generator Plant",
    serialNumber: "9",
    quantity: "625,112.67",
    unitPrice: "0",
    amount: "0",
    reorderLevel: "11,047,586.23",
    minimum: "0",
    maximum: "0",
    location: "",
  },
  {
    id: 5,
    items: '5',
    category: '331',
    subCategory: "1KZ04885",
    model: "Generator",
    partNumber: "Generator 1(1250KVA)",
    assetTag: "Ado Bayero Mall Generator Plant",
    serialNumber: "9",
    quantity: "625,112.67",
    unitPrice: "0",
    amount: "0",
    reorderLevel: "11,047,586.23",
    minimum: "0",
    maximum: "0",
    location: "",
  },
  {
    id: 6,
    items: '6',
    category: '331',
    subCategory: "1KZ04885",
    model: "Generator",
    partNumber: "Generator 1(1250KVA)",
    assetTag: "Ado Bayero Mall Generator Plant",
    serialNumber: "9",
    quantity: "625,112.67",
    unitPrice: "0",
    amount: "0",
    reorderLevel: "11,047,586.23",
    minimum: "0",
    maximum: "0",
    location: "",
  },
  {
    id: 7,
    items: '7',
    category: '331',
    subCategory: "1KZ04885",
    model: "Generator",
    partNumber: "Generator 1(1250KVA)",
    assetTag: "Ado Bayero Mall Generator Plant",
    serialNumber: "9",
    quantity: "625,112.67",
    unitPrice: "0",
    amount: "0",
    reorderLevel: "11,047,586.23",
    minimum: "0",
    maximum: "0",
    location: "",
  },
  {
    id: 8,
    items: '8',
    category: '331',
    subCategory: "1KZ04885",
    model: "Generator",
    partNumber: "Generator 1(1250KVA)",
    assetTag: "Ado Bayero Mall Generator Plant",
    serialNumber: "9",
    quantity: "625,112.67",
    unitPrice: "0",
    amount: "0",
    reorderLevel: "11,047,586.23",
    minimum: "0",
    maximum: "0",
    location: "",
  },
  {
    id: 9,
    items: '9',
    category: '331',
    subCategory: "1KZ04885",
    model: "Generator",
    partNumber: "Generator 1(1250KVA)",
    assetTag: "Ado Bayero Mall Generator Plant",
    serialNumber: "9",
    quantity: "625,112.67",
    unitPrice: "0",
    amount: "0",
    reorderLevel: "11,047,586.23",
    minimum: "0",
    maximum: "0",
    location: "",
  },
  {
    id: 10,
    items: '10',
    category: '331',
    subCategory: "1KZ04885",
    model: "Generator",
    partNumber: "Generator 1(1250KVA)",
    assetTag: "Ado Bayero Mall Generator Plant",
    serialNumber: "9",
    quantity: "625,112.67",
    unitPrice: "0",
    amount: "0",
    reorderLevel: "11,047,586.23",
    minimum: "0",
    maximum: "0",
    location: "",
  },
  
  
];

function populateTable() {
  tableData.forEach(item => {
    const row = document.createElement('tr');
  
    const col1 = document.createElement('td');
    col1.innerHTML = item.items;
    col1.classList.add('table-row')
    row.appendChild(col1);
  
    const col2 = document.createElement('td');
    col2.innerHTML = item.category;
    col2.classList.add('table-row')
    row.appendChild(col2);
  
    const col3 = document.createElement('td');
    col3.innerHTML = item.subCategory;
    col3.classList.add('table-row')
    row.appendChild(col3);
  
    const col4 = document.createElement('td');
    col4.innerHTML = item.model;
    col4.classList.add('table-row')
    row.appendChild(col4);
  
    const col5 = document.createElement('td');
    col5.innerHTML = item.partNumber;
    col5.classList.add('table-row')
    row.appendChild(col5);
  
    const col6 = document.createElement('td');
    col6.innerHTML = item.assetTag;
    col6.classList.add('table-row')
    row.appendChild(col6);
  
    const col7 = document.createElement('td');
    col7.innerHTML = item.serialNumber;
    col7.classList.add('table-row')
    row.appendChild(col7);
  
    const col8 = document.createElement('td');
    col8.innerHTML = item.quantity;
    col8.classList.add('table-row')
    row.appendChild(col8);
  
    const col9 = document.createElement('td');
    col9.innerHTML = item.unitPrice;
    col9.classList.add('table-row')
    row.appendChild(col9);
  
    const col10 = document.createElement('td');
    col10.innerHTML = item.amount;
    col10.classList.add('table-row')
    row.appendChild(col10);
  
    const col11 = document.createElement('td');
    col11.innerHTML = item.reorderLevel
    col11.classList.add('table-row')
    row.appendChild(col11);
  
    const col12 = document.createElement('td');
    col12.innerHTML = item.minimum;
    col12.classList.add('table-row')
    row.appendChild(col12);
  
    const col13 = document.createElement('td');
    col13.innerHTML = item.maximum;
    col13.classList.add('table-row')
    row.appendChild(col13);
  
    const col14 = document.createElement('td');
    col14.innerHTML = item.location;
    col14.classList.add('table-row')
    row.appendChild(col14);
  
    tableBody.appendChild(row);
  })
}

function updateRows() {
  const rowCount = parseInt(rowCountSelect.value);
  const rows = tableBody.children;
  for (let i = 0; i < rows.length; i++) {
    if (i < rowCount) {
      rows[i].style.display = ''; // Show the row
    } else {
      rows[i].style.display = 'none'; // Hide the row
    }
  }
}

rowCountSelect.addEventListener('change', updateRows);

populateTable();

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

//Logic for the minimize and maximize functionality for both modals

function showIcons() {
  const fullscreenIcon = document.querySelector('.fullscreen');
  const minimizedIcon = document.querySelector('.minimized');
  const arrowIcon = document.querySelector('.arrow');
  fullscreenIcon.style.display = 'inline-block';
  minimizedIcon.style.display = 'inline-block';
  arrowIcon.style.display = 'none'
}

function hideIcons() {
  const fullscreenIcon = document.querySelector('.fullscreen');
  const minimizedIcon = document.querySelector('.minimized');
  const arrowIcon = document.querySelector('.arrow');
  fullscreenIcon.style.display = 'none';
  minimizedIcon.style.display = 'none';
  arrowIcon.style.display = 'inline-block'
}
 

function toggleModalSize() {
  const modalDialog = document.querySelector('.modal-dialog');

  if (modalDialog.classList.contains('modal-xl')) {
    // Maximizing to fullscreen
    modalDialog.classList.remove('modal-xl');
    modalDialog.classList.add('modal-fullscreen');
  } else {
    // Minimizing back to default size
    modalDialog.classList.remove('modal-fullscreen');
    modalDialog.classList.add('modal-xl');
  }
}

function toggleMiniSize() {
  const modalDialog = document.querySelector('.modal-dialog');

  if (modalDialog.classList.contains('modal-xl')) {
      // Maximizing to fullscreen
      modalDialog.classList.remove('modal-xl');
      modalDialog.classList.add('modal-lg');
  } else {
      // Minimizing back to default size
      modalDialog.classList.remove('modal-lg');
      modalDialog.classList.add('modal-xl');
  }
}



//Modal for each row
tableBody.querySelectorAll('tr').forEach(row => {
  row.setAttribute('data-bs-toggle', 'modal')
  row.setAttribute('data-bs-target', '#rowDetailsModal')
  row.addEventListener('click', () => {
    const data = Array.from(row.children).map(cell => cell.innerHTML)
    const modal = document.getElementById('rowDetailsModal');
    modal.querySelector('#name').innerHTML = '#' + data[0]
    modal.querySelector('#category').innerHTML = data[1]
    modal.querySelector('#subcategory').innerHTML = data[2]
    modal.querySelector('#model').innerHTML = data[3]
    modal.querySelector('#serial').innerHTML = data[4]
    modal.querySelector('#asset').innerHTML = data[5]
    modal.querySelector('#log').innerHTML = data[6]
    modal.querySelector('#quantity').innerHTML = data[7]
    modal.querySelector('#unit-price').innerHTML = data[8]
    modal.querySelector('#location').innerHTML = data[13]
    modal.querySelector('#status').innerHTML = data[15]
    modal.style.display = 'block';
  })
})


const rowDetailsModal = document.getElementById('rowDetailsModal');

loadButton.addEventListener('click', () => {

  loader.style.display = 'block';

  setTimeout(() => {
    loader.style.display = 'none';
    rowDetailsModal.show();
  }, 3000);
});


