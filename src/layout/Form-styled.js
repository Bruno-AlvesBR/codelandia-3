import styled from "styled-components";

export const Content = styled.form`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    h1 
    {
        font-size: 2rem;
    }
    input 
    {
        width: 100%;
        padding: 15px 30px;
        outline: none;
        border: none;
        border-radius: 5px;
        &::placeholder
        {
            display: flex;
        }
    }
    input.active 
    {
        &::placeholder
        {
            display: none;
        }
    }
    textarea 
    {
        resize: none;
        width: 100%;
        height: 200px;
        padding: 15px 30px;
        outline: none;
        border: none;
        border-radius: 5px;
    }
    button 
    {
        width: 100%;
        text-align: center;
        font-size: 1rem;
        border: none;
        background-color: #6C63FF;
        color: #fff;
        padding: 12px;
        transition: .3s all ease;
        cursor: pointer;
        border-radius: 5px;
        &:hover 
        {
            transform: scale(1.05);
            box-shadow: 0px 0px 15px #00000065;
        }
    }
`;