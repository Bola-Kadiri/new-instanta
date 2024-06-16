//Toggle Sidebar
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

//Toggle Item Sidebar
let departmentSidebar = document.querySelector(".department-sidebar");
let departmentSidebarBtn = document.querySelector(".department-sidebarBtn");

departmentSidebarBtn.addEventListener('click', () => {
    departmentSidebar.classList.toggle('active');
})

//Initiate Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.addEventListener('DOMContentLoaded', () => {
    const departments = document.querySelectorAll('.department-sidebar_content');
    const defaultImage = document.getElementById('default-image');
    const departmentContent = document.querySelector('.department-body_content');



    const departmentDetails = {
        1:{
            code: 'AMG 1',
            name: 'ADMIN',
            status: 'Active',
        },
        2:{
            code: 'AMF',
            name: 'AMFacilities',
            status: 'Active',
        },
        3:{
            code: 'AMF',
            name: 'AMFacilities',
            status: 'Active',
        },
        4:{
            code: 'AMF',
            name: 'AMFacilities',
            status: 'Active',
        },
        5:{
            code: 'AMF',
            name: 'AMFacilities',
            status: 'Active',
        },
        
    };

    
    const displayItemDetails = (details) => {
        document.getElementById('code').innerText = details.code;
        document.getElementById('type-name').innerText = details.name;
        document.getElementById('status').innerText = details.status;
    }
    
    departments.forEach(item => {
        item.addEventListener('click', () => {
            const itemId = item.dataset.id;
            const details = departmentDetails[itemId];
    
            if (details) {
                defaultImage.style.display = 'none';
                departmentContent.style.display = 'block';
                displayItemDetails(details)
            }
        })
    });
})

