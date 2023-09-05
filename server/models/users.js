import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    email: {
        type :String,
        required: true,
        unique: true,
    },

    password: {
        type:String,
        required: true,
        minlength: [8, "Password must be of eight charachers"],
        select: false,
    },

    avatar: {
        public_id: String,
        url: String,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }, 

    tasks: [
        {
        title: "String",
        description:"String",
        completed: Boolean,
        createdAt: Date,
        },
    ] ,
    otp: Number,
    potp_expiry: Date,
});

export const User = mongoose.model("User", userSchema);