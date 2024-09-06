// Introduction.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated } from 'react-spring';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  color: #333;
  font-family: 'Arial', sans-serif;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const Text = styled.p`
  font-size: 1rem;
  margin: 10px 0;
  text-align: center;
  max-width: 600px;
  animation: ${fadeIn} 2s ease-in-out;
`;

const BouncingButton = styled(animated.button)`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #0056b3;
  }
`;

const Introduction = () => {
  const bounce = useSpring({
    from: { transform: 'translate3d(0,-40px,0)' },
    to: { transform: 'translate3d(0,0px,0)' },
    config: { tension: 200, friction: 12 },
  });

  return (
    <Container>
      <Title>Hello, I'm Subhankar Sinha</Title>
      <Subtitle>A Passionate Website Developer</Subtitle>
      <Text>
        Welcome to my personal website! I specialize in React.Js. I love to work on innovative projects and collaborate with like-minded people. Feel free to explore my portfolio and reach out if you want to connect!
      </Text>
      <BouncingButton style={bounce}>Contact Me</BouncingButton>
    </Container>
  );
};

export default Introduction;
