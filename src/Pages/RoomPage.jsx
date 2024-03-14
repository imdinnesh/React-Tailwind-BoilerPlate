import React, { useRef, useState } from 'react'
import WhiteBoard from '../Components/WhiteBoard'

function RoomPage() {

    const [tool, setTool] = useState('pencil')
    const [color, setColor] = useState('')

    const canvasRef=useRef(null)
    const ctxRef=useRef(null)
    const [element,setElement]=useState([])


    return (
        <div>
            <h1 className='text-center text-3xl mt-3'>Whiteboard Sharing App</h1>
            {/* //Tool section */}

            <div className='flex justify-evenly items-center space-x-5'>
                <div>
                    <div className='flex space-x-5'>
                        <div>
                            <label htmlFor='pencil'>Pencil</label>
                            <input type="radio" name='tools' id='pencil' value='pencil' checked={tool=='pencil'}
                                onChange={e => setTool(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor='rect'>Rectangle</label>
                            <input type="radio" name='tools' id='rect' value='rect' checked={tool=='rect'}
                                onChange={e => setTool(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor='line'>Line</label>
                            <input type="radio" name='tools' id='line' value='line' checked={tool=='line'}
                                onChange={e => setTool(e.target.value)} />
                        </div>
                    </div>
                </div>
                {/* //Color select option */}
                <div className='space-x-3'>
                    <label htmlFor='color'>Select Color</label>
                    <input type="color" value={color} onClick={e => setColor(e.target.value)} />
                </div>
                <div className='space-x-3'>
                    <button>undo</button>
                    <button>redo</button>
                </div>
                <div>
                    <button>clear</button>
                </div>

            </div>
            <div className='w-5/6 h-4/6 mx-auto mt-3'>
                <WhiteBoard canvasRef={canvasRef} ctxRef={ctxRef}
                element={element} setElement={setElement}/>
            </div>

        </div>
    )
}

export default RoomPage
