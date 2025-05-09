import React from 'react'

export default function Herosection() {
  return (
    <>
       <div className="hero-section">
            <div className="hero-element">
                <p style={{textTransform: 'uppercase',fontSize: '2vmin'}}>welcome to invie</p>
                <h1 className="heading">capitavating your invoices,<br/>capitaving your
                    future</h1>
                <div className="hero-para">
                    <p className="lorem-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. os ea et blanditiis
                        minus nemo placeat
                        tempore eligendi nam nulla dfsdfsd dfsd sdfsd sdrwerwe incidunt.</p>

                </div>
                <div className="hero-button">
                    <button className="btn btn-success">Get started</button>
                    <button className="btn btn-secondary">How it works</button>
                </div>

            </div>

        </div>
        <div className="trust-path">
            <p>Trusted by 50,000+ businesses to scale outbound</p>
        </div>

        <div className="image-part-section">
            <div className="image-part">
                <div className="image-part1" id="part1"></div>
                <div className="image-part1" id="part2">
                    <button className="btn btn-secondary">Create your own invoices</button>
                </div>
                <div className="image-part1" id="part3">
                    <p className="part3-para">“Revolutionizing the way you think about invoices. Lorem ipsum dolor sit amet,
                        consectetur lobortis
                        tortor adipiscing elit.”</p>
                    <div className="part3-img">
                        <div className="part3-imgbox">
                          
                        </div>
                        <div className="part3-discription-box">
                            <p className="name">Rup kumar pasi</p>
                            <p className="intro">Software Developer</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}
