import React, { useState, Fragment } from "react"
import styled from "styled-components"
import { Card, CardHeader } from "../styled_components"
import Carousel, { Modal, ModalGateway } from "react-images"
import { formatCurrency } from "../utils"

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

const ProjectContainer = styled(Card)`
  height: 300px;
  padding-left: 1.4em;

  @media screen and (max-width: ${props => props.theme.mobileWidth}) {
    height: 150px;
    margin-top: 0;
  }
`

const ProjectInfoContainer = styled.div`
  display: flex;
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
    height: 250px;
    top: -16px;
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
  const images = project.images.map(image => ({
    src: image.file.url,
    alt: image.file.fileName,
  }))
  const toggleModal = index => {
    setModalOpen(!modalOpen)
    setCurrentIndex(index)
  }

  return (
    <Fragment>
      <ProjectContainer>
        <CardHeader>{project.name}</CardHeader>
        <ProjectInfoContainer>
          <MetadataContainer>
            <ListItem>
              <ListLabel>Type</ListLabel>
              <ListData>{project.type}</ListData>
            </ListItem>
            <ListItem>
              <ListLabel>Areal</ListLabel>
              <ListData>
                {project.area} m<sup>2</sup>
              </ListData>
            </ListItem>
            <ListItem>
              <ListLabel>Gnr/Bnr</ListLabel>
              <ListData>{project.landRegistry}</ListData>
            </ListItem>
            <ListItem>
              <ListLabel>Pris</ListLabel>
              <ListData> {formatCurrency(project.price, 0)},-</ListData>
            </ListItem>
          </MetadataContainer>
          <ImageContainer>
            {images.map(({ src, alt }, index) => {
              return (
                <Image
                  onClick={() => toggleModal(index)}
                  key={src}
                  alt={alt}
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
