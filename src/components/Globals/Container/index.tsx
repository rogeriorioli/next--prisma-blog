import { ReactNode } from "react"
import Wrapper from "./styles"


interface ContainerProps {
    children : ReactNode,
}



export default function Container({ children }: ContainerProps) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}
