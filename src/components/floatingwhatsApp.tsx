import React, { useState, useEffect } from 'react';

const WHATSAPP_LINK = `https://wa.me/5511950391906?text=Olá! Vi o site da Suzart Advogados e gostaria de saber mais.`;

export function FloatingWhatsApp() {
  const [blink, setBlink] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setBlink((b) => !b), 600);
    return () => clearInterval(interval);
  }, []);

  if (dismissed) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '16px',
        right: '16px',
        zIndex: 99998,
        fontFamily: 'Tahoma, Arial, sans-serif',
        fontSize: '11px',
      }}
    >
      <div
        style={{
          border: '2px solid',
          borderTopColor: '#ffffff',
          borderLeftColor: '#ffffff',
          borderBottomColor: '#404040',
          borderRightColor: '#404040',
          backgroundColor: '#d4d0c8',
          boxShadow: '3px 3px 0 #000000',
          width: '200px',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(to right, #25d366, #128c7e)',
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: '11px',
            padding: '3px 6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span>📱 WhatsApp — Novo Contato</span>
          <div
            style={{
              width: '14px',
              height: '13px',
              backgroundColor: '#d4d0c8',
              border: '1px solid',
              borderTopColor: '#ffffff',
              borderLeftColor: '#ffffff',
              borderBottomColor: '#404040',
              borderRightColor: '#404040',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '8px',
              color: '#000000',
              cursor: 'pointer',
            }}
            onClick={() => setDismissed(true)}
          >
            ✕
          </div>
        </div>
        <div style={{ padding: '8px', backgroundColor: '#d4d0c8' }}>
          <div style={{ fontSize: '11px', marginBottom: '4px', color: '#000000' }}>
            Fale conosco agora!
          </div>
          <div
            style={{
              color: blink ? '#25d366' : '#d4d0c8',
              fontSize: '10px',
              fontWeight: 'bold',
              marginBottom: '8px',
              fontFamily: 'Courier New, monospace',
            }}
          >
            ● AGENTE ONLINE
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              backgroundColor: '#25d366',
              color: '#ffffff',
              border: '2px solid',
              borderTopColor: '#40f080',
              borderLeftColor: '#40f080',
              borderBottomColor: '#128c7e',
              borderRightColor: '#128c7e',
              fontSize: '11px',
              fontWeight: 'bold',
              padding: '3px 8px',
              textAlign: 'center',
              textDecoration: 'none',
              cursor: 'pointer',
              fontFamily: 'Tahoma, Arial, sans-serif',
            }}
          >
            Iniciar Conversa &gt;&gt;
          </a>
        </div>
      </div>
    </div>
  );
}
