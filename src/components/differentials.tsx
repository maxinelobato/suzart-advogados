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
  titlebar: {
    background: 'linear-gradient(to right, #000080, #1084d0)',
    color: '#ffffff',
    fontWeight: 'bold' as const,
    fontSize: '11px',
    padding: '3px 6px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    userSelect: 'none' as const,
    fontFamily: 'Tahoma, Arial, sans-serif',
  } as React.CSSProperties,
};

const diffs = [
  { title: 'Atendimento Humanizado', desc: 'Não tratamos apenas processos, cuidamos de pessoas.', icon: '👥' },
  { title: 'Transparência Total', desc: 'Você sabe exatamente o que está acontecendo em cada fase.', icon: '🔍' },
  { title: 'Foco em Resultados', desc: 'Estratégias agressivas para garantir seus direitos.', icon: '🎯' },
  { title: 'Tecnologia', desc: 'Processos 100% digitais para maior rapidez e segurança.', icon: '💻' },
];

export function Differentials() {
  return (
    <section
      style={{
        backgroundColor: '#008080',
        padding: '24px 16px',
        fontFamily: 'Tahoma, Arial, sans-serif',
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <div style={W.window}>
          <div style={W.titlebar}>
            <span>⭐</span>
            <span>Por que escolher a Suzart Advogados?</span>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '2px' }}>
              {['_', '□', '✕'].map((b, i) => (
                <div key={i} style={{ width: '16px', height: '14px', backgroundColor: '#d4d0c8', border: '1px solid', borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', color: '#000000', cursor: 'pointer' }}>
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: '12px', backgroundColor: '#d4d0c8' }}>
            <table width="100%" cellSpacing="8" cellPadding="0">
              <tbody>
                <tr>
                  <td width="55%" valign="top">
                    {/* Group box for differentials */}
                    <div style={{ border: '1px solid #808080', position: 'relative', padding: '16px 10px 10px', backgroundColor: '#d4d0c8', marginTop: '10px' }}>
                      <div style={{ position: 'absolute', top: '-8px', left: '8px', backgroundColor: '#d4d0c8', padding: '0 4px', fontSize: '11px', fontWeight: 'bold', color: '#000000' }}>
                        Nossos Diferenciais
                      </div>
                      {diffs.map((d, i) => (
                        <div
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            padding: '6px',
                            marginBottom: '4px',
                            backgroundColor: i % 2 === 0 ? '#ffffff' : '#f0f0f0',
                            border: '1px solid #d0d0d0',
                          }}
                        >
                          <div
                            style={{
                              width: '13px',
                              height: '13px',
                              border: '2px solid',
                              borderTopColor: '#404040',
                              borderLeftColor: '#404040',
                              borderBottomColor: '#ffffff',
                              borderRightColor: '#ffffff',
                              backgroundColor: '#ffffff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '9px',
                              color: '#000080',
                              flexShrink: 0,
                              marginTop: '1px',
                            }}
                          >
                            ✓
                          </div>
                          <div>
                            <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#000080', marginBottom: '1px' }}>
                              {d.icon} {d.title}
                            </div>
                            <div style={{ fontSize: '11px', color: '#404040' }}>{d.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td width="45%" valign="top">
                    <div style={{ position: 'relative' }}>
                      <div
                        style={{
                          border: '2px solid',
                          borderTopColor: '#404040',
                          borderLeftColor: '#404040',
                          borderBottomColor: '#ffffff',
                          borderRightColor: '#ffffff',
                          overflow: 'hidden',
                        }}
                      >
                        <img
                          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=600"
                          alt="Justiça"
                          style={{ width: '100%', display: 'block' }}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      {/* Badge overlay */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '-4px',
                          left: '-4px',
                          backgroundColor: '#c0a000',
                          border: '2px solid',
                          borderTopColor: '#ffffff',
                          borderLeftColor: '#ffffff',
                          borderBottomColor: '#404040',
                          borderRightColor: '#404040',
                          padding: '8px 12px',
                          boxShadow: '2px 2px 0 #000000',
                        }}
                      >
                        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#ffffff', fontFamily: 'Times New Roman, serif' }}>
                          14+
                        </div>
                        <div style={{ fontSize: '9px', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '1px' }}>
                          Anos de Atuação
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ backgroundColor: '#d4d0c8', borderTop: '1px solid #808080', padding: '2px 4px', fontSize: '10px', display: 'flex', gap: '4px' }}>
            <div style={{ border: '1px solid', borderTopColor: '#808080', borderLeftColor: '#808080', borderBottomColor: '#ffffff', borderRightColor: '#ffffff', padding: '0 6px' }}>
              {diffs.length} diferencial(is) encontrado(s)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
