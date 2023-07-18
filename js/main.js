"use strict";

const carouselImg = [
  {
    url: "./img.01.webp/",
    title: "Image 1",
    description: "aaa",
  },
  {
    url: "./img.02.webp/",
    title: "Image 2",
    description: "bbb",
  },
  {
    url: "./img.03.webp/",
    title: "Image 3",
    description: "ccc",
  },
  {
    url: "./img.04.webp/",
    title: "Image 4",
    description: "ddd",
  },
  {
    url: "./img.05.webp/",
    title: "Image 5",
    description: "eee",
  },
];

let currentIndex = 0;
const imageElement = document.querySelector(".carousel-image");
const titleElement = document.querySelector(".carousel-title");
const descriptionElement = document.querySelector(".carousel-description");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

function updateCarousel() {
  const currentItem = carouselImg[currentIndex];
  imageElement.src = currentItem.url;
  titleElement.textContent = currentItem.title;
  descriptionElement.textContent = currentItem.description;
}

function showPreviousImage() {
  currentIndex = (currentIndex - 1 + carouselImg.length) % carouselImg.length;
  updateCarousel();
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % carouselImg.length;
  updateCarousel();
}

prevButton.addEventListener("click", showPreviousImage);
nextButton.addEventListener("click", showNextImage);

// AAAA
updateCarousel();
