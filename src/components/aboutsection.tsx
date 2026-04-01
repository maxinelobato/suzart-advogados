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

export function AboutSection() {
  return (
    <section
      id="sobre"
      style={{
        backgroundColor: '#008080',
        padding: '24px 16px',
        fontFamily: 'Tahoma, Arial, sans-serif',
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <div style={W.window}>
          <div style={W.titlebar}>
            <span>👤</span>
            <span>Sobre o Profissional — Propriedades</span>
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
                  <td width="45%" valign="top">
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
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600"
                        alt="Advogado"
                        style={{ width: '100%', display: 'block', filter: 'grayscale(100%)' }}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div style={{ fontSize: '9px', textAlign: 'center', color: '#808080', marginTop: '2px' }}>
                      advogado.jpg — 14 KB
                    </div>
                  </td>
                  <td width="55%" valign="top">
                    {/* Tab panel */}
                    <div>
                      {/* Tab header */}
                      <div style={{ display: 'flex', gap: '2px', marginBottom: '-1px' }}>
                        {['Geral', 'Experiência', 'OAB'].map((tab, i) => (
                          <div
                            key={tab}
                            style={{
                              padding: '3px 10px',
                              backgroundColor: i === 0 ? '#d4d0c8' : '#c0c0c0',
                              border: '1px solid',
                              borderTopColor: '#ffffff',
                              borderLeftColor: '#ffffff',
                              borderBottomColor: i === 0 ? '#d4d0c8' : '#808080',
                              borderRightColor: '#808080',
                              fontSize: '11px',
                              cursor: 'pointer',
                              fontWeight: i === 0 ? 'bold' : 'normal',
                              position: 'relative',
                              zIndex: i === 0 ? 1 : 0,
                            }}
                          >
                            {tab}
                          </div>
                        ))}
                      </div>

                      {/* Tab content */}
                      <div
                        style={{
                          border: '1px solid',
                          borderTopColor: '#808080',
                          borderLeftColor: '#808080',
                          borderBottomColor: '#ffffff',
                          borderRightColor: '#ffffff',
                          backgroundColor: '#d4d0c8',
                          padding: '10px',
                        }}
                      >
                        <div style={{ marginBottom: '8px' }}>
                          <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#000080', fontFamily: 'Times New Roman, serif', marginBottom: '4px' }}>
                            Suzart Advogados
                          </div>
                          <hr style={{ borderTop: '1px solid #808080', borderBottom: '1px solid #ffffff', margin: '4px 0' }} />
                        </div>

                        <p style={{ fontSize: '11px', lineHeight: '1.6', color: '#000000', marginBottom: '8px' }}>
                          Com mais de uma década de experiência no cenário jurídico de São Paulo, a Suzart Advogados nasceu com o propósito de oferecer uma advocacia técnica, ética e extremamente focada no cliente.
                        </p>
                        <p style={{ fontSize: '11px', lineHeight: '1.6', color: '#000000', marginBottom: '10px' }}>
                          Nossa equipe é liderada por especialistas com formação nas melhores instituições do país.
                        </p>

                        {/* Checkboxes */}
                        {[
                          { label: 'OAB/SP Ativa', checked: true },
                          { label: 'Equipe Especializada', checked: true },
                          { label: 'Atendimento Online', checked: true },
                          { label: 'Consulta Gratuita', checked: true },
                        ].map((item, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
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
                              }}
                            >
                              {item.checked ? '✓' : ''}
                            </div>
                            <span style={{ fontSize: '11px', color: '#000000' }}>{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ backgroundColor: '#d4d0c8', borderTop: '1px solid #808080', padding: '2px 4px', fontSize: '10px', display: 'flex', gap: '4px' }}>
            <div style={{ border: '1px solid', borderTopColor: '#808080', borderLeftColor: '#808080', borderBottomColor: '#ffffff', borderRightColor: '#ffffff', padding: '0 6px' }}>
              1 objeto(s)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
