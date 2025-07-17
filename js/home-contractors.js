const button = document.getElementById('search-button');
  const originalContainer = document.getElementById('container');
  const mobileContainer = document.getElementById('mobile-placeholder');

  function moveButtonBasedOnWidth() {
    if (window.innerWidth <= 640) {
      if (button.parentElement !== mobileContainer) {
        mobileContainer.appendChild(button);
        button.style.marginLeft = '0px';
        button.style.width = '98%';
        button.style.marginTop = '0.5rem';
      }
    } else {
      if (button.parentElement !== originalContainer) {
        originalContainer.appendChild(button);
      }
    }
  }

  window.addEventListener('load', moveButtonBasedOnWidth);
  window.addEventListener('resize', moveButtonBasedOnWidth);






document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.projects-cards-wrapper');
  const dotsContainer = document.querySelector('.pagination-dots');
  const cards = document.querySelectorAll('.project-card');

  if (!container || !dotsContainer || cards.length === 0) return;

  let activeIndex = 0;

  function getVisibleCardsCount() {
    const containerWidth = container.offsetWidth;
    const cardWidth = cards[0].offsetWidth;
    return Math.max(1, Math.floor(containerWidth / cardWidth));
  }

  function getTotalPages() {
    const visibleCount = getVisibleCardsCount();
    return Math.ceil(cards.length / visibleCount);
  }

  function createDots() {
    dotsContainer.innerHTML = '';
    const totalPages = getTotalPages();
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement('button');
      dot.setAttribute('aria-label', `View projects page ${i + 1}`);
      dot.addEventListener('click', () => {
        activeIndex = i;
        scrollToPage(i);
        updateDots();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function scrollToPage(pageIndex) {
    const visibleCount = getVisibleCardsCount();
    const targetCardIndex = pageIndex * visibleCount;
    const card = cards[targetCardIndex];
    console.log(card.offsetLeft)
    if (card) {
      container.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
    }
  }

  function getDots() {
    return dotsContainer.querySelectorAll('button');
  }

  function updateDots() {
    getDots().forEach((dot, i) => dot.classList.toggle('active', i === activeIndex));
  }

  container.addEventListener('scroll', () => {
    const visibleCount = getVisibleCardsCount();
    const scrollLeft = container.scrollLeft;

    let closestCardIndex = 0;
    let minDistance = Infinity;
    cards.forEach((card, i) => {
      const distance = Math.abs(card.offsetLeft - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestCardIndex = i;
      }
    });

    const pageIndex = Math.floor(closestCardIndex / visibleCount);

    if (pageIndex !== activeIndex) {
      activeIndex = pageIndex;
      updateDots();
    }
  });

  window.addEventListener('resize', () => {
    createDots();
    activeIndex = 0;
    scrollToPage(activeIndex);
    updateDots();
  });

  createDots();
  updateDots();
});







