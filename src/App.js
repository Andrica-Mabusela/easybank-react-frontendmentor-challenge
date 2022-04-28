import React, { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'


import mockups from  './images/image-mockups.png'
import ft1Image from './images/icon-online.svg'
import ft2Image from './images/icon-budgeting.svg'
import ft3Image from './images/icon-onboarding.svg'
import ft4Image from './images/icon-api.svg'

// article images
import articleImage1 from './images/image-currency.jpg'
import articleImage2 from './images/image-restaurant.jpg'
import articleImage3 from './images/image-plane.jpg'
import articleImage4 from './images/image-confetti.jpg'




export default function App() {

  

  return (
    <div className="App">
      
      <div className="nav-wrapper">
        <Nav />
      </div>
        <main>
          <section className="hero-content">
            <div>
                <h1>Next generation digital banking</h1>
                <p>Take your financial life online. Your Easybank account will be a one-stop-shop 
                for spending, saving, budgeting, investing, and much more.</p>
                <button>Request Invite</button> 
            </div>
            
            <div className="hero-image">
              <img src={mockups} alt="not found" />
            </div>

          </section>

          <section className="article-section">
            <article>
              <div>
                <h1>Why choose Easybank?</h1>
                <p>
                  We leverage Open Banking to turn your bank account into your financial hub. Control 
                  your finances like never before.
                </p>
              </div>
            </article>
               
          </section>

          <section className="features-wrapper">
              <div className="features-cards">
                  <div className="feature feature-1">
                    <img src={ft1Image} alt="Not Found" />
                      <h3>Online Banking</h3>
                      <p>
                         Our modern web and mobile applications allow you to keep track of your finances 
                         wherever you are in the world.
                      </p>
                  </div>
                  <div className="feature feature-2">
                    <img src={ft2Image} alt="Not Found" />
                      <h3>Simple Budgeting</h3>
                      <p>
                         See exactly where your money goes each month. Receive notifications when you’re 
                         close to hitting your limits.
                      </p>
                  </div>
                  <div className="feature feature-3">
                    <img src={ft3Image} alt="Not Found" />
                      <h3>Fast Onboarding</h3>
                      <p>
                         We don’t do branches. Open your account in minutes online and start taking control 
                         of your finances right away.
                      </p>
                  </div>
                  <div className="feature feature-4">
                    <img src={ft4Image} alt="Not Found" />
                      <h3>Open API</h3>
                      <p>
                        Manage your savings, investments, pension, and much more from one account. Tracking 
                        your money has never been easier.
                      </p>
                  </div>
              </div>
          </section>

          <section className="latest-articles-wrapper">
              <h1>Latest Articles</h1>
              <div className="latest-articles">
                  <div className='article article-1'>
                    <img src={articleImage1} alt="Not Found" />
                    <article>
                    <span>By Claire Robinson</span>
                    <h4>Receive money in any currency with no fees</h4>
                    <p>
                      The world is getting smaller and we’re becoming more mobile. So why should you be 
                      forced to only receive money in a single …
                    </p>
                    </article>
                  </div>

                   <div className='article article-2'>
                     <img src={articleImage2} alt="Not Found" />
                     <article>
                    <span>By Wilson Hutton</span>
                    <h4>Treat yourself without worrying about money</h4>
                    <p>
                      Our simple budgeting feature allows you to separate out your spending and set 
                      realistic limits each month. That means you …
                    </p>
                    </article>
                  </div>

                  <div className='article article-3'>
                    <img src={articleImage3} alt="Not Found" />
                    <article>
                    <span>By Wilson Hutton</span>
                    <h4>Take your Easybank card wherever you go</h4>
                    <p>
                      We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                      while you’re abroad. We’ll even show you …
                    </p>
                    </article>
                  </div>

                   <div className='article article-4'>
                     <img src={articleImage4} alt="Not Found" />
                     <article>
                      <span>By Claire Robinson</span>
                      <h4>Our invite-only Beta accounts are now live!</h4>
                      <p>
                         After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                          It’s easy to request an invite through the site ...
                      </p>
                      </article>
                  </div>
              </div>
          </section>

          <Footer />

        </main>
      
      
    </div>
  )
}