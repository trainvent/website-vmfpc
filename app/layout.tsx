import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "VMFPC | Complete Food Pellet Concept",
	description:
		"A sponsor-facing concept site for VMFPC: vitamin, mineral, fat, protein, carbohydrate in a compact pellet-based complete food system.",
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
