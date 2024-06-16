//Toggle Sidebar
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

//Toggle Item Sidebar
let vendorSidebar = document.querySelector(".vendor-sidebar");
let vendorSidebarBtn = document.querySelector(".vendor-sidebarBtn");

vendorSidebarBtn.addEventListener('click', () => {
    vendorSidebar.classList.toggle('active');
})

//Initiate Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.addEventListener('DOMContentLoaded', () => {
    const vendors = document.querySelectorAll('.vendor-sidebar_content');
    const defaultImage = document.getElementById('default-image');
    const vendorsContent = document.querySelector('.vendor-body_content');



    const vendorDetails = {
        1:{
            type: 'Company',
            code: 'ALP008',
            name: 'Alpha Mead Facilities Management Services',
            addVat: 'No',
            address: '6 Mobolaji Johnson Avenue, Ikoyi',
            status: 'Active',
        },
        2:{
            type: 'Company',
            code: 'ALP008',
            name: 'Alpha Mead Facilities Management Services',
            addVat: 'No',
            address: '6 Mobolaji Johnson Avenue, Ikoyi',
            status: 'Active',
        },
        3:{
            type: 'Company',
            code: 'ALP008',
            name: 'Alpha Mead Facilities Management Services',
            addVat: 'N',
            address: '6 Mobolaji Johnson Avenue, Ikoyi',
            status: 'Active',
        },
        4:{
            type: 'Company',
            code: 'ALP008',
            name: 'Alpha Mead Facilities Management Services',
            addVat: 'N',
            address: '6 Mobolaji Johnson Avenue, Ikoyi',
            status: 'Active',
        },
        5:{
            type: 'Company',
            code: 'ALP008',
            name: 'Alpha Mead Facilities Management Services',
            addVat: 'N',
            address: '6 Mobolaji Johnson Avenue, Ikoyi',
            status: 'Active',
        },
    };

    
    const displayItemDetails = (details) => {
        document.getElementById('type').innerText = details.type;
        document.getElementById('code').innerText = details.code;
        document.getElementById('type-name').innerText = details.name;
        document.getElementById('add-vat').innerText = details.addVat;
        document.getElementById('address').innerText = details.address;
        document.getElementById('status').innerText = details.status;
    }
    
    vendors.forEach(item => {
        item.addEventListener('click', () => {
            const itemId = item.dataset.id;
            const details = vendorDetails[itemId];
    
            if (details) {
                defaultImage.style.display = 'none';
                vendorsContent.style.display = 'block';
                displayItemDetails(details)
            }
        })
    });
})

