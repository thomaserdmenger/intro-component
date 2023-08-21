const form = document.querySelector(".form");
const inputArr = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputArr.forEach((input) => {
    const parent = input.closest(".form-field");
    const errorImage = parent.querySelector(".input-error-image");
    const errorMessage = parent.querySelector(".input-error-message");

    if (input.value === "") {
      errorImage.classList.add("show");
      errorMessage.classList.add("show");
      input.placeholder = "";

      const inputType = input.getAttribute("type");
      if (inputType === "email") {
        input.placeholder = "email@example/com";
        input.classList.add("form-input-email--mod");
      }
    } else {
      errorImage.classList.remove("show");
      errorMessage.classList.remove("show");
      input.classList.remove("form-input-email--mod");
    }
  });
});
