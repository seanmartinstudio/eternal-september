document.addEventListener("DOMContentLoaded", function () {
    function updateTime() {
        const options = { 
            timeZone: 'America/Los_Angeles', 
            hour: 'numeric', 
            minute: 'numeric', 
            // second: 'numeric',  // Added seconds for debugging
            hour12: true 
        };
        const now = new Date().toLocaleTimeString('en-US', options);

        // Select the <p> tag and update it
        const timeElement = document.getElementById('local-time');
        if (timeElement) {
            timeElement.textContent = `Santa Monica, CA - ${now}`;
        } else {
            console.error("Element with id 'local-time' not found.");
        }

        console.log(now); // Debugging
    }

    // Run the function immediately and update every second (to verify it works)
    updateTime();
    setInterval(updateTime, 1000); // Updates every second for testing
});