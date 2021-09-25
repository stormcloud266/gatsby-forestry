import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Layout from '@global/layout/layout'
import Seo from '@global/seo'
import { Container, Title } from '@UI'
import home from '../data/home.json'

const IndexPage = () => {
	return (
		<Layout>
			<Seo />
			<Container section wrapperSm>
				<Fade triggerOnce>
					<Title tag='h1' center>
						{home.title}
					</Title>
				</Fade>
				<p
					style={{
						textAlign: 'center',
						fontSize: '2rem',
					}}
				>
					{home.subtitle}
				</p>
			</Container>
		</Layout>
	)
}

export default IndexPage
