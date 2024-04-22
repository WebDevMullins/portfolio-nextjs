export default function SeconaryLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<main className="mx-auto flex min-h-dvh flex-col items-center justify-center bg-[url('/images/bg-blur.png')] bg-cover">
			{children}
		</main>
	)
}
