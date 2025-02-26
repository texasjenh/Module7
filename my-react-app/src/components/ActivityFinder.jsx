// import { useState, useEffect } from "react";

// function ActivityFinder() { // Fetches a random activity
//     const [participants, setParticipants] = useState(1);
//     const [activity, setActivity] = useState('');
 
    // ****SLIDE 11 - useEffect HOOK****
    // useEffect(() => {
    //     fetch('https://www.boredapi.com/api/activity?' +
    //         'participants=' + participants)
    //         .then(response => response.json())
    //         .then(json => {
    //             setActivity(json.activity);
    //         });
    // }, [participants]);

    // return (
    //     <div className="ActivityFinder componentBox">
    //         <h3>Activity Finder</h3>
    //         <label>Choose number of participants:
    //             <select value={participants}
    //             onChange={e => setParticipants(e.target.value)}><option>1</option><option>2</option><option>3</option>
    //             </select>
    //         </label>
    //         <div><strong>Suggested Activity: </strong>{activity}</div>
    //     </div>
    // )

    // ****SLIDE 12 = useEffect HOOK w/ CLEAN UP**** 
//     useEffect(() => {
//         console.log('running effect');
//         let ignore = false; // flag to allow ignoring of the fetch result

//     fetch('https://www.boredapi.com/api/activity?' + 'participants=' + participants)
//         .then(response => response.json())
//         .then(json => {
// // only update state if the effect is still valid ie. the dependency hasn't changed since the request
//             if (!ignore) setActivity(json.activity);
//         });
// // cleanup function - runs when unmounted or dependencies change
//     return () => {
//         ignore = true; // ignore now invalid fetch results
//         console.log('cleanup effect');
//     }; 
// }, [participants]); // effect dependencies

// }

// export default ActivityFinder

// ****SLIDE 32 - CUSTOM HOOKS****
import { useState, useEffect } from "react";
import { useData } from "../hooks/useData";

function ActivityFinder() { // Fetches a random activity
    const [participants, setParticipants] = useState(1);
    // uses custom hook to handle the effect for loading external data
    const data = useData('https://www.boredapi.com/api/activity?'+'participants='+participants);
    // get the activity from the json or show error message if failed
    const activity = data ? data.activity : 'not found';
 
    return (
        <div className="ActivityFinder componentBox">
            <h3>Activity Finder</h3>
            <label>Choose number of participants:
                <select value={participants}
                    onChange={e => setParticipants(e.target.value)}><option>1</option><option>2</option><option>3</option>
                </select>
            </label>
            <div><strong>Suggested Activity: </strong>{activity}</div>
        </div>
    )
} 

export default ActivityFinder