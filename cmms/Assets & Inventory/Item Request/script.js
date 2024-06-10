//Toggle Sidebar
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

//Toggle Item Sidebar
let itemSidebar = document.querySelector(".item-sidebar");
let itemsidebarBtn = document.querySelector(".item-sidebarBtn");

itemsidebarBtn.addEventListener('click', () => {
    itemSidebar.classList.toggle('active');
})

//Initiate Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item-sidebar_content');
    const defaultImage = document.getElementById('default-image');
    const itemsContent = document.querySelector('.item-body_content');



    const detailsMap = {
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

    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    
    for (const id in detailsMap) {
        const detail = detailsMap[id];
        const formattedDate = detail.date.toLocaleDateString('en-GB', options)
        detail.formattedDate = formattedDate;
    }
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
    
    items.forEach(item => {
        item.addEventListener('click', () => {
            const itemId = item.dataset.id;
            const details = detailsMap[itemId];
    
            if (details) {
                defaultImage.style.display = 'none';
                itemsContent.style.display = 'block';
                displayItemDetails(details)
            }
        })
    });
})

