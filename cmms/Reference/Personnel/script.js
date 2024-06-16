//Toggle Sidebar
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

//Toggle Item Sidebar
let personnelSidebar = document.querySelector(".personnel-sidebar");
let personnelSidebarBtn = document.querySelector(".personnel-sidebarBtn");

personnelSidebarBtn.addEventListener('click', () => {
    personnelSidebar.classList.toggle('active');
})

//Initiate Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.addEventListener('DOMContentLoaded', () => {
    const personnels = document.querySelectorAll('.personnel-sidebar_content');
    const defaultImage = document.getElementById('default-image');
    const personnelContent = document.querySelector('.personnel-body_content');



    const personnelDetails = {
        1:{
            staffNumber: '0113',
            firstName: 'Aji',
            middleName: '',
            lastName: 'Abana',
            facility: 'Yes',
        },
        2:{
            staffNumber: '',
            firstName: 'Peter',
            middleName: '',
            lastName: 'Abang',
            facility: 'Yes',
        },
        3:{
            staffNumber: '151266',
            firstName: 'Idris',
            middleName: 'Olawale',
            lastName: 'Abass',
            facility: 'Yes',
        },
        4:{
            staffNumber: '0109',
            firstName: 'Deborah',
            middleName: '',
            lastName: 'Abdul',
            facility: 'Yes',
        },
        5:{
            staffNumber: '191882',
            firstName: 'Peter',
            middleName: 'Adeola',
            lastName: 'Abdul',
            facility: 'Yes',
        },
        
        
        
        
    };

    
    const displayItemDetails = (details) => {
        document.getElementById('first-name').innerText = details.firstName;
        document.getElementById('last-name').innerText = details.lastName;
        document.getElementById('staff-number').innerText = details.staffNumber;
        document.getElementById('middle-name').innerText = details.middleName;
        document.getElementById('personnel-facility').innerText = details.facility;
    }
    
    personnels.forEach(item => {
        item.addEventListener('click', () => {
            const itemId = item.dataset.id;
            const details = personnelDetails[itemId];
    
            if (details) {
                defaultImage.style.display = 'none';
                personnelContent.style.display = 'block';
                displayItemDetails(details)
            }
        })
    });
})

