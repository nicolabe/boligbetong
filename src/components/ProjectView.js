import React, { useState, Fragment } from "react"
import styled from "styled-components"
import Carousel, { Modal, ModalGateway } from "react-images"

const ImageContainer = styled.div`
  display: flex;
  margin-left: 1.3em;
  overflow-x: scroll;
`

const Image = styled.img`
  max-height: 250px;
  max-width: 250px;
  margin-right: 1em;
  cursor: pointer;

  @media screen and (max-width: ${props => props.theme.mobileWidth}) {
    max-height: 110px;
    max-width: 110px;
  }
`

const ProjectContainer = styled.div`
  -webkit-box-shadow: 4px 10px 32px -10px rgba(0, 0, 0, 0.49);
  -moz-box-shadow: 4px 10px 32px -10px rgba(0, 0, 0, 0.49);
  box-shadow: 4px 10px 32px -10px rgba(0, 0, 0, 0.49);
  background-color: white;
  margin-bottom: 1.4em;
  padding: 1.2em;
  border-radius: 10px;
  height: 300px;

  @media screen and (max-width: ${props => props.theme.mobileWidth}) {
    height: 150px;
    margin-top: 0;
  }
`

const ProjectInfoContainer = styled.div`
  display: flex;
`

const ProjectHeader = styled.h2`
  font-weight: 300;
  text-transform: uppercase;
  font-size: 22px;
  margin-bottom: 0.6em;
  margin-top: 0;
`

const MetadataContainer = styled.ul`
  width: 260px;
  list-style: none;
  padding: 0;
  line-height: 1.3;
  position: relative;

  @media screen and (max-width: ${props => props.theme.mobileWidth}) {
    width: 130px;
    min-width: 130px;
    font-size: 12px;
  }

  &:after {
    content: "";
    border-right: 2px solid #ccc;
    position: absolute;
    height: 280px;
    top: -40px;
    left: 100%;

    @media screen and (max-width: ${props => props.theme.mobileWidth}) {
      height: 110px;
      top: -12px;
    }
  }
`

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`

const ListLabel = styled.span`
  font-weight: 700;
`

const ListData = styled.span`
  margin-right: 1.3em;
`

export const ProjectView = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = project.images.map(image => ({ src: image.file.url }))
  const toggleModal = index => {
    setModalOpen(!modalOpen)
    setCurrentIndex(index)
  }

  return (
    <Fragment>
      <ProjectContainer>
        <ProjectHeader>{project.name}</ProjectHeader>
        <ProjectInfoContainer>
          <MetadataContainer>
            <ListItem>
              <ListLabel>Type</ListLabel>
              <ListData>{project.type}</ListData>
            </ListItem>
            <ListItem>
              <ListLabel>Areal</ListLabel>
              <ListData>{project.area} m2</ListData>
            </ListItem>
            <ListItem>
              <ListLabel>Gnr/Bnr</ListLabel>
              <ListData>{project.landRegistry}</ListData>
            </ListItem>
            <ListItem>
              <ListLabel>Pris</ListLabel>
              <ListData> {project.price},-</ListData>
            </ListItem>
          </MetadataContainer>
          <ImageContainer>
            {images.map(({ src }, index) => {
              return (
                <Image
                  onClick={() => toggleModal(index)}
                  key={src}
                  alt="ett bilde"
                  src={src}
                />
              )
            })}
          </ImageContainer>
        </ProjectInfoContainer>
      </ProjectContainer>
      <ModalGateway>
        {modalOpen ? (
          <Modal onClose={toggleModal} closeOnBackdropClick={true}>
            <Carousel views={images} currentIndex={currentIndex} />
          </Modal>
        ) : null}
      </ModalGateway>
    </Fragment>
  )
}
