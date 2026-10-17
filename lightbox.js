// Opens gallery and design pictures enlarged, with their caption. Without JavaScript the links simply open the image.
(function () {
  var box = document.getElementById("lightbox");
  if (!box || typeof box.showModal !== "function") return;
  var img = box.querySelector("img"), cap = box.querySelector("p");
  document.addEventListener("click", function (e) {
    var a = e.target.closest(".shot a, .design-img");
    if (!a) return;
    e.preventDefault();
    var fig = a.closest(".shot, .design");
    var text = fig.querySelector("figcaption, h2");
    img.src = a.getAttribute("href");
    img.alt = a.querySelector("img").alt;
    var year = text && text.querySelector(".year");
    cap.textContent = !text ? "" : year ? year.textContent + " · " + text.textContent.slice(year.textContent.length) : text.textContent;
    box.showModal();
  });
  box.addEventListener("click", function (e) {
    if (e.target === box || e.target.classList.contains("lightbox-close")) box.close();
  });
})();
