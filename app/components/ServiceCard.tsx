
'use client';
import React from "react";

export default function ServiceCard({ title, icon, desc }: { title: string; icon: React.ReactNode; desc: string }) {
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 22,
        boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
        padding: '2.5rem 1.7rem',
        textAlign: 'center',
        minHeight: 220,
        transition: 'transform 0.18s, box-shadow 0.18s',
        cursor: 'pointer',
        border: '1.5px solid #eee',
      }}
      onMouseOver={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px) scale(1.03)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 36px rgba(255,115,0,0.13)';
      }}
      onMouseOut={e => {
        (e.currentTarget as HTMLDivElement).style.transform = '';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 32px rgba(0,0,0,0.10)';
      }}
    >
      <div style={{ fontSize: '2.8rem', marginBottom: '1.2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{icon}</div>
      <h3 style={{ fontSize: '1.22rem', fontWeight: 700, marginBottom: '0.7rem', color: '#181818' }}>{title}</h3>
      <p style={{ color: '#444', fontSize: '1.08rem', lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}
