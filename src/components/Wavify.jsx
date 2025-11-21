import Wave from 'react-wavify';

const Wavify = () => {
    return (
        <Wave
            fill='#6D94C5'
            paused={false}
            style={{ display: 'flex', height: 'vh-100' }}
            options={{
                height: 30,
                amplitude: 40,
                speed: 0.2,
                points: 4
            }}
        />
    )
}

export default Wavify;