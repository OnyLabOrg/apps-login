

// Connect to specific app
function connectToApp(appName) {
    // Add visual feedback
    const cards = document.querySelectorAll('.app-card');
    cards.forEach(card => {
        card.style.opacity = '0.5';
        card.style.pointerEvents = 'none';
    });
    
    // Simulate connection
    setTimeout(() => {
        alert(`Redirect to ${appName}`);
        
        // Restore cards
        cards.forEach(card => {
            card.style.opacity = '1';
            card.style.pointerEvents = 'auto';
        });
    }, 800);
}