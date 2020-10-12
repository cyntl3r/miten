const emailRegularExpression = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

export const emailFieldValidate = (value: string) =>
  emailRegularExpression.test(value.toLocaleLowerCase());

export const passwordFieldValidate = (value: string) => value.length >= 5;
