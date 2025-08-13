const listButton = document.querySelectorAll("#list button");

listButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#list p").forEach((p) => (p.hidden = true));
    document
      .querySelectorAll("#list button img")
      .forEach((img) => (img.src = "./assets/images/icon-plus.svg"));

    const para = btn.closest("li").querySelector("p");
    const img = btn.closest("li").querySelector("img");
    para.hidden
      ? ((para.hidden = false),
        img.setAttribute("src", "./assets/images/icon-minus.svg"))
      : ((para.hidden = true),
        img.setAttribute("src", "./assets/images/icon-plus.svg"));
  });
});
