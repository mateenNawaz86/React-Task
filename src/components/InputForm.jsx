import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/uiSlice";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

const InputForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredSalary, setEnteredSalary] = useState();
  const dispatch = useDispatch();

  const employeeList = useSelector((state) => state.ui.employees);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const salaryChangeHandler = (event) => {
    setEnteredSalary(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      uiActions.addEmployee({
        id: Math.floor(Math.random() * 1000),
        enteredName,
        enteredSalary,
      })
    );
  };

  // const deleteHandler = () => {
  //   distpatch(uiActions.deleteEmployee({ id: employeeList.id }));
  // };
  return (
    <>
      <Container>
        <h3>Enter Employee Detail</h3>
        <FormContainer>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Name"
              onChange={nameChangeHandler}
            />
            <input
              type="number"
              placeholder="Salary"
              onChange={salaryChangeHandler}
            />
            <Button>Submit</Button>
          </form>
        </FormContainer>
      </Container>

      <div className="user-list">
        {employeeList.length <= 0 ? (
          ""
        ) : (
          <UserContainer>
            <h1>Employee List</h1>
            {employeeList.map((user, index) => {
              return (
                <ListContainer key={index}>
                  <>
                    <UserList>
                      <h2>{user.enteredName}</h2>
                      <p>${user.enteredSalary}</p>
                    </UserList>
                    <UserIcons>
                      <FiEdit className="edit-icon" />
                      <AiOutlineDelete
                        className="delete-icon"
                        onClick={() =>
                          dispatch(uiActions.deleteEmployee({ id: user.id }))
                        }
                      />
                    </UserIcons>
                  </>
                </ListContainer>
              );
            })}
          </UserContainer>
        )}
      </div>
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

// UserContainer styled-component
const UserContainer = styled.div`
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  user-select: none;
  position: relative;

  h1 {
    font-family: "Grape Nuts", cursive;
    text-align: center;
    padding: 1rem 0;
    letter-spacing: 1px;
    font-size: 2rem;
    color: #483d8b;
  }

  @media (max-width: 510px) {
    h1 {
      font-size: 1.2rem;
    }
  }
`;

// ListContainer styled-component
const ListContainer = styled.div`
  padding: 7px 1.5rem;
  display: flex;
  justify-content: space-between;
`;

// UserList styled-component
const UserList = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: #48d1cc;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: #4169e1;
  }

  @media (max-width: 510px) {
    padding: 7px 0;

    h2 {
      font-size: 14px;
    }

    p {
      font-size: 11px;
    }
  }
`;

// UserIcons styled-component
const UserIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0.5rem 0;
`;

export default InputForm;
