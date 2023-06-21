import '../css/Home.css'
import Header from './Header';
import Footer from './Footer';

function Home() {
    return (
        <div>
            <Header/>

            <section id="main">
                <h1>Welcome to Bubbli</h1>
                <h4>Please take a seat while we prepare the site.</h4>
            </section>

            <Footer/>
        </div>
    )
}

export default Home;