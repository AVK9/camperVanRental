import { useState } from 'react';
import { toast } from 'react-toastify';
import sprite from '../../assets/img/sprite.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  FormBox,
  Name,
  Slogan,
  Forma,
  InputBox,
  Input,
  Label,
  InputBoxes,
  InputBoxComent,
  InputBoxCalendar,
  InputCalendar,
  InputComment,
  LabelComent,
  Button,
  IconWrapper,
} from './Form.styled';

export const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [activeInput, setActiveInput] = useState(null);

  const handleFocus = (inputId) => {
    setActiveInput(inputId);
  };

  const handleBlur = () => {
    setActiveInput(null);
  };

  const nameRegex = /[а-яА-Яa-zA-Z]{3,}/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = { name, email, password };

    checkData();
  };

  const checkData = () => {
    if (!emailRegex.test(email)) {
      toast.warn('Email must have been correct');
      return;
    }
    if (!nameRegex.test(name)) {
      toast.warn('Name must have been 3 charge');
      return;
    } else {
      const data = { name, email, startDate, comment };
      console.log(data);
      reset();
      location.reload();
    }
  };

  const reset = () => {
    setName('');
    setEmail('');
    setStartDate('');
    setComment('');
    toast.success(
      'Congratulations! Order received. Wait for a letter in the mail with further instructions'
    );
  };

  return (
    <FormBox>
      <Name>Book your campervan now</Name>
      <Slogan>Stay connected! We are always ready to help you.</Slogan>
      <Forma onSubmit={handleSubmit}>
        <InputBoxes>
          <InputBox>
            <Label active={activeInput === 1}>Name</Label>
            <Input
              onFocus={() => handleFocus(1)}
              onBlur={handleBlur}
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                nameRegex.test(e.target.value)
                  ? setNameValid(true)
                  : setNameValid(false);
                setName(e.target.value);
              }}
              placeholder="Ivan Bereza"
              required
            />
          </InputBox>
          <InputBox>
            <Label active={activeInput === 2}>Email </Label>
            <Input
              onFocus={() => handleFocus(2)}
              onBlur={handleBlur}
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                emailRegex.test(e.target.value)
                  ? setEmailValid(true)
                  : setEmailValid(false);
                setEmail(e.target.value);
              }}
              placeholder="ivan@gmail.com"
              required
            />
          </InputBox>
          <InputBoxCalendar>
            <Label active={activeInput === 3}>Booking date </Label>
            <InputCalendar
              onFocus={() => handleFocus(3)}
              onBlur={handleBlur}
              type="text"
              name="calendar"
              as={DatePicker}
              dateFormat="dd/MM/yyyy"
              value={startDate}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              required
            />

            <IconWrapper>
              <use href={`${sprite}#icon-calendar`} />
            </IconWrapper>
          </InputBoxCalendar>
          <InputBoxComent>
            <LabelComent active={activeInput === 4}>Comment</LabelComent>
            <InputComment
              onFocus={() => handleFocus(4)}
              onBlur={handleBlur}
              type="text"
              name="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </InputBoxComent>
        </InputBoxes>
        <Button onClick={''}>Send</Button>
      </Forma>
    </FormBox>
  );
};
