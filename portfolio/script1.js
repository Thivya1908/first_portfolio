'use strict';

// Element toggle function
const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for the button
sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
});

// Testimonials variables
const testimonialsItems = document.querySelectorAll("[data-testmonials-item]");
const modalContainer = document.querySelector("[data-model-container]");
const modalCloseBtn = document.querySelector("[data-model-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal variables
const modalImg = document.querySelector("[data-model-img]");
const modalTitle = document.querySelector("[data-model-title]");
const modalText = document.querySelector("[data-model-text]");

// Modal toggle function
const toggleTestimonialsModal = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
};

// Add click event to all testimonial items
for (let i = 0; i < testimonialsItems.length; i++) {
    testimonialsItems[i].addEventListener("click", function () {
        modalImg.src = this.querySelector("[data-testimonials-avtar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avtar]").alt;
        modalTitle.textContent = this.querySelector("[data-testimonials-title]").textContent;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

        toggleTestimonialsModal();
    });
}

// Add click event to modal close button and overlay
modalCloseBtn.addEventListener("click", toggleTestimonialsModal);
overlay.addEventListener("click", toggleTestimonialsModal);

// Custom select variables
const selects = document.querySelectorAll("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValues = document.querySelectorAll("[data-select-value]");
const filterButtons = document.querySelectorAll("[data-filter-btn]");

// Add event to all custom select elements
selects.forEach((select, index) => {
    select.addEventListener("click", function () {
        elementToggleFunc(this);
    });

    selectItems.forEach((item) => {
        item.addEventListener("click", function () {
            let selectedValue = this.textContent.toLowerCase();
            selectValues[index].textContent = this.textContent;

            elementToggleFunc(select);
            filterFunc(selectedValue);
        });
    });
});

// Filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
    filterItems.forEach((item) => {
        if (selectedValue === "all" || selectedValue === item.dataset.category) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
};

// Add event to all filter buttons for large screen
let lastClickedBtn = filterButtons[0];
filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
        let selectedValue = this.textContent.toLowerCase();
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
    });
});

// Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Add event to all form input fields
formInputs.forEach((input) => {
    input.addEventListener("input", function () {
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
        } else {
            formBtn.setAttribute("disabled", "");
        }
    });
});

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all navigation links
navigationLinks.forEach((link) => {
    link.addEventListener("click", function () {
        const targetPage = this.textContent.toLowerCase();

        // Remove "active" class from all pages and navigation links
        pages.forEach((page) => {
            page.classList.remove("active");
        });

        navigationLinks.forEach((navLink) => {
            navLink.classList.remove("active");
        });

        // Add "active" class to the clicked navigation link and corresponding page
        this.classList.add("active");

        pages.forEach((page) => {
            if (page.dataset.page === targetPage) {
                page.classList.add("active");
            }
        });

        window.scrollTo(0, 0); // Scroll to top of the page
    });
});
