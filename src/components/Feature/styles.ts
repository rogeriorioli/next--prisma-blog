import styled from "styled-components";

export interface SliderCustomStyle {
    bgColor : string
}

const SliderFeature = styled.section<SliderCustomStyle>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 500px;
    margin: 20px 0;
    background: ${props => {
    return props.bgColor;
}};
    div {
        width: 50%;
        img{    
            object-fit: cover;
            width: 100%;
            height: 500px;
        }
        &.feature-title {
            padding: 20px;
            h2 {
                font-size: 30px;
                font-weight: bold;
                margin-bottom : 30px;
            }
        }
    }
`

export default SliderFeature