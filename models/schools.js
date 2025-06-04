import mongoose from 'mongoose';

const schoolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'School name is required'],
        trim: true
    },
    address: {
        type: String,
        required: [true, 'School address is required'],
        trim: true
    },
    latitude: {
        type: Number,
        required: [true, 'Latitude is required'],
        validate: {
            validator: function(v) {
                return v >= -90 && v <= 90;
            },
            message: 'Latitude must be between -90 and 90 degrees'
        }
    },
    longitude: {
        type: Number,
        required: [true, 'Longitude is required'],
        validate: {
            validator: function(v) {
                return v >= -180 && v <= 180;
            },
            message: 'Longitude must be between -180 and 180 degrees'
        }
    }
}, {
    timestamps: true
});

const School = mongoose.model('School', schoolSchema);

export default School;