import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Layout from '@global/layout/layout'
import Seo from '@global/seo'
import { Container, Title } from '@UI'
import data from '../data/hours.json'

const IndexPage = () => {
	const hours = JSON.parse(JSON.stringify(data))

	return (
		<Layout>
			<Seo />
			{console.log(hours)}
			<Container section wrapperSm>
				<p
					style={{
						textAlign: 'center',
						fontSize: '2rem',
					}}
				>
					Welcome to{' '}
				</p>
				<Fade triggerOnce>
					<Title tag='h1'>Gatsby Starter Stormcloud</Title>
				</Fade>
			</Container>
		</Layout>
	)
}

export default IndexPage
