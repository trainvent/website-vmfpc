import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "GitHub Actions | Pages Deployment",
	description:
		"A GitHub Actions-focused landing page for this repository's new GitHub Pages deployment flow.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
