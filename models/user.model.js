const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const EMAIL_PATTERN = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const PASSWORD_PATTERN = /^.{6,}$/i;
const SALT_ROUNDS = 10;

const userSchema = new.mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a valid name']
    },
    avatarImg: {
        type: String,
        default: 'https://res.cloudinary.com/magaboo/image/upload/v1645371452/ironvegana/default-profile-picture-avatar-png-green_bk8idz.jpg'
    },
    city: {
        type: String,
        required: [true, 'Please enter city name']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        match: [EMAIL_PATTERN, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        match: [PASSWORD_PATTERN, 'Password must be at least 6 characters']
    },
    paidUser: {
        type: Boolean  /* what means 'v3'? */
    },
    level: {
        type: String 
    },
    active: {
        type: Boolean,
        default: false
    },
    activationToken: {
        type: String,
        default: () => {
          return Math.random().toString(36).substring(7) +
            Math.random().toString(36).substring(7) +
            Math.random().toString(36).substring(7) +
            Math.random().toString(36).substring(7)
        }
    },
}, { timestamps: true }
);

userSchema.pre('save', function (next) {
    const user = this;

    if (user.isModified('password')) {
        bcrypt.hash(user.password, SALT_ROUNDS)
        .then((hash) => {
            user.password = hash
            next()
        })
        .catch(error => next(error))
    } else {
        next()
    }
})

userSchema.methods.checkPassword = function(password) {
    return bcrypt.compare(password, this.password)
}

const User = mongoose.model('User', userSchema);

module.exports = User;



// virtuals
// userscheme('name', {
//     ref -> model we're looking for
//     localField: user's id
//     forField: location of user id in Like model
//     justone false.
// })
