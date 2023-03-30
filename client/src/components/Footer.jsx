import React, { useRef, useEffect, useState }  from 'react'
import '../styles/Footer.css'

export default function Footer() {

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
    <div className='footer'>
      <div ref={ref}  id='line-footer' className={`line-footer ${isVisible ? "is-visible" : ""}`}></div>
    </div>
  )
}
