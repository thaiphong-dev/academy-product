export const smoothScrollTo = (element: HTMLElement | null) => {
  if (element) {
    const scrollHeight =
      element.getBoundingClientRect().top + window.scrollY - 100; // Adjust by 100px
    let currentScroll = window.scrollY;
    const scrollDistance = scrollHeight - currentScroll;
    const scrollStep = scrollDistance / 30; // Dividing the scroll distance into smaller steps

    const scrollInterval = setInterval(() => {
      currentScroll += scrollStep;
      if (
        (scrollStep > 0 && currentScroll >= scrollHeight) ||
        (scrollStep < 0 && currentScroll <= scrollHeight)
      ) {
        clearInterval(scrollInterval); // Stop scrolling when target position is reached
      } else {
        window.scrollTo(0, currentScroll);
      }
    }, 10); // Update the scroll position every 10ms for a smooth effect
  }
};
