import React from 'react';
import styled from "styled-components";
import { brands } from "../data";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;

const ImgContainer = styled.div`
    
`;

const Image = styled.div`
    height: 5px;
    width: 15px;
`;

const Button = styled.button`
    border: none;
    border-radius: 20px;
    margin-top: 25px;
    padding: 15px 35px 15px 35px;
    background-color: #d4f2ff;
    box-shadow: 1px 3px #a6a6a6;
    color: black;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.5s ease;
    
    &:hover{
        color: gray;
        transform: scale(1.1);
`; 

const Brands = ({item}) => {
    return (
        <Container>
            {brands.map((item) => (
                <ImgContainer item={item} key={item.id}>
                    <Image src={item.img} />
                </ImgContainer>
       ))}
       <Button> Get Started </Button> 
        </Container>
    );
};


export default Brands;