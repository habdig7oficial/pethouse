import Caroulsel from "./components/Caroulsel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home(){
    return(
        <>
            <Navbar />

            <Caroulsel  />


            <h1 className="text-center"></h1>

            <Footer />
        </>
    )
}