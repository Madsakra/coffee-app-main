import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SubNav(props,Icon) {

    const [isHighlighted,setIsHighlighted] = useState(false);

    const highlightedClass = "bg-emerald-700 w-12 h-12 rounded-full justify-center text-white";
    const nonHighlightedClass = "w-12 h-12 rounded-full justify-center"
  
    const toggleClass = ()=>{
      setIsHighlighted(!isHighlighted);
    }
  



  return (
    <Link to={props.to} relative='path' className={isHighlighted?highlightedClass:nonHighlightedClass} onClick={toggleClass}>
       
    </Link>
  )
}
