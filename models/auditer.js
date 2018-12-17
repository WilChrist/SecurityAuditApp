'use strict';
module.exports = (sequelize, DataTypes) => {
    const Auditer = sequelize.define('Auditer', {
        id: DataTypes.UUID,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,

        // Timestamps
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    }, {});
    Auditer.associate = function (models) {
        // associations can be defined here
        Auditer.hasMany(models.Audit)
    };
    return Auditer;
};