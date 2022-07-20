import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,

  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
/* import { GridItem } from '../components/grid-item' */
import { IoLogoTwitter, IoLogoGithub, IoLogoWhatsapp } from 'react-icons/io5'


import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hola, soy un developer autodidacta.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jefferson Alvarez
          </Heading>
          <p>Web developer ( Mobile developer / Web developer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/takuya.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Trabajos
        </Heading>
        <Paragraph>
          Jefferson es un freelancer and full-stack developer con pasión por
          construir servicios digitales y cosas que usted quiera. Busca la
          manera de resolver problemas de la vida real con codigo.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Mi Portafolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Nacido en Yantzaza, Ecuador.
        </BioSection>
        <BioSection>
          <BioYear>2012</BioYear>
          Complete mi tecnologia en Analisis de Sistemas
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Trabaje creando mi propia empresa con 2 amigos mas
        </BioSection>
        <BioSection>
          <BioYear>2021 al presente</BioYear>
          Trabajo de manera freelancer
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Servicios
        </Heading>
        <BioSection>
          <BioYear>$5 mensual</BioYear>
          Mantenimiento preventivo y correctivo de tu computador e instalacion de programas.
          3 horas de soporte al mes.
        </BioSection>
        <BioSection>
          <BioYear>$5 mensual</BioYear>
          Asesoria en programacion, React, Node, Django, Firebase, Flutter, Svelte, Java, Heroku.
          3 horas de soporte al mes.
        </BioSection>
        <BioSection>
          <BioYear>$</BioYear>
          Creación de páginas web.
        </BioSection>
        <BioSection>
          <BioYear>$1</BioYear>
          Si me apoyas con este valor al cabo de 3 meses te devolvere $3.
          <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"           
            overflow="hidden"
          >
            <ProfileImage
              src="/images/BinancePayQR.png"
              alt="Profile image"              
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
        </BioSection>
      </Section>


      {/* 
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning
        </Paragraph>
      </Section> */}

<Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Sitios realizados
        </Heading>
        <List>
          <ListItem>
            <Link href="https://conagoparezamorach.gob.ec/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                
              >
                Conagopare Zamora Chinchipe
              </Button>
            </Link>
          </ListItem>
         
          <ListItem>
            <Link href="https://gadparroquialzurmi.gob.ec/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
               
              >
                Gad Parroquial Zurmi
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://gadcentineladelcondor.gob.ec/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                
              >
               Gad Centinela de Condor
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.gadparroquialguadalupe.gob.ec/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                
              >
               Gad Parroquial Guadalupe
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://gadparroquialbellavista.gob.ec/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                
              >
               Gad Parroquial Bellavista
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://gadlosencuentros.gob.ec/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                
              >
               Gad Parroquial Los Encuentros
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://andesacademy.org/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                
              >
               Andes Academy
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://permatree.wordpress.com/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                
              >
               Permatree SuperFoods
              </Button>
            </Link>
          </ListItem>
        </List>

      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          En la web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/JeffersonAlvarez16" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @JeffersonAlvarez16
              </Button>
            </Link>
          </ListItem>
          {/*   <ListItem>
            <Link href="https://twitter.com/inkdrop_app" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @inkdrop_app (English)
              </Button>
            </Link>
          </ListItem> */}
          <ListItem>
            <Link href="https://twitter.com/JefferAlvarz" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @JefferAlvarz
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://wa.me/593985874084/?text=" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoWhatsapp />}
              >
                Escribeme tu idea!
              </Button>
            </Link>
          </ListItem>
          {/*   <ListItem>
            <Link href="https://instagram.com/JefferAlvarz" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem> */}
        </List>

        {/*   <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;100k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box> */}
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
