import React from 'react'


function Main({ enter }) {

    return (

        <div className="container">

            <img src="https://pi.tedcdn.com/r/www.filepicker.io/api/file/viMwZbuiRxOZAfoPi5pY?quality=90&w=260" alt="" className="image" />

            <div className="content">
                <h1 className="content-head">TEDx NITW PRESENTS</h1>
                <div className="about">


                    <p className='content-text'>TEDxNITW is the independently organized event operated under the license obtained from TED, but is based on guidelines laid down by TED. It is conducted and hosted by NITW. At TEDxNITW, we hope to integrate this to deluge our neighbouring ring with notions it had never been exposed to before, so as to facilitate dialogue and deliberations. We aim to inspire, motivate, and above all, instigate conversation which add to everyday life.</p>
                    <h2 className='content-endhead'>SPEAKER: Pro. ADAM GRANT</h2>

                </div>
                <h1 className="content-subhead">SEPTEMBER 2OTH @ 8PM</h1>
                <h1 className="content-subhead">VENUE: ALC COMPLEX</h1>
                <button className="button-82-pushable" onClick={() => enter()} role="button">
                    <span className="button-82-shadow"></span>
                    <span className="button-82-edge"></span>
                    <span className="button-82-front text">
                        BUY TICKETS
                    </span>
                </button>
            </div>
        </div>

    )
}

export default Main;