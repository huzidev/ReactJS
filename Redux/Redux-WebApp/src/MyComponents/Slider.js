import React from 'react';

export default function Slider() {

    // let index = 0;

    // window.onload = function () {
    //     const slide = document.getElementsByClassName("slide");
    //     slide[index].classList.add("active");
    //     slide[index].classList.remove("remove");
    
    //     setInterval(() => {
    //         loops()
    //     }, 6000);
    // };
    
    // function loops() {
    //     const slide = document.getElementsByClassName("slide");
    //     slide[index].classList.add("active");
    //     slide[index].classList.remove("active");
    //     index++;
    //     if (index === slide.length) {
    //         index = 0;
    //     }
    //     slide[index].classList.add("active");
    //     console.log(index, slide.length);
    // };

    const [state, setState] = React.useState(false)

    // setInterval({
    //     setState(prev => !prev)
    // }, 1000)
    setInterval(() => {
        setState(prev => !prev)
    }, 3000);

    if (state === true) {
        setState(prev => !prev)
    }

    let classActive = state ? ' active' : ''

    return (
        <div>
            <section id='slider'>
                <div className={'slide' + classActive} >
                    <h1>
                        hello
                    </h1>
                </div>
                <div className={'slide' + classActive}>
                    <h1>
                        hello
                    </h1>
                </div>
                <div className="slide">
                    <h1>
                        hello
                    </h1>
                </div>
                <div className="slide">
                    <h1>
                        hello
                    </h1>
                </div>
                <div className="slide">
                    <h1>
                        hello
                    </h1>
                </div>
                <div className="slide">
                    <h1>
                        hello
                    </h1>
                </div>
                <div className="slide">
                    <h1>
                        hello
                    </h1>
                </div>
            </section>
        </div>
    )
};
