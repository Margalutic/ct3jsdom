
document.addEventListener('DOMContentLoaded', function() {
  var menu = document.getElementById('menu');

  menu.addEventListener('click', function(e) {
      var target = e.target;
      var submenu = target.nextElementSibling;

      if (submenu && submenu.classList.contains('submenu')) {
          e.preventDefault();
          toggleSubMenu(submenu);
      }
  });

  function toggleSubMenu(submenu) {
      if (submenu.style.display === 'block') {
          submenu.style.display = 'none';
      } else {
          submenu.style.display = 'block';
      }
  }
});


