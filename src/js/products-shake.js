(() => {
    const menuBtnRef = document.querySelector(".products-btn-milkshakes");
    menuBtnRef.addEventListener("click", () => {
     menuBtnRef.classList.toggle("is-open");
    });
   })();