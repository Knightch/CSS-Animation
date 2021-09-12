// horizontal scroll
window.addEventListener("mousewheel", e => {
	if (e.deltaX === 0) {
		e.stopPropagation();
		e.preventDefault();
		window.scrollBy(e.deltaY, 0);
	}
});

// tilt hover effect -> Tilt.js