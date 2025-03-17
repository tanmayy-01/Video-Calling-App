import dontenv from 'dotenv';

dontenv.config();

export default {
    PORT: process.env.PORT || 5000
};