import { doc, addDoc , serverTimestamp , collection} from "firebase/firestore"; 
import { db } from "../../firebase";

export default async function add_on_progress(recording, setRecording) {
    try{
        const timeTimestamp = serverTimestamp()
        const data = {
            creator: "admin",
            start: timeTimestamp,
            title: "admin"
          }
        await addDoc(collection(db, "on_progress"), data);
        setRecording({
            status:true,
            data:data
        })
        console.log(data)
        console.log("data added")
    } catch (error) {
        console.log(error)
    }
}