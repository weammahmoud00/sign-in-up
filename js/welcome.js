// Select DOM elements
const usernameElement = document.querySelector(".username");
const logoutButton = document.querySelector(".logout");

// Constants
const USERNAME_KEY = "username";
const LOGIN_PAGE_URL = "../html/index.html";

// Utility function to escape HTML (prevent XSS)
function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
}

// Redirect to login page on logout
if (logoutButton) {
    logoutButton.addEventListener("click", function () {
        try {
            // Clear saved username from localStorage
            localStorage.removeItem(USERNAME_KEY);
            // Redirect to the login page
            window.location.href = LOGIN_PAGE_URL;
        } catch (error) {
            console.error("Error during logout:", error);
        }
    });
} else {
    console.error("Logout button not found. Ensure the button exists in the DOM.");
}

// Retrieve saved username from localStorage
const savedUsername = localStorage.getItem(USERNAME_KEY);

// Update the username display if the element and saved username exist
if (usernameElement) {
    if (savedUsername) {
        usernameElement.innerHTML = `
            <h1 class="text-capitalize fw-bold text-white">
                Hi <span>${escapeHTML(savedUsername)}</span>
            </h1>`;
    } else {
        console.warn("No saved username found in localStorage.");
    }
} else {
    console.error("Username element not found. Ensure the element exists in the DOM.");
}