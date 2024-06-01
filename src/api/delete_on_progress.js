import { db } from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";

export default async function delete_on_progress(recording, setRecording) {
    try {
        await deleteDoc(doc(db, "on_progress", recording.data.id));
        setRecording({
            status:false,
            data:null
        })
        console.log("deleted")

    } catch (error) {
        console.log("error while deleting")
        console.log(error)
    }
}