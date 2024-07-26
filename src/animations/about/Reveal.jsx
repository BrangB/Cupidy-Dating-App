import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Reveal = ({
  children,
  width = "fit-content",
  duration = 1,
  delay = 0.1,
  hidden = { opacity: 0, y: 100 },
  visible = { opacity: 1, y: 0 },
}) => {
  const ref = useRef(null);
  const mainControls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          mainControls.start("visible");
          setIsVisible(true);
        } else {
          mainControls.start("hidden");
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, }}>
      <motion.div
        variants={{
          hidden,
          visible,
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay }}
        className='w-full h-full'
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
