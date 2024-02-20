document.getElementById('heart').addEventListener('click', function() {
    var path = this.querySelector('path');
    path.setAttribute('fill', path.getAttribute('fill') === 'red' ? 'none' : 'red');
    this.classList.add('clicked');
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 1000); 
});