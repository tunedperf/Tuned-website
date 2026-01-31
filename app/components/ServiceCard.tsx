
'use client';
import React from "react";

export default function ServiceCard({ title, icon, desc }: { title: string; icon: string; desc: string }) {
  return (
    <div style={{ background: '#fff', borderRadius: 14, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', padding: '2.2rem 1.5rem', textAlign: 'center', transition: 'transform 0.2s', minHeight: 220 }}>
      <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{icon}</div>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.7rem' }}>{title}</h3>
      <p style={{ color: '#444', fontSize: '1.05rem' }}>{desc}</p>
    </div>
  );
}
