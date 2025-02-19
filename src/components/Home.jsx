import '../styles/Home.css';
import Type from './Type';
import { motion } from "framer-motion";
import { useSprings, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

function Home() {
    const text = "welcome to my portfolio";
    
    const letters = text.split('');
    const [inView, setInView] = useState(false);
    const ref = useRef();
    
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                observer.unobserve(ref.current);
            }
        }, { threshold: 0.1, rootMargin: '-100px' });

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    // Utilisation de useSprings pour animer les lettres
    const springs = useSprings(
        letters.length,
        letters.map((_, i) => ({
            from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
            to: inView ? { opacity: 1, transform: 'translate3d(0,0,0)' } : { opacity: 0, transform: 'translate3d(0,40px,0)' },
            delay: i * 50,
        }))
    );

    return (
        <section className='Home-page'>
            <h1 className="fancy-text" ref={ref}>
                {letters.map((char, index) => ( 
                    <motion.span
                        key={index}
                        className="letter"
                        initial={{ color: "rgb(89, 64, 163)" }} 
                        animate={{ color: "rgb(52, 104, 235)" }}
                        whileHover={{
                            color: ["rgb(185, 181, 166)", "rgb(242, 242, 242)"], // Gris -> Blanc
                            scale: 1.1,
                            transition: { duration: 0.3, ease: "easeInOut" }
                        }} > <animated.span style={{ ...springs[index], display: 'inline-block' }}> {char === " " ? "\u00A0" : char} </animated.span>
                    </motion.span> ))}
            </h1>
            <div className='Home-type'>
                <Type />
            </div>
        </section>
    );
}

export default Home;
