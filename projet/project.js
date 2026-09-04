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
            "a, button, .feature, .glitch-image"
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
   TITLE GLITCH
========================================================= */

const title =
    document.querySelector(".glitch-text");


function triggerTitleGlitch() {

    if (!title) return;

    title.classList.add("active");

    setTimeout(() => {

        title.classList.remove("active");

    }, 350);
}


/*
    Premier glitch au chargement
*/

setTimeout(
    triggerTitleGlitch,
    1200
);


/*
    Puis périodiquement
*/

setInterval(
    triggerTitleGlitch,
    6000
);


/* =========================================================
   IMAGE GLITCH
========================================================= */

const images =
    document.querySelectorAll(
        ".glitch-image"
    );


function triggerImageGlitch(image) {

    if (!image) return;

    image.classList.add(
        "automatic-glitch"
    );

    setTimeout(() => {

        image.classList.remove(
            "automatic-glitch"
        );

    }, 700);
}


/*
    Glitch aléatoire très discret
*/

setInterval(() => {

    if (!images.length) return;

    const random =
        Math.floor(
            Math.random() *
            images.length
        );

    triggerImageGlitch(
        images[random]
    );

}, 4000);


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
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
                    document.querySelector(
                        targetId
                    );

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }
        );

    });


/* =========================================================
   CONSOLE
========================================================= */

console.log(
    "%c PROJECT_001 // THE ROADSIDE FILES ",
    "background:#050505;color:#fff;padding:8px;font-weight:bold;"
);

console.log(
    "CASE FILE LOADED."
);