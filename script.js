document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll(".sidebar-content ul li");
    const grid = document.querySelector("#recordingsGrid");
    const sidebar = document.querySelector(".sidebar");
    const showInfo = document.querySelector(".show-info");
    const showTitle = document.querySelector("#showTitle");
    const showDescription = document.querySelector("#showDescription");
    const channelLogo = document.querySelector("#channelLogo");
    const showEpisodes = document.querySelector("#showEpisodes");

    // Handle hover on show elements
    grid.addEventListener("mouseover", (e) => {
        const show = e.target.closest(".show");
        if (show) {
            const title = show.dataset.title;
            const description = show.dataset.description;
            const channel = show.dataset.channel;
            const episodes = show.dataset.episodes;

            // Update show info content
            showTitle.textContent = title;
            showDescription.textContent = description;
            channelLogo.src = channel;

            // Show episodes if available
            if (episodes) {
                showEpisodes.textContent = `Episodes Recorded: ${episodes}`;
                showEpisodes.style.display = "block";
            } else {
                showEpisodes.textContent = "";
                showEpisodes.style.display = "none";
            }

            // Hide sidebar and show info
            sidebar.style.display = "none"; // Hide the sidebar
            showInfo.style.display = "flex"; // Show the info box
        }
    });

    grid.addEventListener("mouseout", () => {
        // Show sidebar and hide info
        sidebar.style.display = "flex"; // Show the sidebar
        showInfo.style.display = "none"; // Hide the info box
    });

    // Handle menu clicks
    listItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            listItems.forEach((li) => li.classList.remove("active"));
            item.classList.add("active");

            if (index === 0) {
                grid.innerHTML = `
                    <div class="show" data-title="Harry Potter" data-duration="2h 30m" data-channel="assets/channel-logo.png" data-description="A young wizard embarks on an adventure to defeat the dark lord." data-episodes="">
                        <img src="assets/Harry-Potter-Movies-in-Order.avif" alt="Harry Potter">
                    </div>
                    <div class="show" data-title="Euphoria" data-duration="1h" data-channel="assets/channel-logo.png" data-description="A group of high school students navigate love, friendship, and trauma." data-episodes="3">
                        <img src="assets/euphoria.jpg" alt="Euphoria">
                    </div>
                    <div class="show" data-title="Friends" data-duration="30m" data-channel="assets/channel-logo.png" data-description="Six friends living in New York City experience life and love together." data-episodes="12">
                        <img src="assets/friends-400x275.jpg" alt="Friends">
                    </div>
                    <div class="show" data-title="Billions" data-duration="1h" data-channel="assets/channel-logo.png" data-description="A drama about power politics in the world of New York high finance." data-episodes="5">
                        <img src="assets/p10639351_b_h11_ab.jpg" alt="Billions">
                    </div>
                    <div class="show" data-title="Law & Order" data-duration="1h" data-channel="assets/channel-logo.png" data-description="A crime drama following the lives of police and prosecutors." data-episodes="8">
                        <img src="assets/p183983_b_h8_bm.jpg" alt="Law & Order">
                    </div>
                    <div class="show" data-title="Conan" data-duration="1h 30m" data-channel="assets/channel-logo.png" data-description="The adventures of a legendary barbarian warrior." data-episodes="">
                        <img src="assets/conan-27th-film-character-poster.jpg" alt="Conan">
                    </div>
                    <div class="show" data-title="Summer House" data-duration="1h" data-channel="assets/channel-logo.png" data-description="A reality show about friends sharing a summer house." data-episodes="6">
                        <img src="assets/editors-task-retitled_-summer-house-season-8_-news-release-date-cast-trailer-everything-we-know.avif" alt="Summer House">
                    </div>
                    <div class="show" data-title="Nobody" data-duration="2h" data-channel="assets/channel-logo.png" data-description="An ordinary man discovers his hidden talents in a fight for survival." data-episodes="">
                        <img src="assets/maxresdefault.jpg" alt="Nobody">
                    </div>
                    <div class="show" data-title="Sweet Mud" data-duration="2h 28m" data-channel="assets/channel-logo.png" data-description="A coming-of-age story set in a rural community." data-episodes="">
                        <img src="assets/AAAABaySz8DGTDotpFb1cZUC1eTkIGDIsCbY9hXjf99i0lZ3rlTEr4O-t4NPB5weMtl1B0MjKEdQ_OJ1RfAcWFw0Z95F_U3q36CPNQ2U.jpg" alt="Sweet Mud">
                    </div>
                    <div class="show" data-title="Love & Dance" data-duration="47m" data-channel="assets/channel-logo.png" data-description="A romantic drama centered around dance and passion." data-episodes="">
                        <img src="assets/AAAABUK13u81zUC1AaMn6JJZyKoiX72PjGdMa6uowUo3-YpoVjHuZdAzaOqnKaTRawmHLl-LjT7PUjC4jgLeo9TV0Qqt9tEwNSc7iTZX.jpg" alt="Love & Dance">
                    </div>
                    <div class="show" data-title="Image of Victory" data-duration="50m" data-channel="assets/channel-logo.png" data-description="A historical drama about courage and sacrifice." data-episodes="">
                        <img src="assets/AAAABVrgFNFraFvfcxDG5JwkZR_pKjH2GQhdqZBtl-89KGiKQBxqvZIIU5auZeeP3RvHP4tLlBblZQOPiPjik00cEDhLjBOyZ5e9FRNu.jpg" alt="Image of Victory">
                    </div>
                    <div class="show" data-title="1917" data-duration="22m" data-channel="assets/channel-logo.png" data-description="A gripping World War I story of bravery and survival." data-episodes="">
                        <img src="assets/1917_(2019)_Film_Poster.jpeg" alt="1917">
                    </div>
                `;
            } else {
                grid.innerHTML = `<div style="text-align: center; font-size: 24px; color: white; margin-top: 50px;">Coming Soon</div>`;
            }
        });
    });
});
