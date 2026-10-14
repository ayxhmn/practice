(function() {
    'use strict';

    // Function to hide recommended videos on the watch page
    function hideRecommendedVideos() {
        const recommendedSection = document.querySelector('ytd-watch-next-secondary-results-renderer');
        if (recommendedSection) {
            recommendedSection.style.display = 'none';
        }
    }

    // Function to hide the homepage feed
    function hideHomepageVideos() {
        const homepageFeed = document.querySelector('ytd-rich-grid-renderer');
        if (homepageFeed) {
            homepageFeed.style.display = 'none';
        }
    }

    // Hiding elements based on page type (Video page or Homepage)
    if (window.location.href.includes("watch")) {
        hideRecommendedVideos(); // Hide recommended videos on video pages
    } 
    if (window.location.href === "https://www.youtube.com/") {
        hideHomepageVideos(); // Hide homepage feed
    }

    // Keep checking to ensure dynamic content is hidden (for dynamic pages like YouTube)
    const observer = new MutationObserver(() => {
        if (window.location.href.includes("watch")) {
            hideRecommendedVideos();  // Ensure recommended videos stay hidden
        }
        if (window.location.href === "https://www.youtube.com/") {
            hideHomepageVideos();  // Ensure homepage feed stays hidden
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

})();