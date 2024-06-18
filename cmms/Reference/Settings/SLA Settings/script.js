//Toggle Sidebar
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

//Toggle Item Sidebar
let slaSidebar = document.querySelector(".sla-sidebar");
let slaSidebarBtn = document.querySelector(".sla-sidebarBtn");

slaSidebarBtn.addEventListener('click', () => {
    slaSidebar.classList.toggle('active');
})

//Initiate Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.addEventListener('DOMContentLoaded', () => {
    const sla = document.querySelectorAll('.sla-sidebar_content');
    const defaultImage = document.getElementById('default-image');
    const slaContent = document.querySelector('.sla-body_content');



    const slaDetails = {
        1:{
            number: '0000006',
            type: 'Use',
            category: 'Category 1',
            date: new Date(),
            department: 'Central Operations',
            status: 'Submitted',
            location: 'New Head Office'
        },
    
        2:{
            number: '0000005',
            type: 'Use',
            category: 'Category 2',
            date: new Date(),
            department: 'Central Operations',
            status: 'Submitted',
            location: 'New Head Office'
        }
    };

    const displayItemDetails = (details) => {
        document.getElementById('number').innerText = details.number
        document.getElementById('type').innerText = details.type;
        document.getElementById('category').innerText = details.category;
        document.getElementById('date').innerText = details.formattedDate;
        document.getElementById('required-date').innerText = details.formattedDate;
        document.getElementById('item-department').innerText = details.department;
        document.getElementById('item-status').innerText = details.status;
        document.getElementById('location').innerText = details.location;
    }
    
    sla.forEach(item => {
        item.addEventListener('click', () => {
            const itemId = item.dataset.id;
            const details = slaDetails[itemId];
    
            if (details) {
                defaultImage.style.display = 'none';
                slaContent.style.display = 'block';
                displayItemDetails(details)
            }
        })
    });
})

