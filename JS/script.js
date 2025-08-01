document.addEventListener("DOMContentLoaded", () => document.body.classList.add("loaded"));

function checkAnswer(button, isCorrect) {
    const feedback = document.getElementById('feedback');
    const feedbackText = document.getElementById('feedback-text');
    if (isCorrect) {
        feedbackText.textContent = "💘 My boy! 💘";
        feedbackText.className = "text-green";
        feedback.classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('quiz-gate').classList.add('hidden');
            document.getElementById('main-content').classList.remove('hidden');
            createHearts();
            createConfetti();
            updateSlider();
        }, 1500);
    } else {
        button.disabled = true;
        feedbackText.textContent = "Matkallemnish tany :)";
        feedbackText.className = "text-red";
        feedback.classList.remove('hidden');
        setTimeout(() => feedback.classList.add('hidden'), 2000);
    }
}

  const swiperr = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: false, // set to true if you want infinite looping
    speed: 600,  // increase speed if you want it to feel faster
  });

  let currentPhotoIndex = 0;

  function updateSlider() {
    const items = document.querySelectorAll('.photo-item');
    items.forEach((item, index) => {
      item.classList.remove('active');
      if (index === currentPhotoIndex) {
        item.classList.add('active');
      }
    });
  }

  function nextPhoto() {
    const total = document.querySelectorAll('.photo-item').length;
    currentPhotoIndex = (currentPhotoIndex + 1) % total;
    updateSlider();
  }

  function prevPhoto() {
    const total = document.querySelectorAll('.photo-item').length;
    currentPhotoIndex = (currentPhotoIndex - 1 + total) % total;
    updateSlider();
  }

  // Show the first slide on load
  window.onload = updateSlider;


function createHearts() {
    const heartsContainer = document.getElementById('floating-hearts');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('span');
        const size = Math.random() * 20 + 10;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 6 + 5}s`;
        heart.style.animationDelay = `${Math.random() * 2}s`;
        heart.style.opacity = Math.random() * 0.7 + 0.3;
        heartsContainer.appendChild(heart);
    }
}

function createConfetti() {
    const colors = ['#f87171', '#60a5fa', '#34d399', '#fbbf24', '#a78bfa'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.width = `${Math.random() * 8 + 4}px`;
        confetti.style.height = `${Math.random() * 8 + 4}px`;
        document.body.appendChild(confetti);
        setTimeout(() => {
            confetti.style.opacity = '1';
            confetti.style.transform = `translateY(${window.innerHeight}px)`;
            confetti.style.left = `${parseFloat(confetti.style.left) + (Math.random() * 20 - 10)}px`;
        }, 50);
        setTimeout(() => confetti.remove(), 5000);
    }
}

    const swiper = new Swiper('.swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      grabCursor: true,
    });

function goToPage(pageNum) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  const target = document.getElementById('page' + pageNum);
  if (target) target.classList.add('active');
}