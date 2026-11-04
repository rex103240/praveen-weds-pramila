import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, User } from 'lucide-react';

const HINDI_CONTACTS = [
  {
    name: 'श्री विजयसिंह जी चौहान',
    role: 'पिताश्री / विनीत',
    phone: '+91 77421 38713',
    cleanNumber: '917742138713'
  },
  {
    name: 'टीकम सिंह चौहान',
    role: 'व्यवस्थापक / RSVP',
    phone: '+91 92569 30900',
    cleanNumber: '919256930900'
  }
];

const QuickContactRSVP = () => (
  <section id="rsvp" style={{ padding: '20px 16px 60px' }}>
    <div style={{ maxWidth: '780px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="kankotri-paper gold-card-frame"
        style={{
          borderRadius: '2px',
          padding: 'clamp(32px, 5vw, 44px) clamp(20px, 4vw, 36px)',
          position: 'relative',
          textAlign: 'center'
        }}
      >
        <div className="corner-art tl" />
        <div className="corner-art tr" />
        <div className="corner-art bl" />
        <div className="corner-art br" />

        <p
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: '1.15rem',
            color: 'var(--maroon-royal)',
            marginBottom: '4px',
            position: 'relative',
            zIndex: 2
          }}
        >
          सस्नेह उपस्थिति की अभिलाषा
        </p>

        <h2
          style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(1.9rem, 5vw, 2.6rem)',
            color: 'var(--maroon-deep)',
            position: 'relative',
            zIndex: 2
          }}
        >
          दर्शनाभिलाषी एवं RSVP
        </h2>

        <div className="mangal-divider">
          <span className="symbol">卐</span>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: '1.25rem',
            color: 'var(--maroon-royal)',
            marginBottom: '28px',
            position: 'relative',
            zIndex: 2
          }}
        >
          ठा.सा. श्री भोमसिंहजी चौहान · श्री विजयसिंह जी चौहान एवं समस्त चौहान परिवार
        </p>

        {/* Contact Cards */}
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            textAlign: 'left',
            position: 'relative',
            zIndex: 2
          }}
        >
          {HINDI_CONTACTS.map((c, i) => (
            <div
              key={i}
              style={{
                background: 'linear-gradient(180deg, rgba(255, 248, 235, 0.85) 0%, rgba(249, 238, 217, 0.75) 100%)',
                border: '1.5px solid rgba(201, 168, 76, 0.6)',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                boxShadow: '0 4px 14px rgba(60, 0, 10, 0.1)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                  <User size={15} color="var(--maroon-royal)" />
                  <span
                    style={{
                      fontFamily: 'var(--font-title)',
                      fontSize: '0.95rem',
                      color: 'var(--maroon-light)'
                    }}
                  >
                    {c.role}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-headline)',
                    fontSize: '1.45rem',
                    color: 'var(--maroon-deep)',
                    lineHeight: 1.3,
                    marginBottom: '8px'
                  }}
                >
                  {c.name}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--maroon-royal)',
                    letterSpacing: '0.04em'
                  }}
                >
                  {c.phone}
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a
                  href={`tel:${c.phone.replace(/\s+/g, '')}`}
                  className="btn-call-action"
                  title={`${c.name} को कॉल करें`}
                >
                  <Phone size={15} />
                  <span>कॉल करें</span>
                </a>
                <a
                  href={`https://wa.me/${c.cleanNumber}?text=%E0%A4%96%E0%A4%AE%E0%A5%8D%E0%A4%AE%E0%A4%BE%20%E0%A4%98%E0%A4%A3%E0%A5%80%20%E0%A4%B8%E0%A4%BE!%20%E0%A4%B5%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%B9%20%E0%A4%A8%E0%A4%BF%E0%A4%AE%E0%A4%82%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%A3%E0%A5%8D%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%AA%E0%A5%8D%E0%A4%A4%20%E0%A4%B9%E0%A5%81%E0%A4%86%E0%A5%A4%20%E0%A4%B9%E0%A4%AE%20%E0%A4%B8%E0%A4%AD%E0%A5%80%20%E0%A4%B5%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%B9%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%B8%E0%A4%B9%E0%A4%B0%E0%A5%8D%E0%A4%B7%E0%A5%8D%20%E0%A4%B8%E0%A4%AE%E0%A5%8D%E0%A4%AE%E0%A4%BF%E0%A4%B2%E0%A4%BF%E0%A4%A4%20%E0%A4%B9%E0%A5%8B%E0%A4%82%E0%A4%97%E0%A5%87%E0%A5%A4`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-action"
                  title={`${c.name} को व्हाट्सएप संदेश भेजें`}
                >
                  <MessageCircle size={15} />
                  <span>व्हाट्सएप</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default QuickContactRSVP;
