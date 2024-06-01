// src/Journal.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import check_on_progress from '../api/check_on_progress';

function Journal({recording, setRecording}) {
  const [entries, setEntries] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'journal'));
        const entriesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setEntries(entriesList);
        const check = await check_on_progress();
        if (check !== undefined){
          setRecording({status:true, data:check});
        }
      } catch (error) {
        console.error("Error fetching journal entries: ", error);
      }
    };

    fetchData();
  },[]);

  console.log(recording.status)
  return (
    <div className="Journal">
      <h1>Journal Entries</h1>

      <ul>
        {recording.status? (
            <li>
              <p>{recording.data?.start?.toDate().toLocaleString()}</p>
              <p>{recording.data?.creator}</p>
            </li>
          ) : null}

        {entries.map(entry => (
          <li key={entry.id} >
            <p>{entry.start.toDate().toLocaleString()}</p>
            <h2>{entry.title}</h2>
            <p>{entry.content}</p>
            <p>{entry.stop.toDate().toLocaleString()}</p>
          </li>
        ))}
        
      </ul>
    </div>
  );
}

export default Journal;
