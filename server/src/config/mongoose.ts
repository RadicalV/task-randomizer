import { MONGO_URI } from '../constants';
import monoose from 'mongoose'

const mongooseConfig = () => {
    return monoose.connect(MONGO_URI)
}

export default mongooseConfig;