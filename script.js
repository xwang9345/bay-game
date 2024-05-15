document.addEventListener("DOMContentLoaded", () => {
    const hui = document.getElementById("hui");
    const huiImg = document.getElementById("hui-img");
    const bayImg = document.getElementById("bay-img");

    hui.addEventListener("click", () => {
        huiImg.src = "images/hui-pain.png";
        bayImg.src = "images/bay-happy.png";
        setTimeout(() => {
            huiImg.src = "images/hui-normal.png";
            bayImg.src = "images/bay-normal.png";
        }, 1000); // 1000 milliseconds = 1 second
    });

    hui.addEventListener("touchstart", () => {
        huiImg.src = "images/hui-pain.png";
        bayImg.src = "images/bay-happy.png";
        setTimeout(() => {
            huiImg.src = "images/hui-normal.png";
            bayImg.src = "images/bay-normal.png";
        }, 1000); // 1000 milliseconds = 1 second
    });
});
