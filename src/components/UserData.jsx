import React from "react";
import styled from "styled-components";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

const UserData = () => {
  const userData = [
    {
      name: "Mateen",
      salary: 450,
    },
    {
      name: "Mateen",
      salary: 450,
    },
    {
      name: "Mateen",
      salary: 450,
    },
  ];
  return (
    <>
      <Container>
        <h1>Employee List</h1>
        <ListContainer>
          {userData.map((item, index) => {
            return (
              <>
                <UserList>
                  <h2>{item.name}</h2>
                  <p>${item.salary}</p>
                </UserList>
                <UserIcons>
                  <FiEdit className="edit-icon" />
                  <AiOutlineDelete className="delete-icon" />
                </UserIcons>
              </>
            );
          })}
        </ListContainer>
      </Container>
    </>
  );
};

// UserContainer styled-component
const Container = styled.div`
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
  flex-direction: column;
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

export default UserData;
