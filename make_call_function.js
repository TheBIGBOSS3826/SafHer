<div class="button-list">
    <button id="emergency-btn">Emergency</button>
    <button id="campus-police-btn">Campus Police</button>
</div>

<script>
    // Function to handle phone calls
    function makeCall(phoneNumber) {
        window.location.href = `tel:${phoneNumber}`;
    }

    // Attach event listeners to buttons
    document.getElementById("emergency-btn").addEventListener("click", () => {
        makeCall("911"); // Emergency number
    });

    document.getElementById("campus-police-btn").addEventListener("click", () => {
        makeCall("7653984051"); // Campus police number
    });
</script>
