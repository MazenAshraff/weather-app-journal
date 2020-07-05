const postZip = async(url, data) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)


    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (e) {
        console.log('error', e);
    }
}


const p = document.querySelector('p');
const textarea = document.querySelector('textarea');



const button = document.getElementById('button');
button.addEventListener('click', () => {
    postZip('/zip', { 'zip': textarea.value });
});

postZip('/zip', { 'zip': '12345' });
postZip('/zip', { 'zip': '31423' });
postZip('/zip', { 'zip': '61732' });