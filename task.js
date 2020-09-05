function greet() {
    let name = document.querySelector('#crs').value;
    if (name === '') {
        name = ' ';
    }
        document.querySelector('h1').innerHTML = 'Hello, ' + name + '!';
};

/*var upload = function(event) {
	var image = document.getElementById("output");
	image.src = URL.createObjectURL(event.target.files[0]);
};

firebase.initializeApp(firebaseConfig);
console.log(firebase)

function uploadeImage() {
    const ref = firebase.storage().ref()
    const file = document.querySelector("#photo").files[0]
    const name = new Date() + '-' + file.name
    const metadata = {
        contentType:file.type
    }
    const task = ref.child(name).put(file,metadata)
    task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
        console.log(url)
        alert("Image Upload Successful")
        const image = 
    })
};*/