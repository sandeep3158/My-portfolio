const firebaseConfig = {
  apiKey: "AIzaSyBERis5BDCg1qc1tsrP777XGzBzb0a3EJM",
  authDomain: "personal-portfolio-college.firebaseapp.com",
  databaseURL: "https://personal-portfolio-college-default-rtdb.firebaseio.com",
  projectId: "personal-portfolio-college",
  storageBucket: "personal-portfolio-college.appspot.com",
  messagingSenderId: "250983182630",
  appId: "1:250983182630:web:349c6b61f0946c6b3811e7",
  measurementId: "G-4LJG3RRSX0",
};
//initilize firebase
firebase.initializeApp(firebaseConfig);
//reference for database
const contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  const Name = getElementval("name");
  const email = getElementval("email");
  const mobileno = getElementval("mobileno");
  const subject = getElementval("subject");
  const Message = getElementval("Message");
  //   console.log(Name, email, mobileno, Message);
  saveMessages(Name, email, mobileno, subject, Message);

  //enable alert
  document.querySelector(".alert").style.display = "block";
  //remove alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // reset Form
  document.getElementById("contactForm").reset();
};

const saveMessages = (Name, email, mobileno, subject, Message) => {
  const newContactForm = contactFormDB.push();
  newContactForm.set({
    Name: Name,
    email: email,
    mobileno: mobileno,
    subject: subject,
    Message: Message,
  });
};
const getElementval = (id) => {
  return document.getElementById(id).value;
};

// email
function sendMail() {

  Email.send({
    SecureToken: "4f63194d-c408-4127-a26d-ebd2f16cba48 ",
    To: 'sandeepsaini0204@gmail.com',
    From: 'sandeepsaini0204@gmail.com',
    Subject: 'Email Getting from portfolio Website',
    Body: "Name:<br>" + getElementval('name') + "<br><hr>Email:<br>" + getElementval('email')
      + "<br><hr>Mobileno:<br>" + getElementval('mobileno') + "<br><hr>Message:<br>" +
      getElementval('Message')
  }
  );
};
