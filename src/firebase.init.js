import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBzK-s_VFCAiC_MP7EonMw5wSWZXZGl3zg",
  authDomain: "volantear-network-client-side.firebaseapp.com",
  projectId: "volantear-network-client-side",
  storageBucket: "volantear-network-client-side.appspot.com",
  messagingSenderId: "795100358135",
  appId: "1:795100358135:web:cd9384f65238a3c860faf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ;