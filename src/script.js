import './styles.css';

document.querySelectorAll('.card a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('This feature is not available yet!');
    });
}); 