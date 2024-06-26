import mongoose from 'mongoose';
import { ROLE } from '../utils/constants.js';

const UserSchema = new mongoose.Schema(
    {
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
    },
    {
        timestamps: true,
    }
);

//we have created this method to access it in the user controller
//to prevent passing the password when get-current-user is accessed
UserSchema.methods.toJSON = function () {
    let obj = this.toObject();
    delete obj.password;
    return obj;
};

export default mongoose.model('User', UserSchema);
