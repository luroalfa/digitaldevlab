import styled from 'styled-components';

const Hero = styled.div`
  position: relative;
  height: 400px;
  background-image: url('https://i.pinimg.com/originals/ba/0e/b8/ba0eb82dbe74fb21925083c2ea7475b4.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6); /* Capa oscura */
    filter: blur(2px); /* Efecto sutil de desenfoque */
  }
`;

const HeroSection = () => {
  return <Hero />;
};

export default HeroSection;
