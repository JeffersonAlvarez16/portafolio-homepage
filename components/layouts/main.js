import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Jefferson Alvarez homepage" />
        <meta name="author" content="Jefferson Alvarez" />
        <meta name="author" content="Jefferson Alvarez" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Jefferson Alvarez" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@JeffrzAlvarez" />
        <meta name="twitter:creator" content="@JeffrzAlvarez" />
        {/* <meta name="twitter:image" content="https://www.craftz.dog/card.png" /> */}
        <meta property="og:site_name" content="Jefferson Alvarez" />
        <meta name="og:title" content="Jefferson Alvarez" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="https://www.craftz.dog/card.png" /> */}
        <title>Jefferson Alvarez - Inicio</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14} mb={8}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
