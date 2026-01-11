// Add to your script.js or in a <script> tag
document.addEventListener("DOMContentLoaded", function () {
  const audioElements = document.querySelectorAll("audio");

  audioElements.forEach((audio) => {
    audio.addEventListener("error", function () {
      const parent = this.parentElement;
      if (!parent.querySelector(".audio-error")) {
        const errorMsg = document.createElement("div");
        errorMsg.className = "audio-error";
        errorMsg.innerHTML = `
                    <p style="color: #d32f2f; font-size: 0.9rem; margin: 0.5rem 0;">
                        <i class="fas fa-exclamation-circle"></i>
                        Audio may not play in browser. Try downloading instead.
                    </p>
                    <a href="${this.src}" download 
                       style="color: #4CAF50; text-decoration: underline;">
                        Download Audio
                    </a>
                `;
        parent.appendChild(errorMsg);
      }
    });
  });
});
