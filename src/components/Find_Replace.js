import React,{useEffect,useRef} from 'react';

export default function Find_Replace(props) {
    const txtt = useRef();
    function up_mode()
    {
        let up
        if (props.mode === 'light')
        {
            txtt.current.style.color = "black";
            return up = 'black';
        }
        else if (props.mode === 'dark')
        {
            txtt.current.style.color = "white";
           return up = 'white';
        }
    };

    useEffect(() => {
       up_mode() 
    },[props.mode])
    
    return (
        <div>
            <div className="container header">
                <div className='find'>
                    <h5 ref={txtt}>Find & Replace</h5>
                </div>
                <hr />
                <strong>Searched Character</strong>
                <div className="box my-2">
                <textarea className={`form-control border border-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ background: props.mode === 'dark' ? '#e5e5e5' : 'white', color: props.mode === 'dark' ? 'black' : 'black' }} rows={1}></textarea>
                </div>
                <strong>Replaced Character</strong>
                <div className="box my-2">
                <textarea className={`form-control border border-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ background: props.mode === 'dark' ? '#e5e5e5' : 'white', color: props.mode === 'dark' ? 'black' : 'black' }} rows={1}></textarea>
                </div>
                <div className='tail-btn'>

                <button className = 'btn-primary replace-btn'>Replace</button>
                </div>

            </div>
        </div>

    )
}
