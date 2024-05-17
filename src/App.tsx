import {useState} from "react";
import produce from    'immer';

function App() {
    const [bugs, setBugs] = useState([
        {
            id: 1,
            description: 'Bug 1',
            fixed:false
        },
        {
            id: 2,
            description: 'Bug 2',
            fixed:false
        },
        {
            id: 3,
            description: 'Bug 3',
            fixed:false
        }
    ]);

    const handleClick = () => {
       // setBugs(bugs.map(bug => bug.id==1 ? {...bug, fixed:true} : bug ));
        setBugs(produce( draft => {
           const bug= draft.find(bug => bug.id===1);
            if (bug) {
                bug.fixed = true;
            }
        }));
    };


    return (
        <div>

            <button onClick={handleClick}>Click Drink</button>

        </div>);
}

export default App;