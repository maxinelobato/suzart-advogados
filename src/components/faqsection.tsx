import React, { useState } from 'react';

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

const FAQ = [
  { q: 'Quanto custa uma consulta?', a: 'Os valores variam conforme a complexidade do caso. Entre em contato para uma avaliação inicial.' },
  { q: 'A primeira consulta é gratuita?', a: 'Sim, oferecemos uma primeira consulta de orientação sem compromisso para entender seu caso.' },
  { q: 'Atendem online?', a: 'Sim, realizamos atendimentos via videoconferência para sua maior comodidade e agilidade.' },
  { q: 'Quais áreas atendem?', a: 'Atendemos Direito Civil, Trabalhista, Família, Empresarial, Imobiliário e Consumidor.' },
  { q: 'Como funciona o processo?', a: 'Iniciamos com a análise documental, seguida da estratégia jurídica e acompanhamento em todas as instâncias.' },
  { q: 'Como agendar?', a: 'Basta clicar no botão do WhatsApp ou preencher o formulário abaixo. Respondemos em até 2 horas.' },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{
        backgroundColor: '#008080',
        padding: '24px 16px',
        fontFamily: 'Tahoma, Arial, sans-serif',
      }}
    >
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <div style={W.window}>
          <div style={W.titlebar}>
            <span>❓</span>
            <span>Dúvidas Frequentes — Ajuda</span>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '2px' }}>
              {['_', '□', '✕'].map((b, i) => (
                <div key={i} style={{ width: '16px', height: '14px', backgroundColor: '#d4d0c8', border: '1px solid', borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', color: '#000000', cursor: 'pointer' }}>
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: '12px', backgroundColor: '#d4d0c8' }}>
            {/* Toolbar */}
            <div style={{ display: 'flex', gap: '4px', marginBottom: '10px' }}>
              {['Voltar', 'Avançar', 'Página Inicial', 'Imprimir'].map((btn) => (
                <button
                  key={btn}
                  style={{
                    backgroundColor: '#d4d0c8',
                    border: '2px solid',
                    borderTopColor: '#ffffff',
                    borderLeftColor: '#ffffff',
                    borderBottomColor: '#404040',
                    borderRightColor: '#404040',
                    fontSize: '10px',
                    padding: '2px 8px',
                    cursor: 'pointer',
                    fontFamily: 'Tahoma, Arial, sans-serif',
                  }}
                >
                  {btn}
                </button>
              ))}
            </div>

            <p style={{ fontSize: '11px', marginBottom: '10px', color: '#000000' }}>
              Tudo o que você precisa saber antes de iniciar seu processo.
            </p>

            {/* Tree list of FAQ */}
            <div
              style={{
                border: '2px solid',
                borderTopColor: '#404040',
                borderLeftColor: '#404040',
                borderBottomColor: '#ffffff',
                borderRightColor: '#ffffff',
                backgroundColor: '#ffffff',
                overflow: 'hidden',
              }}
            >
              {FAQ.map((item, i) => (
                <div key={i}>
                  {/* Question row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '6px',
                      padding: '6px 8px',
                      cursor: 'pointer',
                      backgroundColor: openIndex === i ? '#000080' : (i % 2 === 0 ? '#f0f0f0' : '#ffffff'),
                      color: openIndex === i ? '#ffffff' : '#000000',
                      borderBottom: '1px solid #d0d0d0',
                    }}
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <span style={{ fontSize: '9px', color: openIndex === i ? '#ffffff' : '#808080', marginTop: '1px', flexShrink: 0 }}>
                      {openIndex === i ? '▼' : '▶'}
                    </span>
                    <span style={{ fontSize: '11px', fontWeight: 'bold' }}>{item.q}</span>
                  </div>
                  {/* Answer row */}
                  {openIndex === i && (
                    <div
                      style={{
                        padding: '8px 8px 8px 22px',
                        backgroundColor: '#fffff0',
                        borderBottom: '1px solid #d0d0d0',
                        fontSize: '11px',
                        lineHeight: '1.5',
                        color: '#000000',
                        borderLeft: '3px solid #000080',
                      }}
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div style={{ backgroundColor: '#d4d0c8', borderTop: '1px solid #808080', padding: '2px 4px', fontSize: '10px', display: 'flex', gap: '4px' }}>
            <div style={{ border: '1px solid', borderTopColor: '#808080', borderLeftColor: '#808080', borderBottomColor: '#ffffff', borderRightColor: '#ffffff', padding: '0 6px' }}>
              {FAQ.length} pergunta(s)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
