import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    lastname: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
    },
    dateOfBirth: {
      type: String,
      required: [true, "Date of birth is required"],
    },
    profilePic: {
      type: String,
      default: null,
    },
    coverPic: {
      type: String,
      default: null,
    },

    // Relationships
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    friendRequests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    sentRequests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],

    // Profile
    bio: {
      type: String,
      default: null,
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

export default User;
