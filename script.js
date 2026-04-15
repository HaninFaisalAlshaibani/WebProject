/* ============================================
   script.js — اكتشف السعودية
   JavaScript for Home Page + Admin Dashboard
   ============================================ */


/* ===== 1. NAVIGATION ACTIVE STATE ===== */
/* Highlights the current page link in the navbar */

// Get all nav links
const navLinks = document.querySelectorAll('.nav-links a');

// Loop through each link
navLinks.forEach(function(link) {

  // Check if the link's href matches the current page URL
  if (link.href === window.location.href) {

    // Remove 'active' from all links first
    navLinks.forEach(function(l) {
      l.classList.remove('active');
    });

    // Add 'active' to the matching link
    link.classList.add('active');
  }

});


/* ===== 2. NIGHT MODE TOGGLE ===== */
/* Switches between light and dark theme */

// Get the night mode button
const nightModeBtn = document.getElementById('nightModeBtn');

// When the button is clicked
nightModeBtn.addEventListener('click', function() {

  // Toggle the 'night-mode' class on the body
  document.body.classList.toggle('night-mode');

  // Change the button text depending on current mode
  if (document.body.classList.contains('night-mode')) {
    nightModeBtn.textContent = '☀️ الوضع النهاري';
  } else {
    nightModeBtn.textContent = '🌙 الوضع الليلي';
  }

});


/* ===== 3. DELETE CONFIRM + INLINE SUCCESS MESSAGE ===== */
/* Shows a confirm dialog before deleting, then shows success message on page */

// Get all delete buttons on the dashboard
const deleteButtons = document.querySelectorAll('.btn-delete');

// Get the success message element
const successMessage = document.getElementById('successMessage');

// Loop through each delete button
deleteButtons.forEach(function(btn) {

  // When a delete button is clicked
  btn.addEventListener('click', function() {

    // Show a confirm dialog — ask user to confirm deletion
    const confirmed = confirm('هل تريد حذف هذا السجل؟');

    // If user clicked OK
    if (confirmed) {

      // Remove the table row from the page
      const row = btn.closest('tr');
      row.remove();

      // Show the inline success message on the dashboard (NOT an alert box)
      successMessage.textContent = 'تم حذف السجل بنجاح ✓';
      successMessage.style.display = 'block';

      // Hide the message after 4 seconds
      setTimeout(function() {
        successMessage.style.display = 'none';
      }, 4000);

    }

  });

});