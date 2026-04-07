import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const contactOptions = [
  {
    id: 'insta',
    name: 'Instagram',
    value: '@bgr.dev',
    href: 'https://www.instagram.com/bgr.dev/',
    color: 'rgba(225,48,108,0.8)',
    hoverBorder: 'rgba(225,48,108,0.25)',
    hoverShadow: 'rgba(225,48,108,0.08)',
    hoverBg: 'rgba(225,48,108,0.08)',
    hoverIconBg: 'rgba(225,48,108,0.18)',
    iconBg: 'rgba(225,48,108,0.12)',
    iconBorder: 'rgba(225,48,108,0.2)',
    hoverText: '#F06292',
    icon: (color: string) => (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="1" fill={color} stroke="none" />
      </svg>
    ),
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    value: '+213 659 308 807',
    href: 'https://wa.me/213659308807',
    color: 'rgba(37,211,102,0.8)',
    hoverBorder: 'rgba(37,211,102,0.25)',
    hoverShadow: 'rgba(37,211,102,0.08)',
    hoverBg: 'rgba(37,211,102,0.08)',
    hoverIconBg: 'rgba(37,211,102,0.18)',
    iconBg: 'rgba(37,211,102,0.1)',
    iconBorder: 'rgba(37,211,102,0.2)',
    hoverText: '#4DD98A',
    icon: (color: string) => (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    id: 'email',
    name: 'Email',
    value: 'bgrdev310@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&to=bgrdev310@gmail.com',
    color: 'rgba(212,175,55,0.85)',
    hoverBorder: 'rgba(212,175,55,0.3)',
    hoverShadow: 'rgba(212,175,55,0.08)',
    hoverBg: 'rgba(212,175,55,0.08)',
    hoverIconBg: 'rgba(212,175,55,0.18)',
    iconBg: 'rgba(212,175,55,0.1)',
    iconBorder: 'rgba(212,175,55,0.2)',
    hoverText: '#D4AF37',
    icon: (color: string) => (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
];

interface ContactOption {
  id: string;
  name: string;
  value: string;
  href: string;
  color: string;
  hoverBorder: string;
  hoverShadow: string;
  hoverBg: string;
  hoverIconBg: string;
  iconBg: string;
  iconBorder: string;
  hoverText: string;
  icon: (color: string) => React.ReactNode;
}

function ContactLink({ option, index }: { option: ContactOption; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      key={option.name}
      href={option.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 + 0.25, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '14px 16px',
        borderRadius: 16,
        border: `1px solid ${hovered ? option.hoverBorder : 'rgba(255,255,255,0.06)'}`,
        background: hovered ? option.hoverBg : 'rgba(255,255,255,0.03)',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: hovered ? 'translateY(-1px)' : 'translateY(0)',
        boxShadow: hovered ? `0 4px 20px ${option.hoverShadow}` : 'none',
      }}
    >
      {/* Icon */}
      <div style={{
        width: 44,
        height: 44,
        borderRadius: 14,
        border: `1px solid ${option.iconBorder}`,
        background: hovered ? option.hoverIconBg : option.iconBg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: 'all 0.25s ease',
        transform: hovered ? 'scale(1.08)' : 'scale(1)',
      }}>
        {option.icon(option.color)}
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <span style={{
          fontSize: 14,
          fontWeight: 500,
          color: hovered ? option.hoverText : 'rgba(255,255,255,0.88)',
          transition: 'color 0.25s',
          display: 'block',
          lineHeight: 1,
          marginBottom: 4,
          fontFamily: "'DM Sans', sans-serif",
        }}>
          {option.name}
        </span>
        <span style={{
          fontSize: 12,
          color: 'rgba(255,255,255,0.32)',
          fontWeight: 300,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: 'block',
          letterSpacing: '0.01em',
          fontFamily: "'DM Sans', sans-serif",
        }}>
          {option.value}
        </span>
      </div>

      {/* Arrow */}
      <div style={{
        flexShrink: 0,
        color: hovered ? option.hoverText : 'rgba(255,255,255,0.2)',
        transform: hovered ? 'translateX(3px)' : 'translateX(0)',
        transition: 'transform 0.25s ease, color 0.25s',
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    </motion.a>
  );
}

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openContactModal', handleOpen);
    return () => window.removeEventListener('openContactModal', handleOpen);
  }, []);

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 100,
                background: 'rgba(0,0,0,0.72)',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
              }}
            />

            {/* Modal Container */}
            <div style={{
              position: 'fixed',
              inset: 0,
              zIndex: 101,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
              pointerEvents: 'none',
            }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 24 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  width: '100%',
                  maxWidth: 460,
                  background: 'linear-gradient(145deg, #141416 0%, #0d0d0f 100%)',
                  borderRadius: 24,
                  border: '1px solid rgba(212,175,55,0.18)',
                  boxShadow: '0 0 0 1px rgba(0,0,0,0.5), 0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(212,175,55,0.06)',
                  overflow: 'hidden',
                  position: 'relative',
                  pointerEvents: 'auto',
                }}
              >
                {/* Gold top bar */}
                <div style={{
                  height: 3,
                  background: 'linear-gradient(90deg, transparent 0%, #B8882A 20%, #D4AF37 50%, #F5E27A 70%, #D4AF37 85%, transparent 100%)',
                }} />

                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.04)',
                    color: 'rgba(255,255,255,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    zIndex: 10,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#D4AF37'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                >
                  <X size={15} />
                </button>

                {/* Content */}
                <div style={{ padding: '2rem 2rem 2.5rem' }}>

                  {/* Header */}
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                    style={{ marginBottom: '2rem', textAlign: 'center' }}
                  >
                    <div style={{
                      display: 'inline-block',
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: '#B8882A',
                      marginBottom: '0.75rem',
                      padding: '4px 12px',
                      border: '1px solid rgba(212,175,55,0.2)',
                      borderRadius: 20,
                      background: 'rgba(212,175,55,0.06)',
                      fontFamily: "'DM Sans', sans-serif",
                    }}>
                      Available now
                    </div>

                    <h2 style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 'clamp(2rem, 6vw, 2.6rem)',
                      fontWeight: 300,
                      color: '#F5F0E8',
                      lineHeight: 1.1,
                      margin: '0 0 0.5rem',
                      letterSpacing: '-0.01em',
                    }}>
                      Let&apos;s{' '}
                      <em style={{ fontStyle: 'italic', color: '#D4AF37' }}>Connect</em>
                    </h2>

                    <p style={{
                      fontSize: 13,
                      color: 'rgba(255,255,255,0.38)',
                      fontWeight: 300,
                      margin: 0,
                      fontFamily: "'DM Sans', sans-serif",
                    }}>
                      Choose how you&apos;d like to reach out
                    </p>
                  </motion.div>

                  {/* Divider */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}
                  >
                    <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.15), transparent)' }} />
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif" }}>channels</span>
                    <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.15), transparent)' }} />
                  </motion.div>

                  {/* Links */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {contactOptions.map((option, idx) => (
                      <ContactLink key={option.id} option={option} index={idx} />
                    ))}
                  </div>

                  {/* Footer */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                    style={{
                      marginTop: '1.75rem',
                      paddingTop: '1.25rem',
                      borderTop: '1px solid rgba(255,255,255,0.05)',
                      textAlign: 'center',
                      fontSize: 11,
                      color: 'rgba(255,255,255,0.2)',
                      letterSpacing: '0.05em',
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Designed by{' '}
                    <span style={{ color: 'rgba(212,175,55,0.5)' }}>bgr.dev</span>
                    {' '}&mdash; All links are direct &amp; secure
                  </motion.div>

                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}