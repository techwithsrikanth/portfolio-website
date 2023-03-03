import React, {useEffect} from 'react'
import './textsphere2.css'
import TagCloud from 'TagCloud'

const TextSphere2 = () => {
  useEffect(() => {
        const container = '.tagcloud2';
        const texts = [
            "PROBLEM SOLVING", "GOOD LEADER", "BASIC FINANCE", "CRITICAL THINKING", "TEAMWORK", "CREATIVITY" 
        ];

        const options = {
            radius: 200,
            maxSpeed: "medium",
            initSpeed: "medium",
            keep: 'true',
        };

        TagCloud(container, texts, options);

        return() =>{
            TagCloud(container).remove();
    };
}, []);
    
    return(
        <>
            <div className='text-sphere-2'>
                <span className='tagcloud2'></span>
            </div>
        </>
    )
  }

export default TextSphere2
