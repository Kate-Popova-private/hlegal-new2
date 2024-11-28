// export const handleResize = (event) => {
//     if (event.target.innerWidth >= 768) {
//         setSlideToShow(4);
//     } else {
//         setSlideToShow(1);
//     }
// };
// const handleResize = (event) => {
//     if (window.outerWidth <= 768) {
//         setMobileLayout(true);
//     } else {
//         setMobileLayout(false);
//     }
// };
export function addEventResize(handleResize) {
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}
