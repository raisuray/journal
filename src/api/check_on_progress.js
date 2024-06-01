import { collection, query, where, getDocs, limit} from "firebase/firestore";
import { db } from "../../firebase";


export default async function check_on_progress() {
    const q = query(collection(db, "on_progress"), where("creator", "==", "admin"), limit(1));
    const querySnapshot = await getDocs(q);
    
    var results;
    
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const dataWithId = { id: doc.id, ...doc.data() };
        results = dataWithId;
    });
    
    console.log(results)
    return results
}