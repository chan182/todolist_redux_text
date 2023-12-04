import React, { useState } from "react";
import styled from "styled-components";
const Input = () => {
    return (
        <StyledInputBox>
            <form>
                {/* <form onSubmit={onSubmitHandler}> */}
                <label>Todos의 제목을 입력하세요</label>
                <StInput />
                <StInput />
                <StButton type="submit">추가하기</StButton>
            </form>
        </StyledInputBox>
    );
};

export default Input;

const StyledInputBox = styled.div`
    background-color: aqua;
    padding: 20px;
`;

const StInput = styled.input`
    border: 1px solid #eee;
    margin: 0 24px;
    height: 25px;
    width: 300px;
    border-radius: 12px;
    outline: none;
    padding: 0 10px;
`;

const StButton = styled.button`
    border: none;
    background-color: #eee;
    height: 25px;
    cursor: pointer;
    width: 120px;
    border-radius: 12px;
`;
