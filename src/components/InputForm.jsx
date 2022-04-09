import React from "react";
import styled from "styled-components";

const InputForm = () => {
  const submitHandler = () => {};
  return (
    <>
      <Container>
        <h3>Enter Employee Detail</h3>
        <FormContainer>
          <form onSubmit={submitHandler}>
            <input type="text" placeholder="Name" />
            <input type="number" placeholder="Salary" />
            <Button>Submit</Button>
          </form>
        </FormContainer>
      </Container>
    </>
  );
};

// Container styled-component
const Container = styled.div`
  background-color: orange;
  box-shadow: #000000b0 0 26px 30px -10px, #000000ba 0 16px 10px -10px;
  border-radius: 4px;
  user-select: none;

  h3 {
    text-align: center;
    padding: 1rem 0 5px 0;
    letter-spacing: 1px;
    font-family: "Grape Nuts", cursive;
  }
`;

// FormContainer styled-component
const FormContainer = styled.div`
  padding: 1rem 1.3rem;

  form {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;

    input {
      display: inline;
      width: 100%;
      margin-bottom: 10px;
      line-height: 1.7;
      padding: 3px 10px;
      border: none;
      outline: none;
      border-radius: 4px;
    }
  }
`;

// Button styled-component
const Button = styled.button`
  background-color: #6495ed;
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 8px 14px;
  color: #fff;
  letter-spacing: 0.6px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export default InputForm;
