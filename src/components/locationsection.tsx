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

const WHATSAPP_LINK = `https://wa.me/5511950391906?text=Olá!`;

export function LocationSection() {
  return (
    <section
      id="localizacao"
      style={{
        backgroundColor: '#008080',
        padding: '24px 16px',
        fontFamily: 'Tahoma, Arial, sans-serif',
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <div style={W.window}>
          <div style={W.titlebar}>
            <span>🗺</span>
            <span>Onde Estamos — Mapa</span>
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
                  <td width="40%" valign="top">
                    {/* Info list */}
                    <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#000080', fontFamily: 'Times New Roman, serif', marginBottom: '8px' }}>
                      Localização
                    </div>
                    <hr style={{ borderTop: '1px solid #808080', borderBottom: '1px solid #ffffff', margin: '4px 0 10px' }} />

                    <p style={{ fontSize: '11px', lineHeight: '1.6', color: '#000000', marginBottom: '12px' }}>
                      Localizado no coração de São Paulo, nosso escritório oferece infraestrutura moderna para atender nossos clientes com máximo conforto e privacidade.
                    </p>

                    {/* List view of contact details */}
                    <div
                      style={{
                        border: '2px solid',
                        borderTopColor: '#404040',
                        borderLeftColor: '#404040',
                        borderBottomColor: '#ffffff',
                        borderRightColor: '#ffffff',
                        backgroundColor: '#ffffff',
                        overflow: 'hidden',
                        marginBottom: '12px',
                      }}
                    >
                      {[
                        { icon: '📍', label: 'Endereço', val: 'Av. Amador Bueno da Veiga, 1232 - Penha de França, SP' },
                        { icon: '🕘', label: 'Horário', val: 'Segunda a Sexta: 09:00 às 18:00' },
                        { icon: '📞', label: 'Telefone', val: '(11) 95039-1906' },
                      ].map((item, i) => (
                        <div
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            padding: '6px 8px',
                            borderBottom: i < 2 ? '1px solid #d0d0d0' : 'none',
                            backgroundColor: i % 2 === 0 ? '#f0f0f0' : '#ffffff',
                            fontSize: '11px',
                          }}
                        >
                          <span style={{ flexShrink: 0 }}>{item.icon}</span>
                          <div>
                            <div style={{ fontWeight: 'bold', color: '#000080', marginBottom: '1px' }}>{item.label}</div>
                            <div style={{ color: '#404040', fontSize: '10px' }}>{item.val}</div>
                          </div>
                        </div>
                      ))}
                    </div>

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
                        padding: '4px 14px',
                        cursor: 'pointer',
                        fontFamily: 'Tahoma, Arial, sans-serif',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      🗺 Traçar Rota via WhatsApp
                    </a>
                  </td>
                  <td width="60%" valign="top">
                    <div
                      style={{
                        border: '2px solid',
                        borderTopColor: '#404040',
                        borderLeftColor: '#404040',
                        borderBottomColor: '#ffffff',
                        borderRightColor: '#ffffff',
                        overflow: 'hidden',
                        height: '340px',
                      }}
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.259856865259!2d-46.5331633!3d-23.5231544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x49764f32057d1c21%3A0x6544730e1933e38b!2sSuzart%20Advogados!5e0!3m2!1spt-BR!2sbr!4v1774655460991!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0, display: 'block' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização Suzart Advogados"
                      />
                    </div>
                    <div style={{ fontSize: '9px', color: '#808080', marginTop: '2px', textAlign: 'center' }}>
                      Mapa fornecido por Google Maps — Abra no Internet Explorer 6.0
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ backgroundColor: '#d4d0c8', borderTop: '1px solid #808080', padding: '2px 4px', fontSize: '10px', display: 'flex', gap: '4px' }}>
            <div style={{ border: '1px solid', borderTopColor: '#808080', borderLeftColor: '#808080', borderBottomColor: '#ffffff', borderRightColor: '#ffffff', padding: '0 6px' }}>
              🔒 Conexão segura — SSL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
