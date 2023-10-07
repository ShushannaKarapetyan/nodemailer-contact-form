import { checkSchema } from 'express-validator';

export const contactDataValidateSchemaBased = checkSchema({
  name: {
    exists: {
      errorMessage: 'Name is required.',
      options: { checkFalsy: true },
    },
    isString: { errorMessage: 'Name should be string.' },
    isLength: {
      options: { max: 100 },
      errorMessage: 'Name should be at most 100 characters.',
    },
  },
  email: {
    exists: {
      errorMessage: 'Email is required.',
      options: { checkFalsy: true },
    },
    isEmail: { errorMessage: 'Please provide valid email.' },
  },
  'phone-number': {
    exists: {
      errorMessage: 'Phone number is required.',
      options: { checkFalsy: true },
    },
    isString: { errorMessage: 'Phone number should be string.' },
    custom: {
      options: (value) => {
        const phoneNumberRegex = /^[0-9]{10}$/;

        console.log(phoneNumberRegex.test(value));
        if (!phoneNumberRegex.test(value)) {
          throw new Error('Phone number must be a 10-digit number.');
        }

        return true;
      },
    },
  },
  comment: {
    exists: {
      errorMessage: 'Comment is required.',
      options: { checkFalsy: true },
    },
    isString: { errorMessage: 'Comment should be string.' },
    isLength: {
      options: { max: 1000 },
      errorMessage: 'Comment should be at most 100 characters.',
    },
  },
});