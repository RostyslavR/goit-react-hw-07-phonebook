import styled from 'styled-components';

export const ContactList = styled.ul`
  width: 600px;
  height: 245px;
  /* margin: 0 auto; */
  overflow-y: auto;

  li {
    display: flex;
    padding: 4px;
    justify-content: space-between;
  }

  p {
    text-align: start;
    width: 200px;
    font-size: 20px;
  }
`;
