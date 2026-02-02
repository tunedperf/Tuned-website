
'use client';
import React from "react";

export default function ServiceCard({ title, icon, desc }: { title: string; icon: React.ReactNode; desc: string }) {
  return (
    <div
      style={{
        background: 'transparent',
        borderRadius: 16,
        boxShadow: '0 3px 18px rgba(0,0,0,0.45)',
        padding: '1.2rem 1rem',
        textAlign: 'center',
        minHeight: 150,
        width: 220,
        minWidth: 220,
        boxSizing: 'border-box',
        transition: 'transform 0.16s, box-shadow 0.16s',
        cursor: 'pointer',
        border: '1px solid rgba(255,255,255,0.035)',
      }}
      onMouseOver={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px) scale(1.02)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 36px rgba(255,115,0,0.12)';
      }}
      onMouseOut={e => {
        (e.currentTarget as HTMLDivElement).style.transform = '';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 3px 18px rgba(0,0,0,0.45)';
      }}
    >
      <div style={{ fontSize: '2rem', marginBottom: '0.9rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{icon}</div>
      <h3 style={{ fontSize: '1.02rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fff' }}>{title}</h3>
      <p style={{ color: '#ddd', fontSize: '0.98rem', lineHeight: 1.45 }}>{desc}</p>
    </div>
  );
}
