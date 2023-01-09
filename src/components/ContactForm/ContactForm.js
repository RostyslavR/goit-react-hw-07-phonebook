import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormStyled, Input } from './FormStyled.styled';

const initialValues = {
  name: '',
  phone: '',
};

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone: Yup.number('Phone number must be a "Number" type').required(
    'Please, enter valid Phone Number'
  ),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (contact, { resetForm }) => {
    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <label>
          Name
          <Input type="text" name="name" required placeholder="Enter name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          Phone
          <Input type="tel" name="phone" required placeholder="Enter phone" />
          <ErrorMessage name="phone" component="div" />
        </label>
        <button type="submit">Add contact</button>
      </FormStyled>
    </Formik>
  );
};
