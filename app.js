const imageLoader = document.getElementById("choose");
const showImg = document.getElementById("image");
const file = document.getElementById("file");
// let imageLoaded = document.getElementById("image");
file.style.visibility = "hidden";

const imageLoad = function () {
  let mgg = file.files[0];
  console.log(mgg);
  if (!mgg) return;
  //    console.log("no image was selected");
  //let chosen image show on showImg

  showImg.src = URL.createObjectURL(mgg);
};

file.addEventListener("change", imageLoad);

imageLoader.addEventListener("click", function () {
  //   file.style.visibility = "visible";
  file.click();
});
