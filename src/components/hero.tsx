import React, { useState, useEffect } from 'react';

const W = {
  window: {
    border: '2px solid' as const,
    borderTopColor: '#ffffff',
    borderLeftColor: '#ffffff',
    borderBottomColor: '#404040',
    borderRightColor: '#404040',
    backgroundColor: '#d4d0c8',
    boxShadow: '3px 3px 0 #000000',
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
    justifyContent: 'space-between',
    userSelect: 'none' as const,
    fontFamily: 'Tahoma, Arial, sans-serif',
  } as React.CSSProperties,
  btn: {
    backgroundColor: '#d4d0c8',
    border: '2px solid',
    borderTopColor: '#ffffff',
    borderLeftColor: '#ffffff',
    borderBottomColor: '#404040',
    borderRightColor: '#404040',
    fontFamily: 'Tahoma, Arial, sans-serif',
    fontSize: '11px',
    padding: '3px 14px',
    cursor: 'pointer',
    color: '#000000',
    textDecoration: 'none',
    display: 'inline-block',
  } as React.CSSProperties,
  content: {
    backgroundColor: '#ffffff',
    border: '2px solid',
    borderTopColor: '#404040',
    borderLeftColor: '#404040',
    borderBottomColor: '#ffffff',
    borderRightColor: '#ffffff',
  } as React.CSSProperties,
};

export function Hero() {
  const [dots, setDots] = useState('');
  const [blink, setBlink] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loadingBar, setLoadingBar] = useState(0);

  const WHATSAPP_NUMBER = '5511950391906';
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vi o site da Suzart Advogados e gostaria de saber mais.`;

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((d) => (d.length >= 3 ? '' : d + '.'));
    }, 500);
    const blinkInterval = setInterval(() => {
      setBlink((b) => !b);
    }, 600);
    const barInterval = setInterval(() => {
      setLoadingBar((b) => (b >= 100 ? 0 : b + 2));
    }, 80);
    return () => {
      clearInterval(dotInterval);
      clearInterval(blinkInterval);
      clearInterval(barInterval);
    };
  }, []);

  return (
    <section
      id="inicio"
      style={{
        minHeight: '100vh',
        backgroundColor: '#008080',
        backgroundImage: `
          radial-gradient(circle at 20% 40%, rgba(0,0,128,0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 60%, rgba(0,0,128,0.2) 0%, transparent 40%)
        `,
        paddingTop: '160px',
        paddingBottom: '32px',
        paddingLeft: '16px',
        paddingRight: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        fontFamily: 'Tahoma, Arial, sans-serif',
      }}
    >
      {/* MAIN HERO WINDOW */}
      <div
        style={{
          ...W.window,
          width: '100%',
          maxWidth: '780px',
        }}
      >
        {/* Title bar */}
        <div style={W.titlebar}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span>⚖</span>
            <span>Suzart Advogados - Defesa e Proteção dos seus Direitos</span>
          </div>
          <div style={{ display: 'flex', gap: '2px' }}>
            {['_', '□', '✕'].map((b, i) => (
              <div
                key={i}
                style={{
                  width: '16px',
                  height: '14px',
                  backgroundColor: '#d4d0c8',
                  border: '1px solid',
                  borderTopColor: '#ffffff',
                  borderLeftColor: '#ffffff',
                  borderBottomColor: '#404040',
                  borderRightColor: '#404040',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '9px',
                  color: '#000000',
                  cursor: 'pointer',
                  lineHeight: '1',
                }}
              >
                {b}
              </div>
            ))}
          </div>
        </div>

        {/* Content area */}
        <div style={{ padding: '16px', backgroundColor: '#d4d0c8' }}>
          {/* Stars / Rating badge */}
          <div
            style={{
              backgroundColor: '#000080',
              color: '#ffff00',
              fontSize: '11px',
              padding: '3px 8px',
              marginBottom: '12px',
              display: 'inline-block',
              border: '1px solid #ffffff',
              fontFamily: 'Courier New, monospace',
            }}
          >
            ★★★★★ Nota 5.0 no Google — 159 avaliações satisfeitas!
          </div>

          {/* Hero content table layout */}
          <table width="100%" cellSpacing="8" cellPadding="0" style={{ borderCollapse: 'separate' }}>
            <tbody>
              <tr>
                <td width="60%" valign="top">
                  <div
                    style={{
                      ...W.content,
                      padding: '12px',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '22px',
                        fontWeight: 'bold',
                        color: '#000080',
                        fontFamily: 'Times New Roman, serif',
                        lineHeight: '1.2',
                        marginBottom: '8px',
                      }}
                    >
                      Defesa e Proteção
                    </div>
                    <div
                      style={{
                        fontSize: '22px',
                        fontWeight: 'bold',
                        color: '#800000',
                        fontFamily: 'Times New Roman, serif',
                        fontStyle: 'italic',
                        lineHeight: '1.2',
                        marginBottom: '12px',
                      }}
                    >
                      dos seus Direitos
                    </div>
                    <hr style={{ borderTop: '1px solid #808080', borderBottom: '1px solid #ffffff', margin: '8px 0' }} />
                    <p style={{ fontSize: '11px', color: '#000000', lineHeight: '1.5', marginBottom: '12px' }}>
                      Advocacia de excelência em São Paulo. Unimos tradição jurídica e inovação para garantir a melhor defesa dos seus interesses.
                    </p>
                    {/* Loading bar "processing" effect */}
                    <div style={{ marginBottom: '8px' }}>
                      <div style={{ fontSize: '10px', color: '#000080', marginBottom: '2px' }}>
                        Carregando experiência jurídica{dots}
                      </div>
                      <div
                        style={{
                          height: '12px',
                          border: '2px solid',
                          borderTopColor: '#404040',
                          borderLeftColor: '#404040',
                          borderBottomColor: '#ffffff',
                          borderRightColor: '#ffffff',
                          backgroundColor: '#ffffff',
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            height: '100%',
                            width: `${loadingBar}%`,
                            background: 'repeating-linear-gradient(to right, #000080 0px, #000080 10px, #3070d0 10px, #3070d0 12px)',
                            transition: 'width 0.08s linear',
                          }}
                        />
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '12px' }}>
                      <a
                        href={WHATSAPP_LINK}
                        style={{
                          ...W.btn,
                          backgroundColor: '#000080',
                          color: '#ffffff',
                          fontWeight: 'bold',
                          fontSize: '11px',
                          border: '2px solid',
                          borderTopColor: '#ffffff',
                          borderLeftColor: '#ffffff',
                          borderBottomColor: '#404040',
                          borderRightColor: '#404040',
                        }}
                      >
                        OK — Agendar Consulta
                      </a>
                      <button
                        style={{ ...W.btn, fontSize: '11px' }}
                        onClick={() => setDialogOpen(true)}
                      >
                        Saiba Mais...
                      </button>
                    </div>
                  </div>
                </td>
                <td width="40%" valign="top">
                  {/* Info panel */}
                  <div style={{ ...W.window, marginBottom: '8px' }}>
                    <div
                      style={{
                        ...W.titlebar,
                        background: 'linear-gradient(to right, #808000, #c0c000)',
                      }}
                    >
                      <span>⚠ Atenção</span>
                    </div>
                    <div style={{ padding: '8px', fontSize: '11px', backgroundColor: '#d4d0c8' }}>
                      <p style={{ marginBottom: '4px' }}>
                        <strong>1ª Consulta GRATUITA!</strong>
                      </p>
                      <p>Resposta em até 15 minutos.</p>
                    </div>
                  </div>

                  <div style={{ ...W.window }}>
                    <div style={{ ...W.titlebar }}>
                      <span>📋 Contato Rápido</span>
                    </div>
                    <div style={{ padding: '8px', fontSize: '10px', backgroundColor: '#d4d0c8', lineHeight: '1.7' }}>
                      <div>📍 Penha de França, SP</div>
                      <div>📞 (11) 95039-1906</div>
                      <div>🕘 Seg–Sex: 09h–18h</div>
                      <div
                        style={{
                          color: blink ? '#ff0000' : '#d4d0c8',
                          fontWeight: 'bold',
                          marginTop: '4px',
                          fontSize: '11px',
                        }}
                      >
                        ● ONLINE AGORA
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Contact info strip */}
          <div
            style={{
              marginTop: '12px',
              backgroundColor: '#000080',
              color: '#ffffff',
              padding: '6px 10px',
              fontSize: '11px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'space-around',
              border: '2px solid',
              borderTopColor: '#ffffff',
              borderLeftColor: '#ffffff',
              borderBottomColor: '#404040',
              borderRightColor: '#404040',
            }}
          >
            <span>📍 Av. Amador Bueno da Veiga, 1232 - Penha de França, SP</span>
            <span>📞 (11) 95039-1906</span>
            <span>🕘 Segunda a Sexta: 09h às 18h</span>
          </div>
        </div>

        {/* Status bar */}
        <div
          style={{
            backgroundColor: '#d4d0c8',
            borderTop: '1px solid #808080',
            padding: '2px 4px',
            fontSize: '10px',
            display: 'flex',
            gap: '4px',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              border: '1px solid',
              borderTopColor: '#808080',
              borderLeftColor: '#808080',
              borderBottomColor: '#ffffff',
              borderRightColor: '#ffffff',
              padding: '0 6px',
              fontSize: '10px',
            }}
          >
            Pronto
          </div>
          <div
            style={{
              border: '1px solid',
              borderTopColor: '#808080',
              borderLeftColor: '#808080',
              borderBottomColor: '#ffffff',
              borderRightColor: '#ffffff',
              padding: '0 6px',
              fontSize: '10px',
            }}
          >
            🔒 Conexão Segura — OAB/SP
          </div>
          <div style={{ flex: 1 }} />
          <div
            style={{
              border: '1px solid',
              borderTopColor: '#808080',
              borderLeftColor: '#808080',
              borderBottomColor: '#ffffff',
              borderRightColor: '#ffffff',
              padding: '0 6px',
              fontSize: '10px',
            }}
          >
            Zona da Internet
          </div>
        </div>
      </div>

      {/* STATS — small windows floating */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '780px',
        }}
      >
        {[
          { val: '14+', label: 'Anos de Experiência' },
          { val: '477+', label: 'Clientes Satisfeitos' },
          { val: '1.2k+', label: 'Processos Ativos' },
          { val: '5.0 ★', label: 'Avaliação Google' },
        ].map((s, i) => (
          <div key={i} style={{ ...W.window, flex: '1', minWidth: '120px', maxWidth: '180px' }}>
            <div
              style={{
                ...W.titlebar,
                background:
                  i === 0
                    ? 'linear-gradient(to right, #000080, #1084d0)'
                    : i === 1
                    ? 'linear-gradient(to right, #008000, #00a000)'
                    : i === 2
                    ? 'linear-gradient(to right, #800000, #c00000)'
                    : 'linear-gradient(to right, #808000, #c0a000)',
              }}
            >
              <span>📊 {s.label}</span>
            </div>
            <div
              style={{
                padding: '8px',
                textAlign: 'center',
                backgroundColor: '#d4d0c8',
              }}
            >
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#000080',
                  fontFamily: 'Times New Roman, serif',
                }}
              >
                {s.val}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          color: '#ffffff',
          fontSize: '10px',
          fontFamily: 'Courier New, monospace',
          textAlign: 'center',
          marginTop: '8px',
        }}
      >
        <div>▼ Role para ver mais ▼</div>
        <div style={{ fontSize: '9px', color: '#c0c0c0' }}>Clique aqui para continuar{dots}</div>
      </div>

      {/* DIALOG BOX */}
      {dialogOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
          }}
        >
          <div style={{ ...W.window, width: '360px' }}>
            <div style={W.titlebar}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span>ℹ</span>
                <span>Sobre — Suzart Advogados</span>
              </div>
              <div
                style={{
                  width: '16px',
                  height: '14px',
                  backgroundColor: '#d4d0c8',
                  border: '1px solid',
                  borderTopColor: '#ffffff',
                  borderLeftColor: '#ffffff',
                  borderBottomColor: '#404040',
                  borderRightColor: '#404040',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '9px',
                  color: '#000000',
                  cursor: 'pointer',
                }}
                onClick={() => setDialogOpen(false)}
              >
                ✕
              </div>
            </div>
            <div style={{ padding: '16px', backgroundColor: '#d4d0c8' }}>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <div style={{ fontSize: '32px' }}>⚖</div>
                <div style={{ fontSize: '11px', lineHeight: '1.6' }}>
                  Com mais de 14 anos de experiência em São Paulo, a Suzart Advogados oferece advocacia técnica, ética e focada no cliente. Nossa equipe é especializada nas melhores instituições do país.
                </div>
              </div>
              <hr style={{ borderTop: '1px solid #808080', borderBottom: '1px solid #ffffff', margin: '8px 0' }} />
              <div style={{ display: 'flex', justifyContent: 'center', gap: '6px' }}>
                <a
                  href={WHATSAPP_LINK}
                  style={{
                    ...W.btn,
                    backgroundColor: '#000080',
                    color: '#ffffff',
                    fontWeight: 'bold',
                    border: '2px solid',
                    borderTopColor: '#ffffff',
                    borderLeftColor: '#ffffff',
                    borderBottomColor: '#404040',
                    borderRightColor: '#404040',
                  }}
                >
                  OK
                </a>
                <button
                  style={W.btn}
                  onClick={() => setDialogOpen(false)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
