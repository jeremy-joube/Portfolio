/* =========================================================
   TERMINAL TEXT
========================================================= */

const terminalText = document.getElementById("terminal-text");

const terminalMessages = [
    "INITIALIZING USER PROFILE...",
    "CONNECTING TO DATABASE...",
    "LOADING EXPERIENCE...",
    "ANALYZING SKILLS...",
    "ACCESS GRANTED.",
    "WELCOME, USER."
];

let terminalIndex = 0;

function updateTerminal() {

    if (!terminalText) return;

    terminalText.style.opacity = "0";

    setTimeout(() => {

        terminalText.textContent =
            terminalMessages[terminalIndex];

        terminalText.style.opacity = "1";

        terminalIndex =
            (terminalIndex + 1) %
            terminalMessages.length;

    }, 150);

}

setInterval(updateTerminal, 2800);


/* =========================================================
   SESSION TIMER
========================================================= */

const sessionTime =
    document.getElementById("session-time");

const sessionStart = Date.now();

function updateSessionTime() {

    if (!sessionTime) return;

    const elapsed =
        Date.now() - sessionStart;

    const totalSeconds =
        Math.floor(elapsed / 1000);

    const hours =
        Math.floor(totalSeconds / 3600);

    const minutes =
        Math.floor((totalSeconds % 3600) / 60);

    const seconds =
        totalSeconds % 60;

    sessionTime.textContent =
        String(hours).padStart(2, "0") +
        ":" +
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
}

setInterval(updateSessionTime, 1000);

updateSessionTime();


/* =========================================================
   SECTION REVEAL
========================================================= */

const sections =
    document.querySelectorAll(".section");

const sectionObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.12
        }
    );

sections.forEach(section => {
    sectionObserver.observe(section);
});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const navLinks =
    document.querySelectorAll(".nav-link");

const navSections =
    document.querySelectorAll("main section");

const navObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const id =
                    entry.target.getAttribute("id");

                navLinks.forEach(link => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        `#${id}`
                    ) {
                        link.classList.add("active");
                    }

                });

            });

        },
        {
            rootMargin: "-40% 0px -50% 0px"
        }
    );

navSections.forEach(section => {
    navObserver.observe(section);
});


/* =========================================================
   RANDOM IMAGE GLITCH
========================================================= */

const glitchImages =
    document.querySelectorAll(".glitch-image");

function triggerImageGlitch(image) {

    if (!image) return;

    if (image.classList.contains("automatic-glitch")) {
        return;
    }

    image.classList.add("automatic-glitch");

    setTimeout(() => {

        image.classList.remove("automatic-glitch");

    }, 700);
}


function randomImageGlitch() {

    if (!glitchImages.length) return;

    const randomIndex =
        Math.floor(
            Math.random() *
            glitchImages.length
        );

    triggerImageGlitch(
        glitchImages[randomIndex]
    );
}


/*
    Glitch très occasionnel.
    L'objectif est de garder le site élégant,
    plutôt que d'avoir un effet permanent.
*/

setInterval(
    randomImageGlitch,
    3500
);


/* =========================================================
   RANDOM TITLE GLITCH
========================================================= */

const glitchTitle =
    document.querySelector(".glitch-text");

function triggerTitleGlitch() {

    if (!glitchTitle) return;

    if (
        glitchTitle.classList.contains(
            "text-glitch-active"
        )
    ) {
        return;
    }

    glitchTitle.classList.add(
        "text-glitch-active"
    );

    setTimeout(() => {

        glitchTitle.classList.remove(
            "text-glitch-active"
        );

    }, 350);
}


/*
    Le titre glitch seulement de temps en temps.
*/

setTimeout(() => {

    triggerTitleGlitch();

    setInterval(
        triggerTitleGlitch,
        6000
    );

}, 2000);


/* =========================================================
   CUSTOM CURSOR
========================================================= */

const cursor =
    document.querySelector(".cursor");

if (cursor) {

    document.addEventListener(
        "mousemove",
        event => {

            cursor.style.left =
                `${event.clientX}px`;

            cursor.style.top =
                `${event.clientY}px`;

        }
    );


    const interactiveElements =
        document.querySelectorAll(
            "a, button, .project-card, .cybr-btn"
        );


    interactiveElements.forEach(element => {

        element.addEventListener(
            "mouseenter",
            () => {

                cursor.classList.add("active");

            }
        );

        element.addEventListener(
            "mouseleave",
            () => {

                cursor.classList.remove("active");

            }
        );

    });

}


/* =========================================================
   PROJECT HOVER EFFECT
========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            const image =
                card.querySelector(
                    ".glitch-image"
                );

            triggerImageGlitch(image);

        }
    );

});


/* =========================================================
   BUTTON GLITCH
========================================================= */

const cyberButtons =
    document.querySelectorAll(".cybr-btn");

cyberButtons.forEach(button => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.classList.add(
                "button-glitch-active"
            );

            setTimeout(() => {

                button.classList.remove(
                    "button-glitch-active"
                );

            }, 300);

        }
    );

});


/* =========================================================
   PREVENT HASH JUMP DELAY
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


/* =========================================================
   CONSOLE
========================================================= */

console.log(
    "%c JJ // SYSTEM ONLINE ",
    "background:#050505;color:#fff;padding:8px;font-weight:bold;"
);

console.log(
    "Portfolio initialized."
);