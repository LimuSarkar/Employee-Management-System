
const form = document.getElementById("leaveForm");

// Attendance
document.getElementById("checkInBtn").addEventListener("click", function () {

    document.getElementById("attendanceStatus").innerHTML ="Today's Status: Present";
    document.getElementById("attendanceMessage").innerHTML = "Check-in successful!";

});

document.getElementById("checkOutBtn").addEventListener("click", function () {
    document.getElementById("attendanceMessage").innerHTML ="Check-out successful!";

});

// Leave Form Validation
form.addEventListener("submit", function (event) {

    event.preventDefault();
    clearErrors();

    let reason = document.getElementById("reason");
    let startDate = document.getElementById("startDate");
    let endDate = document.getElementById("endDate");

    let valid = true;

    // Reason Validation
    if (reason.value.trim() === "") {
        showError(reason, "reasonError", "Reason is required.");
        valid = false;
    }
    else if (reason.value.trim().length < 10) {
        showError(reason, "reasonError", "Minimum 10 characters required.");
        valid = false;
    }
    else {
        showSuccess(reason);
    }
    // Start Date Validation
    if (startDate.value === "") {
        showError(startDate, "startDateError", "Select start date.");
        valid = false;
    }
    else {
        showSuccess(startDate);
    }
    // End Date Validation
    if (endDate.value === "") {
        showError(endDate, "endDateError", "Select end date.");
        valid = false;
    }
    else if (startDate.value !== "" && endDate.value < startDate.value) {
        showError(endDate, "endDateError", "End date cannot be before start date.");
        valid = false;
    }
    else {
        showSuccess(endDate);
    }
    // Submit
    if (valid) {
        document.getElementById("leaveStatus").innerHTML = "Leave Request Submitted! Status: Pending.";
        alert("Leave Request Submitted Successfully!");
        form.reset();
        clearErrors();
    }
});
// Show Error
function showError(input, errorId, message) {
    input.classList.add("errorBorder");
    input.classList.remove("successBorder");
    document.getElementById(errorId).innerHTML = message;
}
// Show Success
function showSuccess(input) {
    input.classList.remove("errorBorder");
    input.classList.add("successBorder");
}
// Clear Errors
function clearErrors() {
    let errors = document.querySelectorAll(".error");
    errors.forEach(function (item) {
    item.innerHTML = "";
    });

    let fields = document.querySelectorAll("input, textarea");

    fields.forEach(function (field) {
        field.classList.remove("errorBorder");
        field.classList.remove("successBorder");
    });

}

// Task Status
let tasks = document.querySelectorAll(".taskStatus");
tasks.forEach(function (task) {
    task.addEventListener("change", function () {
     document.getElementById("taskMessage").innerHTML = "Task Status Updated: " + task.value;

    });
});

// Logout
document.getElementById("logoutBtn").addEventListener("click", function () {
    alert("You have logged out!");
    window.location.href = "index.html";

});
