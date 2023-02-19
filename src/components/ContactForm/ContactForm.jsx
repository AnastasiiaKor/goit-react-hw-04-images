import React from 'react';
import { nanoid } from 'nanoid';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Label, Button } from './ContactForm.styled';

const Input = styled(Field)`
  margin-right: 10px;
`;
const nameInputId = nanoid();
const numberInputId = nanoid();
const initialValues = {
  name: '',
  number: '',
};

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'The name may contain only letters numerals'
    )
    .min(3, 'Too short')
    .max(30, 'Too long')
    .required('Required')
    .trim(),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'The number may contain only letters'
    )
    .min(7, 'Too short')
    .max(20, 'Too long')
    .required('Required')
    .trim(),
});
function ContactForm({ onSubmit }) {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <Label htmlFor={nameInputId}>Name</Label>
        <Input type="text" name="name" id={nameInputId} />
        <ErrorMessage name="name" render={msg => alert(msg)} />
        <Label htmlFor={numberInputId}>Number</Label>
        <Input type="tel" name="number" id={numberInputId} />
        <ErrorMessage name="number" render={msg => alert(msg)} />
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
// const INITIAL_STATE = {
//   name: '',
//   number: '',
// };
// class Form extends Component {
//   state = {
//     ...INITIAL_STATE,
//   };
//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };
//   nameInputId = nanoid();

//   numberInputId = nanoid();

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     const { props, state } = this;
//     event.preventDefault();
//     props.onSubmit(state);
//     this.resetForm();
//   };
//   resetForm = () => {
//     this.setState({ ...INITIAL_STATE });
//   };
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label htmlFor={this.nameInputId}>Name</label>
//         <input
//           onChange={this.handleInputChange}
//           type="text"
//           name="name"
//           id={this.nameInputId}
//           value={this.state.name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//         <label htmlFor={this.numberInputId}>Number</label>
//         <input
//           type="tel"
//           name="number"
//           id={this.numberInputId}
//           value={this.state.number}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           onChange={this.handleInputChange}
//         />
//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }
export default ContactForm;
