import Timer from 'react-compound-timer';

const TimeCount = () => {
    return (
        <Timer
            initialTime={10}
            direction="backward"
            checkpoints={[
                {
                    time: 0,
                    callback: ()=>console.log('Time up')
                }
            ]}
        />
    )
}

export default TimeCount