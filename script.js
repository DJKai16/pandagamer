document.addEventListener('DOMContentLoaded', function () {
  const toggleMenu = document.querySelector('.toggle-menu');
  const navList = document.querySelector('.menu');
  const searchIcon = document.querySelector('.search-icon');
  const searchForm = document.querySelector('.search form');
  const searchInput = document.querySelector('.search-input');
  const blogContent = document.querySelector('.blog-content');
  const blogPosts = document.querySelectorAll('.blog-post');
  const readMoreButtons = document.querySelectorAll('.read-more-btn');

  toggleMenu.addEventListener('click', function () {
    navList.classList.toggle('show');
  });

  searchIcon.addEventListener('click', function (e) {
    e.stopPropagation();
    searchIcon.style.display = 'none';
    searchInput.style.display = 'block';
    searchInput.focus();
  });

  document.addEventListener('click', function (e) {
    if (!searchForm.contains(e.target)) {
      searchIcon.style.display = 'block';
      searchInput.style.display = 'none';
    }
  });

  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();

    blogPosts.forEach(post => {
      const postContent = post.innerText.toLowerCase();
      const postShouldShow = postContent.includes(searchTerm);
      post.style.display = postShouldShow ? 'block' : 'none';
    });

    searchIcon.style.display = 'block';
    searchInput.style.display = 'none';
  });

  readMoreButtons.forEach(button => {
    button.addEventListener('click', function () {
      const detallesURL = 'descargas.html';
      window.location.href = detallesURL;
    });
  });
});
