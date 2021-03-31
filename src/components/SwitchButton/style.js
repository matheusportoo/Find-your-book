import styled from 'styled-components';

export const SwitchButton = styled.button`
  cursor: pointer;
  border: 0;
  background-color: ${(props) =>
    props.isOn ? `var(--color-highlight-dark)` : `var(--color-highlight)`};
  width: 50px;
  height: 0;
  padding-top: 25px;
  overflow: hidden;
  border-radius: 15px;
  position: relative;
  outline: none;

  &:focus {
    background-color: var(--color-highlight-dark);
  }

  &::after {
    content: '';
    height: 22px;
    width: 22px;
    background-color: var(--color-white);
    display: inline-block;
    position: absolute;
    left: 0;
    top: 50%;
    border-radius: 15px;
    transition: transform 0.2s ease-in-out;
    transform: ${(props) =>
      props.isOn
        ? `translate(calc(100% + 3px), -50%)`
        : `translate(3px, -50%)`};
  }
`;
