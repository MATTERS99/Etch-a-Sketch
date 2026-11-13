const a = document.querySelector(".container");
const c = document.querySelector("button");

createGrid(16);

function createGrid(r) {
  a.innerHTML = "";
  let w = (960 - (r - 1) * 10) / r;
  for (let i = 1; i <= r * r; i++) {
    let b = document.createElement("div");
    b.style.width = w + "px";
    b.style.height = w + "px";
    b.classList.add("item");
    a.appendChild(b);
    let r=1;
    b.addEventListener("mouseenter", () => {
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      b.style.backgroundColor=`rgb(${red},${green},${blue})`;
      b.style.opacity=r
      r-=0.1;
    });
  }
}

c.addEventListener("click", () => {
  let d = prompt("number of squares per side for the new grid");
  r = +d;
  if (Number.isInteger(r) && r >= 1 && r <= 100) {
    createGrid(r);
  } else if (d !== null) {
    alert("Enter a valid number between 1 and 100");
  } else {
    alert("Enter a valid number between 1 and 100");
  }
});
