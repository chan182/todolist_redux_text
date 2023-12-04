import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const TodoList = ({ isActive }) => {
    return <StyledListBox></StyledListBox>;
};

export default TodoList;

const StyledListBox = styled.div`
    background-color: beige;
    padding: 20px;
`;

const StyledTodoBox = styled.div`
    background-color: lightpink;
    color: white;
    padding: 10px;
    margin: 10px;
`;
