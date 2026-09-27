let selectedBackground = "";

/* Load Saved Background */

window.addEventListener("load", () => {

    const savedBackground = localStorage.getItem("background");

    if (savedBackground) {
        document.getElementById("bg").style.backgroundImage =
            `url(${savedBackground})`;
    }

});

/* Upload Background */

function uploadBackground() {

    const input = document.getElementById("bgInput");

    input.click();

    input.onchange = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = (event) => {

            selectedBackground = event.target.result;

        };

        reader.readAsDataURL(file);

    };

}

/* Apply Background */

function applyBackground() {

    if (!selectedBackground) {

        alert("Please Upload An Image First ❤️");
        return;

    }

    document.getElementById("bg").style.backgroundImage =
        `url(${selectedBackground})`;

    localStorage.setItem(
        "background",
        selectedBackground
    );

}

/* Images Page */

function openImagePage() {

    const bg =
        localStorage.getItem("background") || "";

    document.body.innerHTML = `

    <div id="bg"
    style="
    background-image:url('${bg}');
    position:fixed;
    inset:0;
    background-size:cover;
    background-position:center;
    filter:blur(12px);
    transform:scale(1.1);
    z-index:-2;">
    </div>

    <div class="gallery-page">

        <button
        class="uploadBtn"
        onclick="document.getElementById('galleryInput').click()">
        Upload
        </button>

        <input
        type="file"
        id="galleryInput"
        multiple
        accept="image/*"
        hidden>

        <div id="galleryGrid"></div>

    </div>

    `;

    loadGallery();

    document
    .getElementById("galleryInput")
    .addEventListener("change", saveImages);

}

/* Videos Page */

function openVideoPage() {

    alert("🎬 Videos Page Coming Soon");

}

/* Personal Page */

function openPersonalPage() {

    const password =
        prompt("Enter Password 🔒");

    if (password === "SD-sabarideepa-5522") {

        alert("✅ Access Granted");

    } else {

        alert("❌ Wrong Password");

    }

}

/* Hover Effect */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const cards =
            document.querySelectorAll(
                ".glass-card"
            );

        cards.forEach(card => {

            card.addEventListener(
                "mouseenter",
                () => {

                    card.style.transform =
                        "translateY(-12px) scale(1.05)";

                }
            );

            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "translateY(0) scale(1)";

                }
            );

        });

    }
);
function saveImages(event){

    const files = event.target.files;

    let images =
    JSON.parse(
    localStorage.getItem("galleryImages")
    || "[]"
    );

    Array.from(files).forEach(file=>{

        const reader = new FileReader();

        reader.onload = function(e){

            images.push(e.target.result);

            localStorage.setItem(
            "galleryImages",
            JSON.stringify(images)
            );

            loadGallery();

        };

        reader.readAsDataURL(file);

    });

}

function loadGallery(){

    const gallery =
    document.getElementById("galleryGrid");

    if(!gallery) return;

    gallery.innerHTML="";

    const images =
    JSON.parse(
    localStorage.getItem("galleryImages")
    || "[]"
    );

    images.forEach(img=>{

        const image =
        document.createElement("img");

        image.src = img;

        image.onclick = ()=>{

            window.open(img);

        };

        gallery.appendChild(image);

    });

}