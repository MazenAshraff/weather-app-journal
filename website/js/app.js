const baseuri = 'api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '<YOUR_API_KEY>&units=imperial';
const postData = async(url, data) => {
    //    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)


    });
    return response.body;

}


const p = document.querySelector('p');
const textarea = document.querySelector('textarea');



const button = document.getElementById('generate');

const allnumbers = (string) => {
    if (string.length > 5) return false;
    for (let i = 0; i < string.length; i++) {
        if (string[i] < '0' || string[i] > '9') {
            return false;
        }
    }
    return true;
}


const logic = async() => {
    const textarea = document.getElementById('zip');
    const zip = textarea.value;
    if (!allnumbers(zip)) {
        alert('please enter a valid zip');
        return null;
    } else {
        const date = new Date();
        const feelings = document.getElementById('feelings');
        const datediv = document.getElementById('date');
        const temp = document.getElementById('temp');
        const content = document.getElementById('content');

        const req = await fetch(`http://${baseuri}${zip}${apiKey}`);
        try {
            const data = await req.json();
            if (data.cod === "404") {
                alert("city not found");
                return null;
            }
            const neededData = { 'Temperature': `${data.main.temp} Kelvin`, 'Date': date.toDateString(), 'feelings': feelings.value }
            await postData('/data', neededData);
            const returnedData = await fetch('/search');
            const jsondata = await returnedData.json();
            try {
                datediv.innerHTML = jsondata["Date"];
                temp.innerHTML = jsondata["Temperature"];
                content.innerHTML = jsondata["feelings"];

                return data;
            } catch (e) {
                console.log('error occured:' + e);
            }

        } catch (e) {
            console.log('error:' + e);
        }
    }
}

button.addEventListener('click', logic);