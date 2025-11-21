import Wave from 'react-wavify';

const Wavify = () => {
    return (
        <Wave
            fill='#6D94C5'
            paused={false}
            style={{ display: 'flex' }}
            options={{
                height: 10,
                amplitude: 50,
                speed: 0.15,
                points: 3
            }}
        />
    )
}

export default Wavify;