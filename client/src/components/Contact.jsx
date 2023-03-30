import React, { useState, useRef, useEffect} from 'react'
import '../styles/Contact.css'

export default function Contact() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
        
        // const top = ref.current.offsetTop
        const windowHeight = window.innerHeight;
        const currentScrollPos = window.pageYOffset
        const { top, bottom } = ref.current.getBoundingClientRect();
      
        if (windowHeight >= top) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }

      };

    window.addEventListener('scroll', onScroll);

    }, []);

  return (
    <div id='contact' className='contact'>
      <div  className={`contact-links ${isVisible ? "visible-contact" : ""}`}>
        <div className='contact-link-wrap'>
            <a id='email' className='contact-link' href="mailto:pisarenko.alina@gmail.com" target="_blank">email</a>
        </div>
        
        <div className='contact-link-wrap'>
          <a id='linkedin' className='contact-link' href="https://www.linkedin.com/in/alina-pisarenko-web-developer/" target="_blank">linkedin</a>
        </div>
        <div className='contact-link-wrap'>
            <a id='github' className='contact-link' href="https://github.com/AlinaPisarenko" target="_blank">github</a>
        </div>
      </div>
      <h5 ref={ref}  className={`contact-title ${isVisible ? "visible-title" : ""}`}>Let's work together</h5>
    </div>
  )
}
