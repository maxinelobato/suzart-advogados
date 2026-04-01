import React, { useState, useEffect } from 'react';

const WHATSAPP_LINK = `https://wa.me/5511950391906?text=Olá! Vi o site da Suzart Advogados e gostaria de saber mais.`;

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicos', href: '#servicos' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Depoimentos', href: '#depoimentos' },
  { name: 'FAQ', href: '#faq' },
];

export function Footer() {
  const [time, setTime] = useState('');
  const [activeTask, setActiveTask] = useState('Suzart Advogados');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, '0');
      const m = now.getMinutes().toString().padStart(2, '0');
      setTime(`${h}:${m}`);
    };
    update();
    const interval = setInterval(update, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer style={{ fontFamily: 'Tahoma, Arial, sans-serif', fontSize: '11px' }}>
      {/* Main footer content */}
      <div
        style={{
          backgroundColor: '#000080',
          color: '#ffffff',
          padding: '20px 16px',
          borderTop: '2px solid #ffffff',
        }}
      >
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <table width="100%" cellSpacing="16" cellPadding="0">
            <tbody>
              <tr>
                <td width="33%" valign="top">
                  <div style={{ fontSize: '13px', fontWeight: 'bold', fontFamily: 'Times New Roman, serif', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>⚖</span>
                    <span>Suzart Advogados</span>
                  </div>
                  <hr style={{ borderTop: '1px solid #ffffff40', borderBottom: 'none', margin: '6px 0' }} />
                  <p style={{ fontSize: '11px', color: '#c0c0c0', lineHeight: '1.6', marginBottom: '12px' }}>
                    Justiça e compromisso com seus direitos em São Paulo. Advocacia especializada com foco em resultados reais.
                  </p>
                  <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                    {[
                      { label: 'Instagram', icon: '📷' },
                      { label: 'Facebook', icon: '📘' },
                      { label: 'LinkedIn', icon: '💼' },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href="#"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '3px',
                          padding: '2px 8px',
                          backgroundColor: '#d4d0c8',
                          color: '#000000',
                          border: '2px solid',
                          borderTopColor: '#ffffff',
                          borderLeftColor: '#ffffff',
                          borderBottomColor: '#404040',
                          borderRightColor: '#404040',
                          fontSize: '10px',
                          textDecoration: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        {s.icon} {s.label}
                      </a>
                    ))}
                  </div>
                </td>

                <td width="33%" valign="top">
                  <div style={{ fontWeight: 'bold', fontSize: '11px', marginBottom: '6px', color: '#ffffff' }}>
                    Links Rápidos
                  </div>
                  <hr style={{ borderTop: '1px solid #ffffff40', borderBottom: 'none', margin: '6px 0' }} />
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {navLinks.map((link) => (
                      <li key={link.name} style={{ marginBottom: '4px' }}>
                        <a
                          href={link.href}
                          style={{
                            color: '#c0c0ff',
                            textDecoration: 'underline',
                            fontSize: '11px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                          }}
                        >
                          <span style={{ fontSize: '9px' }}>▶</span>
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </td>

                <td width="34%" valign="top">
                  <div style={{ fontWeight: 'bold', fontSize: '11px', marginBottom: '6px', color: '#ffffff' }}>
                    Contato
                  </div>
                  <hr style={{ borderTop: '1px solid #ffffff40', borderBottom: 'none', margin: '6px 0' }} />
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                      { icon: '📍', text: 'Av. Amador Bueno da Veiga, 1232 - Penha de França, São Paulo - SP' },
                      { icon: '📞', text: '(11) 95039-1906' },
                      { icon: '✉', text: 'suporte@suzartadvogados.com.br' },
                    ].map((item, i) => (
                      <li key={i} style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                        <span style={{ flexShrink: 0 }}>{item.icon}</span>
                        <span style={{ fontSize: '11px', color: '#c0c0c0', lineHeight: '1.5' }}>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <hr style={{ borderTop: '1px solid #ffffff30', borderBottom: 'none', margin: '12px 0 8px' }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
            <span style={{ fontSize: '10px', color: '#808080' }}>
              © 2025 Suzart Advogados. Todos os direitos reservados.
            </span>
            <div style={{ display: 'flex', gap: '12px' }}>
              {['Política de Privacidade', 'Termos de Uso'].map((link) => (
                <a key={link} href="#" style={{ color: '#c0c0c0', fontSize: '10px', textDecoration: 'underline' }}>
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Best viewed banner */}
          <div style={{ textAlign: 'center', marginTop: '12px' }}>
            <div
              style={{
                display: 'inline-block',
                border: '2px solid',
                borderTopColor: '#ffffff',
                borderLeftColor: '#ffffff',
                borderBottomColor: '#404040',
                borderRightColor: '#404040',
                backgroundColor: '#d4d0c8',
                color: '#000000',
                fontSize: '9px',
                padding: '2px 10px',
              }}
            >
              ✓ Melhor visualizado com Internet Explorer 6.0 em 800×600 pixels
            </div>
          </div>
        </div>
      </div>

      {/* Windows Taskbar */}
      <div
        style={{
          position: 'sticky',
          bottom: 0,
          backgroundColor: '#d4d0c8',
          borderTop: '2px solid #ffffff',
          padding: '3px 4px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          zIndex: 9990,
        }}
      >
        {/* Start Button */}
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: '#d4d0c8',
            border: '2px solid',
            borderTopColor: '#ffffff',
            borderLeftColor: '#ffffff',
            borderBottomColor: '#404040',
            borderRightColor: '#404040',
            fontFamily: 'Tahoma, Arial, sans-serif',
            fontSize: '11px',
            fontWeight: 'bold',
            padding: '2px 8px',
            cursor: 'pointer',
            color: '#000000',
          }}
        >
          <span>🪟</span>
          <span>Iniciar</span>
        </button>

        {/* Separator */}
        <div
          style={{
            width: '2px',
            height: '26px',
            borderLeft: '1px solid #808080',
            borderRight: '1px solid #ffffff',
            margin: '0 2px',
          }}
        />

        {/* Open "windows" / tasks */}
        {['Suzart Advogados', 'WhatsApp', 'Mapa'].map((task) => (
          <button
            key={task}
            onClick={() => setActiveTask(task)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              backgroundColor: '#d4d0c8',
              border: '2px solid',
              borderTopColor: activeTask === task ? '#404040' : '#ffffff',
              borderLeftColor: activeTask === task ? '#404040' : '#ffffff',
              borderBottomColor: activeTask === task ? '#ffffff' : '#404040',
              borderRightColor: activeTask === task ? '#ffffff' : '#404040',
              fontFamily: 'Tahoma, Arial, sans-serif',
              fontSize: '10px',
              padding: '2px 8px',
              cursor: 'pointer',
              color: '#000000',
              minWidth: '120px',
            }}
          >
            <span>⊡</span>
            <span>{task}</span>
          </button>
        ))}

        <div style={{ flex: 1 }} />

        {/* System tray */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            border: '2px solid',
            borderTopColor: '#808080',
            borderLeftColor: '#808080',
            borderBottomColor: '#ffffff',
            borderRightColor: '#ffffff',
            padding: '2px 8px',
            fontSize: '10px',
            backgroundColor: '#d4d0c8',
          }}
        >
          <span title="Volume">🔊</span>
          <span title="Rede">🌐</span>
          <span title="WhatsApp" style={{ cursor: 'pointer' }}>
            <a href={WHATSAPP_LINK} style={{ textDecoration: 'none' }}>📱</a>
          </span>
          <span
            style={{
              borderLeft: '1px solid #808080',
              paddingLeft: '6px',
              marginLeft: '2px',
              fontFamily: 'Tahoma, Arial, sans-serif',
              fontSize: '11px',
              fontWeight: 'bold',
            }}
          >
            {time}
          </span>
        </div>
      </div>
    </footer>
  );
}
