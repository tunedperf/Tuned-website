
'use client';
import React from "react";

export default function PartnerLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ background: '#fff', color: '#232526', borderRadius: 8, padding: '0.7rem 1.3rem', fontWeight: 600, fontSize: '1.05rem', boxShadow: '0 1px 8px rgba(0,0,0,0.06)', textDecoration: 'none', transition: 'background 0.2s' }}>{children}</a>
  );
}
