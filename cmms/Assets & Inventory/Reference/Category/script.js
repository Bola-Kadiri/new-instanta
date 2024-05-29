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
    const items = document.querySelectorAll('.item-name_status');
    const itemsContent = document.querySelector('.item-body_content');
    const defaultImage = document.getElementById('default-image')



    const detailsMap = {
        1:{
            name: "Access Control",
            status: "In Progress",
        },
    
        2:{
            name: "Branded Materials",
            status: "Active",
        },

        3:{
            name: "Building Transportation",
            status: "Active",
        },

        4:{
            name: "Branded Materials",
            status: "Active",
        },

        5:{
            name: "Branded Materials",
            status: "Active",
        },

        6:{
            name: "Branded Materials",
            status: "Active",
        },

        7:{
            name: "Branded Materials",
            status: "Active",
        },

        8:{
            name: "Branded Materials",
            status: "Active",
        },
    };


    const displayItemDetails = (details) => {
        document.getElementById('name-type').innerText = details.name;
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

