import React, { useState, useRef, useEffect} from 'react'
import '../styles/Contact.css'

export default function Contact() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
        
        const top = ref.current.offsetTop
        const windowHeight = window.innerHeight;
        const currentScrollPos = window.pageYOffset + windowHeight;
        
        if (currentScrollPos >= top) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

    window.addEventListener('scroll', onScroll);
    }, []);

  return (
    <div className='contact'>

      <div className='contact-links'>
        <div className='contact-link-wrap'>
            <a className='contact-link' href="mailto:pisarenko.alina@gmail.com" target="_blank">email email</a>
        </div>
        
        <div className='contact-link-wrap'>
          <a className='contact-link' href="https://www.linkedin.com/in/alina-pisarenko-web-developer/" target="_blank">linkedin linkedin</a>
        </div>
        <div className='contact-link-wrap'>
            <a className='contact-link' href="https://github.com/AlinaPisarenko" target="_blank">github github</a>
        </div>
      </div>
      <h5 className='contact-title'>Let's work together</h5>

    </div>
  )
}
