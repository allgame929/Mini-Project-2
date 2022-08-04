
function gotit() {
    var x = document.getElementById("alt");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

window.addEventListener("scroll", newsContainerReveal);
newsContainerReveal();

document
  .getElementById("newsContainer-close")
  .addEventListener("click", newsContainerClose);

function newsContainerClose() {
  window.document.cookie = `newscontainer=close; path=/; max-age=${60 * 10};`;
  document.querySelector("#newsContainer").classList.remove("active");
}

function newsContainerReveal() {
  const reveals = document.querySelector("#newsContainer");

  const scrollPosition = window.scrollY;
  const elementTop = document.getElementById("services").offsetTop;

  if ((elementTop < scrollPosition) && !getCookie('newscontainer'))  {
    reveals.classList.add("active");
  } else {
    reveals.classList.remove("active");
  }
}

function getCookie(name) {
  let value = `; ${window.document.cookie}`;
  let parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

