import mongoose from 'mongoose';
import { ROLE } from '../utils/constants.js';

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    lastName: {
        type: String,
        default: 'lastName',
    },
    location: {
        type: String,
        default: 'my city',
    },
    role: {
        type: String,
        enum: Object.values(ROLE),
        default: ROLE.USER,
    },
});

export default mongoose.model('User', UserSchema);
