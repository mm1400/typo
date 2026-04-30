document.addEventListener('DOMContentLoaded', () => {

  function toggleContent(id) {
    let content = document.getElementById(id);
    if (content.classList.contains("closed-post")) {
      content.classList.remove("closed-post");
      content.classList.add("expanded-post");
    } else {
      content.classList.remove("expanded-post");
      content.classList.add("closed-post");
    }
  }

  const readMoreButtons = document.querySelectorAll('.read-more');

  readMoreButtons.forEach(readMorebutton => readMorebutton.addEventListener('click', toggleContent));

});

