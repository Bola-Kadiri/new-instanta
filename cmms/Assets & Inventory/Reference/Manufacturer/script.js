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
    const items = document.querySelectorAll('.item-sidebar_list');
    const itemsContent = document.querySelector('.item-body_content');
    const defaultImage = document.getElementById('default-image');
    const nameStatusOne = document.getElementById('name-status-one')



    const detailsMap = {
        1:{
            name: nameStatusOne.innerHTML,
            category: "Mechanical",
            status: "Active",
        },
        2:{
            name: "1/4'",
            category: "Mechanical",
            status: "Active",
        },
        3:{
            name: "2451307819",
            category: "Mechanical",
            status: "Active",
        },
        4:{
            name: "3/4'",
            category: "Mechanical",
            status: "In Progress",
        },
        5:{
            name: "3/8'",
            category: "Mechanical",
            status: "In Progress",
        },
        6:{
            name: "5/8'",
            category: "Mechanical",
            status: "In Progress",
        },
        7:{
            name: "Ab",
            category: "Electrical",
            status: "In Progress",
        },
        8:{
            name: "Ab Coaster",
            category: "Recreational",
            status: "In Progress",
        },
    
        
    };


    const displayItemDetails = (details) => {
        document.getElementById('name-type').innerText = details.name;
        document.getElementById('category-type').innerText = details.category;
        document.getElementById('status-type').innerText = details.status;
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

