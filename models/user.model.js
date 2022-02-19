// ```js
// id (auto),
// username: "String"
// firstName: "String",
// avatarImage: "String" // Cloudify,
// city: "String",
// email: "String", // regex match
// password: "String", // regex match
// activated: "Bool",
// paidUser: "Bool" // v3
// level: ""
// {
//  timestamps: true < -- gives us join date
// }

// ```;

// virtuals
// userscheme('name', {
//     ref -> model we're looking for
//     localField: user's id
//     forField: location of user id in Like model
//     justone false.
// })
