import {Link} from 'react-router-dom';

function Home(){
    return (
        <div className="App">
            <div className="content">
                <img src="https://img1.wsimg.com/isteam/ip/95cd5055-0c5e-4ce4-98da-3c6d924ede05/Screen%20Shot%202020-05-25%20at%202.35.57%20PM.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:671,cg:true" alt="happy-child" className="img-fluid top-img"/>
                <h1>Protecting what you've grown</h1>
                <Link to="/contact"><button className="btn btn-success">Contact Us</button></Link>
                <h2>Retirement Solutions</h2>
                <div class="container">
                    <div class="row">
                        <div class="col">
                        <h3>Income Products</h3>
                        </div>
                        <div class="col">
                        <h3>Medicare</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <img src="https://img1.wsimg.com/isteam/stock/66229/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300" alt="img1" />
                        </div>
                        <div class="col">
                            <img src="https://img1.wsimg.com/isteam/stock/NB7Pde7/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300" alt="img2" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                        <p>You've worked heard towards your retirement. Let's make sure you have an income plan in place to support your retirement goals. With several products available - from Annuities, Life Insurance and Long Term Care insurance, we can help you meet your goals.</p>
                        </div>
                        <div class="col">
                        <p>Making good decisions about health care after 65 is important, and you can use all the help you can get. Tree Top Insurance can help you navigate the complexities of  Medicare, Advantage plans and prescription drug plans.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <button className="btn btn-outline-secondary">Find out more</button>
                        </div>
                        <div class="col">
                            <button className="btn btn-outline-secondary">Find out more</button>
                        </div>
                    </div>
                </div>
                <h1>A full service insurance provider</h1>
                <div className="container-sm">
                    <p>As a full service Insurance Provider, Tree Top Insurance provides the insurance products you need. From standard home, health and auto insurance to business, health and long term care insurance, we offer a range of solutions for you at any stage of life.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;