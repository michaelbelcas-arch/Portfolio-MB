function handleNavbarScroll() {
    const header = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 100) {
            header.classList.add("navbarDark");
        } else {
            header.classList.remove("navbarDark");
        }
    });
}

function handleNavbarCollapse() {
    const navLinks = document.querySelectorAll(".nav-item");
    const menuToggle = document.getElementById("navbarSupportedContent");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (menuToggle.classList.contains("show")) {
                new bootstrap.Collapse(menuToggle).toggle();
            }
        });
    });
}

function createSkillsFromJSON() {
    const container = document.querySelector("#skills .container");
    let row = document.createElement("div");
    row.classList.add("row");

    fetch("data/skills.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "mt-4");

                card.innerHTML = `
                    <div class="card skillsText">
                        <div class="card-body">
                            <img
                                src="images/${item.image}"
                                alt="${item.title}"
                                class="skillsImage"
                                width="100"
                                height="100"
                            >
                            <h3 class="card-title mt-3">${item.title}</h3>
                            <p class="card-text mt-3">${item.text}</p>
                        </div>
                    </div>
                `;

                row.appendChild(card);

                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
        })
        .catch((error) => {
            console.error("Erreur lors du chargement des compétences :", error);
        });
}

function createPortfolioFromJSON() {
    const container = document.querySelector("#portfolio .container");
    let row = document.createElement("div");
    row.classList.add("row");

    fetch("data/portfolio.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "mt-4");

                card.innerHTML = `
                    <div class="card portfolioContent">
                        <img
                            class="card-img-top"
                            src="images/${item.image}"
                            alt="${item.title}"
                            width="400"
                            height="250"
                        >
                        <div class="card-body">
                            <h3 class="card-title">${item.title}</h3>
                            <p class="card-text">${item.text}</p>

                            <div class="text-center">
                                <a
                                    href="${item.link}"
                                    class="btn btn-success"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Voir le projet ${item.title}"
                                >
                                    Voir le projet
                                </a>
                            </div>
                        </div>
                    </div>
                `;

                row.appendChild(card);

                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
        })
        .catch((error) => {
            console.error("Erreur lors du chargement du portfolio :", error);
        });
}

handleNavbarScroll();
handleNavbarCollapse();
createSkillsFromJSON();
createPortfolioFromJSON();