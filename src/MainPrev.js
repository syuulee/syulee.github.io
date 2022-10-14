import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import AnimatedCursor from "react-animated-cursor"
import data from './portfolioDATA';
import './main.scss';


const Main = () => {
    const [num, setNum] = useState(1);
    const [con, setCon] = useState('cover');
    const [on, setOn] = useState(false);
    const ac = data.map(it => it.anchor);

    const Cover = () => {
        return (
            <div className={`cover ${on ? 'on' : ''}`}>
                <ul>
                    {
                        data.map((it, idx) => {
                            return (
                                <li>
                                    <a href={`#${it.anchor}`} onClick={
                                        () => setOn(!on)
                                    }>{it.title}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    return (
        <div className='FP'>
            {/* <Cover /> */}

            <header className='header'>
                <h1>2022 프론트엔드 포트폴리오</h1>
                <p className='fix'>Frontend portfolio</p>
            </header>
            <nav className='gnb'>
                <ul>
                    {
                        ['cover', ...ac, 'copyright'].map((it, idx) => {
                            return (
                                <li className={num === (idx + 1) ? 'on' : ''}>
                                    <a href={`#${it}`}>{it}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <ReactFullpage
                //fullpage options
                licenseKey={'YOUR_KEY_HERE'}
                scrollingSpeed={1000} /* Options here */
                anchors={['cover', ...ac, 'copyright']}
                afterLoad={(origin, destination) => {
                    setNum(destination.index + 1);
                    setCon(destination.anchor)
                }}

                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section section_cover">
                                <div className="inner">
                                    <h2>I'm the one<br />
                                        you're looking for<br />
                                        미숫가루 먹고싶다.<br />
                                    </h2>
                                    <div className="topic">
                                        <p className='top'>감자 감자 왕감자 <br />
                                            감자 감자 왕감자 <br />
                                        </p>
                                        <span className='bottom'>
                                            감자 감자 왕감자<br />
                                            감자 감자 왕감자 <br />
                                        </span>
                                    </div>
                                    <div className="circle"></div>
                                    {/* <a href="#portfolio_01">01</a>
                                    <button onClick={() => fullpageApi.moveSectionDown()}>
                                        Click me to move down
                                    </button> */}
                                </div>
                            </div>
                            {
                                data.map(it => {
                                    return (
                                        <div className="section">
                                            <div className="inner">
                                                <h3>{it.title}</h3>
                                                <p>{it.content}</p>
                                                <span className="font">{it.font}</span>
                                                {
                                                    it.color?.map(color => <li style={{ background: color }}>{color}</li>)
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="section">
                                <p>Section 2</p>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
            <svg class="cursor" width="220" height="220" viewBox="0 0 220 220">
                <defs>
                    <filter id="filter-1" x="-50%" y="-50%" width="200%" height="200%"
                        filterUnits="objectBoundingBox">
                        <feTurbulence type="fractalNoise" baseFrequency="0" numOctaves="1" result="warp" />
                        <feOffset dx="-30" result="warpOffset" />
                        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warpOffset" />
                    </filter>
                </defs>
                <circle class="cursor__inner" cx="110" cy="110" r="60" />
            </svg>
            <script src="js/Animate.js"></script>
        </div >
    )
}

export default Main;