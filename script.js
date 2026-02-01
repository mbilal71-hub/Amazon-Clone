document.addEventListener("DOMContentLoaded", () => {
  // --- Shopping Cart Functionality & Alignment ---
  const cartCountElement = document.querySelector(".nav-cart p");
  let cartCount = 0;

  function updateCartUI() {
    cartCountElement.innerText = `Cart (${cartCount})`;
  }

  // Add "Add to Cart" buttons and align them
  const boxContents = document.querySelectorAll(".box-content");

  boxContents.forEach((content) => {
    // Find the existing link
    const seeMoreLink = content.querySelector("a");

    // Create a wrapper for column alignment
    const actionContainer = document.createElement("div");
    actionContainer.classList.add("action-container");

    // Create button
    const addToCartBtn = document.createElement("button");
    addToCartBtn.innerText = "Add to Cart";
    addToCartBtn.classList.add("add-to-cart-btn");

    addToCartBtn.addEventListener("click", () => {
      cartCount++;
      updateCartUI();

      // Visual feedback
      const originalText = addToCartBtn.innerText;
      addToCartBtn.innerText = "Added!";
      setTimeout(() => {
        addToCartBtn.innerText = originalText;
      }, 1000);
    });

    // If link exists, move it into the wrapper
    if (seeMoreLink) {
      // Remove link from current position
      content.removeChild(seeMoreLink);

      // Add button and link to wrapper (Button first, then link below, or vice versa)
      // User asked: "Add to Cart" and "See more". Usually link is at bottom.
      // Let's put button first, link second.
      actionContainer.appendChild(addToCartBtn);
      actionContainer.appendChild(seeMoreLink);

      // Add wrapper to content
      content.appendChild(actionContainer);
    } else {
      // Just append button if no link
      content.appendChild(addToCartBtn);
    }
  });

  // --- Search Functionality (Suggestions) ---
  const searchInput = document.querySelector(".search-input");
  const boxes = document.querySelectorAll(".box");

  function performSearch() {
    const query = searchInput.value.toLowerCase().trim();

    // If empty, show all
    if (!query) {
      boxes.forEach((box) => {
        box.style.display = "flex";
        box.style.border = "none";
        box.style.opacity = "1";
      });
      return;
    }

    let found = false;
    boxes.forEach((box) => {
      const h2 = box.querySelector("h2");
      const title = h2 ? h2.innerText.toLowerCase() : "";

      // Check if title includes query
      if (title.includes(query)) {
        box.style.display = "flex";
        box.style.border = "2px solid #febd68";
        box.style.opacity = "1";
        found = true;
      } else {
        // Instead of hiding completely, maybe just dim nicely?
        // Or hide to simulate filtering as requested ("suggestional").
        // Hiding is clearer for filtering.
        box.style.display = "none";
        box.style.border = "none";
      }
    });

    // No alert, just UI update
  }

  // Live filtering on input
  searchInput.addEventListener("input", performSearch);

  // --- Smooth Scroll Back to Top ---
  const backToTopBtn = document.querySelector("#back-to-top");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
