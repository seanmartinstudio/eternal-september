document.addEventListener("DOMContentLoaded", function () {
    function updateTime() {
        const options = { 
            timeZone: 'America/Los_Angeles', 
            hour: 'numeric', 
            minute: 'numeric', 
            hour12: true 
        };
        const now = new Date().toLocaleTimeString('en-US', options);
        
        // Select the <p> tag and update it
        const timeElement = document.getElementById('local-time');
        if (timeElement) {
            timeElement.textContent = `Santa Monica, CA - ${now}`;
        }
    }

    // Run the function immediately and update every minute
    updateTime();
    setInterval(updateTime, 60000);
});
