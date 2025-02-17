import React from 'react';
import { Container, Message } from './LoadingErrorState.styles';

interface LoadingErrorStateProps {
  message: string;
}

const LoadingErrorState: React.FC<LoadingErrorStateProps> = ({ message }) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
};

export default LoadingErrorState;
