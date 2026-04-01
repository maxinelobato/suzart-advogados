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

const GALLERY = [
  { url: 'https://picsum.photos/seed/law1/400/300', label: 'escritorio_01.jpg', size: '24 KB' },
  { url: 'https://picsum.photos/seed/law2/400/300', label: 'escritorio_02.jpg', size: '18 KB' },
  { url: 'https://picsum.photos/seed/law3/400/300', label: 'escritorio_03.jpg', size: '21 KB' },
  { url: 'https://picsum.photos/seed/law4/400/300', label: 'escritorio_04.jpg', size: '19 KB' },
  { url: 'https://picsum.photos/seed/law5/400/300', label: 'escritorio_05.jpg', size: '22 KB' },
  { url: 'https://picsum.photos/seed/law6/400/300', label: 'escritorio_06.jpg', size: '20 KB' },
];

export function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'tiles' | 'list'>('tiles');

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
            <span>🖼</span>
            <span>Nosso Escritório — Explorador Windows</span>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '2px' }}>
              {['_', '□', '✕'].map((b, i) => (
                <div key={i} style={{ width: '16px', height: '14px', backgroundColor: '#d4d0c8', border: '1px solid', borderTopColor: '#ffffff', borderLeftColor: '#ffffff', borderBottomColor: '#404040', borderRightColor: '#404040', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', color: '#000000', cursor: 'pointer' }}>
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Toolbar */}
          <div style={{ backgroundColor: '#d4d0c8', borderBottom: '1px solid #808080', padding: '3px 6px', display: 'flex', gap: '4px', alignItems: 'center' }}>
            {['Arquivo', 'Editar', 'Exibir', 'Favoritos', 'Ferramentas'].map((m) => (
              <button key={m} style={{ backgroundColor: 'transparent', border: 'none', fontSize: '11px', cursor: 'pointer', padding: '2px 6px', fontFamily: 'Tahoma, Arial, sans-serif', color: '#000000' }}>
                {m}
              </button>
            ))}
            <div style={{ flex: 1 }} />
            <button
              style={{ backgroundColor: '#d4d0c8', border: '2px solid', borderTopColor: viewMode === 'tiles' ? '#404040' : '#ffffff', borderLeftColor: viewMode === 'tiles' ? '#404040' : '#ffffff', borderBottomColor: viewMode === 'tiles' ? '#ffffff' : '#404040', borderRightColor: viewMode === 'tiles' ? '#ffffff' : '#404040', fontSize: '10px', padding: '1px 6px', cursor: 'pointer', fontFamily: 'Tahoma, Arial, sans-serif' }}
              onClick={() => setViewMode('tiles')}
            >
              ⊞ Miniaturas
            </button>
            <button
              style={{ backgroundColor: '#d4d0c8', border: '2px solid', borderTopColor: viewMode === 'list' ? '#404040' : '#ffffff', borderLeftColor: viewMode === 'list' ? '#404040' : '#ffffff', borderBottomColor: viewMode === 'list' ? '#ffffff' : '#404040', borderRightColor: viewMode === 'list' ? '#ffffff' : '#404040', fontSize: '10px', padding: '1px 6px', cursor: 'pointer', fontFamily: 'Tahoma, Arial, sans-serif' }}
              onClick={() => setViewMode('list')}
            >
              ≡ Lista
            </button>
          </div>

          {/* Address bar */}
          <div style={{ backgroundColor: '#d4d0c8', borderBottom: '1px solid #808080', padding: '2px 6px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px' }}>
            <span style={{ fontWeight: 'bold' }}>Endereço:</span>
            <div style={{ border: '2px solid', borderTopColor: '#404040', borderLeftColor: '#404040', borderBottomColor: '#ffffff', borderRightColor: '#ffffff', backgroundColor: '#ffffff', padding: '1px 6px', fontSize: '11px', flex: 1 }}>
              📁 C:\Suzart Advogados\Fotos do Escritório
            </div>
          </div>

          <div style={{ display: 'flex', backgroundColor: '#d4d0c8' }}>
            {/* Left panel */}
            <div
              style={{
                width: '140px',
                flexShrink: 0,
                borderRight: '2px solid',
                borderRightColor: '#808080',
                padding: '8px',
                fontSize: '11px',
              }}
            >
              <div style={{ fontWeight: 'bold', marginBottom: '6px', color: '#000080' }}>Tarefas</div>
              {['Ver como apresentação', 'Encomendar cópias', 'Imprimir fotos'].map((t) => (
                <div key={t} style={{ color: '#000080', textDecoration: 'underline', cursor: 'pointer', fontSize: '11px', marginBottom: '4px' }}>
                  {t}
                </div>
              ))}
              <hr style={{ borderTop: '1px solid #808080', borderBottom: '1px solid #ffffff', margin: '8px 0' }} />
              <div style={{ fontWeight: 'bold', marginBottom: '6px', color: '#000080' }}>Outros locais</div>
              {['Minhas Imagens', 'Meus Documentos'].map((p) => (
                <div key={p} style={{ color: '#000080', textDecoration: 'underline', cursor: 'pointer', fontSize: '11px', marginBottom: '4px' }}>
                  📁 {p}
                </div>
              ))}
            </div>

            {/* Main content */}
            <div style={{ flex: 1, padding: '8px', minHeight: '200px' }}>
              <div
                style={{
                  display: viewMode === 'tiles' ? 'grid' : 'flex',
                  gridTemplateColumns: viewMode === 'tiles' ? 'repeat(auto-fill, minmax(120px, 1fr))' : undefined,
                  flexDirection: viewMode === 'list' ? 'column' : undefined,
                  gap: '8px',
                }}
              >
                {GALLERY.map((img, i) => (
                  viewMode === 'tiles' ? (
                    <div
                      key={i}
                      onClick={() => setSelected(i === selected ? null : i)}
                      style={{
                        cursor: 'pointer',
                        padding: '4px',
                        backgroundColor: selected === i ? '#000080' : 'transparent',
                        border: selected === i ? '1px dotted #ffffff' : '1px dotted transparent',
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          border: '2px solid',
                          borderTopColor: '#404040',
                          borderLeftColor: '#404040',
                          borderBottomColor: '#ffffff',
                          borderRightColor: '#ffffff',
                          overflow: 'hidden',
                          marginBottom: '4px',
                          height: '80px',
                        }}
                      >
                        <img
                          src={img.url}
                          alt={img.label}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(30%)' }}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div style={{ fontSize: '10px', color: selected === i ? '#ffffff' : '#000000', wordBreak: 'break-all' }}>
                        {img.label}
                      </div>
                    </div>
                  ) : (
                    <div
                      key={i}
                      onClick={() => setSelected(i === selected ? null : i)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '2px 4px',
                        backgroundColor: selected === i ? '#000080' : 'transparent',
                        color: selected === i ? '#ffffff' : '#000000',
                        cursor: 'pointer',
                        fontSize: '11px',
                      }}
                    >
                      <span>🖼</span>
                      <span style={{ flex: 1 }}>{img.label}</span>
                      <span style={{ fontSize: '10px', color: selected === i ? '#c0c0c0' : '#808080' }}>{img.size}</span>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div style={{ backgroundColor: '#d4d0c8', borderTop: '1px solid #808080', padding: '2px 4px', fontSize: '10px', display: 'flex', gap: '4px' }}>
            <div style={{ border: '1px solid', borderTopColor: '#808080', borderLeftColor: '#808080', borderBottomColor: '#ffffff', borderRightColor: '#ffffff', padding: '0 6px' }}>
              {selected !== null ? `1 objeto(s) selecionado(s)` : `${GALLERY.length} objeto(s)`}
            </div>
            {selected !== null && (
              <div style={{ border: '1px solid', borderTopColor: '#808080', borderLeftColor: '#808080', borderBottomColor: '#ffffff', borderRightColor: '#ffffff', padding: '0 6px' }}>
                Tamanho: {GALLERY[selected].size}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
