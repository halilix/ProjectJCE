
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
	let requester = document.createElement('span');
	let date = document.createElement('span');
	let room = document.createElement('span');
	let building = document.createElement('span');
	let type = document.createElement('span');
	let eventName = document.createElement('span'); 
	li.setAttribute('data-id', doc.id);
	building.textContent = doc.data().building; 
	date.textContent = doc.data().date; 
	requester.textContent = doc.data().requester; 
	room.textContent = doc.data().room; 
	type.textContent = doc.data().type; 
	li.appendChild(requester);
	li.appendChild(building); 
	li.appendChild(room);
	li.appendChild(type); 
	li.appendChild(date); 
	list.appendChild(li); 
	}
db.collection('events').get().then((snapshot) => {
	snapshot.docs.forEach(doc => {
	render(doc);
	})
}) 
