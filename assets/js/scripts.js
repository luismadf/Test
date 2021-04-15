const radioRead = document.getElementById("radio-read");
const radioAccept = document.getElementById("radio-accept");
const radioReadActive = document.getElementById("radio-read-active");
const radioAcceptActive = document.getElementById("radio-accept-active");

/* CODE FOR THE CHECKBOX */

addEventListener("click", toggleEvents);

function toggleEvents(e) {
  const event = e.target.id;

  if (event === "radio-read-active" || event === "radio-read") {
    toggleRadioRead(event);
    return;
  } else if (event === "radio-accept-active" || event === "radio-accept") {
    toggleRadioAccept(event);
  }
}

const toggleRadioRead = (event) => {
  if (event === "radio-read") {
    radioReadActive.classList.add("active");
  } else if (event === "radio-read-active") {
    radioReadActive.classList.remove("active");
  }
};

const toggleRadioAccept = (event) => {
  if (event === "radio-accept") {
    radioAcceptActive.classList.add("active");
  } else if (event === "radio-accept-active") {
    radioAcceptActive.classList.remove("active");
  }
};

/* /CODE FOR THE CHECKBOX */

/* CODE FOR THE SLIDER */

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* /CODE FOR THE SILDER */
