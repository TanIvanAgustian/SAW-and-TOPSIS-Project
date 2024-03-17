import { useParams } from "react-router-dom"

export default function DetailPrograms(){
    
    const {id} = useParams()

    return(
        <div>{id}
        
        <iframe className='video'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/CkxFdpiLWXI?autoplay=0`}>
</iframe>
</div>
        
    )
}