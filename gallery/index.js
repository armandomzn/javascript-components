function getElement(element) {
  const getElement = document.querySelector(element);
  if (getElement) {
    return getElement;
  }
  throw Error(`The element: ${element} does not exist`);
}

class Gallery {
  constructor(element) {
    this.container = element;
    this.containerListImages = [
      ...element.querySelectorAll(".img-container img"),
    ];
    this.modal = getElement(".modal");
    this.modalImage = getElement(".main-img");
    this.modalImages = getElement(".modal-images");
    this.closeBtn = this.modal.querySelector(".close-btn");
    this.nextBtn = this.modal.querySelector(".next-btn");
    this.prevBtn = this.modal.querySelector(".prev-btn");
    // binding functions
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
    this.chooseImageModal = this.chooseImageModal.bind(this);
    // event listeners
    this.container.addEventListener("click", this.openModal);
  }
  setMainImage(currentImage) {
    const image = currentImage.firstElementChild;
    this.modalImage.src = image.src;
  }

  openModal(e) {
    if (e.target.classList.contains("img-container")) {
      const mainImage = e.target.firstElementChild;
      this.modal.classList.add("open");
      this.setMainImage(e.target);

      this.modalImages.innerHTML = this.containerListImages
        .map((image) => {
          return `
        <div class="img-container">
            <img
              src="${image.src}"
              alt="${image.alt}"
              data-id="${image.dataset.id}"
              ${
                mainImage.dataset.id === image.dataset.id
                  ? 'class="selected"'
                  : ""
              }
            />
          </div>
        `;
        })
        .join("");
      //   adding listeners
      this.closeBtn.addEventListener("click", this.closeModal);
      this.nextBtn.addEventListener("click", this.nextImage);
      this.prevBtn.addEventListener("click", this.previousImage);
      this.modalImages.addEventListener("click", this.chooseImageModal);
    }
  }
  closeModal() {
    this.modal.classList.remove("open");
    // removing listeners
    this.closeBtn.removeEventListener("click", this.closeModal);
    this.nextBtn.removeEventListener("click", this.nextImage);
    this.prevBtn.removeEventListener("click", this.previousImage);
    this.modalImages.removeEventListener("click", this.chooseImageModal);
  }
  nextImage() {
    const selected = this.modalImages.querySelector(".selected");
    const nextElement =
      selected.parentElement.nextElementSibling ||
      this.modalImages.firstElementChild;
    selected.classList.remove("selected");
    nextElement.children[0].classList.add("selected");
    this.setMainImage(nextElement);
  }
  previousImage() {
    const selected = this.modalImages.querySelector(".selected");
    const nextElement =
      selected.parentElement.previousElementSibling ||
      this.modalImages.lastElementChild;
    selected.classList.remove("selected");
    nextElement.children[0].classList.add("selected");
    this.setMainImage(nextElement);
  }
  chooseImageModal(e) {
    if (!e.target.classList.contains("img-container")) {
      return;
    }
    this.setMainImage(e.target);
    const selected = this.modalImages.querySelector(".selected");
    selected.classList.remove("selected");
    e.target.children[0].classList.add("selected");
  }
}

const horrorGallery = new Gallery(getElement(".horror"));
const cyberpunkGallery = new Gallery(getElement(".cyberpunk"));
