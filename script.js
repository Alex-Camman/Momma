document.addEventListener("DOMContentLoaded", function () {
  const envelope = document.getElementById('envelope');
  const confettiContainer = document.getElementById('confetti');

  // Function to open the envelope
  function openEnvelope() {
    envelope.classList.add('open');
    setTimeout(() => {
      confettiContainer.style.display = 'block';
      generateConfetti();
    }, 500); // Wait for half a second before showing confetti
  }

  // Function to create confetti animation
  function generateConfetti() {
    // Generate confetti elements
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
      confetti.style.animationDelay = Math.random() * 2 + 's';
      confettiContainer.appendChild(confetti);
    }

    // Remove confetti after animation
    confettiContainer.addEventListener('animationend', () => {
      confettiContainer.innerHTML = '';
      confettiContainer.style.display = 'none';
    });
  }

  // Event listener for the confetti button
  const confettiBtn = document.getElementById('confettiBtn');
  confettiBtn.addEventListener('click', openEnvelope);
});
