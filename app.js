const fileInput = document.getElementById("fileInput");
const chooseImgBtn = document.getElementById("imageBtn");
const showImg = document.querySelector("#image_view img");
const container = document.querySelector(".container");
fileInput.style.visibility = "hidden";

const loadImg = () => {
  let file = fileInput.files[0];
  if (!file) return;
  showImg.src = URL.createObjectURL(file);
  showImg.addEventListener("load", () => {
    container.classList.remove("disable");
  });
  //   console.log(file);
};
fileInput.addEventListener("change", loadImg);
chooseImgBtn.addEventListener("click", function () {
  fileInput.click();
});

// const imageLoad = function () {
//   let enteredFile = fileInput.files[0];
//   console.log(enteredFile);
//   if (!enteredFile) return;
//   console.log(enteredFile);
//   showImg.src = URL.createObjectURL(enteredFile);
// };

// fileInput.addEventListener("change", imageBtn());

// imageBtn.addEventListener("click", function () {
//   //   file.style.visibility = "visible";
//   file.click();
// });
