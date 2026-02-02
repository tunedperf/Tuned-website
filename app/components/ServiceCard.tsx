
'use client';
import React from "react";

export default function ServiceCard({ title, icon, desc }: { title: string; icon: React.ReactNode; desc: string }) {
  return (
    <div
      style={{
        background: 'transparent',
        borderRadius: 12,
        boxShadow: '0 2px 10px rgba(0,0,0,0.60)',
        padding: '0.45rem 0.5rem',
        textAlign: 'center',
        height: 'auto',
        width: 170,
        minWidth: 150,
        boxSizing: 'border-box',
        transition: 'transform 0.12s, box-shadow 0.12s',
        cursor: 'pointer',
        border: '0.5px solid rgba(255,255,255,0.05)',
      }}
      onMouseOver={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px) scale(1.015)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 6px 28px rgba(255,115,0,0.10)';
      }}
      onMouseOut={e => {
        (e.currentTarget as HTMLDivElement).style.transform = '';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.55)';
      }}
    >
      <div style={{ fontSize: '1.4rem', marginBottom: '0.45rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{icon}</div>
      <h3 style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.25rem', color: '#fff' }}>{title}</h3>
      <p style={{ color: '#ddd', fontSize: '0.82rem', lineHeight: 1.15 }}>{desc}</p>
    </div>
  );
}
