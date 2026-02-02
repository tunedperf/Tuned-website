
import React from "react";
import ServiceCard from "../app/components/ServiceCard";
import PartnerLink from "../app/components/PartnerLink";

export default function Home() {
	return (
		<main style={{ fontFamily: 'Inter, Arial, sans-serif', background: '#181818', color: '#fff', minHeight: '100vh' }}>
			{/* Top Bar */}
			<div style={{ background: '#000', color: '#fff', padding: '0.5rem 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '1rem', fontWeight: 500, letterSpacing: '0.5px', borderBottom: '2px solid #222' }}>
				   <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', marginLeft: '2rem' }}>
					   <span>📞 (07) 3865 1327</span>
					   <span>✉️ info@tuned-performance.com.au</span>
					   <span>📍 2/17 Robinson Rd East, Virginia, 4014 QLD</span>
					   <span>🕒 Mon - Fri: 8:00am - 5:00pm</span>
				   </div>
				<div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginRight: '2rem' }}>
					<a href="#contact" style={{ background: '#ff7300', color: '#fff', padding: '0.6rem 1.3rem', borderRadius: 5, fontWeight: 700, textDecoration: 'none', marginRight: '1.2rem', boxShadow: '0 2px 8px rgba(255,115,0,0.12)' }}>GET A QUOTE!</a>
					<a href="#" style={{ color: '#ff7300', fontSize: '1.2rem' }}>f</a>
					<a href="#" style={{ color: '#ff7300', fontSize: '1.2rem' }}>G+</a>
					<a href="#" style={{ color: '#ff7300', fontSize: '1.2rem' }}>🟠</a>
					<a href="#" style={{ color: '#ff7300', fontSize: '1.2rem' }}>▶️</a>
				</div>
			</div>

			{/* Hero Section */}
			<section style={{
				minHeight: '70vh',
				position: 'relative',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				overflow: 'hidden',
			}}>
				<video
					autoPlay
					loop
					muted
					playsInline
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						zIndex: 0,
						opacity: 0.65,
					}}
				>
					<source src="/hero.mp4" type="video/mp4" />
				</video>
				<div style={{ position: 'relative', zIndex: 1 }}>
					<h1 style={{ fontSize: '3.2rem', fontWeight: 900, marginBottom: '1.2rem', letterSpacing: '-1px', color: '#fff', textShadow: '0 2px 16px #000' }}>Tuned Performance</h1>
					<p style={{ fontSize: '1.4rem', maxWidth: 700, margin: '0 auto 2.2rem auto', fontWeight: 500, color: '#ff7300', textShadow: '0 2px 8px #000' }}>
						High Performance Auto Tuning & Servicing in Brisbane
					</p>
					<a href="#contact" style={{ padding: '1rem 2.7rem', background: '#ff7300', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: '1.2rem', textDecoration: 'none', boxShadow: '0 2px 12px rgba(255,115,0,0.18)' }}>Get a Quote</a>
				</div>
			</section>

			{/* Modern Services Section */}
						{/* Services Section */}
						<section style={{ padding: '4rem 1rem 3rem 1rem', maxWidth: 1200, margin: '0 auto' }}>
							<h2 style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '2.2rem', fontWeight: 700, color: '#ff7300', letterSpacing: '1px' }}>Our Services</h2>
							<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '2.5rem' }}>
								<ServiceCard
									title="Custom Wiring Looms"
									icon={<svg width="40" height="40" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#ff7300"/><path d="M7 17v-2a2 2 0 012-2h6a2 2 0 012 2v2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="7" y="7" width="10" height="6" rx="2" fill="#fff"/></svg>}
									desc="In-house, built-to-suit performance wiring looms using quality components and cabling."
								/>
								<ServiceCard
									title="Engine Packages"
									icon={<svg width="40" height="40" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#ff7300"/><path d="M7 17l5-5 5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="9" r="2" fill="#fff"/></svg>}
									desc="Specialising in performance GTR RB26 engines, from freshen-ups to big HP builds."
								/>
								<ServiceCard
									title="Bolt-On Upgrades"
									icon={<svg width="40" height="40" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#ff7300"/><path d="M8 16l8-8M8 8h8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
									desc="Value-for-money performance upgrades, sourced and installed professionally."
								/>
								<ServiceCard
									title="General Servicing & Repairs"
									icon={<svg width="40" height="40" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#ff7300"/><path d="M12 8v4l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
									desc="Regular servicing and repairs to keep your performance car running reliably."
								/>
								<ServiceCard
									title="EFI Dyno Tuning"
									icon={<svg width="40" height="40" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#ff7300"/><path d="M4 16h16M4 12h16M4 8h16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>}
									desc="State-of-the-art all-wheel-drive dyno tuning for all popular ECUs."
								/>
								<ServiceCard
									title="Fabrication"
									icon={<svg width="40" height="40" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#ff7300"/><path d="M12 6v6l4 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
									desc="Custom exhausts, intercooler piping, and turbo kit fabrication in-house."
								/>
										{/* Social Media Feed */}
                                        <section style={{ background: '#222', padding: '2rem 1rem', margin: '0 auto', maxWidth: 700, borderRadius: 16, marginTop: '3rem', textAlign: 'center' }}>
                                            <h2 style={{ color: '#ff7300', fontWeight: 700, fontSize: '1.7rem', marginBottom: '1rem' }}>Follow Us on Facebook</h2>
                                            <div style={{ width: '100%', maxWidth: 700, margin: '0 auto' }}>
                                                <iframe
                                                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftuned.performance.aus&tabs=timeline&width=700&height=420&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                                                    width="100%"
                                                    height="420"
                                                    style={{ border: 'none', borderRadius: 12, overflow: 'hidden', background: '#181818' }}
                                                    scrolling="no"
                                                    frameBorder={0}
                                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                                    title="Facebook Feed"
                                                ></iframe>
                                            </div>                                        </section>
										{/* Contact Form */}
										<section style={{ background: '#fff', color: '#181818', padding: '3rem 1rem', margin: '3rem auto 0 auto', maxWidth: 600, borderRadius: 16, boxShadow: '0 2px 24px rgba(0,0,0,0.10)' }}>
											<h2 style={{ color: '#ff7300', fontWeight: 700, fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>Contact Form</h2>
											<form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
												<input type="text" placeholder="Your Name" required style={{ padding: '0.9rem', borderRadius: 8, border: '1px solid #ccc', fontSize: '1.1rem' }} />
												<input type="email" placeholder="Your Email" required style={{ padding: '0.9rem', borderRadius: 8, border: '1px solid #ccc', fontSize: '1.1rem' }} />
												<textarea placeholder="Your Message" required rows={5} style={{ padding: '0.9rem', borderRadius: 8, border: '1px solid #ccc', fontSize: '1.1rem' }} />
												<button type="submit" style={{ background: '#ff7300', color: '#fff', padding: '1rem', borderRadius: 8, fontWeight: 700, fontSize: '1.1rem', border: 'none', cursor: 'pointer', marginTop: '0.5rem' }}>Send Message</button>
											</form>
										</section>
							</div>
						</section>

			{/* Modern Contact Section */}
						{/* Contact Section */}
						<section id="contact" style={{ padding: '3.5rem 1rem 2.5rem 1rem', background: '#222', maxWidth: 800, margin: '0 auto', borderRadius: 16, boxShadow: '0 2px 24px rgba(0,0,0,0.12)' }}>
							<h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#ff7300' }}>Contact Us</h2>
							<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.7rem', fontSize: '1.1rem' }}>
								<p><strong>Phone:</strong> <a href="tel:0738651327" style={{ color: '#ff7300', textDecoration: 'none' }}>(07) 3865 1327</a></p>
								<p><strong>Email:</strong> <a href="mailto:info@tuned-performance.com.au" style={{ color: '#ff7300', textDecoration: 'none' }}>info@tuned-performance.com.au</a></p>
								<p><strong>Address:</strong> 2/17 Robinson Rd East, Virginia, 4014 QLD</p>
							</div>
						</section>

			{/* Modern Partners Section */}
						{/* Partners Section */}
						<section style={{ padding: '3rem 1rem 2rem 1rem', background: '#181818', textAlign: 'center', marginTop: '3rem' }}>
							<h2 style={{ fontWeight: 700, fontSize: '1.7rem', marginBottom: '1.2rem', color: '#ff7300' }}>Our Partners</h2>
							<p style={{ color: '#fff', marginBottom: '2rem' }}>We work with top brands in the performance industry.</p>
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
						{/* Footer */}
						<footer style={{ background: '#000', color: '#fff', textAlign: 'center', padding: '2rem 1rem 1rem 1rem', marginTop: '2rem', fontSize: '1rem', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
							<div style={{ marginBottom: '0.7rem' }}>
								<a href="https://www.facebook.com/tuned.performance.aus" target="_blank" rel="noopener noreferrer" style={{ color: '#ff7300', margin: '0 0.7rem', fontSize: '1.3rem', textDecoration: 'none' }}>Facebook</a>
								<a href="https://plus.google.com/107163551575357959413#104093126604718687409/about" target="_blank" rel="noopener noreferrer" style={{ color: '#ff7300', margin: '0 0.7rem', fontSize: '1.3rem', textDecoration: 'none' }}>Google+</a>
							</div>
							<div>© {new Date().getFullYear()} Tuned Performance. Website by <a href="http://www.clickdesign.com.au/" target="_blank" rel="noopener noreferrer" style={{ color: '#ff7300', textDecoration: 'none' }}>Another Click Design</a></div>
						</footer>

		</main>
	);
}
