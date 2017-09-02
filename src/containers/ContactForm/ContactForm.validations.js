export default {
  /* age: {
    required: true,
    min: 18,
    max: 99,
  },*/
  email: {
    required: true,
    email: true,
    validateOnBlur: true,
  },
  emailVerified: {
    required: true,
    emailVerified: true,
    validateOnBlur: true,
  },
  familyName: {
    required: true,
    validateOnBlur: true,
    minLength: 2,
  },
  /* gender: {
    required: true,
    validateOnBlur: true,
  },*/
  givenName: {
    required: true,
    validateOnBlur: true,
    minLength: 1,
  },
  /* locale: {
    required: true,
    validateOnBlur: true,
  },
  nickname: {
    required: false,
    validateOnBlur: true,
    maxLength: 10,
  },*/
  notes: {
    required: true,
    validateOnBlur: true,
    minLength: 2,
  },
};
