const container = document.querySelector(".container");
const fileInput = document.getElementById("fileInput");
const chooseImgBtn = document.getElementById("imageBtn");
const showImg = document.querySelector("#image_view img");
const filterName = document.querySelector(".filter-name .name");
const filterBtn = document.querySelectorAll(".filter button");
const sliderValue = document.querySelector(".filter-name .value");
const rotateBtn = document.querySelectorAll(".rotateFlip button");
const sliderRange = document.querySelector(".slider input");
const resetFilters = document.querySelector(".resetFilters");
const saveImage = document.querySelector(".save-img")

fileInput.style.visibility = "hidden";

let brightness = 100,
  saturation = 100,
  inversion = 0,
  grayscale = 0;

let rotate = 0,
  flipHorizontal = 1,
  flipVertical = 1;

const applyFilters = () => {
  showImg.style.transform = `rotate(${rotate}deg)`;
     showImg.style.transform += `scaleX(${flipHorizontal}) scaleY(${flipVertical})`;
  showImg.style.filter =
    `brightness(${brightness}%)` +
    `saturate(${saturation}%)` +
    `invert(${inversion}%)` +
    `grayscale(${grayscale}%)`;
};

const loadImg = () => {
  let file = fileInput.files[0];
  if (!file) return;
  showImg.src = URL.createObjectURL(file);
  showImg.addEventListener("load", () => {
    container.classList.remove("disable");
  });
  //   console.log(file);
};

filterBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter .active").classList.remove("active");
    btn.classList.add("active");
    filterName.innerText = btn.innerText;

    if (btn.id === "brightness") {
      sliderValue.max = "200";
      sliderValue.value = brightness;
      sliderValue.innerText = `${brightness}%`;
    } else if (btn.id === "saturation") {
      sliderValue.max = "200";
      sliderValue.value = saturation;
      sliderValue.innerText = `${saturation}%`;
    } else if (btn.id === "inversion") {
      sliderValue.max = "100";
      sliderValue.value = inversion;
      sliderValue.innerText = `${inversion}%`;
    } else {
      sliderValue.max = "100";
      sliderValue.value = grayscale;
      sliderValue.innerText = `${grayscale}%`;
    }
  });
});
const updateFilter = () => {
  console.log(sliderRange.value);
  sliderValue.innerText = `${sliderRange.value}%`;
  const selectedFilter = document.querySelector(".filter .active");
  if (selectedFilter.id === "brightness") {
    brightness = sliderRange.value;
  } else if (selectedFilter.id === "saturation") {
    saturation = sliderRange.value;
  } else if (selectedFilter.id === "inversion") {
    inversion = sliderRange.value;
  } else {
    grayscale = sliderRange.value;
  }

  applyFilters();
};

rotateBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    //    console.log('button.id');
    // console.log(btn)
    if (btn.id === "left") {
      rotate -= 90;
    } else if (btn.id === "right") {
      rotate += 90;
    } else if (btn.id === "horizontal") {
      flipHorizontal = flipHorizontal === 1 ? -1 : 1;
    } else {
      flipVertical = flipVertical === 1 ? -1 : 1;
    }

    applyFilters();
  });
});

const resetAll = () =>{
console.log("reset clicked!");
brightness = 100,
  saturation = 100,
  inversion = 0,
  grayscale = 0;

 rotate = 0,
  flipHorizontal = 1,
  flipVertical = 1;
  applyFilters();
}
const saveImg = () =>{
     const link = document.createElement("a");
     link.href = showImg.src;
     link.download = "image.png";
     link.click();
}

resetFilters.addEventListener("click", resetAll);
fileInput.addEventListener("change", loadImg);
sliderRange.addEventListener("input", updateFilter);
saveImage.addEventListener("click", saveImg)
chooseImgBtn.addEventListener("click", function () {
  fileInput.click();
});
