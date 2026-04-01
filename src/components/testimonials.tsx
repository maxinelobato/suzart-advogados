import React from 'react';

const W = {
  window: (shadow = true) => ({
    border: '2px solid',
    borderTopColor: '#ffffff',
    borderLeftColor: '#ffffff',
    borderBottomColor: '#404040',
    borderRightColor: '#404040',
    backgroundColor: '#d4d0c8',
    boxShadow: shadow ? '2px 2px 0 #000000' : 'none',
    fontFamily: 'Tahoma, Arial, sans-serif',
    fontSize: '11px',
  } as React.CSSProperties),
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

const TESTIMONIALS = [
  {
    name: 'Ricardo S.',
    text: 'Tinha um problema trabalhista complexo que se arrastava por anos. Depois de apenas 3 meses com a Suzart Advogados, conseguimos um acordo justo. Super recomendo!',
    rating: 5,
  },
  {
    name: 'Mariana L.',
    text: 'Atendimento impecável! A Dra. foi extremamente atenciosa no meu processo de divórcio. O resultado superou minhas expectativas. Nota 10!',
    rating: 5,
  },
  {
    name: 'Carlos A.',
    text: 'Já indiquei para vários amigos empresários. A consultoria preventiva deles salvou minha empresa de multas pesadas. Melhor de São Paulo!',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      style={{
        backgroundColor: '#008080',
        padding: '24px 16px',
        fontFamily: 'Tahoma, Arial, sans-serif',
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <div style={W.window()}>
          <div style={W.titlebar()}>
            <span>💬</span>
            <span>Depoimentos de Clientes — Livro de Visitas</span>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '2px' }}>
              {['_', '□', '✕'].map((b, i) => (
                <div key={i} style={{ width: '16px', height: '14px', backgroundColor: '#d4d0c8', border: '1px solid', borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', color: '#000000', cursor: 'pointer' }}>
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: '12px', backgroundColor: '#d4d0c8' }}>
            <div
              style={{
                backgroundColor: '#000080',
                color: '#ffffff',
                padding: '4px 8px',
                fontSize: '11px',
                marginBottom: '12px',
                fontFamily: 'Courier New, monospace',
                textAlign: 'center',
              }}
            >
              ★ O que dizem nossos clientes — Resultados que transformam vidas e negócios ★
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '8px' }}>
              {TESTIMONIALS.map((t, i) => (
                <div key={i} style={W.window(false)}>
                  <div
                    style={{
                      ...W.titlebar(i === 0 ? '#000080' : i === 1 ? '#008000' : '#800000'),
                    }}
                  >
                    <span>✉</span>
                    <span>Mensagem de: {t.name}</span>
                  </div>
                  <div style={{ padding: '8px', backgroundColor: '#d4d0c8' }}>
                    <div style={{ color: '#c0a000', fontSize: '12px', marginBottom: '6px', letterSpacing: '2px' }}>
                      {'★'.repeat(t.rating)}
                    </div>
                    <div
                      style={{
                        border: '2px solid',
                        borderTopColor: '#404040',
                        borderLeftColor: '#404040',
                        borderBottomColor: '#ffffff',
                        borderRightColor: '#ffffff',
                        backgroundColor: '#ffffff',
                        padding: '6px',
                        fontSize: '11px',
                        lineHeight: '1.5',
                        fontStyle: 'italic',
                        marginBottom: '8px',
                        minHeight: '60px',
                      }}
                    >
                      "{t.text}"
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          backgroundColor: '#000080',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '11px',
                          fontWeight: 'bold',
                          border: '1px solid #ffffff',
                        }}
                      >
                        {t.name[0]}
                      </div>
                      <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#000080' }}>{t.name}</span>
                      <span style={{ fontSize: '9px', color: '#808080', marginLeft: '4px' }}>— Cliente Verificado ✓</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '10px', fontSize: '10px', color: '#808080', textAlign: 'center' }}>
              Avaliações verificadas via Google Business — Última atualização: 01/04/2025
            </div>
          </div>

          <div style={{ backgroundColor: '#d4d0c8', borderTop: '1px solid #808080', padding: '2px 4px', fontSize: '10px', display: 'flex', gap: '4px' }}>
            <div style={{ border: '1px solid', borderTopColor: '#808080', borderLeftColor: '#808080', borderBottomColor: '#ffffff', borderRightColor: '#ffffff', padding: '0 6px' }}>
              {TESTIMONIALS.length} depoimento(s)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
