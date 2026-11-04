import React from 'react';

const RajputiFooter = () => {
  const sellerPhone = '917976944626';
  const sellerMessage = encodeURIComponent(
    "Hi! I saw Praveen & Pramila's digital wedding invitation. I want to create a similar interactive wedding card for my upcoming event. Please share details!"
  );

  return (
    <>
      <footer
        style={{
          background: 'linear-gradient(180deg, var(--maroon-royal) 0%, var(--maroon-deep) 60%, #1E0005 100%)',
          borderTop: '2px solid var(--gold-foil)',
          padding: '44px 20px 40px',
          textAlign: 'center',
          color: 'var(--cream-card)'
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '1.5rem',
              color: 'var(--gold-light)',
              letterSpacing: '0.08em',
              marginBottom: '8px'
            }}
          >
            ॥ शुभम् भवतु ॥
          </p>

          <h3
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'clamp(1.4rem, 4vw, 2.1rem)',
              color: '#FFF',
              letterSpacing: '0.02em',
              lineHeight: 1.3,
              margin: '8px 0'
            }}
          >
            चि.कुँ. प्रवीण सिंह संग सौ.कां. प्रमिला कंवर [प्रियंका]
          </h3>

          <p
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: '1.15rem',
              color: 'var(--gold-light)',
              marginBottom: '24px'
            }}
          >
            21 नवम्बर 2026 · जोधपुर, राजस्थान
          </p>

          <div
            style={{
              height: 1,
              background: 'linear-gradient(to right, transparent, var(--gold-foil), transparent)',
              maxWidth: '300px',
              margin: '0 auto 20px'
            }}
          />

          <p
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: '1.2rem',
              color: 'var(--gold-light)'
            }}
          >
            ॥ खम्मा घणी सा ॥
          </p>
        </div>
      </footer>

      {/* ── Clean Light Bottom Strip (matching reference image) ── */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#FFF4E3',
          borderTop: '1px solid #E8DFC8',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '0.85rem',
            color: '#6B5D4F',
            letterSpacing: '0.01em'
          }}
        >
          Interactive Wedding Invitation •{' '}
          <a
            href={`https://wa.me/${sellerPhone}?text=${sellerMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#15803D',
              fontWeight: 600,
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              textDecorationColor: '#22C55E'
            }}
          >
            Click here to get yours
          </a>
        </p>
      </div>
    </>
  );
};

export default RajputiFooter;
