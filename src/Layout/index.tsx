import { ReactNode } from "react";
import Header from "../components/Layouts/Header";


interface MainLayout {
    children : ReactNode
}


export default function Layout({children} : MainLayout){
    return(
        <>
            <Header />    
                {children}
            <footer>footer</footer>
        </>
    );
}