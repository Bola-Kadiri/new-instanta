//Toggle Sidebar
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

//Toggle Item Sidebar
let escalationSidebar = document.querySelector(".escalation-sidebar");
let escalationSidebarBtn = document.querySelector(".escalation-sidebarBtn");

escalationSidebarBtn.addEventListener('click', () => {
    escalationSidebar.classList.toggle('active');
})

//Initiate Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.addEventListener('DOMContentLoaded', () => {
    const escalations = document.querySelectorAll('.escalation-sidebar_content');
    const defaultImage = document.getElementById('default-image');
    const escalationContent = document.querySelector('.escalation-body_content');



    const escalationDetails = {
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
        // document.querySelectorAll('.item-date').innerText = details.formattedDate;
    }
    
    escalations.forEach(item => {
        item.addEventListener('click', () => {
            const itemId = item.dataset.id;
            const details = escalationDetails[itemId];
    
            if (details) {
                defaultImage.style.display = 'none';
                escalationContent.style.display = 'block';
                displayItemDetails(details)
            }
        })
    });
})

