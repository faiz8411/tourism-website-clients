import { initializeApp } from "firebase/app";
import firebaseConfig from '../Firebase/firebase.config'


const initializedAuthentication = () => {
    const app = initializeApp(firebaseConfig);
}
export default initializedAuthentication