const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-item").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
