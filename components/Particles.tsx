'use client'

import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useEffect, useMemo, useState } from 'react'

const ParticleEffect = () => {
	// State to track initialization status
	const [init, setInit] = useState(false)

	// useEffect hook to initialize the tsParticles engine when the component mounts
	useEffect(() => {
		// Initializing the particles engine with the Slim preset
		initParticlesEngine(async (engine) => {
			await loadSlim(engine)
		}).then(() => {
			// Setting the initialization status to true once the engine is loaded
			setInit(true)
		})
	}, [])

	// Function to handle the loaded particles container
	const particlesLoaded = (container: any) => {
		// Logging the particles container to the console
		console.log(container)
	}

	// Memoized options for configuring the particles
	const options = useMemo(
		() => ({
			detectRetina: true,
			fullScreen: { enable: false },
			fpsLimit: 120,
			interactivity: {
				events: {
					onHover: {
						enable: true,
						mode: 'repulse'
					},
					resize: true
				},
				modes: {
					repulse: {
						distance: 100,
						duration: 0.4
					}
				}
			},
			particles: {
				color: {
					value: '#EE0F0F'
				},
				links: {
					color: '#EE0F0F',
					distance: 175,
					enable: true,
					opacity: 0.5,
					width: 2
				},
				collisions: {
					enable: true
				},
				move: {
					enable: true,
					direction: 'top-left',
					outModes: {
						default: 'bounce'
					},
					random: true,
					straight: false,
					speed: 1
				},
				number: {
					density: {
						enable: true,
						area: 800
					},
					value: 250
				},
				opacity: {
					value: 0.4
				},
				shape: {
					type: 'circle'
				},
				size: {
					value: { min: 0, max: 5 }
				}
			}
		}),
		[]
	)

	// Conditionally rendering the Particles component based on initialization status
	if (init) {
		return <Particles className='h-screen' loaded={particlesLoaded} options={options} />
	}

	// Returning an empty fragment if not yet initialized
	return <></>
}

// Exporting the Particle component
export default ParticleEffect
