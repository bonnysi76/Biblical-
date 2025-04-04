let currentPage = 1;
const totalPages = 1; // Only one page in this example

function changePage(direction) {
    const currentPageElement = document.getElementById(`page-${currentPage}`);
    currentPageElement.classList.remove('active');
    currentPage += direction;

    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;

    const nextPageElement = document.getElementById(`page-${currentPage}`);
    nextPageElement.classList.add('active');
    
    // Disable buttons if on first/last page
    document.getElementById('prev-btn').disabled = currentPage === 1;
    document.getElementById('next-btn').disabled = currentPage === totalPages;
}

// Set initial page
document.addEventListener("DOMContentLoaded", () => {
    changePage(0);
});
