import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;
  min-height: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; // Ensure the content fills the remaining space
`;

export const Price = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: auto; // This ensures the button stays at the bottom
`;

export const Button = styled.button`
  margin-top: 16px;
  padding: 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: red;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 16px;
`;

export const QuantitySelector = styled.input`
  width: 50px;
  margin-top: 8px;
  padding: 5px;
  font-size: 1rem;
`;
