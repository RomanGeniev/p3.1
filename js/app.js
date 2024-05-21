(async () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const coordsEl = document.querySelector('#user-coords');
            coordsEl.textContent = `${position.coords.latitude}, ${position.coords.longitude}`
            coordsEl.parentElement.classList.remove('invisible');
        });
    }
<<<<<<< HEAD
})();
=======
})();
>>>>>>> d6e9ccb4b88236dc05cdddd4b67b755f0a20ea7e
