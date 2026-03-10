const imageInput = document.getElementById("imageInput");
const previewImage = document.getElementById("previewImage");
const resultBox = document.getElementById("result");
const pesticideBox = document.getElementById("pesticide");
const weatherAlert = document.getElementById("weatherAlert");

imageInput.addEventListener("change", function() {
    const file = imageInput.files[0];
    if (file) {
        previewImage.src = URL.createObjectURL(file);
        previewImage.style.display = "block";
    }
});

function detectDisease() {

    if (!previewImage.src) {
        alert("Please capture leaf image first!");
        return;
    }

    const diseases = [
        {
            name: "Leaf Blight",
            telugu: "ఆకు ఎండ రోగం",
            pesticide: "Mancozeb",
            dosage: "2 grams per liter water"
        },
        {
            name: "Powdery Mildew",
            telugu: "పొడి పుచ్చు రోగం",
            pesticide: "Sulfur Fungicide",
            dosage: "3 grams per liter water"
        },
        {
            name: "Bacterial Spot",
            telugu: "బాక్టీరియా మచ్చ రోగం",
            pesticide: "Copper Oxychloride",
            dosage: "2.5 grams per liter water"
        }
    ];

    const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];

    resultBox.innerHTML = `
        English: ${randomDisease.name} Detected ⚠️ <br>
        తెలుగు: ${randomDisease.telugu} గుర్తించబడింది ⚠️
    `;

    pesticideBox.innerHTML = `
        Recommended Pesticide: ${randomDisease.pesticide} <br>
        Dosage: ${randomDisease.dosage} <br><br>
        సూచించిన మందు: ${randomDisease.pesticide} <br>
        మోతాదు: ${randomDisease.dosage}
    `;

    // Weather based alert logic (demo)
    const temperature = Math.floor(Math.random() * 40);
    const humidity = Math.floor(Math.random() * 100);

    if (humidity > 70) {
        weatherAlert.innerHTML = `
            Weather Alert ⚠️ <br>
            High Humidity (${humidity}%) may increase fungal diseases. <br>
            వాతావరణ హెచ్చరిక: అధిక ఆర్ద్రత ఫంగల్ రోగాలు పెరగవచ్చు.
        `;
        weatherAlert.style.background = "#fff3cd";
    } else {
        weatherAlert.innerHTML = `
            Weather Condition Normal ✅ <br>
            వాతావరణ పరిస్థితి సాధారణంగా ఉంది ✅
        `;
        weatherAlert.style.background = "#d4edda";
    }
}