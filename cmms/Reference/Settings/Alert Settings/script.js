//Toggle Sidebar
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

//Toggle Item Sidebar
let alertSidebar = document.querySelector(".alert-sidebar");
let alertSidebarBtn = document.querySelector(".alert-sidebarBtn");

alertSidebarBtn.addEventListener('click', () => {
    alertSidebar.classList.toggle('active');
})

//Initiate Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.addEventListener('DOMContentLoaded', () => {
    const alerts = document.querySelectorAll('.alert-sidebar_content');
    const defaultImage = document.getElementById('default-image');
    const alertContent = document.querySelector('.alert-body_content');



    const alertDetails = {
        1:{
            type: 'Facility/Location',
            location: '1 Moore Road',
        },
        2:{
            type: 'Facility/Location',
            location: '1 Moore Road',
        },
        3:{
            type: 'Facility/Location',
            location: '1 Moore Road',
        },
        4:{
            type: 'Facility/Location',
            location: '1 Moore Road',
        },
        5:{
            type: 'Facility/Location',
            location: '1 Moore Road',
        },
        
        
    };

    
    const displayItemDetails = (details) => {
        document.getElementById('type').innerText = details.type;
        document.getElementById('location').innerText = details.location;
    }
    
    alerts.forEach(item => {
        item.addEventListener('click', () => {
            const itemId = item.dataset.id;
            const details = alertDetails[itemId];
    
            if (details) {
                defaultImage.style.display = 'none';
                alertContent.style.display = 'block';
                displayItemDetails(details)
            }
        })
    });
})

