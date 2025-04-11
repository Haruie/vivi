const container = document.getElementById("scroll");
const lines = 16; // Number of lines
const wordsPerLine = 100; // Length of each line

for (let i = 0; i < lines; i++) {
  const line = document.createElement("div");
  line.className = "line";
  line.style.animationDelay = `${i * 1}s`; // Wave-like stagger
  line.style.top = `${i * 6}vh`; // Vertical spacing
  line.textContent = "Janvi ".repeat(wordsPerLine);
  container.appendChild(line);
}
