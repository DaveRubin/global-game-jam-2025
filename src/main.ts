import "./PhaserGame";


// Disable scrolling
document.body.style.overflow = 'hidden';

// // Prevent touch gestures on touch devices
// document.addEventListener(
//     'touchmove',
//     (event) => {
//         event.preventDefault(); // Prevent scrolling
//     },
//     { passive: false } // Allow preventDefault to work
// );

// Disable the context menu (right-click and long-press)
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

// // Prevent long-press actions like text selection or image saving
// document.addEventListener('touchstart', (event) => {
//     const target = event.target;
//
//     // Check if the target is a DOM element and its tag name
//     if (target instanceof HTMLElement && target.tagName === 'CANVAS') {
//         event.preventDefault(); // Ensure interaction is limited to canvas
//     }
// }, { passive: false });


console.log('version', '1.0.1-beta-3');
