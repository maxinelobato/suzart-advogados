import React from 'react';

const STATS = [
  { label: 'Anos de Experiência', value: '14+', icon: '📅', color: '#000080' },
  { label: 'Clientes Satisfeitos', value: '477+', icon: '😊', color: '#008000' },
  { label: 'Processos Ativos', value: '1.2k+', icon: '📋', color: '#800000' },
  { label: 'Avaliação Google', value: '5.0 ★', icon: '⭐', color: '#808000' },
];

export function StatsSection() {
  return (
    <section
      style={{
        backgroundColor: '#000080',
        padding: '16px',
        fontFamily: 'Tahoma, Arial, sans-serif',
        borderTop: '2px solid #ffffff',
        borderBottom: '2px solid #404040',
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        {/* Title band */}
        <div
          style={{
            backgroundColor: '#d4d0c8',
            border: '2px solid',
            borderTopColor: '#ffffff',
            borderLeftColor: '#ffffff',
            borderBottomColor: '#404040',
            borderRightColor: '#404040',
            padding: '4px 10px',
            marginBottom: '10px',
            fontSize: '11px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span>📊</span>
          <span>Estatísticas — Suzart Advogados v14.0 (Build 1906)</span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                border: '2px solid',
                borderTopColor: '#ffffff',
                borderLeftColor: '#ffffff',
                borderBottomColor: '#404040',
                borderRightColor: '#404040',
                backgroundColor: '#d4d0c8',
                boxShadow: '2px 2px 0 #000000',
                minWidth: '140px',
                flex: '1',
                maxWidth: '200px',
              }}
            >
              <div
                style={{
                  background: `linear-gradient(to right, ${s.color}, ${s.color}88)`,
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: '10px',
                  padding: '2px 6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <span>{s.icon}</span>
                <span>{s.label}</span>
              </div>
              <div style={{ padding: '10px', textAlign: 'center', backgroundColor: '#d4d0c8' }}>
                <div
                  style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: '#000080',
                    fontFamily: 'Times New Roman, serif',
                    lineHeight: '1.1',
                  }}
                >
                  {s.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
