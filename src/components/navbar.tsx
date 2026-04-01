import { Scale } from 'lucide-react';
import React, { useState } from 'react';

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
  ];

  const WHATSAPP_NUMBER = '5511950391906';
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vi o site da Suzart Advogados e gostaria de saber mais.`;

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        fontFamily: 'Tahoma, Arial, sans-serif',
        fontSize: '11px',
      }}
    >
      {/* Ticker strip */}
      <div
        style={{
          backgroundColor: '#000080',
          color: '#ffffff',
          fontSize: '11px',
          padding: '2px 8px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'Courier New, monospace',
        }}
      >
        <span style={{ color: '#ffff00', fontWeight: 'bold', marginRight: '8px' }}>
          *** NOVIDADE ***
        </span>
        <marquee scrollamount="3" style={{ flex: 1 }}>
          Bem-vindo ao Suzart Advogados! &nbsp;&nbsp;&nbsp; Consulta gratuita disponível! &nbsp;&nbsp;&nbsp; Atendimento Online e Presencial &nbsp;&nbsp;&nbsp; Tel: (11) 95039-1906 &nbsp;&nbsp;&nbsp; Segunda a Sexta: 09h às 18h &nbsp;&nbsp;&nbsp; Av. Amador Bueno da Veiga, 1232 - Penha de França, SP &nbsp;&nbsp;&nbsp; 5 estrelas no Google! (159 avaliações) &nbsp;&nbsp;&nbsp;
        </marquee>
        <span style={{ color: '#ffff00', fontWeight: 'bold', marginLeft: '8px' }}>
          *** NOVIDADE ***
        </span>
      </div>

      {/* Main toolbar / window chrome */}
      <div
        style={{
          backgroundColor: '#d4d0c8',
          borderBottom: '2px solid #404040',
          borderTop: '2px solid #ffffff',
        }}
      >
        {/* Title bar row */}
        <div
          style={{
            background: 'linear-gradient(to right, #000080, #1084d0)',
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: '11px',
            padding: '3px 6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            userSelect: 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {/* Small icon */}
            <div
              style={{
                width: '14px',
                height: '14px',
                background: '#c0c0c0',
                border: '1px solid #ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '8px',
                color: '#000080',
                fontWeight: 'bold',
              }}
            >
              ⚖
            </div>
            <span>Suzart Advogados - Consultório Jurídico - Microsoft Internet Explorer</span>
          </div>
          <div style={{ display: 'flex', gap: '2px' }}>
            {['_', '□', '✕'].map((btn, i) => (
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
                  lineHeight: 1,
                }}
              >
                {btn}
              </div>
            ))}
          </div>
        </div>

        {/* Menu bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            backgroundColor: '#d4d0c8',
            padding: '2px 4px',
            borderBottom: '1px solid #808080',
          }}
        >
          {['Arquivo', 'Editar', 'Exibir', 'Favoritos', 'Ferramentas', 'Ajuda'].map((menu) => (
            <button
              key={menu}
              style={{
                padding: '2px 6px',
                backgroundColor: activeMenu === menu ? '#000080' : 'transparent',
                color: activeMenu === menu ? '#ffffff' : '#000000',
                border: 'none',
                cursor: 'pointer',
                fontSize: '11px',
                fontFamily: 'Tahoma, Arial, sans-serif',
              }}
              onMouseEnter={() => setActiveMenu(menu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {menu}
            </button>
          ))}
        </div>

        {/* Address bar row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '3px 6px',
            backgroundColor: '#d4d0c8',
            borderBottom: '1px solid #808080',
          }}
        >
          {/* Back / Forward / Stop / Refresh icons */}
          {['◄', '►', '✕', '↺'].map((icon, i) => (
            <div
              key={i}
              style={{
                width: '22px',
                height: '22px',
                backgroundColor: '#d4d0c8',
                border: '2px solid',
                borderTopColor: '#ffffff',
                borderLeftColor: '#ffffff',
                borderBottomColor: '#404040',
                borderRightColor: '#404040',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '9px',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              {icon}
            </div>
          ))}
          <span
            style={{
              fontSize: '11px',
              fontWeight: 'bold',
              color: '#000000',
              marginLeft: '4px',
              flexShrink: 0,
            }}
          >
            Endereço:
          </span>
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              border: '2px solid',
              borderTopColor: '#404040',
              borderLeftColor: '#404040',
              borderBottomColor: '#ffffff',
              borderRightColor: '#ffffff',
              padding: '1px 4px',
              fontSize: '11px',
              gap: '4px',
            }}
          >
            <span style={{ color: '#808080' }}>🌐</span>
            <span>http://www.suzartadvogados.com.br/index.htm</span>
          </div>
          <div
            style={{
              width: '22px',
              height: '22px',
              backgroundColor: '#d4d0c8',
              border: '2px solid',
              borderTopColor: '#ffffff',
              borderLeftColor: '#ffffff',
              borderBottomColor: '#404040',
              borderRightColor: '#404040',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '9px',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            ▶
          </div>
        </div>

        {/* Links/nav bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#d4d0c8',
            padding: '2px 6px',
            gap: '2px',
            flexWrap: 'wrap',
            borderBottom: '1px solid #808080',
          }}
        >
          <span style={{ fontSize: '11px', color: '#000000', marginRight: '4px', fontWeight: 'bold' }}>
            Links:
          </span>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '2px 8px',
                backgroundColor: '#d4d0c8',
                border: '2px solid',
                borderTopColor: '#ffffff',
                borderLeftColor: '#ffffff',
                borderBottomColor: '#404040',
                borderRightColor: '#404040',
                fontSize: '11px',
                color: '#000000',
                textDecoration: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                const t = e.currentTarget;
                t.style.borderTopColor = '#404040';
                t.style.borderLeftColor = '#404040';
                t.style.borderBottomColor = '#ffffff';
                t.style.borderRightColor = '#ffffff';
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget;
                t.style.borderTopColor = '#ffffff';
                t.style.borderLeftColor = '#ffffff';
                t.style.borderBottomColor = '#404040';
                t.style.borderRightColor = '#404040';
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ flex: 1 }} />
          <a
            href={WHATSAPP_LINK}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '2px 10px',
              backgroundColor: '#000080',
              color: '#ffffff',
              border: '2px solid',
              borderTopColor: '#ffffff',
              borderLeftColor: '#ffffff',
              borderBottomColor: '#404040',
              borderRightColor: '#404040',
              fontSize: '11px',
              fontWeight: 'bold',
              textDecoration: 'none',
              cursor: 'pointer',
              gap: '4px',
            }}
          >
            📞 Consulta Gratuita
          </a>
        </div>
      </div>
    </nav>
  );
}
