const toggleButton = document.querySelector("#toggle");

toggleButton.addEventListener('click', activateDarkMode);

async function activateDarkMode(ev) {
    await setState('darkMode', 'Activated', ev.target.checked);
}

(async () => {
    toggleButton.checked = await getState('darkMode', 'Activated', false);

    const $resetStorage = document.getElementById("reset-storage");
    $resetStorage.addEventListener("click", () => {
        resetStorage();
    });
})();
