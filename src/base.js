import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCdvS3hIAb1bjrUsz_s20ysu4VmEX9IRKw",
  authDomain: "food-menu-react-app.firebaseapp.com",
  databaseURL: "https://food-menu-react-app.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export { firebaseApp };

//This is our default export
export default base;
