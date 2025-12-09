// Select all follow buttons
const followButtons = document.querySelectorAll(".follow-btn");

// Loop using for...of
for(const btn of followButtons) {

    btn.addEventListener("click", () => {
        btn.innerText = "Following";
        btn.style.background = "#333";
        btn.style.color = "#fff";
    });

}



// Select all post like icons
const likeIcons = document.querySelectorAll(".post-actions img:first-child");

// Loop using normal for loop
for(let i = 0; i < likeIcons.length; i++) {

    likeIcons[i].addEventListener("click", () => {
        likeIcons[i].style.filter = "brightness(1.8)";
        alert("You liked this post ❤️");
    });

}



// Show message when clicking stories
const stories = document.querySelectorAll(".story img");

for(const story of stories){
    story.addEventListener("click", () => {
        alert("Story feature coming soon! 🎬");
    });
}



// Form validation example (optional for login & signup)
const forms = document.querySelectorAll("form");

for(const form of forms){
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Form submitted successfully!");
    });
}