document.addEventListener("DOMContentLoaded", () => {
    fetch('../data/user-profile.json')
        .then(response => response.json())
        .then(data => {
            // Populate header
            document.getElementById("header-title").innerText = data.header.title;
            document.getElementById("back-button").innerText = data.header.backButton;
            
            // Populate user details
            document.getElementById("username").innerText = data.user.username;
            document.getElementById("user-tag").innerText = data.user.userTag;

            // Populate Edit Profile section
            document.getElementById("edit-profile-title").innerText = data.sections.editProfile.title;
            const editProfileContainer = document.getElementById("edit-profile-items");
            data.sections.editProfile.items.forEach(item => {
                const p = document.createElement("p");
                p.id = item.id;
                p.innerText = item.label;
                editProfileContainer.appendChild(p);
            });

            // Populate Rate Us section
            document.getElementById("rate-us-title").innerText = data.sections.rateUs.title;
            document.getElementById("rate-us-item").innerText = data.sections.rateUs.item;

            // Populate Version section
            document.getElementById("version-title").innerText = data.sections.version.title;
            document.getElementById("version-item").innerText = data.sections.version.item;

            // Populate footer links
            const footerContainer = document.getElementById("footer-links");
            for (const [key, value] of Object.entries(data.footerLinks)) {
                const span = document.createElement("span");
                span.classList.add("nav-item");
                span.innerText = value;
                footerContainer.appendChild(span);
            }
        })
        .catch(error => console.error("Error fetching profile data:", error));
});
