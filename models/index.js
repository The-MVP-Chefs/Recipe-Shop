const { Spell } = require("./Spell");
const { Wizard } = require("./Wizard");
// const {socialSecurityNumber} = require("./Social");
// const {User} = require("./User");

// This is the first table that introduce the need to "associate"...
// I know this, because I have several foreign keys in this table

// One to One
// source HAS ONE target
// target BELONGS TO source

// One to Many
// source HAS MANY target
// target BELONGS TO source

// Many to Many
// source BELONGS TO MANY target
// target BELONGS TO MANY source
// Through a THIRD TABLE which contains the references of both tables as needed. Also known as a conjunction table.

/*
        In this case, I know that I have some type of associations that I have to figure out. 
        The cool thing is, that sequelize will automatically add the foreign keys so we don't even need to worry about that our selves. 
*/

// Many Customers can have Many Products.
// Many Products can belong to Many Customers
// It's actually a Many to Many relationship... I did not even realize that's what I created.

// This means that the association that I want to create is going to look like this:

// With one to one, both tables should have the same number of rows and each row is linked to each other
// With one to many, the parent table should have less rows, because its being used over and over in the child table
// With many to many, there are more than one parent table being referenced from the child table. Usually a third table is used in order to keep this reference which is why many to many needs a third table to work with.

// This is for the Orders Table
//One-to-One
// User.hasOne(Social);
// Social.belongsTo(User);

//One-To-Many Relationship
Wizard.hasMany(Spell, { as: "spells", foreignKey: "wizardId" });

module.exports = {
  Spell,
  Wizard,
};
