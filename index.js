
//   // Handle click on dropdown-toggle inside a submenu
//   document.querySelectorAll('.dropdown-submenu > a').forEach(function (element) {
//     element.addEventListener('click', function (e) {
//       e.preventDefault();
//       e.stopPropagation();

//       // Close all other open submenus
//       document.querySelectorAll('.dropdown-submenu').forEach(function (submenu) {
//         if (submenu !== this.parentElement) submenu.classList.remove('show');
//       }.bind(this));

//       // Toggle this submenu
//       this.parentElement.classList.toggle('show');
//     });
//   });

//   // Optional: close submenus when clicking anywhere else
//   window.addEventListener('click', function () {
//     document.querySelectorAll('.dropdown-submenu').forEach(function (submenu) {
//       submenu.classList.remove('show');
//     });
//   });

// document.getElementById("menu-global-south");
// document.getElementById("link-flash-point").textContent;
