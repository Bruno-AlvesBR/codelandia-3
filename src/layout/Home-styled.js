import styled from "styled-components";

export const Content = styled.section`
    min-height: 650px;
`;
export const ContainerApresentation = styled.section`
    min-height: 400px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    .box-message-apresentation
    {
        width: 450px;
        display: flex;
        flex-direction: column;
        margin: auto;
        h2
        {
            font-size: 3rem;
            font-weight: 100;
            margin: 10px 0;
            opacity: .7;
        }
        p 
        {
            font-size: 1.2rem;
            line-height: 35px;
            opacity: .7;
        }
        a 
        {
            font-size: 1rem;
            border: none;
            background-color: #6C63FF;
            text-decoration: none;
            width: 100px;
            padding: 10px;
            text-align: center;
            margin: 20px 0;
            color: #fff;
            transition: .2s all ease;
            &:hover 
            {
                box-shadow: 0px 0px 10px #00000075;
                transform: scale(1.01);
            }
        }
    }
    img 
    {
        width: 350px;
        display: flex;
        margin: auto;
    }
    @media (max-width: 650px)
    {
        flex-wrap: wrap;
        padding: 30px 0;
        .box-message-apresentation
        {
            text-align: center;
            align-items: center;
        }
        img 
        {
            width: 90%;
        }
    }
`;
export const ContainerProducts = styled.section`
    min-height: 650px;
    background-color: #fff;
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .card 
    {
        width: 300px;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 30px;
        box-shadow: 0px 0px 10px #00000030;
        img 
        {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        span 
        {
            display: flex;
            padding: 5px;
            margin: auto;
            text-align: center;
            font-size: 1rem;
        }
    }
    @media (max-width: 450px)
    {
        padding: 5px;
        .card 
        {
            width: 90%;
        }
    }
`;
export const ContainerContact = styled.section`
    min-height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
`;