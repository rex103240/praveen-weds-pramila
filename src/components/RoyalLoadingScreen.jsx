import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const RoyalLoadingScreen = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress animation from 0% to 100% over 1.7 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 75);

    const timer = setTimeout(() => {
      onLoaded();
    }, 1900);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onLoaded]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(ellipse at 50% 45%, #6B0E1A 0%, #44040D 55%, #180004 100%)',
        padding: '24px',
        overflow: 'hidden'
      }}
    >
      {/* Background sacred ambient dot pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(240, 228, 184, 0.08) 1.2px, transparent 1.2px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none'
        }}
      />

      {/* Royal Card Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          width: '100%',
          maxWidth: '380px',
          padding: '42px 28px 36px',
          borderRadius: '4px',
          border: '1.5px solid rgba(201, 168, 76, 0.65)',
          background: 'linear-gradient(180deg, rgba(74, 5, 16, 0.85) 0%, rgba(35, 1, 6, 0.92) 100%)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6), inset 0 0 30px rgba(139, 0, 25, 0.35)',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        {/* Subtle decorative gold corner notches */}
        <div style={{ position: 'absolute', top: 6, left: 6, width: 14, height: 14, borderTop: '2px solid #E5C158', borderLeft: '2px solid #E5C158' }} />
        <div style={{ position: 'absolute', top: 6, right: 6, width: 14, height: 14, borderTop: '2px solid #E5C158', borderRight: '2px solid #E5C158' }} />
        <div style={{ position: 'absolute', bottom: 6, left: 6, width: 14, height: 14, borderBottom: '2px solid #E5C158', borderLeft: '2px solid #E5C158' }} />
        <div style={{ position: 'absolute', bottom: 6, right: 6, width: 14, height: 14, borderBottom: '2px solid #E5C158', borderRight: '2px solid #E5C158' }} />

        {/* Pulsing Ganesh Emblem */}
        <div style={{ position: 'relative', margin: '0 auto 20px', width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Glowing Aura Ring */}
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.35, 0.7, 0.35]
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              position: 'absolute',
              inset: -8,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(229, 193, 88, 0.35) 0%, rgba(201, 168, 76, 0.1) 60%, transparent 75%)',
              pointerEvents: 'none'
            }}
          />

          <motion.img
            src="/ganesh_gold.png"
            alt="श्री गणेश"
            animate={{
              scale: [0.96, 1.02, 0.96]
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              width: '105px',
              height: 'auto',
              display: 'block',
              filter: 'drop-shadow(0 0 16px rgba(229, 193, 88, 0.5))'
            }}
          />
        </div>

        {/* Sacred Invocation */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '1.45rem',
            color: '#FFEAA7',
            letterSpacing: '0.06em',
            marginBottom: '6px',
            textShadow: '0 2px 8px rgba(0,0,0,0.5)'
          }}
        >
          ॥ श्री गणेशाय नमः ॥
        </motion.p>

        {/* Khamma Ghani Sa */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: '1.25rem',
            color: '#E5C158',
            letterSpacing: '0.04em',
            margin: '4px 0 12px'
          }}
        >
          ॥ खम्मा घणी सा ॥
        </motion.p>

        <p
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: '0.98rem',
            color: 'rgba(255, 240, 215, 0.85)',
            marginBottom: '20px'
          }}
        >
          मांगलिक विवाह निमंत्रण पत्र
        </p>

        {/* Delicate Golden Progress Bar */}
        <div
          style={{
            width: '100%',
            height: '3px',
            background: 'rgba(201, 168, 76, 0.25)',
            borderRadius: '2px',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <motion.div
            style={{
              width: `${progress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #C9A84C 0%, #FFF2A3 50%, #E5C158 100%)',
              boxShadow: '0 0 8px rgba(229, 193, 88, 0.8)',
              transition: 'width 0.1s linear'
            }}
          />
        </div>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            color: 'rgba(201, 168, 76, 0.8)',
            marginTop: '10px',
            letterSpacing: '0.08em'
          }}
        >
          लोड हो रहा है... {progress}%
        </p>
      </motion.div>
    </motion.div>
  );
};

export default RoyalLoadingScreen;
