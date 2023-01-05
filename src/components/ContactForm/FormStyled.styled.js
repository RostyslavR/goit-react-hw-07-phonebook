import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: 400px;
  /* margin: 0 auto 10px; */
  margin-bottom: 12px;
  border: dashed gray;

  label {
    width: 100%;
    text-align: start;
  }

  button {
    width: 100%;
    padding: 8px;
  }
`;

export const Input = styled(Field)`
  font-size: 16px;
  width: 98%;
`;
