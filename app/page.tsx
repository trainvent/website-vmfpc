import Image from "next/image";

const nutrientLetters = [
	{
		letter: "V",
		word: "Vitamin",
		note: "Micronutrient coverage for long-term resilience and complete daily support.",
	},
	{
		letter: "M",
		word: "Mineral",
		note: "Electrolytes and essential trace elements in a controlled, measurable format.",
	},
	{
		letter: "F",
		word: "Fat",
		note: "Dense energy, satiety, and the fatty acid profile required for complete nutrition.",
	},
	{
		letter: "P",
		word: "Protein",
		note: "Functional structure, recovery, and amino acid completeness at scale.",
	},
	{
		letter: "C",
		word: "Carbohydrate",
		note: "Accessible energy for daily use, emergency settings, and demanding missions.",
	},
];

const applications = [
	"War zones and humanitarian logistics",
	"Space travel and extreme-environment operations",
	"Preparedness, field work, and industrial deployment",
	"Consumers who want nutrition without complexity",
];

const collaborationPoints = [
	"Use the existing AIO-VMP product as the nutritional base.",
	"Expand it with carbohydrates and any required formulation improvements.",
	"Engineer a hygienic, manufacturable pellet format for humans.",
	"Launch the result as AIO-VMFPC or SPACEFOOD.",
];

export default function Home() {
	return (
		<main className="page-shell">
			<section className="hero">
				<div className="hero-copy">
					<p className="eyebrow">VMFPC concept presentation</p>
					<h1>
						Complete human nutrition, reimagined as a clean pellet-based product.
					</h1>
					<p className="hero-text">
						VMFPC stands for vitamin, mineral, fat, protein, and carbohydrate:
						the full nutritional stack in one compact system. The proposal is to
						turn that principle into a practical, dust-free pellet food designed
						for severe conditions, efficient logistics, and radically simple
						daily use.
					</p>
					<div className="hero-actions">
						<a className="button button-primary" href="#proposal">
							Review proposal
						</a>
						<a
							className="button button-secondary"
							href="https://www.lemarq.de/produkt/aio-vmp/"
							target="_blank"
							rel="noreferrer"
						>
							See existing product
						</a>
					</div>
				</div>

				<aside className="hero-panel">
					<a
						className="company-badge"
						href="https://trainvent.com"
						target="_blank"
						rel="noreferrer"
					>
						<div className="logo-mark logo-mark-hero" aria-hidden="true">
							<Image
								src="/LeLogo.svg"
								alt=""
								width={84}
								height={84}
								priority
							/>
						</div>
						<div>
							<span className="signal-label">Company reference</span>
							<strong>trainvent.com</strong>
						</div>
					</a>
					<div className="signal-card">
						<span className="signal-label">Core idea</span>
						<strong>Pellet food for humans</strong>
						<p>
							Compact, hygienic, shelf-efficient nutrition engineered for
							transport, storage, and reliable use.
						</p>
					</div>
					<div className="metric-grid">
						<div>
							<span>Format</span>
							<strong>Dust-free pellets</strong>
						</div>
						<div>
							<span>Positioning</span>
							<strong>Complete food</strong>
						</div>
						<div>
							<span>Starting point</span>
							<strong>AIO-VMP</strong>
						</div>
						<div>
							<span>Business model</span>
							<strong>Collaboration</strong>
						</div>
					</div>
				</aside>
			</section>

			<section className="section">
				<div className="section-heading">
					<p className="eyebrow">What VMFPC means</p>
					<h2>A complete nutritional logic, not just a product name.</h2>
				</div>
				<div className="nutrient-grid">
					{nutrientLetters.map((item) => (
						<article className="nutrient-card" key={item.letter}>
							<div className="nutrient-letter">{item.letter}</div>
							<h3>{item.word}</h3>
							<p>{item.note}</p>
						</article>
					))}
				</div>
			</section>

			<section className="section section-accent">
				<div className="section-heading">
					<p className="eyebrow">Why pellet form</p>
					<h2>
						A complete food pellet could solve logistics, cleanliness, and ease
						of use in one move.
					</h2>
				</div>
				<div className="two-column">
					<div className="statement-card">
						<p className="quote">
							“How would you feel about producing a complete food in pellet form
							for humans?”
						</p>
						<p>
							For war zones, space travel, or people who want radically
							uncomplicated nutrition, pellet form has obvious operational
							advantages: less dust, better packing density, cleaner handling,
							and a strong identity as a purpose-built food system.
						</p>
					</div>
					<div className="list-card">
						<h3>Best-fit use cases</h3>
						<ul>
							{applications.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="section-heading">
					<p className="eyebrow">Proof of intent</p>
					<h2>The concept already has a real nutritional starting point.</h2>
				</div>
				<div className="two-column">
					<div className="story-card">
						<h3>What has already been tried</h3>
						<p>
							Initial self-driven attempts showed real interest in the concept,
							but also exposed the technical barrier: pellet machinery clogged,
							hygiene standards were difficult to maintain, and the process
							clearly needs industrial expertise.
						</p>
					</div>
					<div className="story-card">
						<h3>Existing product foundation</h3>
						<p>
							The current AIO-VMP protein drink demonstrates practical progress
							toward the broader vision. It provides a credible base for a more
							complete formulation rather than starting from zero.
						</p>
						<a
							className="text-link"
							href="https://www.lemarq.de/produkt/aio-vmp/"
							target="_blank"
							rel="noreferrer"
						>
							Visit the current AIO-VMP product
						</a>
					</div>
				</div>
				<div className="reference-strip">
					<div className="reference-brand">
						<div className="logo-mark logo-mark-reference" aria-hidden="true">
							<Image src="/LeLogo.svg" alt="" width={88} height={88} />
						</div>
						<div>
							<h3>Trainvent company reference</h3>
							<p>
								For potential supporting companies, the broader company context
								can be reviewed via the main website.
							</p>
						</div>
					</div>
					<a
						className="button button-secondary reference-link"
						href="https://trainvent.com"
						target="_blank"
						rel="noreferrer"
					>
						Visit trainvent.com
					</a>
				</div>
			</section>

			<section className="section" id="proposal">
				<div className="section-heading">
					<p className="eyebrow">Collaboration proposal</p>
					<h2>
						Build the next version together and take it to market as a premium
						complete-food system.
					</h2>
				</div>
				<div className="proposal-layout">
					<div className="proposal-card">
						<h3>Suggested development path</h3>
						<ul>
							{collaborationPoints.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>

					<div className="terms-card">
						<span className="eyebrow">Partnership terms</span>
						<p className="terms-highlight">10% profit participation</p>
						<p>
							The proposal is a collaboration model: co-develop the product,
							bring it to market with the right production know-how, and credit
							the originator as a named collaboration partner.
						</p>
						<div className="name-options">
							<span>AIO-VMFPC</span>
							<span>SPACEFOOD</span>
						</div>
					</div>
				</div>
			</section>

			<section className="closing-panel">
				<p className="eyebrow">Positioning</p>
				<h2>
					This is not a novelty snack. It is a credible complete-food platform
					for companies that can execute formulation, hygiene, and scale.
				</h2>
				<p>
					The opportunity is to convert a strong idea and an existing nutritional
					base into a differentiated product with humanitarian, industrial, and
					consumer relevance.
				</p>
			</section>
		</main>
	);
}
