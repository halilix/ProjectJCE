      // Initialize Firebase
      var config = {
		apiKey: "AIzaSyD4guLiOJJs6RtIg_bD0tY1jgLT-5QBplo",
		authDomain: "yuvalimrooms.firebaseapp.com",
		databaseURL: "https://yuvalimrooms-default-rtdb.europe-west1.firebasedatabase.app",
		projectId: "yuvalimrooms",
		storageBucket: "yuvalimrooms.appspot.com",
		messagingSenderId: "196267781068",
		};
		firebase.initializeApp(config);
		const db = firebase.firestore();
		  

const list = document.querySelector('#list');

function render(doc){
	let li = document.createElement('li');
	let email = document.createElement('span');
	let date = document.createElement('span');
	let identity = document.createElement('span');
	let name1 = document.createElement('span');
	let phone = document.createElement('span'); 
	let address  = document.createElement('span'); 
	li.setAttribute('data-id', doc.id);
	email.textContent = doc.data().email; 
	date.textContent = doc.data().date; 
	identity.textContent = doc.data().identity; 
	name1.textContent = doc.data().name; 
	phone.textContent = doc.data().phone; 
	address.textContent = doc.data().address; 
	li.appendChild(identity);
	li.appendChild(address);
	li.appendChild(email);
	li.appendChild(phone); 
	li.appendChild(name1); 
	li.appendChild(date); 
	list.appendChild(li); 
	}
db.collection('requests').get().then((snapshot) => {
	snapshot.docs.forEach(doc => {
	render(doc);
	})
}) 
