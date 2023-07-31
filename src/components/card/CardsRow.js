import React from 'react'
import styled from 'styled-components';
import { FaBolt, FaTemperatureLow, FaTint, FaRecycle, FaTree, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const CardsRow = () => 
{

  const navigate  = useNavigate();

  const handleLearnMore = (path) => {
    navigate(path);
  };
    return (
    <Container>
      <Card>
        <IconContainer>
          <FaBolt size={64} color="#007FFF" />
        </IconContainer>
        <TextArea>Optimizing Power Consumption</TextArea>
        <CardFooterButton onClick={() => handleLearnMore('power')}>Learn More!</CardFooterButton>
      </Card>
      <Card>
        <IconContainer>
          <FaTemperatureLow size={64} color="#007FFF" />
        </IconContainer>
        <TextArea>Microclimate and Air Quality Monitoring</TextArea>
        <CardFooterButton onClick={() => handleLearnMore('climate')}>Learn More!</CardFooterButton>
      </Card>
      <Card>
        <IconContainer>
          <FaTint size={64} color="#007FFF" />
        </IconContainer>
        <TextArea>Optimizing Water Consumption</TextArea>
        <CardFooterButton onClick={() => handleLearnMore('Water')}>Learn More!</CardFooterButton>
      </Card>
      <Card>
        <IconContainer>
          <FaRecycle size={64} color="#007FFF" />
        </IconContainer>
        <TextArea>The Recycling and Garbage Efficiency</TextArea>
        <CardFooterButton onClick={() => handleLearnMore('recycling')}>Learn More!</CardFooterButton>
      </Card>
      <Card>
        <IconContainer>
          <FaTree size={64} color="#007FFF" />
        </IconContainer>
        <TextArea>Micro-climatic Eco-Human Space</TextArea>
        <CardFooterButton onClick={() => handleLearnMore('ecohuman')}>Learn More!</CardFooterButton>
      </Card>
      <Card>
        <IconContainer>
          <FaTrash size={64} color="#007FFF" />
        </IconContainer>
        <TextArea>Increasing campus cleanliness</TextArea>
        <CardFooterButton onClick={() => handleLearnMore('cleanliness')}>Learn More!</CardFooterButton>
      </Card>
    </Container>
  )
}

export default CardsRow

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  height: 100%;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    overflow-y: auto;
    white-space: nowrap;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 12px;
  width: 250px;
  height: 300px;
  border-radius: 15px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  background-color: #FFFFFF;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
`

const TextArea = styled.p`
  margin: 12px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  white-space: pre-wrap;
`

const CardFooterButton = styled.button`
  margin: 12px;
  padding: 8px;
  background-color: #007FFF;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`