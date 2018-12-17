'use strict';
module.exports = (sequelize, DataTypes) => {
    const Answer = sequelize.define('Answer', {
        id: DataTypes.UUID,
        score: DataTypes.INTEGER,
        recommendation: DataTypes.STRING,
        comment: DataTypes.TEXT('long'),
        failureNumber: DataTypes.INTEGER
    }, {});
    Answer.associate = function (models) {
        // associations can be defined here
        Answer.belongsTo(models.Question);
    };
    return Answer;
};