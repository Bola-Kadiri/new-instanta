//Toggle Sidebar
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

//Toggle Item Sidebar
let feeTypeSidebar = document.querySelector(".feeType-sidebar");
let feeTypeSidebarBtn = document.querySelector(".feeType-sidebarBtn");

feeTypeSidebarBtn.addEventListener('click', () => {
    feeTypeSidebar.classList.toggle('active');
})

//Initiate Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.addEventListener('DOMContentLoaded', () => {
    const feeTypes = document.querySelectorAll('.feeType-sidebar_content');
    const defaultImage = document.getElementById('default-image');
    const feeTypeContent = document.querySelector('.feeType-body_content');



    const feeTypeDetails = {
        1:{
            name: 'Agency Fee',
            description: '',
            type: 'Fee',
            payable: 'Agency',
            status: 'Active',
        },
        2:{
            name: 'Agency Fee',
            description: '',
            type: 'Fee',
            payable: 'Agency',
            status: 'Active',
        },
        3:{
            name: 'Agency Fee',
            description: '',
            type: 'Fee',
            payable: 'Agency',
            status: 'Active',
        },
        4:{
            name: 'Agency Fee',
            description: '',
            type: 'Fee',
            payable: 'Agency',
            status: 'Active',
        },
        5:{
            name: 'Agency Fee',
            description: '',
            type: 'Fee',
            payable: 'Agency',
            status: 'Active',
        },
        
        
    };

    
    const displayItemDetails = (details) => {
        document.getElementById('fee-name').innerText = details.name;
        document.getElementById('fee-description').innerText = details.description;
        document.getElementById('fee-type').innerText = details.type;
        document.getElementById('payable').innerText = details.payable;
        document.getElementById('feeType-status').innerText = details.status;
    }
    
    feeTypes.forEach(item => {
        item.addEventListener('click', () => {
            const itemId = item.dataset.id;
            const details = feeTypeDetails[itemId];
    
            if (details) {
                defaultImage.style.display = 'none';
                feeTypeContent.style.display = 'block';
                displayItemDetails(details)
            }
        })
    });
})

