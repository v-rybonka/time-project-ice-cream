(() => {
    const menuBtnRef = document.querySelector(".products-btn-coffee");
    menuBtnRef.addEventListener("click", () => {
     menuBtnRef.classList.toggle("is-open");
    });
   })();