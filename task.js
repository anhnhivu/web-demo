function greet() {
    let name = document.querySelector('#crs').value;
    if (name === '') {
        name = ' ';
    }
        document.querySelector('h1').innerHTML = 'Hello, ' + name + '!';
};
