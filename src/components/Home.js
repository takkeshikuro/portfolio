import '../styles/Home.css';
import Type from './Type';
import { motion } from "framer-motion";

function Home() {
    const text = "Welcome to my Portfolio";

    return (
        <section className='Home-page'>
            <h1 className="fancy-text">
                {text.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        className="letter"
                        initial={{ color: "rgb(99, 51, 240)" }} 
                        animate={{ color: "rgb(99, 51, 240)" }}
                        whileHover={{
                            color: ["rgb(185, 181, 166)", "rgb(242, 242, 242)"], // Gris -> Blanc
                            scale: 1.1,
                            transition: { duration: 0.3, ease: "easeInOut" }
                        }}
                    >
                        {char === " " ? "\u00A0" : char} {/* Garde les espaces visibles */}
                    </motion.span>
                ))}
            </h1>
            <div className='Home-type'>
                <Type />
            </div>
        </section>
    );
}

export default Home;
