import { Timer } from '@fwk-nx/ui-timer'

export function App() {
	return (
		<div>
			<h1>
				<span> Hello there, </span>
				Welcome app-two 👋
			</h1>
			<Timer />
		</div>
	)
}

export default App

if (import.meta.vitest) {
	// add tests related to your file here
	// For more information please visit the Vitest docs site here: https://vitest.dev/guide/in-source.html

	const { it, expect, beforeEach } = import.meta.vitest
	let render: typeof import('@testing-library/react').render

	beforeEach(async () => {
		render = (await import('@testing-library/react')).render
	})

	it('should render successfully', () => {
		const { baseElement } = render(<App />)
		expect(baseElement).toBeTruthy()
	})

	it('should have a greeting as the title', () => {
		const { getByText } = render(<App />)
		expect(getByText(/Welcome app-two/gi)).toBeTruthy()
	})
}
