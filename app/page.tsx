const automationPillars = [
	{
		letter: "B",
		word: "Build",
		note: "Compile the static Next.js site the same way every time, locally and in CI.",
	},
	{
		letter: "T",
		word: "Test",
		note: "Create a clean place for linting, type checks, and future quality gates.",
	},
	{
		letter: "D",
		word: "Deploy",
		note: "Publish the exported site to GitHub Pages directly from the repository.",
	},
	{
		letter: "V",
		word: "Visibility",
		note: "Keep deployment status, logs, and artifacts visible where the code now lives.",
	},
	{
		letter: "O",
		word: "Ownership",
		note: "Move source control and delivery into one workflow the team can maintain together.",
	},
];

const migrationWins = [
	"Legacy Pages boilerplate removed from the repo",
	"Homepage rewritten to explain the new GitHub Actions setup",
	"Static export configured for GitHub Pages deployments",
	"Deployment workflow added under .github/workflows",
];

const cleanupItems = [
	"Old CI references removed from the README and site copy",
	"Next.js config updated for GitHub-hosted static deployments",
	"Build artifact prepared for Pages with a .nojekyll marker",
	"Repository now has a clear path from push to published page",
];

const workflowSteps = [
	"Checkout the repository on every push to main or manual dispatch",
	"Install dependencies with npm ci and build the static Next.js export",
	"Upload the out/ directory as the GitHub Pages artifact",
	"Deploy the artifact with the official Pages deploy action",
];

export default function Home() {
	return (
		<main className="page-shell">
			<section className="hero">
				<div className="hero-copy">
					<p className="eyebrow">GitHub migration</p>
					<h1>GitHub Actions now runs the page.</h1>
					<p className="hero-text">
						This site has been reshaped around the move to GitHub. The repo now
						centers on GitHub Actions for build and deployment, so the code,
						automation, and Pages release flow all live in one place.
					</p>
					<div className="hero-actions">
						<a className="button button-primary" href="#workflow">
							View workflow plan
						</a>
						<a
							className="button button-secondary"
							href="https://docs.github.com/actions"
							target="_blank"
							rel="noreferrer"
						>
							GitHub Actions docs
						</a>
					</div>
				</div>

				<aside className="hero-panel">
					<div className="company-badge">
						<div>
							<span className="signal-label">Platform</span>
							<strong>GitHub + GitHub Pages</strong>
						</div>
					</div>
					<div className="signal-card">
						<span className="signal-label">Deployment target</span>
						<strong>Static Next.js export</strong>
						<p>
							The app builds to <code>out/</code> and ships through the official
							GitHub Pages workflow actions.
						</p>
					</div>
					<div className="metric-grid">
						<div>
							<span>Trigger</span>
							<strong>`push` to `main`</strong>
						</div>
						<div>
							<span>Manual run</span>
							<strong>`workflow_dispatch`</strong>
						</div>
						<div>
							<span>Artifact</span>
							<strong>`out/` upload</strong>
						</div>
						<div>
							<span>Publish step</span>
							<strong>Pages deploy</strong>
						</div>
					</div>
				</aside>
			</section>

			<section className="section">
				<div className="section-heading">
					<p className="eyebrow">What changed</p>
					<h2>The site now explains the GitHub Actions workflow instead of the previous deployment setup.</h2>
				</div>
				<div className="nutrient-grid">
					{automationPillars.map((item) => (
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
					<p className="eyebrow">Why GitHub Actions</p>
					<h2>One repository, one automation layer, one visible release path.</h2>
				</div>
				<div className="two-column">
					<div className="statement-card">
						<p className="quote">Push, build, upload, deploy.</p>
						<p>
							The new setup keeps the deployment story simple. Code changes land
							in GitHub, the workflow produces the static site, and GitHub Pages
							publishes the result without any platform split or extra glue.
						</p>
					</div>
					<div className="list-card">
						<h3>Immediate wins</h3>
						<ul>
							{migrationWins.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="section-heading">
					<p className="eyebrow">Repository cleanup</p>
					<h2>The old deployment footprint is gone from the docs, config comments, and page narrative.</h2>
				</div>
				<div className="two-column">
					<div className="story-card">
						<h3>What was removed</h3>
						<p>
							Legacy Pages boilerplate and outdated references were stripped out
							so the project no longer points people toward the retired setup.
						</p>
					</div>
					<div className="story-card">
						<h3>What replaced it</h3>
						<p>
							GitHub-focused setup notes, a Pages deployment workflow, and a
							homepage that explains the current automation model.
						</p>
						<a
							className="text-link"
							href="https://docs.github.com/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages"
							target="_blank"
							rel="noreferrer"
						>
							Read the GitHub Pages workflow guide
						</a>
					</div>
				</div>
				<div className="reference-strip">
					<div className="reference-brand">
						<div>
							<h3>Migration checklist</h3>
							<p>
								The repository is now aligned around GitHub-native deployment
								instead of the old Pages conventions.
							</p>
						</div>
					</div>
					<a
						className="button button-secondary reference-link"
						href="https://docs.github.com/actions/deployment/deploying-to-your-cloud-provider/deploying-static-content-to-pages"
						target="_blank"
						rel="noreferrer"
					>
						Pages deployment docs
					</a>
				</div>
			</section>

			<section className="section" id="workflow">
				<div className="section-heading">
					<p className="eyebrow">Workflow</p>
					<h2>GitHub Actions now carries the repo from commit to published page.</h2>
				</div>
				<div className="proposal-layout">
					<div className="proposal-card">
						<h3>Deployment flow</h3>
						<ul>
							{workflowSteps.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>

					<div className="terms-card">
						<span className="eyebrow">Status</span>
						<p className="terms-highlight">Pages-ready</p>
						<p>
							The repo is set up for a GitHub Actions based Pages deployment and
							the app build already succeeds as a static export.
						</p>
						<div className="name-options">
							{cleanupItems.map((item) => (
								<span key={item}>{item}</span>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="closing-panel">
				<p className="eyebrow">Outcome</p>
				<h2>The project now reads and behaves like a GitHub Pages app powered by GitHub Actions.</h2>
				<p>
					That means less migration confusion, cleaner onboarding, and a deployment
					setup that matches where the repository actually lives today.
				</p>
			</section>
		</main>
	);
}
