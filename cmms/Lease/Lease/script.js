//Toggle Sidebar
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

//Toggle Item Sidebar
let leaseSidebar = document.querySelector(".lease-sidebar");
let leaseSidebarBtn = document.querySelector(".lease-sidebarBtn");

leaseSidebarBtn.addEventListener('click', () => {
    leaseSidebar.classList.toggle('active');
})

//Initiate Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.addEventListener('DOMContentLoaded', () => {
    const leases = document.querySelectorAll('.lease-sidebar_content');
    const defaultImage = document.getElementById('default-image');
    const leaseContent = document.querySelector('.lease-body_content');



    const leaseDetails = {
        1:{
            client: 'Rent4Less',
            contactName: 'OLUWATOMIWA AHMED MOROMOKE',
            contactEmail: 'moromokeahmed55@yahoo.com',
            contactPhone: '07018226594',
            status: 'Running',
        },
    };

    
    const displayItemDetails = (details) => {
        document.getElementById('lease-client').innerText = details.client
        document.getElementById('lease-name').innerText = details.contactName;
        document.getElementById('lease-email').innerText = details.contactEmail;
        document.getElementById('lease-phone').innerText = details.contactPhone;
        document.getElementById('lease-status').innerText = details.status;
    }
    
    leases.forEach(lease => {
        lease.addEventListener('click', () => {
            const itemId = lease.dataset.id;
            const details = leaseDetails[itemId];
    
            if (details) {
                defaultImage.style.display = 'none';
                leaseContent.style.display = 'block';
                displayItemDetails(details)
            }
        })
    });
})

