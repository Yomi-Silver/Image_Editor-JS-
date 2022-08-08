const fileInput = document.getElementById("fileInput");
const chooseImgBtn = document.getElementById("imageBtn");
const showImg = document.querySelector("#image_view img");
const filterBtn = document.querySelectorAll(".filter button");
const container = document.querySelector(".container");
const filterName = document.querySelector(".filter-name .name");
const sliderValue = document.querySelector(".filter-name .value");
sliderRange = document.querySelector(".slider input");
fileInput.style.visibility = "hidden";

let brightness = 100,
  saturation = 100,
  inversion = 0,
  grayscale = 0;

const applyFilters = () => {
  showImg.style.filter = `brightness(${brightness}%) saturate(${saturation}%)  invert(${inversion}%)   grayscale(${grayscale}%)`;
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
};

applyFilters();

fileInput.addEventListener("change", loadImg);
sliderRange.addEventListener("input", updateFilter);
chooseImgBtn.addEventListener("click", function () {
  fileInput.click();
});


