document.addEventListener("DOMContentLoaded", function () {
  // Function to handle carousel logic
  function setupCarousel(containerClass, prevBtnClass, nextBtnClass) {
    var container = document.querySelector(containerClass);
    var prevBtn = document.querySelector(prevBtnClass);
    var nextBtn = document.querySelector(nextBtnClass);
    var cardWidth = 17.1; // Width of each card (17.1rem)
    var currentPosition = 0; // Initial position is 0
    var maxCard = -17.1 * (container.querySelectorAll(".card").length - 7); // Last position of the container

    // Function to check and toggle prev and next button visibility
    function checkBtnVisibility() {
      prevBtn.style.display = currentPosition === 0 ? "none" : "block";
      nextBtn.style.display = currentPosition < maxCard ? "none" : "block";
    }

    // Check and toggle button visibility on page load
    checkBtnVisibility();

    prevBtn.addEventListener('click', function () {
      currentPosition += cardWidth;
      container.style.transform = "translateX(" + currentPosition + "rem)";
      checkBtnVisibility();
    });

    nextBtn.addEventListener('click', function () {
      currentPosition -= cardWidth;
      container.style.transform = "translateX(" + currentPosition + "rem)";
      checkBtnVisibility();
    });

    var autoScrollInterval;

    function startAutoScroll() {
      autoScrollInterval = setInterval(function () {
        if (currentPosition < maxCard) {
          clearInterval(autoScrollInterval);
        } else {
          currentPosition -= cardWidth;
          container.style.transform = "translateX(" + currentPosition + "rem)";
          checkBtnVisibility();
        }
      }, 2000);
    }

    startAutoScroll();
  }

  // Setup carousel for each section
  setTimeout(function () {setupCarousel(".banner-container .container-card", ".prev-btn", ".next-btn");;}, 1000);
});


document.addEventListener("DOMContentLoaded", function () {
  // Function to handle carousel logic
  function setupCarousel(containerClass, prevBtnClass, nextBtnClass) {
    var container = document.querySelector(containerClass);
    var prevBtn = document.querySelector(prevBtnClass);
    var nextBtn = document.querySelector(nextBtnClass);
    var cardWidth = 17.1; // Độ rộng của mỗi card (17.1rem)
    var currentPosition = 0; // Vị trí ban đầu là 0
    var maxCard = -17.1 * (container.querySelectorAll(".card").length - 7); // Vị trí cuối cùng của container

    // Hàm kiểm tra và ẩn/hiển thị nút prev và next
    function checkBtnVisibility() {
      prevBtn.style.display = currentPosition === 0 ? "none" : "block";
      nextBtn.style.display = currentPosition < maxCard ? "none" : "block";
    }

    // Kiểm tra và ẩn/hiển thị nút prev và next khi trang vừa load
    checkBtnVisibility();

    prevBtn.addEventListener('click', function () {
      currentPosition += cardWidth;
      container.style.transform = "translateX(" + currentPosition + "rem)";
      checkBtnVisibility();
    });

    nextBtn.addEventListener('click', function () {
      currentPosition -= cardWidth;
      container.style.transform = "translateX(" + currentPosition + "rem)";
      checkBtnVisibility();
    });

    var autoScrollInterval;

    function startAutoScroll() {
      autoScrollInterval = setInterval(function () {
        if (currentPosition < maxCard) {
          clearInterval(autoScrollInterval);
        } else {
          currentPosition -= cardWidth;
          container.style.transform = "translateX(" + currentPosition + "rem)";
          checkBtnVisibility();
        }
      }, 2000);
    }

    startAutoScroll();
  }

  // Function to create an Intersection Observer for each carousel section
  function createCarouselObserver(containerClass, prevBtnClass, nextBtnClass) {
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5 // 50% visibility threshold, adjust as needed
    };

    var carouselObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          // When the container becomes visible on the screen, setup the carousel
          setupCarousel(containerClass, prevBtnClass, nextBtnClass);
          // Once the carousel is set up, disconnect the observer to prevent multiple setups
          observer.unobserve(entry.target);
        }
      });
    }, options);

    var container = document.querySelector(containerClass);
    carouselObserver.observe(container);
  }

  // Call createCarouselObserver for each carousel section
  createCarouselObserver(".banner-container-1 .container-card", ".prev-btn-1", ".next-btn-1");
  createCarouselObserver(".banner-container-2 .container-card", ".prev-btn-2", ".next-btn-2");
  createCarouselObserver(".banner-container-3 .container-card", ".prev-btn-3", ".next-btn-3");
  createCarouselObserver(".banner-container-4 .container-card", ".prev-btn-4", ".next-btn-4");
  createCarouselObserver(".banner-container-5 .container-card", ".prev-btn-5", ".next-btn-5");
  createCarouselObserver(".banner-container-6 .container-card", ".prev-btn-6", ".next-btn-6");
  createCarouselObserver(".banner-container-7 .container-card", ".prev-btn-7", ".next-btn-7");
  createCarouselObserver(".banner-container-8 .container-card", ".prev-btn-8", ".next-btn-8");
  createCarouselObserver(".banner-container-9 .container-card", ".prev-btn-9", ".next-btn-9");
  createCarouselObserver(".banner-container-10 .container-card", ".prev-btn-10", ".next-btn-10");
});

  
 