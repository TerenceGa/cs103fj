function showImage()
//interactive from QuanGan id:29587612
{
    const stateInput = document.getElementById('stateInput').value.toLowerCase();
    const imageContainer = document.getElementById('imageContainer');
    const states = {
        massachusetts: 'src/mass.jpg', // Replace with actual path
        connecticut: 'src/Conne.jpeg',
        dc: 'src/whitehouse.jpg',
        'new york': 'src/nyc.jpg',
        california: 'src/ca.jpg',

    };

    imageContainer.innerHTML = ''; // Clear previous images
    if (states[stateInput]) {
        const img = document.createElement('img');
        img.src = states[stateInput];
        imageContainer.appendChild(img);
    }
    else if (states == "answertopic"){
        imageContainer.innerHTML = '<p>nice catch but still got you</p>'
    }
    else {
        imageContainer.innerHTML = '<p>No image found for this state. Please check your spelling and try again.</p>';
    }
}
