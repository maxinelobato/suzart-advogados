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

const steps = [
  { title: 'Contato Inicial', desc: 'Você nos conta seu caso via WhatsApp ou formulário.', icon: '📞' },
  { title: 'Análise Jurídica', desc: 'Nossa equipe estuda os fatos e documentos apresentados.', icon: '📄' },
  { title: 'Estratégia', desc: 'Definimos o melhor caminho legal para proteger seus direitos.', icon: '🗺' },
  { title: 'Execução', desc: 'Acompanhamos cada etapa do processo com transparência total.', icon: '⚖' },
];

export function HowItWorks() {
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
            <span>🔧</span>
            <span>Como Funciona — Assistente de Configuração</span>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '2px' }}>
              {['_', '□', '✕'].map((b, i) => (
                <div key={i} style={{ width: '16px', height: '14px', backgroundColor: '#d4d0c8', border: '1px solid', borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', color: '#000000', cursor: 'pointer' }}>
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: '12px', backgroundColor: '#d4d0c8' }}>
            {/* Wizard banner */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  backgroundColor: '#000080',
                  width: '80px',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '40px',
                  padding: '8px',
                }}
              >
                ⚖
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#000080', fontFamily: 'Times New Roman, serif', marginBottom: '4px' }}>
                  Assistente de Atendimento Jurídico
                </div>
                <div style={{ fontSize: '11px', color: '#000000', lineHeight: '1.5' }}>
                  Este assistente irá guiá-lo por todas as etapas do processo jurídico. Clique em &quot;Avançar&quot; para continuar.
                </div>
              </div>
            </div>

            <hr style={{ borderTop: '1px solid #808080', borderBottom: '1px solid #ffffff', margin: '8px 0' }} />

            {/* Steps as wizard progress */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '8px', marginTop: '12px' }}>
              {steps.map((step, i) => (
                <div
                  key={i}
                  style={{
                    border: '2px solid',
                    borderTopColor: '#ffffff',
                    borderLeftColor: '#ffffff',
                    borderBottomColor: '#404040',
                    borderRightColor: '#404040',
                    backgroundColor: '#d4d0c8',
                    padding: '10px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      backgroundColor: '#000080',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      fontFamily: 'Times New Roman, serif',
                      margin: '0 auto 6px',
                      border: '2px solid',
                      borderTopColor: '#ffffff',
                      borderLeftColor: '#ffffff',
                      borderBottomColor: '#404040',
                      borderRightColor: '#404040',
                    }}
                  >
                    0{i + 1}
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#000080', marginBottom: '4px' }}>
                    {step.icon} {step.title}
                  </div>
                  <div style={{ fontSize: '10px', color: '#404040', lineHeight: '1.4' }}>
                    {step.desc}
                  </div>
                </div>
              ))}
            </div>

            <hr style={{ borderTop: '1px solid #808080', borderBottom: '1px solid #ffffff', margin: '12px 0 8px' }} />

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '6px' }}>
              <button style={{ backgroundColor: '#d4d0c8', border: '2px solid', borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040', fontSize: '11px', padding: '3px 14px', cursor: 'pointer', fontFamily: 'Tahoma, Arial, sans-serif' }}>
                &lt; Voltar
              </button>
              <a
                href={`https://wa.me/5511950391906?text=Olá!`}
                style={{ backgroundColor: '#d4d0c8', border: '2px solid', borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040', fontSize: '11px', padding: '3px 14px', cursor: 'pointer', fontFamily: 'Tahoma, Arial, sans-serif', color: '#000000', textDecoration: 'none', display: 'inline-block' }}
              >
                Avançar &gt;
              </a>
              <button style={{ backgroundColor: '#d4d0c8', border: '2px solid', borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040', fontSize: '11px', padding: '3px 14px', cursor: 'pointer', fontFamily: 'Tahoma, Arial, sans-serif' }}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
