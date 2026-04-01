import React from 'react';

const W = {
  window: {
    border: '2px solid',
    borderTopColor: '#ffffff',
    borderLeftColor: '#ffffff',
    borderBottomColor: '#404040',
    borderRightColor: '#404040',
    backgroundColor: '#d4d0c8',
    boxShadow: '2px 2px 0 #000000',
    fontFamily: 'Tahoma, Arial, sans-serif',
    fontSize: '11px',
  } as React.CSSProperties,
  titlebar: (color = '#000080') => ({
    background: `linear-gradient(to right, ${color}, #1084d0)`,
    color: '#ffffff',
    fontWeight: 'bold' as const,
    fontSize: '11px',
    padding: '3px 6px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    userSelect: 'none' as const,
    fontFamily: 'Tahoma, Arial, sans-serif',
  }),
};

const WHATSAPP_LINK = `https://wa.me/5511950391906?text=Olá!`;

export function PricingSection() {
  return (
    <section
      style={{
        backgroundColor: '#000080',
        padding: '24px 16px',
        fontFamily: 'Tahoma, Arial, sans-serif',
      }}
    >
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <div style={W.window}>
          <div style={W.titlebar('#800000')}>
            <span>💰</span>
            <span>Consulta de Orientação — Oferta Especial</span>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '2px' }}>
              {['_', '□', '✕'].map((b, i) => (
                <div key={i} style={{ width: '16px', height: '14px', backgroundColor: '#d4d0c8', border: '1px solid', borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', color: '#000000', cursor: 'pointer' }}>
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: '12px', backgroundColor: '#d4d0c8' }}>
            {/* Ticker banner */}
            <div
              style={{
                backgroundColor: '#ffff00',
                border: '2px solid #c0c000',
                padding: '8px',
                fontSize: '11px',
                fontWeight: 'bold',
                color: '#000000',
                textAlign: 'center',
                marginBottom: '12px',
              }}
            >
              ⚠ ATENÇÃO: Oferta por tempo limitado! ⚠
            </div>

            {/* Info box */}
            <div
              style={{
                border: '2px solid',
                borderTopColor: '#404040',
                borderLeftColor: '#404040',
                borderBottomColor: '#ffffff',
                borderRightColor: '#ffffff',
                backgroundColor: '#ffffff',
                padding: '12px',
                marginBottom: '12px',
              }}
            >
              <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#000080', fontFamily: 'Times New Roman, serif', textAlign: 'center', marginBottom: '8px' }}>
                Primeira Consulta SEM CUSTOS
              </div>
              <hr style={{ borderTop: '1px solid #808080', borderBottom: '1px solid #f0f0f0', margin: '8px 0' }} />
              <p style={{ fontSize: '11px', lineHeight: '1.6', color: '#000000', marginBottom: '8px' }}>
                Acreditamos que o acesso à justiça deve ser claro. Oferecemos uma primeira análise do seu caso sem custos iniciais.
              </p>
              <p style={{ fontSize: '11px', lineHeight: '1.6', color: '#000000' }}>
                Entre em contato pelo WhatsApp e receba uma orientação completa sobre seus direitos.
              </p>
            </div>

            {/* Radio button selection */}
            <div style={{ border: '1px solid #808080', padding: '8px', marginBottom: '12px', backgroundColor: '#d4d0c8' }}>
              <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '6px' }}>
                Selecione uma opção:
              </div>
              {[
                { label: 'Agendar consulta presencial', checked: false },
                { label: 'Agendar consulta online (videoconferência)', checked: true },
                { label: 'Enviar mensagem pelo WhatsApp agora', checked: false },
              ].map((opt, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <div
                    style={{
                      width: '11px',
                      height: '11px',
                      borderRadius: '50%',
                      border: '2px solid',
                      borderTopColor: '#404040',
                      borderLeftColor: '#404040',
                      borderBottomColor: '#ffffff',
                      borderRightColor: '#ffffff',
                      backgroundColor: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {opt.checked && (
                      <div
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          backgroundColor: '#000080',
                        }}
                      />
                    )}
                  </div>
                  <span style={{ fontSize: '11px', color: '#000000' }}>{opt.label}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '6px' }}>
              <a
                href={WHATSAPP_LINK}
                style={{
                  backgroundColor: '#000080',
                  color: '#ffffff',
                  border: '2px solid',
                  borderTopColor: '#ffffff',
                  borderLeftColor: '#ffffff',
                  borderBottomColor: '#404040',
                  borderRightColor: '#404040',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  padding: '4px 20px',
                  cursor: 'pointer',
                  fontFamily: 'Tahoma, Arial, sans-serif',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                OK — Quero Agendar Agora
              </a>
              <button
                style={{
                  backgroundColor: '#d4d0c8',
                  border: '2px solid',
                  borderTopColor: '#ffffff',
                  borderLeftColor: '#ffffff',
                  borderBottomColor: '#404040',
                  borderRightColor: '#404040',
                  fontSize: '11px',
                  padding: '4px 16px',
                  cursor: 'pointer',
                  fontFamily: 'Tahoma, Arial, sans-serif',
                  color: '#000000',
                }}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
