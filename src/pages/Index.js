import React, { Fragment } from "react";


function Index(){
    return(
        <Fragment>
             <nav class="navbar navbar-expand-lg navbar-light fixed-top" data-spy="affix" data-offset-top="0">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto align-items-center">
                    <li class="nav-item">
                        <a class="nav-link" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    
                    <li class="nav-item">
                       
                    </li>
                </ul>
            </div>
        </div>          
    </nav>

    <header class="header" id="home">
        <div class="container">
            <div class="infos">
                <h6 class="subtitle">hello,I'm</h6>
                <h6 class="title">RAHMA ZAKIYATUN</h6>
                <p>Pelajar</p>

                <div class="buttons pt-3">
                  
                </div>      

                <div class="socials mt-5">
                    <a class="social-item" href="javascript:void(0)"><i class="ti-facebook"></i></a>
                    <a class="social-item" href="javascript:void(0)"><i class="ti-google"></i></a>
                    <a class="social-item" href="javascript:void(0)"><i class="ti-github"></i></a>
                    <a class="social-item" href="javascript:void(0)"><i class="ti-twitter"></i></a>
                </div>
            </div>              
            <div class="img-holder">
                <img src="assets/imgs/rr.jpeg" alt=""/>
            </div>      
        </div>  

 
    </header>
    
    <section id="about" class="section mt-3">
        <div class="container mt-5">
            <div class="row text-center text-md-left">
                <div class="col-md-3">
                    <img src="assets/imgs/folio-1.jpg" alt="" class="img-thumbnail mb-4"/>
                </div>
                <div class="pl-md-4 col-md-9">
                    <h6 class="title">About me</h6>
                    <p>Nama : Rahma zakiyatun riskia</p>
                    <p>Alamat : Sumberagung</p>
                    <p>Status : Pelajar</p>

                    <h6 class="title">Pendidikan</h6>
                    <p>TK : Tk Dewi Sartika</p>
                    <p>SD : SDN Sumberagung 04</p>
                    <p>SMP : SMPN 02 Jombang</p>
                    <p>SMK : SMKN 06 Jember</p>

                                     
                </div>
            </div>
        </div>
    </section>
        </Fragment>
    )
}

export default Index;