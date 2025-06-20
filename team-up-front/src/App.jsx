import classes from "./modules/App.module.scss"
import { FeaturedProjects } from "./components/Pages/Home/FeaturedProjects.jsx"
import { MainContent } from "./components/Pages/Home/MainContent.jsx";
import { Header } from "./components/Main/Header.jsx"
import { Footer } from "./components/Main/Footer.jsx"

function App() {

  return (
    <>
        <Header/>
        <div className={classes["component-gap"]}>
            <MainContent/>
            <FeaturedProjects/>
        </div>
        <Footer/>
    </>
  )
}

export default App
