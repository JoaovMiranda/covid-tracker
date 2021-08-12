export function dispatchThisEvent() {
    setTimeout(() => {
        window.dispatchEvent(
            new Event('resize')
        );
    }, 300);
}