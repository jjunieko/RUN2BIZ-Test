
window.addEventListener('DOMContentLoaded', () => {
    // Fetch data from the backend and update the statistics
    fetch('http://localhost:3000/passwords')
        .then(response => response.json())
        .then(data => {
            document.getElementById('part1-count').textContent = data.validPasswordsCountPart1;
            document.getElementById('part2-count').textContent = data.validPasswordsCountPart2;
        })
        .catch(error => console.log(error));
});