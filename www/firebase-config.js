 Project settings > Your apps > Web app.
export const firebaseConfig = {
  apiKey: "AIzaSyBd7VEf3eRJ3VCLJ4hPcKCLGbkpsWC3ADQ",
  authDomain: "tikariyas-music.firebaseapp.com",
  projectId: "tikariyas-music",
  storageBucket: "tikariyas-music.firebasestorage.app",
  messagingSenderId: "51654298922",
  appId: "1:51654298922:web:7f1f13e10ef1647a652253"
};

// The email address you will use as the teacher. Write it in lowercase.
// It must match the email in firestore.rules.
export const TEACHER_EMAIL = "musicsnsounds@gmail.com";

// Name shown at the top of the app.
export const CLASS_NAME = "Tikariyas School of Music";

// Choices students see when enrolling. Change these to match what you teach.
export const INSTRUMENTS = ["Guitar", "Keyboard / Piano", "Vocals", "Congo", "Violin", "Octopad", "Other"];
