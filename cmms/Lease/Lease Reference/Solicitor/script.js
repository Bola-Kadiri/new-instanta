//Toggle Sidebar
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

//Toggle Item Sidebar
let solicitorSidebar = document.querySelector(".solicitor-sidebar");
let solicitorSidebarBtn = document.querySelector(".solicitor-sidebarBtn");

solicitorSidebarBtn.addEventListener('click', () => {
    solicitorSidebar.classList.toggle('active');
})

//Initiate Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

