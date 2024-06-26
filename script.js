function showImage()
//interactive from QuanGan id:29587612
{
    const stateInput = document.getElementById('stateInput').value.toLowerCase();
    const imageContainer = document.getElementById('imageContainer');
    const states = {
        massachusetts: 'src/mass.jpg', // Replace with actual path
        connecticut: 'src/conn.jpg',
        dc: 'src/dc.jpg',
        'new york': 'src/nyc.jpg',
        california: 'src/ca.jpg',

    };

    imageContainer.innerHTML = ''; // Clear previous images
    if (states[stateInput]) {
        const img = document.createElement('img');
        img.src = states[stateInput];
        imageContainer.appendChild(img);
    }

    else {
        imageContainer.innerHTML = '<p>No image found for this state. Please check your spelling and try again.</p>';
    }
}
