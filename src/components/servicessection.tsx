import React from 'react';

const winStyle = {
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
    background: `linear-gradient(to right, ${color}, ${color}88)`,
    color: '#ffffff',
    fontWeight: 'bold' as const,
    fontSize: '11px',
    padding: '3px 6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    userSelect: 'none' as const,
    fontFamily: 'Tahoma, Arial, sans-serif',
  }),
  btn: {
    backgroundColor: '#d4d0c8',
    border: '2px solid',
    borderTopColor: '#ffffff',
    borderLeftColor: '#ffffff',
    borderBottomColor: '#404040',
    borderRightColor: '#404040',
    fontFamily: 'Tahoma, Arial, sans-serif',
    fontSize: '11px',
    padding: '3px 12px',
    cursor: 'pointer',
    color: '#000000',
    textDecoration: 'none',
    display: 'inline-block',
  } as React.CSSProperties,
};

const SERVICES = [
  { title: 'Direito Civil', desc: 'Resolução de conflitos, contratos, responsabilidade civil e direitos reais.', icon: '⚖', color: '#000080' },
  { title: 'Direito Trabalhista', desc: 'Defesa dos direitos do trabalhador e consultoria para empresas.', icon: '💼', color: '#008000' },
  { title: 'Direito de Família', desc: 'Divórcios, guarda, inventários e planejamento sucessório.', icon: '👨‍👩‍👧', color: '#800000' },
  { title: 'Direito Empresarial', desc: 'Assessoria jurídica completa para o crescimento do seu negócio.', icon: '🏢', color: '#800080' },
  { title: 'Consultoria Jurídica', desc: 'Prevenção de riscos e orientação estratégica personalizada.', icon: '🛡', color: '#005050' },
  { title: 'Direito Imobiliário', desc: 'Regularização de imóveis, contratos de compra e venda e locação.', icon: '🏠', color: '#804000' },
];

const WHATSAPP_LINK = `https://wa.me/5511950391906?text=Olá! Vi o site da Suzart Advogados e gostaria de saber mais.`;

export function ServicesSection() {
  return (
    <section
      id="servicos"
      style={{
        backgroundColor: '#008080',
        padding: '24px 16px',
        fontFamily: 'Tahoma, Arial, sans-serif',
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        {/* Section window */}
        <div style={winStyle.window}>
          <div style={winStyle.titlebar()}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>📁</span>
              <span>Áreas de Atuação — Suzart Advogados</span>
            </div>
            <div style={{ display: 'flex', gap: '2px' }}>
              {['_', '□', '✕'].map((b, i) => (
                <div key={i} style={{ width: '16px', height: '14px', backgroundColor: '#d4d0c8', border: '1px solid', borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', color: '#000000', cursor: 'pointer' }}>
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: '12px', backgroundColor: '#d4d0c8' }}>
            <p style={{ fontSize: '11px', marginBottom: '12px', color: '#000000' }}>
              Soluções jurídicas completas para todas as suas necessidades.
            </p>

            {/* Services grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: '8px',
              }}
            >
              {SERVICES.map((s, i) => (
                <div
                  key={i}
                  style={{
                    ...winStyle.window,
                    boxShadow: '1px 1px 0 #000000',
                  }}
                >
                  <div style={winStyle.titlebar(s.color)}>
                    <span>{s.icon} {s.title}</span>
                  </div>
                  <div style={{ padding: '8px', backgroundColor: '#d4d0c8' }}>
                    <p style={{ fontSize: '11px', lineHeight: '1.5', marginBottom: '8px', color: '#000000' }}>
                      {s.desc}
                    </p>
                    <a
                      href={WHATSAPP_LINK}
                      style={{
                        ...winStyle.btn,
                        fontSize: '10px',
                        padding: '2px 8px',
                      }}
                    >
                      Saber mais &gt;&gt;
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '12px', textAlign: 'center' }}>
              <a
                href={WHATSAPP_LINK}
                style={{
                  ...winStyle.btn,
                  backgroundColor: '#000080',
                  color: '#ffffff',
                  fontWeight: 'bold',
                  border: '2px solid',
                  borderTopColor: '#ffffff',
                  borderLeftColor: '#ffffff',
                  borderBottomColor: '#404040',
                  borderRightColor: '#404040',
                  padding: '4px 20px',
                }}
              >
                Falar com Especialista — WhatsApp
              </a>
            </div>
          </div>

          <div style={{ backgroundColor: '#d4d0c8', borderTop: '1px solid #808080', padding: '2px 4px', fontSize: '10px', display: 'flex', gap: '4px' }}>
            <div style={{ border: '1px solid', borderTopColor: '#808080', borderLeftColor: '#808080', borderBottomColor: '#ffffff', borderRightColor: '#ffffff', padding: '0 6px' }}>
              {SERVICES.length} área(s) encontrada(s)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
