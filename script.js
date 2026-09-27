let selectedBackground = "";

/* Page Load */

window.addEventListener("load", () => {

    const savedBackground =
        localStorage.getItem("background");

    if (savedBackground) {

        document.getElementById("bg").style.backgroundImage =
            `url(${savedBackground})`;

    }

});

/* Upload Background */

function uploadBackground() {

    const input =
        document.getElementById("bgInput");

    input.click();

    input.onchange = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        const reader =
            new FileReader();

        reader.onload = (event) => {

            selectedBackground =
                event.target.result;

        };

        reader.readAsDataURL(file);

    };

}

/* Apply Background */

function applyBackground() {

    if (!selectedBackground) {

        alert("Please upload an image first");
        return;

    }

    document.getElementById("bg")
        .style.backgroundImage =
        `url(${selectedBackground})`;

    localStorage.setItem(
        "background",
        selectedBackground
    );

    alert("Background Applied ✅");

}

/* Image Page */

function openImagePage() {

    alert("Images Page Coming Soon");

}

/* Video Page */

function openVideoPage() {

    alert("Videos Page Coming Soon");

}

/* Personal Page */

function openPersonalPage() {

    const password =
        prompt("Enter Password");

    if (
        password ===
        "SD-sabarideepa-5522"
    ) {

        alert("Access Granted ✅");

    } else {

        alert("Wrong Password ❌");

    }

}

/* Button Hover Sound Effect (Optional) */

const buttons =
    document.querySelectorAll(
        ".uploadBtn,.applyBtn,.glass-card"
    );

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform =
            "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform =
            "";

    });

});