import React, {useEffect} from 'react'
import './textsphere.css'
import TagCloud from 'TagCloud'

const TextSphere = () => {
  useEffect(() => {
        const container = '.tagcloud';
        const texts = [
            "HTML", "CSS", "JAVASCRIPT", "REACT", "MYSQL", "NODE.JS", "MONGODB", "TENSORFLOW", "KERAS",
            "NLP", "DEEP LEARNING", "MACHINE LEARNING", "GITHUB", "GIT"
        ];

        const options = {
            radius: 260,
            maxSpeed: "medium",
            initSpeed: "medium",
            keep: "true",
        };

        TagCloud(container, texts, options)

        return()=>{
            TagCloud(container).remove();
        };
    }, []);
    
    return(
        <>
            <div className='text-sphere'>
                <span className='tagcloud'></span>
            </div>
        </>
    )
  }

export default TextSphere
