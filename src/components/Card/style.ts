import styled from "styled-components";

const CardContainer = styled.a`
    width: 33%;
    border: 1px solid #fafafa;
    padding: 10px;
    display: inline-block;
    min-height: 400px;
    vertical-align : top;
    &:hover{
        .image-container {
            opacity: 0.8;
            transition: opacity ease-in-out 0.5s;
        }
    }
    .image-container {
        height: 250px;
        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    }
    @media screen and (max-width:480px) {
        width: 100%;
        
    }
`

export default CardContainer;