const liEl = document.querySelectorAll("ul li");
const iconEl = document.querySelectorAll(".icon");

liEl.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    if (item.classList.contains("active")) {
      item.querySelector("span").textContent = "-";
    } else {
      item.querySelector("span").textContent = "+";
    }

    updateItem(index);
  });
});

const updateItem = (index1) => {
  liEl.forEach((item2, index2) => {
    console.log(item2, index2 + " => " + index1);
    if (index1 !== index2) {
      item2.classList.remove("active");
      item2.querySelector("span").textContent = "+";
    }
  });
};
