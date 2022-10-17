import React, { useEffect, useRef, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import AnimatedCursor from 'react-animated-cursor';
import { profile, portfolio } from './portfolioDATA';
import './main.scss';

// portfolio배열에서 title을 빼서 배열을 만들어 쓰겠다.
const ac = portfolio.map((it) => (it = it.title));

const Cover = ({ on, setOn }) => {
    const cover = useRef(null);
    const wheelStop = (e) => {
        e.stopPropagation();
    };
    useEffect(() => {
        cover.current.addEventListener('wheel', wheelStop);
        return () => {
            cover.current.removeEventListener('wheel', wheelStop);
        };
    }, []);
    return (
        <div className={`Cover ${on ? 'on' : ''}`} ref={cover}>
            <ul>
                {portfolio.map((it, idx) => {
                    return (
                        <li key={idx} onClick={() => setOn(!on)}>
                            <a href={`#${it.title}`}>{it.title}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

const Main = () => {
    const [num, setNum] = useState(1);
    const [on, setOn] = useState(false);

    return (
        <div className='FP'>
            {/* <Cover on={on} setOn={setOn} />
            <button className={`btn ${on ? "on" : ""}`} onClick={() => setOn(!on)}>
                <span>cover open</span>
            </button> */}
            {/* <div className='num'>{portfolio[num - 1]?.title}</div> */}
            <header className='header'>
                <h1>2022 프론트엔드 포트폴리오</h1>
                <p className='fix'>Frontend portfolio</p>
            </header>

            <nav className='gnb'>
                <ul>
                    {portfolio.map((it, idx) => {
                        return (
                            <li className={num === idx + 1 ? 'on' : ''}>
                                <a href={`#${it.anchor}`}>{it.title}</a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <ReactFullpage
                //fullpage options
                licenseKey={'YOUR_KEY_HERE'}
                scrollingSpeed={1000} /* Options here */
                anchors={['cover', ...ac, 'footer']}
                afterLoad={(origin, destination) => {
                    setNum(destination.index + 1);
                }}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className='section section_cover'>
                                <div className='inner'>
                                    <h2>
                                        I'm the one
                                        <br />
                                        you're looking for
                                        <br />
                                        미숫가루 먹고싶다.
                                        <br />
                                    </h2>
                                    <div className='topic'>
                                        <p className='top'>
                                            감자 감자 왕감자 <br />
                                            감자 감자 왕감자 <br />
                                        </p>
                                        <span className='bottom'>
                                            감자 감자 왕감자
                                            <br />
                                            감자 감자 왕감자 <br />
                                        </span>
                                    </div>
                                    <div className='circle'></div>
                                    {/* <a href="#portfolio_01">01</a>
                                    <button onClick={() => fullpageApi.moveSectionDown()}>
                                        Click me to move down
                                    </button> */}
                                </div>
                            </div>
                            {portfolio.map((it) => {
                                return (
                                    <div className='section'>
                                        <div className='case'>
                                            <div className='container'>
                                                <div className='photo'>
                                                    <img
                                                        src={it.src}
                                                        alt={it.title}
                                                    />
                                                </div>
                                                <ul className='desc'>
                                                    <li className='title'>
                                                        {it.title}
                                                    </li>
                                                    <li className='type'>
                                                        {it.type}
                                                    </li>
                                                    <li className='info'>
                                                        <p>{it.info}</p>
                                                    </li>
                                                    <li className='color'>
                                                        {it.color && (
                                                            <strong>
                                                                color
                                                            </strong>
                                                        )}
                                                        <ol>
                                                            {it.color?.map(
                                                                (
                                                                    color,
                                                                    idx
                                                                ) => {
                                                                    return (
                                                                        <li
                                                                            style={{
                                                                                background:
                                                                                    color,
                                                                            }}
                                                                        >
                                                                            {
                                                                                color
                                                                            }
                                                                        </li>
                                                                    );
                                                                }
                                                            )}
                                                        </ol>
                                                    </li>
                                                    <li className='link'>
                                                        <a
                                                            href={it.link}
                                                            target='_blank'
                                                        >
                                                            <button>
                                                                view more
                                                            </button>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            <div className='section'>
                                <p>Section 2</p>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
            <svg class='cursor' width='220' height='220' viewBox='0 0 220 220'>
                <defs>
                    <filter
                        id='filter-1'
                        x='-50%'
                        y='-50%'
                        width='200%'
                        height='200%'
                        filterUnits='objectBoundingBox'
                    >
                        <feTurbulence
                            type='fractalNoise'
                            baseFrequency='0'
                            numOctaves='1'
                            result='warp'
                        />
                        <feOffset dx='-30' result='warpOffset' />
                        <feDisplacementMap
                            xChannelSelector='R'
                            yChannelSelector='G'
                            scale='30'
                            in='SourceGraphic'
                            in2='warpOffset'
                        />
                    </filter>
                </defs>
                <circle class='cursor__inner' cx='110' cy='110' r='60' />
            </svg>
            <script src='js/Animate.js'></script>
        </div>
    );
};

export default Main;
