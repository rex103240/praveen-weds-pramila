import React from 'react';
import { motion } from 'framer-motion';
import GanpatiJali from './GanpatiJali';

const InvocationHero = () => {
  return (
    <section style={{ padding: '44px 16px 28px', position: 'relative' }}>
      <div
        className="kankotri-paper gold-card-frame"
        style={{
          maxWidth: '820px',
          margin: '0 auto',
          padding: 'clamp(36px, 5vw, 56px) clamp(20px, 4vw, 44px)',
          borderRadius: '2px',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <div className="corner-art tl" />
        <div className="corner-art tr" />
        <div className="corner-art bl" />
        <div className="corner-art br" />

        {/* Ganpati Jali Motif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          style={{ marginBottom: '16px', position: 'relative', zIndex: 2 }}
        >
          <GanpatiJali width={120} variant="maroon" />
        </motion.div>

        {/* Sacred Invocations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ position: 'relative', zIndex: 2, marginBottom: '20px' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '1.5rem',
              color: 'var(--maroon-royal)',
              letterSpacing: '0.06em',
              margin: '0 auto'
            }}
          >
            ॥ श्री गणेशाय नमः ॥
          </p>
        </motion.div>

        <div className="mangal-divider">
          <span className="symbol">卐</span>
        </div>

        {/* Traditional Peela Chawal Invitation Letter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: '1.14rem',
            color: 'var(--maroon-deep)',
            maxWidth: '680px',
            margin: '18px auto 28px',
            lineHeight: 1.85,
            position: 'relative',
            zIndex: 2,
            background: 'rgba(255, 250, 240, 0.5)',
            padding: '16px 20px',
            border: '1px dashed rgba(201, 168, 76, 0.7)'
          }}
        >
          <p style={{ fontFamily: 'var(--font-title)', fontSize: '1.18rem', color: 'var(--maroon-royal)', marginBottom: '6px' }}>
            श्रीमान् ओपमा लायक,
          </p>
          <p>
            ने जोग लिखी <strong>श्री विजयसिंह जी चौहान</strong> री तरफ सूं जै माताजी री अरज होवे सा। आप राज ने औ पीला चावल हाजर करता घणी हरख होवे के <strong>श्री कुलदेवी आशापुरा माताजी</strong> री किरपां सूं
          </p>
          <p style={{ marginTop: '8px', fontWeight: 600, color: 'var(--maroon-royal)' }}>
            श्रीमती पार्वती देवी एवं ठा.सा. श्री भोमसिंहजी चौहान अपने सुपौत्र
          </p>
        </motion.div>

        {/* ── वर एवं वधू विवरण ── */}
        <div
          style={{
            margin: '0 0 32px',
            padding: '30px 20px',
            background: 'linear-gradient(180deg, rgba(255, 248, 235, 0.6) 0%, rgba(249, 238, 217, 0.5) 100%)',
            border: '1.5px solid rgba(201, 168, 76, 0.6)',
            position: 'relative',
            zIndex: 2,
            boxShadow: 'inset 0 0 20px rgba(180, 100, 20, 0.08)'
          }}
        >
          {/* वर */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.05rem',
                color: 'var(--maroon-light)',
                marginBottom: '4px'
              }}
            >
              चि.कुँ.
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'clamp(2.1rem, 5.8vw, 3rem)',
                color: 'var(--maroon-deep)',
                lineHeight: 1.2
              }}
            >
              प्रवीण सिंह चौहान
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: '1.12rem',
                color: 'var(--maroon-deep)',
                marginTop: '6px'
              }}
            >
              (लाडला श्रीमती सीता कंवर एवं श्री विजयसिंह जी चौहान)
            </p>
          </motion.div>

          {/* संग / रो शुभ ब्याव */}
          <div
            style={{
              margin: '22px auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px'
            }}
          >
            <div style={{ height: 1, width: 50, background: 'linear-gradient(to right, transparent, var(--maroon-royal))' }} />
            <span
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: '1.6rem',
                color: 'var(--maroon-royal)'
              }}
            >
              रो शुभ ब्याव संग
            </span>
            <div style={{ height: 1, width: 50, background: 'linear-gradient(to left, transparent, var(--maroon-royal))' }} />
          </div>

          {/* वधू */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <p
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.05rem',
                color: 'var(--maroon-light)',
                marginBottom: '4px'
              }}
            >
              सौ.कां.
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'clamp(2.1rem, 5.8vw, 3rem)',
                color: 'var(--maroon-deep)',
                lineHeight: 1.2
              }}
            >
              प्रमिला कंवर [प्रियंका]
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: '1.12rem',
                color: 'var(--maroon-deep)',
                marginTop: '6px'
              }}
            >
              (लाडली श्रीमती विमला कंवर एवं श्री चैनसिंह जी सांखला · गांव खारड़ी, जिला-पाली)
            </p>
          </motion.div>
        </div>

        {/* ── लग्न मुहूर्त पट्टिका ── */}
        <div
          style={{
            padding: '22px 24px',
            background: 'linear-gradient(145deg, var(--maroon-royal) 0%, var(--maroon-deep) 100%)',
            border: '1.5px solid var(--gold-foil)',
            color: 'var(--cream-card)',
            position: 'relative',
            zIndex: 2,
            boxShadow: '0 6px 20px rgba(62, 0, 10, 0.4), inset 0 1px 0 rgba(240, 228, 184, 0.2)'
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: '1.05rem',
              color: 'var(--gold-light)',
              marginBottom: '6px'
            }}
          >
            शुभ सावा मुहूर्त
          </p>
          <h3
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'clamp(1.5rem, 4.5vw, 2.2rem)',
              letterSpacing: '0.04em'
            }}
          >
            शनिवार, 21 नवम्बर 2026
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: '1.12rem',
              color: 'var(--gold-light)',
              marginTop: '6px',
              lineHeight: 1.6
            }}
          >
            विक्रम संवत 2083 मिति कार्तिक शुक्ल पक्ष बारस<br />
            <span style={{ fontSize: '0.98rem', opacity: 0.95 }}>
              इण शुभ घड़ी री खुशी में पधार अर बींदराजा व बिनणी सा ने आशीष दिरावजो, आपरे पधारया ही म्हारे कुटुम्ब री शोभा अणूती बढेला अर म्हारो कुटुम्बो आपरी अणूती उडीक राखेला सा।
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvocationHero;
