//Toggle Sidebar
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

//Toggle Item Sidebar
let bankSidebar = document.querySelector(".bank-sidebar");
let bankSidebarBtn = document.querySelector(".bank-sidebarBtn");

bankSidebarBtn.addEventListener('click', () => {
    bankSidebar.classList.toggle('active');
})

//Initiate Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.addEventListener('DOMContentLoaded', () => {
    const banks = document.querySelectorAll('.bank-sidebar_content');
    const defaultImage = document.getElementById('default-image');
    const bankContent = document.querySelector('.bank-body_content');



    const bankDetails = {
        1:{
            bank: 'Guaranty Trust Bank',
            accountName: 'Alpha Mead Real Estate Partners',
            accountNumber: '0464807415',
            currency: 'NGN',
            status: 'Active',
            address: 'Southern View & Milverton'
        },
        2:{
            bank: 'First City Monument Bank',
            accountName: 'Alpha Mead Real Estate Partners',
            accountNumber: '6043987015',
            currency: 'NGN',
            status: 'Active',
            address: 'Lekki Pearl & Lekki Phase 1'
        },
        
        
    };

    
    const displayItemDetails = (details) => {
        document.getElementById('bank').innerText = details.bank;
        document.getElementById('account-name').innerText = details.accountName;
        document.getElementById('account-number').innerText = details.accountNumber;
        document.getElementById('currency').innerText = details.currency;
        document.getElementById('address').innerText = details.address;
        document.getElementById('type-status').innerText = details.status;
    }
    
    banks.forEach(item => {
        item.addEventListener('click', () => {
            const itemId = item.dataset.id;
            const details = bankDetails[itemId];
    
            if (details) {
                defaultImage.style.display = 'none';
                bankContent.style.display = 'block';
                displayItemDetails(details)
            }
        })
    });
})

