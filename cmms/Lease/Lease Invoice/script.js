//Toggle Sidebar
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

//Toggle Item Sidebar
let leaseInvoiceSidebar = document.querySelector(".lease_invoice-sidebar");
let leaseInvoiceSidebarBtn = document.querySelector(".lease_invoice-sidebarBtn");

leaseInvoiceSidebarBtn.addEventListener('click', () => {
    leaseInvoiceSidebar.classList.toggle('active');
})

//Initiate Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.addEventListener('DOMContentLoaded', () => {
    const leaseInvoices = document.querySelectorAll('.lease_invoice-sidebar_content');
    const defaultImage = document.getElementById('default-image');
    const leaseInvoiceContent = document.querySelector('.lease_invoice-body_content');



    const leaseInvoiceDetails = {
        1:{
            client: 'Rent4Less',
            contactName: 'AKPUNWOKE VICTOR',
            invoiceNumber: 'null/00000162/01062024',
            invoiceDate: '01/06/2024',
            vatNumber: '00221306-000010',
            tinNumber: '00221306-000010',
            tax: '0%',
            vatAdded: 'Yes',
            paymentDate: '01/06/2024',
            status: 'Payment pending',
        },
        2:{
            client: 'Rent4Less',
            contactName: 'AKPUNWOKE VICTOR',
            invoiceNumber: 'null/00000162/01062024',
            invoiceDate: '01/06/2024',
            vatNumber: '00221306-000010',
            tinNumber: '00221306-000010',
            tax: '0%',
            vatAdded: 'Yes',
            paymentDate: '01/06/2024',
            status: 'Payment pending',
        },
        3:{
            client: 'Rent4Less',
            contactName: 'AKPUNWOKE VICTOR',
            invoiceNumber: 'null/00000162/01062024',
            invoiceDate: '01/06/2024',
            vatNumber: '00221306-000010',
            tinNumber: '00221306-000010',
            tax: '0%',
            vatAdded: 'Yes',
            paymentDate: '01/06/2024',
            status: 'Payment pending',
        },
        4:{
            client: 'Rent4Less',
            contactName: 'AKPUNWOKE VICTOR',
            invoiceNumber: 'null/00000162/01062024',
            invoiceDate: '01/06/2024',
            vatNumber: '00221306-000010',
            tinNumber: '00221306-000010',
            tax: '0%',
            vatAdded: 'Yes',
            paymentDate: '01/06/2024',
            status: 'Payment pending',
        },
        5:{
            client: 'Rent4Less',
            contactName: 'AKPUNWOKE VICTOR',
            invoiceNumber: 'null/00000162/01062024',
            invoiceDate: '01/06/2024',
            vatNumber: '00221306-000010',
            tinNumber: '00221306-000010',
            tax: '0%',
            vatAdded: 'Yes',
            paymentDate: '01/06/2024',
            status: 'Payment pending',
        },
    };

    
    const displayItemDetails = (details) => {
        document.getElementById('client').innerText = details.client
        document.getElementById('c-name').innerText = details.contactName;
        document.getElementById('invoice-number').innerText = details.invoiceNumber;
        document.getElementById('invoice-date').innerText = details.invoiceDate;
        document.getElementById('vat-number').innerText = details.vatNumber;
        document.getElementById('tin-number').innerText = details.tinNumber;
        document.getElementById('tax').innerText = details.tax;
        document.getElementById('vat-added').innerText = details.vatAdded;
        document.getElementById('payment-date').innerText = details.paymentDate;
        document.getElementById('item-status').innerText = details.status;
    }
    
    leaseInvoices.forEach(invoice => {
        invoice.addEventListener('click', () => {
            const itemId = invoice.dataset.id;
            const details = leaseInvoiceDetails[itemId];
    
            if (details) {
                defaultImage.style.display = 'none';
                leaseInvoiceContent.style.display = 'block';
                displayItemDetails(details)
            }
        })
    });
})

