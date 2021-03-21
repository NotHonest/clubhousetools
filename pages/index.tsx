import Head from 'next/head'
import { NextSeo } from 'next-seo'
import ImagePicker from '../components/ImagePicker'
import Feedback from '../components/Feedback'

export default function Home() {
  return (
      <div className="bg-bg flex flex-col justify-between items-center min-h-screen">
        <Head>
          <title>Clubhouse tools</title>
          <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛠</text></svg>"/>
        </Head>
				<NextSeo
					title="Kolos Tools"
					description="Become a member of Kolos Team!"
					canonical="https://clubhousetools.app/"
					openGraph={{
						title: '🛠 Kolos Tools',
						description: 'Become a member of Kolos Team!',
						images: [
							{
								url: 'https://clubhousetools.app/open-graph-image.jpg',
								width: 800,
								height: 600,
								alt: 'Featured image of Clubhouse Tools',
							}
						],
					}}
				/>

        <h1 className="p-4 text-4xl font-bold text-gray-800">🛠 Kolos tools</h1>
        <article className="flex flex-col flex-grow mt-8 items-center">
          <h2 className="text-center text-2xl font-extrabold text-gray-800">Become a member of Kolos Team!</h2>
          <ImagePicker className="p-4"/>
        </article>
        <footer className="p-4 text-sm text-gray-600 flex justify-between items-end w-full">
					<div></div>
					<div>
						Made with <span>❤️</span> by <a className="pointer-cursor font-semibold text-gray-700" href="https://twitter.com/g_perales" target="_blank">Gabriel Perales</a>
					</div>
					<Feedback />
				</footer>
      </div>
  )
}
