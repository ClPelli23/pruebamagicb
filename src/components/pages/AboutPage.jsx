import './AboutPage.css'
// import logoJs from '../../assets/js.svg'
// import logoHtml from '../../assets/htmlLogo.svg'
// import logoCss from '../../assets/cssLogo.svg'
// import logoJava from '../../assets/java-icon.svg'

function AboutPage () {
    return (
        <div className="About-container">
            <div className='description'>
            <h1>Sobre nosaltres</h1>
            <p>Som un club fundat al 2009, els nostres equips han passat per les millors categories de Catalunya. <br/>I love to code. odit similique vel repellendus totam illum illo repellat exercitationem dignissimos?</p>
            </div>
            
            <div className='Languages'>
                <div className='lgTitle'>
                    <h2>Missió, Visió i Valors</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quidem ab beatae similique voluptas ipsum molestias fugiat? Vel alias culpa voluptate aspernatur, <br></br>tempora sed blanditiis, temporibus dolor fugit architecto labore.</p>
                </div>
                
                {/* <div className='logos'>
                    <img src={logoHtml}></img>
                    <img src={logoCss}></img>
                    <img src={logoJs} ></img>
                    <img src={logoJava} ></img>
                </div> */}
                
            </div>

        </div>
    );
}

export default AboutPage