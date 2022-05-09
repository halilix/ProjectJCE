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
		  let availability = document.createElement('span');
		  let building = document.createElement('span');
		  let date = document.createElement('span');
		  let owner = document.createElement('span');
		  li.setAttribute('data-id', doc.id);
		  building.textContent = doc.data().building; 
		  date.textContent = doc.data().date; 
		  owner.textContent = doc.data().owner; 
		  availability.textContent = doc.data().availability; 
		  li.appendChild(availability);
		  li.appendChild(building); 
		  li.appendChild(date);
		  li.appendChild(owner); 
		  list.appendChild(li); 
		  }
		db.collection('rooms').get().then((snapshot) => {
		  snapshot.docs.forEach(doc => {
		  render(doc);
		  })
		}) 