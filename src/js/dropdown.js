(() => {
    const refs = {
      openDropdownBtn: document.querySelector('[data-dropdown-open]'),
      closeDropdownBtn: document.querySelector('[data-dropdown-close]'),
      dropdown: document.querySelector('[data-dropdown]'),
    };
  
    refs.openDropdownBtn.addEventListener('click', toggleDropdown);
    refs.closeDropdownBtn.addEventListener('click', toggleDropdown);
  
    function toggleDropdown() {
      refs.dropdown.classList.toggle('is-hidden');
    }
  })();