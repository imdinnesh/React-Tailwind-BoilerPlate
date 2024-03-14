import React, { useEffect, useState } from 'react'
import rough from 'roughjs'

const roughGenerator=rough.generator()
function WhiteBoard({canvasRef,ctxRef,element,setElement}) {

    const [isDrawing,setIsDrawing]=useState(false)

    useEffect(()=>{
        const canvas=canvasRef.current
        const ctx=canvas.getContext("2d")

        ctxRef.current=ctx

        

    },[])


    const handleMouseDown=(e)=>{
        //console.log('Mouse Down',e);
        const {offsetX,offsetY}=e.nativeEvent
        setElement((prevElement)=>[
            ...prevElement,{
                type:'pencil',
                offsetX,
                offsetY,
                path:[[offsetX,offsetY]],
                storke:'black',
            }
        ])
        setIsDrawing(true)
    }

    const handleMouseUp=(e)=>{
        //console.log('Mouse Up',e);
        setIsDrawing(false)
    }

    const handleMouseMove=(e)=>{
        //console.log('Mouse Move',e);
        const {offsetX,offsetY}=e.nativeEvent
        if(isDrawing)console.log(offsetX,offsetY);
        
    }



    return (
        <>
        {JSON.stringify(element)}
        <canvas ref={canvasRef} className='bg-slate-200 w-full h-full border-2 border-red-700'
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        >

        </canvas>

        </>
    )
}

export default WhiteBoard
