document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Toggle Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.padding = "10px";
    toggleButton.style.cursor = "pointer";

    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});

/* Dark Mode Styles */
const darkModeStyles = `
    .dark-mode {
        background-color: #121212;
        color: #fff;
    }
    .dark-mode section {
        background: #222;
        color: white;
    }
    .dark-mode header {
        background: #005bb5;
    }
    .dark-mode button {
        background: #005bb5;
    }
`;
const styleSheet = document.createElement("style");
styleSheet.innerText = darkModeStyles;
document.head.appendChild(styleSheet);
