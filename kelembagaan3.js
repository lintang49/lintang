// Function to toggle visibility of the registration form
function toggleForm() {
    const form = document.getElementById("form-registrasi");
    form.style.display = form.style.display === "none" || form.style.display === "" ? "block" : "none";
}

// Function to open the modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Function to close the modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
