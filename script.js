// --- DATABASE ---
const contentDatabase = {
    news: [
        { title: "Eurovision 2026 Preparations Underway", date: "April 25, 2026", text: "Broadcasters have officially begun confirming their participation for the upcoming season." },
        { title: "Rumored Stage Design Leaked", date: "April 20, 2026", text: "Insiders suggest this year's stage will feature record-breaking LED installations." }
    ],
    articles: [
        { title: "Top 10 Eurovision Winners of the 21st Century", date: "April 15, 2026", text: "We look back at the most iconic, point-scoring performances since the year 2000. From Lordi to Loreen..." },
        { title: "The Evolution of the Voting System", date: "April 10, 2026", text: "A deep dive into how juries, televoting, and the 'Rest of the World' vote changed the game forever." }
    ]
};

const onThisDayDatabase = {
    // Format: "MM-DD"
    "04-27": "In 1996, the controversial audio-only pre-qualification round took place, resulting in Germany failing to qualify for the first time in Eurovision history.",
    "04-30": "In 1988, Celine Dion won the Eurovision Song Contest for Switzerland with the song 'Ne partez pas sans moi', beating the UK by just one point!",
    "05-13": "Grand Final season! Historic dates throughout the mid-2000s and 2010s saw spectacular finals taking place on this day."
};

// --- LOGIC ---
function loadContent(section) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = ''; // Clear current content

    const data = contentDatabase[section];
    
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2>${item.title}</h2>
            <small>📅 ${item.date}</small>
            <p>${item.text}</p>
            <a href="#" style="color: #00005b; font-weight: bold; text-decoration: none;">Read full story →</a>
        `;
        mainContent.appendChild(card);
    });
}

function loadOnThisDay() {
    const today = new Date();
    // Format date to match our database keys (e.g., "04-27")
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const dateKey = `${month}-${day}`;

    const widgetText = document.getElementById('on-this-day-text');
    
    if (onThisDayDatabase[dateKey]) {
        widgetText.innerHTML = `<strong>${month}/${day}:</strong> ${onThisDayDatabase[dateKey]}`;
    } else {
        widgetText.innerHTML = "No major Eurovision historical events recorded for today, but the music never stops!";
    }
}

// Initialize the page on load
window.onload = () => {
    loadContent('news'); // Load news by default
    loadOnThisDay();
};