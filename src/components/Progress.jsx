import '../scss/progress.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Progress = () => {
    return <div className='progressContainer'>
        <div className='top'>
            <h2>Total Revenue</h2>
        </div>
        <div className='bottom'>
            <CircularProgressbar value={70} text="70%" />
            <h2>Total Sales Made Today</h2>
            <h3>$420</h3>
            <p>Previous transaction processing, Last Payments may not reflect</p>
        </div>
    </div>
}

export default Progress;