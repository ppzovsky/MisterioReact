import music from '../../assets/audio/WhisperintheShadows.mp3';

export default function Audio({mutado}){
    return(
        <audio autoPlay muted={mutado} loop>
        <source alt="Seu navegador é ruim" src={music} type="audio/mpeg"/>
        </audio>
    );
}