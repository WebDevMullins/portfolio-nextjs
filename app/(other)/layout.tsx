export default function SeconaryLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<main className="min-h-dvh flex flex-col items-center justify-center mx-auto bg-cover bg-[url('/images/bg-blur.png')]">
			{children}
		</main>
	)
}
