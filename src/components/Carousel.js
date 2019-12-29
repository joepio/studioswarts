import React, { useState, useEffect } from 'react'
import budPR from '../assets/images/home/01.jpg'
import unilever from '../assets/images/home/02.jpg'
import jupiler from '../assets/images/home/03.jpg'
import napapijri from '../assets/images/home/04.jpg'

import { styles } from '../styles'
import styled, { keyframes } from 'styled-components'

const items = [
  {
    title: 'Budweiser',
    url: '/projects/budPR',
    src: budPR,
  },
  {
    title: 'Unilever',
    url: '/projects/unilever',
    src: unilever,
  },
  {
    title: 'Jupiler',
    url: '/projects/jupiler',
    src: jupiler,
  },
  {
    title: 'Napapijri',
    url: '/projects/napapijri',
    src: napapijri,
  },
]

const CarouselWrapper = styled.div`
  height: 100vh;
  position: relative;
  text-align: center;
`

const Heading = styled.a`
  text-align: center;
  text-decoration: none;
  color: grey;
  font-size: 2rem;
  font-family: ${styles.headerFont};
  margin-left: 1.4rem;
  margin-right: 1.4rem;
  opacity: 0.8;
  text-transform: uppercase;
  position: relative;

  &:hover {
    opacity: 0.999;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`

const CurrentHeading = styled(Heading)`
  color: white;
  opacity: 0.8;

  &:hover {
    color: 0.999;
  }
`

const BackImage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url(${props => props.src});
  background-repeat: none;
  background-size: cover;
  background-position: center;
  background-position-y: bottom;
`

// Create the keyframes
const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const HiddenImage = styled(BackImage)`
  opacity: 0;
  animation: ${fade} 0.5s linear 4.5s both;
`

const LinkBlock = styled.div`
  position: absolute;
  bottom: 20vh;
  left: 0;
  right: 0;
`

const BannerLanding = props => {
  const [currentProjectNr, setCurrentProject] = useState(0)
  const currentProject = items[currentProjectNr]
  let nextProjectNr

  if (currentProjectNr + 1 === items.length) {
    nextProjectNr = 0
  } else {
    nextProjectNr = currentProjectNr + 1
  }

  const nextImage = () => {
    setCurrentProject(nextProjectNr)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage()
    }, 5000)
    return () => clearInterval(timer)
  }, [currentProject])

  return (
    <CarouselWrapper>
      <BackImage key={currentProject.src} src={currentProject.src} />
      <HiddenImage key={currentProject.src} src={items[nextProjectNr].src} />
      <LinkBlock>
        {items.map(project => {
          if (project.title === currentProject.title) {
            return (
              <CurrentHeading href={project.url}>
                {project.title}
              </CurrentHeading>
            )
          }
          return <Heading href={project.url}>{project.title}</Heading>
        })}
      </LinkBlock>
    </CarouselWrapper>
  )
}

export default BannerLanding
