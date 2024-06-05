document.getElementById('nav-toggle').addEventListener('change', function() {
    this.setAttribute('aria-expanded', this.checked);
  });
  
  document.querySelector('.nav-checkbox').addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();  // Prevent default action for space to avoid scrolling
      document.getElementById('nav-toggle').click();
    }
  });
  