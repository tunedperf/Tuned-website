import React from "react";
import ServiceCard from "../app/components/ServiceCard";
import PartnerLink from "../app/components/PartnerLink";

export default function Home() {
	return (
		<main style={{ fontFamily: 'Inter, Arial, sans-serif', background: '#f7f8fa', color: '#181818', minHeight: '100vh' }}>
			{/* Modern Hero Section */}
			<section style={{
				minHeight: '60vh',
				background: 'linear-gradient(120deg, #232526 0%, #414345 100%)',
				color: '#fff',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				padding: '5rem 1rem 3rem 1rem',
				position: 'relative',
				overflow: 'hidden',
			}}>
				<img src="https://www.tuned-performance.com.au/images/banner-n.png" alt="Tuned Performance Banner" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18, zIndex: 0 }} />
				<div style={{ position: 'relative', zIndex: 1 }}>
					<h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-1px' }}>Tuned Performance</h1>
					<p style={{ fontSize: '1.35rem', maxWidth: 650, margin: '0 auto 2rem auto', fontWeight: 500 }}>
						High Performance Auto Tuning & Servicing in Brisbane
					</p>
					<a href="#contact" style={{ padding: '0.9rem 2.5rem', background: '#e63946', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', boxShadow: '0 2px 12px rgba(230,57,70,0.15)' }}>Get a Quote</a>
				</div>
			</section>

			{/* Modern Services Section */}
			<section style={{ padding: '4rem 1rem 3rem 1rem', maxWidth: 1200, margin: '0 auto' }}>
				<h2 style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '2.2rem', fontWeight: 700 }}>Our Services</h2>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '2.5rem' }}>
					<ServiceCard title="Custom Wiring Looms" icon="🧰" desc="In-house, built-to-suit performance wiring looms using quality components and cabling." />
					<ServiceCard title="Engine Packages" icon="🏎️" desc="Specialising in performance GTR RB26 engines, from freshen-ups to big HP builds." />
					<ServiceCard title="Bolt-On Upgrades" icon="🔩" desc="Value-for-money performance upgrades, sourced and installed professionally." />
					<ServiceCard title="General Servicing & Repairs" icon="🛠️" desc="Regular servicing and repairs to keep your performance car running reliably." />
					<ServiceCard title="EFI Dyno Tuning" icon="📊" desc="State-of-the-art all-wheel-drive dyno tuning for all popular ECUs." />
					<ServiceCard title="Fabrication" icon="⚙️" desc="Custom exhausts, intercooler piping, and turbo kit fabrication in-house." />
				</div>
			</section>

			{/* Modern Contact Section */}
			<section id="contact" style={{ padding: '3.5rem 1rem 2.5rem 1rem', background: '#fff', maxWidth: 800, margin: '0 auto', borderRadius: 16, boxShadow: '0 2px 24px rgba(0,0,0,0.07)' }}>
				<h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Contact Us</h2>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.7rem', fontSize: '1.1rem' }}>
					<p><strong>Phone:</strong> <a href="tel:0738651327" style={{ color: '#e63946', textDecoration: 'none' }}>(07) 3865 1327</a></p>
					<p><strong>Email:</strong> <a href="mailto:info@tuned-performance.com.au" style={{ color: '#e63946', textDecoration: 'none' }}>info@tuned-performance.com.au</a></p>
					<p><strong>Address:</strong> 2/17 Robinson Rd East, Virginia, 4014 QLD</p>
				</div>
			</section>

			{/* Modern Partners Section */}
			<section style={{ padding: '3rem 1rem 2rem 1rem', background: '#f1f3f5', textAlign: 'center', marginTop: '3rem' }}>
				<h2 style={{ fontWeight: 700, fontSize: '1.7rem', marginBottom: '1.2rem' }}>Our Partners</h2>
				<p style={{ color: '#444', marginBottom: '2rem' }}>We work with top brands in the performance industry.</p>
				<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginTop: '1.5rem' }}>
					<PartnerLink href="http://arp-bolts.com/">ARP Bolts</PartnerLink>
					<PartnerLink href="http://www.dyno.com.au/">Dyno</PartnerLink>
					<PartnerLink href="http://www.turbobygarrett.com/turbobygarrett/">Garrett</PartnerLink>
					<PartnerLink href="http://injectordynamics.com/">Injector Dynamics</PartnerLink>
					<PartnerLink href="http://www.nistune.com/">Nistune</PartnerLink>
					<PartnerLink href="http://www.nittotire.com/">Nitto Tire</PartnerLink>
					<PartnerLink href="http://www.penriteoil.com.au/">Penrite Oil</PartnerLink>
					<PartnerLink href="http://www.precisionturbo.net/">Precision Turbo</PartnerLink>
					<PartnerLink href="http://www.speedflow.com.au/">Speedflow</PartnerLink>
					<PartnerLink href="http://www.tomeiusa.com/">Tomei</PartnerLink>
					<PartnerLink href="http://www.turbosmart.com.au/">Turbosmart</PartnerLink>
					<PartnerLink href="http://www.vi-pec.com/">Vi-PEC</PartnerLink>
				</div>
			</section>

			{/* Modern Footer */}
			<footer style={{ background: '#232526', color: '#fff', textAlign: 'center', padding: '2rem 1rem 1rem 1rem', marginTop: '2rem', fontSize: '1rem', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
				<div style={{ marginBottom: '0.7rem' }}>
					<a href="https://www.facebook.com/tuned.performance.aus" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 0.7rem', fontSize: '1.3rem', textDecoration: 'none' }}>Facebook</a>
					<a href="https://plus.google.com/107163551575357959413#104093126604718687409/about" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 0.7rem', fontSize: '1.3rem', textDecoration: 'none' }}>Google+</a>
				</div>
				<div>© {new Date().getFullYear()} Tuned Performance. Website by <a href="http://www.clickdesign.com.au/" target="_blank" rel="noopener noreferrer" style={{ color: '#e63946', textDecoration: 'none' }}>Another Click Design</a></div>
			</footer>

		</main>
	);
}
