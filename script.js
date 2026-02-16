// Elements
const envelope = document.getElementById("envelope-container");
const firstValentine = document.getElementById("first-valentine-container");
const reasons = document.getElementById("reasons-container");
const questionTeaser = document.getElementById("question-teaser-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");
const firstValentineNextBtn = document.getElementById("first-valentine-next");
const reasonsNextBtn = document.getElementById("reasons-next");
const questionTeaserNextBtn = document.getElementById("question-teaser-next");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Play click sound (used on every button / envelope click)
function playClickSound() {
    const audio = new Audio("sounds/mouse_click.mp3");
    audio.volume = 0.1;
    audio.play().catch(() => {});
}

// Click Envelope → show First Valentine's page
envelope.addEventListener("click", () => {
    playClickSound();
    envelope.style.display = "none";
    firstValentine.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".first-valentine-window").classList.add("open");
    }, 50);
});

// Click Next on First Valentine's → show Reasons page
firstValentineNextBtn.addEventListener("click", () => {
    playClickSound();
    firstValentine.style.display = "none";
    reasons.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".reasons-window").classList.add("open");
    }, 50);
});

// Click Next on Reasons → show "So I have a question..." page
reasonsNextBtn.addEventListener("click", () => {
    playClickSound();
    reasons.style.display = "none";
    questionTeaser.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".question-teaser-window").classList.add("open");
    }, 50);
});

// Click Next on question teaser → show Valentine question page
questionTeaserNextBtn.addEventListener("click", () => {
    playClickSound();
    questionTeaser.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector("#letter-container .letter-window").classList.add("open");
    }, 50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     playClickSound();
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {
    playClickSound();
    title.textContent = "Yayyyyy";

    catImg.src = "gifs/duck_fart_heart.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
