// JavaScript to display a greeting message on page load
window.onload = function() {
    alert("Welcome to My Website! Explore the content.");
}

// JavaScript to handle button clicks and redirect to the respective pages
document.getElementById("biodataButton").addEventListener("click", function() {
    window.location.href = 'biodata.html';
});

document.getElementById("resumeButton").addEventListener("click", function() {
    window.location.href = 'resume.html';
});
