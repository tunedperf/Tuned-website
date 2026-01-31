import React from "react";

export default function Home() {
	return (
		<main style={{ fontFamily: 'sans-serif', background: '#f8f9fa', color: '#222' }}>
			{/* Hero Section */}
			<section style={{ padding: '4rem 1rem', textAlign: 'center', background: '#222', color: '#fff' }}>
				<h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Tuned Performance</h1>
				<p style={{ fontSize: '1.2rem', maxWidth: 600, margin: '0 auto' }}>
					High Performance Auto Tuning & Servicing in Brisbane
				</p>
			</section>

			{/* Services Section */}
			<section style={{ padding: '3rem 1rem', maxWidth: 900, margin: '0 auto' }}>
				<h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Services</h2>
				<ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '2rem' }}>
					<li>
						<h3>Custom Wiring Looms</h3>
						<p>In-house, built-to-suit performance wiring looms using quality components and cabling.</p>
					</li>
					<li>
						<h3>Engine Packages</h3>
						<p>Specialising in performance GTR RB26 engines, from freshen-ups to big HP builds.</p>
					</li>
					<li>
						<h3>Bolt-On Upgrades</h3>
						<p>Value-for-money performance upgrades, sourced and installed professionally.</p>
					</li>
					<li>
						<h3>General Servicing & Repairs</h3>
						<p>Regular servicing and repairs to keep your performance car running reliably.</p>
					</li>
					<li>
						<h3>EFI Dyno Tuning</h3>
						<p>State-of-the-art all-wheel-drive dyno tuning for all popular ECUs.</p>
					</li>
					<li>
						<h3>Fabrication</h3>
						<p>Custom exhausts, intercooler piping, and turbo kit fabrication in-house.</p>
					</li>
				</ul>
			</section>

			{/* Get a Quote Section */}
			<section style={{ padding: '2.5rem 1rem', background: '#e9ecef', textAlign: 'center' }}>
				<h2>Get a Quote</h2>
				<p>Contact us for affordable rates on all work. Located in South East Brisbane.</p>
				<a href="#contact" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.75rem 2rem', background: '#222', color: '#fff', borderRadius: 6, textDecoration: 'none', fontWeight: 600 }}>Contact Us</a>
			</section>

			{/* Contact Section */}
			<section id="contact" style={{ padding: '3rem 1rem', maxWidth: 700, margin: '0 auto' }}>
				<h2>Contact Us</h2>
				<p><strong>Phone:</strong> <a href="tel:0738651327">(07) 3865 1327</a></p>
				<p><strong>Email:</strong> <a href="mailto:info@tuned-performance.com.au">info@tuned-performance.com.au</a></p>
				<p><strong>Address:</strong> 2/17 Robinson Rd East, Virginia, 4014 QLD</p>
			</section>

			{/* Partners Section */}
			<section style={{ padding: '2rem 1rem', background: '#f1f3f5', textAlign: 'center' }}>
				<h2>Our Partners</h2>
				<p>We work with top brands in the performance industry.</p>
				<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginTop: '1.5rem' }}>
					<a href="http://arp-bolts.com/" target="_blank" rel="noopener noreferrer">ARP Bolts</a>
					<a href="http://www.dyno.com.au/" target="_blank" rel="noopener noreferrer">Dyno</a>
					<a href="http://www.turbobygarrett.com/turbobygarrett/" target="_blank" rel="noopener noreferrer">Garrett</a>
					<a href="http://injectordynamics.com/" target="_blank" rel="noopener noreferrer">Injector Dynamics</a>
					<a href="http://www.nistune.com/" target="_blank" rel="noopener noreferrer">Nistune</a>
					<a href="http://www.nittotire.com/" target="_blank" rel="noopener noreferrer">Nitto Tire</a>
					<a href="http://www.penriteoil.com.au/" target="_blank" rel="noopener noreferrer">Penrite Oil</a>
					<a href="http://www.precisionturbo.net/" target="_blank" rel="noopener noreferrer">Precision Turbo</a>
					<a href="http://www.speedflow.com.au/" target="_blank" rel="noopener noreferrer">Speedflow</a>
					<a href="http://www.tomeiusa.com/" target="_blank" rel="noopener noreferrer">Tomei</a>
					<a href="http://www.turbosmart.com.au/" target="_blank" rel="noopener noreferrer">Turbosmart</a>
					<a href="http://www.vi-pec.com/" target="_blank" rel="noopener noreferrer">Vi-PEC</a>
				</div>
			</section>
		</main>
	);
}
