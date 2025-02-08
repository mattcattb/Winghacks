import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
    const { progress } = useProgress();
    return(
        <Html
            as='div'
            center
            >
            <span className='canvas-loader'></span>
        <p>
            {progress.toFixed(2)}%
        </p>
        </Html>
    )
}

export default CanvasLoader;
