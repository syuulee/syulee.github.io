import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import data from './portfolioDATA';
import './main.scss';


const App = () => {
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
                2023 lee + portfolio {num} {con}
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
                            <div className="section">
                                <div className="inner">
                                    <h1>포폴 제목</h1>
                                    <p>포폴설명 구구절절 와르르르</p>
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
        </div >
    )
}

export default App;