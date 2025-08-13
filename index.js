const listButtons = document.querySelectorAll("#list button");

listButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const para = btn.closest("li").querySelector("p");
    const img = btn.querySelector("img");

    const isHidden = para.hidden; // check first

    // close all
    document.querySelectorAll("#list p").forEach((p) => (p.hidden = true));
    document
      .querySelectorAll("#list button img")
      .forEach((i) => (i.src = "./assets/images/icon-plus.svg"));

    // if it was hidden before, open it now
    if (isHidden) {
      para.hidden = false;
      img.src = "./assets/images/icon-minus.svg";
    }
  });
});
