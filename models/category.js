'use strict';
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: DataTypes.UUID,
        name: DataTypes.STRING,
        // Timestamps
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    }, {});
    Category.associate = function (models) {
        // associations can be defined here
        Category.hasMany(Question);
    };
    return Category;
};