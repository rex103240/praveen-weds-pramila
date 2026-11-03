import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock } from 'lucide-react';

const HINDI_EVENTS = [
  {
    id: 'ghee-pavno',
    kram: 'नैगवार 1',
    title: 'घी पावणौ',
    date: '18 नवम्बर 2026 · बुधवार',
    time: 'सिज्या रा 5:00 बज्यां',
    venue: 'जोधपुर निवास',
    desc: ''
  },
  {
    id: 'vinayak-pujan',
    kram: 'नैगवार 2',
    title: 'विनायक पूजन',
    date: '20 नवम्बर 2026 · शुक्रवार',
    time: 'प्रातः 11:00 बज्यां',
    venue: 'जोधपुर निवास',
    desc: ''
  },
  {
    id: 'mayra',
    kram: 'नैगवार 3',
    title: 'मायरा (भात)',
    date: '20 नवम्बर 2026 · शुक्रवार',
    time: 'सिज्या रा 4:00 बज्यां',
    venue: 'जोधपुर निवास',
    desc: ''
  },
  {
    id: 'bandoli',
    kram: 'नैगवार 4',
    title: 'बन्दोली',
    date: '20 नवम्बर 2026 · शुक्रवार',
    time: 'सिज्या रा 7:00 बज्यां',
    venue: 'जोधपुर निवास',
    desc: ''
  },
  {
    id: 'barat-ravangi',
    kram: 'नैगवार 5',
    title: 'बारात रवानगी',
    date: '21 नवम्बर 2026 · शनिवार',
    time: 'प्रातः 5:00 बज्यां',
    venue: 'गांव खारड़ी (जिला-पाली)',
    desc: 'खास बात : जान श्रीमान् चैनसिंह जी सांखला, गांव खारड़ी (जिला-पाली) वालो रे अठे बस सूं जावेला सा।'
  },
  {
    id: 'jiman',
    kram: 'नैगवार 6',
    title: 'जीमण (प्रीतिभोज)',
    date: '23 नवम्बर 2026 · सोमवार',
    time: 'सिज्या रा 6:00 बज्या सूं आपरे पधारने तक',
    venue: 'हेम भवन गार्डन, राम मौहल्ला, नागोरी गेट, रामस्नेही रामद्वारा के पास, जोधपुर',
    desc: ''
  }
];

const EventsTimeline = () => (
  <section id="karyakram" style={{ padding: '40px 16px 60px' }}>
    <div style={{ maxWidth: '820px', margin: '0 auto' }}>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '40px' }}
      >
        <p
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: '1.15rem',
            color: 'var(--maroon-royal)',
            marginBottom: '6px'
          }}
        >
          ब्याव रा मांगलिक कार्यक्रम
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(2rem, 5.5vw, 2.8rem)',
            color: 'var(--maroon-deep)'
          }}
        >
          ब्याव रा सगला नैगवार
        </h2>
        <div className="mangal-divider">
          <span className="symbol">卐</span>
        </div>
      </motion.div>

      {/* Event Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {HINDI_EVENTS.map((ev, idx) => (
          <motion.div
            key={ev.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ delay: idx * 0.06, duration: 0.7 }}
            className="kankotri-paper gold-card-frame"
            style={{
              borderRadius: '2px',
              padding: 'clamp(24px, 4vw, 36px)',
              position: 'relative'
            }}
          >
            <div className="corner-art tl" />
            <div className="corner-art tr" />
            <div className="corner-art bl" />
            <div className="corner-art br" />

            {/* Top Bar: Kram & Date */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                borderBottom: '1px solid rgba(122, 0, 20, 0.25)',
                paddingBottom: '12px',
                marginBottom: '16px',
                flexWrap: 'wrap',
                gap: '8px',
                position: 'relative',
                zIndex: 2
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '1.05rem',
                  color: 'var(--maroon-royal)'
                }}
              >
                ॥ {ev.kram} ॥
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--maroon-deep)'
                }}
              >
                <Calendar size={14} style={{ verticalAlign: '-2px', marginRight: 6 }} />
                {ev.date}
              </span>
            </div>

            {/* Title & Desc */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h3
                style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'clamp(1.6rem, 4vw, 2.1rem)',
                  color: 'var(--maroon-deep)',
                  lineHeight: 1.25,
                  marginBottom: ev.desc ? '8px' : '16px'
                }}
              >
                {ev.title}
              </h3>

              {ev.desc && (
                <p
                  style={{
                    fontFamily: 'var(--font-script)',
                    fontSize: '1.05rem',
                    color: 'var(--maroon-deep)',
                    lineHeight: 1.6,
                    marginBottom: '16px',
                    background: 'rgba(255, 243, 224, 0.6)',
                    padding: '8px 12px',
                    borderRadius: '2px',
                    borderLeft: '3px solid var(--maroon-royal)'
                  }}
                >
                  {ev.desc}
                </p>
              )}
            </div>

            {/* Time, Venue & Map Link */}
            <div
              style={{
                background: 'linear-gradient(180deg, rgba(255, 248, 235, 0.8) 0%, rgba(249, 238, 217, 0.7) 100%)',
                border: '1px solid rgba(201, 168, 76, 0.5)',
                padding: '16px 18px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '14px',
                position: 'relative',
                zIndex: 2
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'var(--maroon-royal)',
                    marginBottom: 6
                  }}
                >
                  <Clock size={16} /> {ev.time}
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontFamily: 'var(--font-script)',
                    fontSize: '1.05rem',
                    color: 'var(--maroon-deep)'
                  }}
                >
                  <MapPin size={16} /> {ev.venue}
                </div>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ev.venue)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hindi-secondary"
              >
                <MapPin size={15} />
                <span>स्थान देखें ↗</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EventsTimeline;
