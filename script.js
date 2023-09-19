// Sample music data (replace with your actual music data)
const musicData = [
  { title: "Chopin Heroic Polonaise", url: "heroic.mp3" },
  { title: "Moon Over a Lake in Autumn", url: "PHQY.mp3" },
];

// Function to load music items dynamically
function loadMusic() {
  const musicList = document.getElementById("music-list");
  musicData.forEach((item) => {
    const li = document.createElement("li");
    const audio = document.createElement("audio");
    audio.controls = true;
    audio.src = item.url;

    // Add a space (or any other separator) between the title and the URL link
    li.textContent = item.title + " "; // Add a space here
    li.appendChild(audio);
    musicList.appendChild(li);
  });
}

// Event listener for booking a lesson button
document.getElementById("book-lesson").addEventListener("click", () => {
  // Implement your booking functionality here (e.g., open a booking form)
});

// Load music when the page loads
window.addEventListener("load", loadMusic);
