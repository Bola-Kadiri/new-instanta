//Toggle Sidebar
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

//Toggle Item Sidebar
// let itemSidebar = document.querySelector(".item-sidebar");
// let itemsidebarBtn = document.querySelector(".item-sidebarBtn");

// itemsidebarBtn.addEventListener('click', () => {
//     itemSidebar.classList.toggle('active');
// })

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
            type: 'Company',
            code: 'AMF',
            name: 'AMFacilities',
            email: 'COPS@ALPHAMEAD.COM',
            phone: '07019999219',
            status: 'Active',
        },
        2:{
            type: 'Company',
            code: 'AMF',
            name: 'AMFacilities',
            email: 'COPS@ALPHAMEAD.COM',
            phone: '07019999219',
            status: 'Active',
        },
        3:{
            type: 'Company',
            code: 'AMF',
            name: 'AMFacilities',
            email: 'COPS@ALPHAMEAD.COM',
            phone: '07019999219',
            status: 'Active',
        },
        4:{
            type: 'Company',
            code: 'AMF',
            name: 'AMFacilities',
            email: 'COPS@ALPHAMEAD.COM',
            phone: '07019999219',
            status: 'Active',
        },
        5:{
            type: 'Company',
            code: 'AMF',
            name: 'AMFacilities',
            email: 'COPS@ALPHAMEAD.COM',
            phone: '07019999219',
            status: 'Active',
        },
        
    };

    
    const displayItemDetails = (details) => {
        document.getElementById('type').innerText = details.type;
        document.getElementById('code').innerText = details.code;
        document.getElementById('type-name').innerText = details.name;
        document.getElementById('type-email').innerText = details.email;
        document.getElementById('type-phone').innerText = details.phone;
        document.getElementById('status').innerText = details.status;
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

