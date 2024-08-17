import React, { useRef, useEffect } from 'react';
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          mainControls.start("visible");
        } else {
          mainControls.start("hidden");
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

  useEffect(() => {
    // Call animation control only after the component has mounted
    if (ref.current) {
      mainControls.start("hidden"); // Ensures initial hidden state
    }
  }, [mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden,
          visible,
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
