import React, {useState} from 'react'
import {AiFillHeart} from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai";

interface Props {
    onClick: () => void;
}

const Like = ({onClick}: Props) => {
    const [status, setStatus] = useState(true);
    const toggleLike = () => {
        setStatus(!status);
        onClick();
    };
    if (status) return <AiFillHeart color="#ff6b81" size={20} onClick={() => setStatus(false)}/>
    return <AiOutlineHeart size={20} onClick={toggleLike}/>;
};

export default Like