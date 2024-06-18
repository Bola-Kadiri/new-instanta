//Toggle Sidebar
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

//Toggle Item Sidebar
let unitSidebar = document.querySelector(".unit-sidebar");
let unitSidebarBtn = document.querySelector(".unit-sidebarBtn");

unitSidebarBtn.addEventListener('click', () => {
    unitSidebar.classList.toggle('active');
})

//Initiate Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.addEventListener('DOMContentLoaded', () => {
    const units = document.querySelectorAll('.unit-sidebar_list');
    const unitsContent = document.querySelector('.unit-body_content');
    const defaultImage = document.getElementById('default-image');



    const unitDetails = {
        1:{
            code: "A",
            description: "Amperes",
            symbol: "Amperes",
            type: "Other",
            status: "Active",
        },
        2:{
            code: "CG",
            description: "Amperes",
            symbol: "Amperes",
            type: "Other",
            status: "Active",
        },
        3:{
            code: "CL",
            description: "Amperes",
            symbol: "Amperes",
            type: "Other",
            status: "Active",
        },
        4:{
            code: "CM",
            description: "Amperes",
            symbol: "Amperes",
            type: "Other",
            status: "Active",
        },
        5:{
            code: "C",
            description: "Amperes",
            symbol: "Amperes",
            type: "Other",
            status: "Active",
        },
        6:{
            code: "CM3",
            description: "Amperes",
            symbol: "Amperes",
            type: "Other",
            status: "Active",
        },
        7:{
            code: "DM3",
            description: "Amperes",
            symbol: "Amperes",
            type: "Other",
            status: "Active",
        }
        
    
        
    };


    const displayItemDetails = (details) => {
        document.getElementById('code-type').innerText = details.code;
        document.getElementById('description-type').innerText = details.description;
        document.getElementById('symbol-type').innerText = details.symbol;
        document.getElementById('type-type').innerText = details.type;
        document.getElementById('status-type').innerText = details.status;
    }
    
    units.forEach(item => {
        item.addEventListener('click', () => {
            const itemId = item.dataset.id;
            const details = unitDetails[itemId];
    
            if (details) {
                defaultImage.style.display = 'none';
                unitsContent.style.display = 'block';
                displayItemDetails(details)
            }
        })
    });
})

