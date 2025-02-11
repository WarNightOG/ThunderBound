// Snowfall Effect
document.addEventListener("DOMContentLoaded", function() {
    createSnowflakes();
});

function createSnowflakes() {
    const snowContainer = document.getElementById("snowfall-container");
    for (let i = 0; i < 50; i++) {
        let snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.innerHTML = "❄";
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
        snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
        snowContainer.appendChild(snowflake);
    }
}

// Contact Form Alert
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message Sent Successfully!");
});
