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
    const defaultImage = document.getElementById('default-image')



    const detailsMap = {
        1:{
            code: "SC-3930",
            name: "Access",
            type: "Asset",
            category: "Elvs",
            unit: "Piece",
            store: "No",
            serial: "No",
            part: "No",
            expiry: "No",
            status: "In Progress",
        },
    
        2:{
            code: "SC-3930",
            name: "Access",
            type: "Asset",
            category: "Elvs",
            unit: "Piece",
            store: "No",
            serial: "No",
            part: "No",
            expiry: "No",
            status: "In Progress",
        },

        3:{
            code: "SC-3930",
            name: "Access",
            type: "Asset",
            category: "Elvs",
            unit: "Piece",
            store: "No",
            serial: "No",
            part: "No",
            expiry: "No",
            status: "In Progress",
        },

        4:{
            code: "SC-3930",
            name: "Access",
            type: "Asset",
            category: "Elvs",
            unit: "Piece",
            store: "No",
            serial: "No",
            part: "No",
            expiry: "No",
            status: "In Progress",
        },

        5:{
            code: "SC-3930",
            name: "Access",
            type: "Asset",
            category: "Elvs",
            unit: "Piece",
            store: "No",
            serial: "No",
            part: "No",
            expiry: "No",
            status: "In Progress",
        },

        6:{
            code: "SC-3930",
            name: "Access",
            type: "Asset",
            category: "Elvs",
            unit: "Piece",
            store: "No",
            serial: "No",
            part: "No",
            expiry: "No",
            status: "In Progress",
        },

        7:{
            code: "SC-3930",
            name: "Access",
            type: "Asset",
            category: "Elvs",
            unit: "Piece",
            store: "No",
            serial: "No",
            part: "No",
            expiry: "No",
            status: "In Progress",
        },

        8:{
            code: "SC-3930",
            name: " Access",
            type: "Asset",
            category: "Elvs",
            unit: "Piece",
            store: "No",
            serial: "No",
            part: "No",
            expiry: "No",
            status: "In Progress",
        },
    };


    const displayItemDetails = (details) => {
        document.getElementById('code-type').innerText = details.code
        document.getElementById('name-type').innerText = details.name;
        document.getElementById('type-type').innerText = details.type;
        document.getElementById('category-type').innerText = details.category;
        document.getElementById('unit-type').innerText = details.unit;
        document.getElementById('store-type').innerText = details.store;
        document.getElementById('serial-type').innerText = details.serial;
        document.getElementById('part-type').innerText = details.part;
        document.getElementById('expiry-type').innerText = details.expiry;
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

