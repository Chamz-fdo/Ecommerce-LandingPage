import React from 'react';
import styled from "styled-components";
import { categories } from "../data";

const Container = styled.div`
    padding: 20px;
    justify-content: space-between;
`;

const ImgContainer = styled.div`
    height: 50px;
    width: 100px;
`;

const Image = styled.div`
    height: 50px;
    width: 100px;
`;

const Categories = ({item}) => {
    return (
        <Container>
            {categories.map((item) =>(
                <ImgContainer bg={item.bg} key={item.id}>
                    <Image src={item.backgroundImage} />
                    <Image src="../Images/category.png" />
                </ImgContainer>
       ))}
        </Container>
    );
};

export default Categories;