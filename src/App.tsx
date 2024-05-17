import {useState} from "react";

function App() {
    const [tags, setTags] = useState(['happy', 'cheerful']);

    const handleClick = () => {
        //add
       setTags([...tags,'exciting','fun']);

       //remove
        setTags(tags.filter(tag => tag !== 'cheerful'));

        //update
        setTags(tags.map(tag => tag === 'happy' ? 'joyful' : tag));
    };


    return (
        <div>

            <button onClick={handleClick}>Click Drink</button>

        </div>);
}

export default App;