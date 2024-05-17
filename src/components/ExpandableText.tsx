import React, {useState} from 'react'


interface Props {
    children: string;
    maxChars?: number;
}

const ExpandableText = ({children,maxChars =100}: Props) => {

    const [isExpanded,setExpanded] = useState(false)
    if (children.length <= maxChars) return <p>{children}</p>
    const visibleText = isExpanded?children: children.substring(0, maxChars);
    return <p>{visibleText} ... <button onClick={()=>setExpanded(!isExpanded)}>{isExpanded?'Less':'More'}</button></p>
}

export default ExpandableText