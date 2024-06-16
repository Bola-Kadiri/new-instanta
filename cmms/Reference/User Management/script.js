//Toggle Sidebar
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

//Toggle Item Sidebar
let userSidebar = document.querySelector(".user-sidebar");
let userSidebarBtn = document.querySelector(".user-sidebarBtn");

userSidebarBtn.addEventListener('click', () => {
    userSidebar.classList.toggle('active');
})

//Initiate Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.addEventListener('DOMContentLoaded', () => {
    const users = document.querySelectorAll('.user-sidebar_content');
    const defaultImage = document.getElementById('default-image');
    const userContent = document.querySelector('.user-body_content');



    const userDetails = {
        1:{
            firstName: 'Aanuoluwa',
            lastName: 'Adekola',
            email: 'Aanuoluwa.Adekola@alphamead.com',
            phoneNumber: '08100820679',
            designation: 'Planning Officer',
            gender: 'Male',
            nationality: 'Nigerian',
            status: 'Active'
        },
        2:{
            firstName: 'Aanuoluwa',
            lastName: 'Adekola',
            email: 'Aanuoluwa.Adekola@alphamead.com',
            phoneNumber: '08100820679',
            designation: 'Planning Officer',
            gender: 'Male',
            nationality: 'Nigerian',
            status: 'Active'
        },
        3:{
            firstName: 'Aanuoluwa',
            lastName: 'Adekola',
            email: 'Aanuoluwa.Adekola@alphamead.com',
            phoneNumber: '08100820679',
            designation: 'Planning Officer',
            gender: 'Male',
            nationality: 'Nigerian',
            status: 'Active'
        },
        4:{
            firstName: 'Aanuoluwa',
            lastName: 'Adekola',
            email: 'Aanuoluwa.Adekola@alphamead.com',
            phoneNumber: '08100820679',
            designation: 'Planning Officer',
            gender: 'Male',
            nationality: 'Nigerian',
            status: 'Active'
        },
        5:{
            firstName: 'Aanuoluwa',
            lastName: 'Adekola',
            email: 'Aanuoluwa.Adekola@alphamead.com',
            phoneNumber: '08100820679',
            designation: 'Planning Officer',
            gender: 'Male',
            nationality: 'Nigerian',
            status: 'Active'
        },
        
        
        
    };

    
    const displayItemDetails = (details) => {
        document.getElementById('first-name').innerText = details.firstName;
        document.getElementById('last-name').innerText = details.lastName;
        document.getElementById('user-email').innerText = details.email;
        document.getElementById('user-phone').innerText = details.phoneNumber;
        document.getElementById('user-designation').innerText = details.designation;
        document.getElementById('gender').innerText = details.gender;
        document.getElementById('nationality').innerText = details.nationality;
        document.getElementById('user-status').innerText = details.status;
    }
    
    users.forEach(item => {
        item.addEventListener('click', () => {
            const itemId = item.dataset.id;
            const details = userDetails[itemId];
    
            if (details) {
                defaultImage.style.display = 'none';
                userContent.style.display = 'block';
                displayItemDetails(details)
            }
        })
    });
})

