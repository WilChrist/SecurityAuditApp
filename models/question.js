'use strict';
module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define('Question', {
        id: DataTypes.UUID,
        intitled: DataTypes.STRING,
        details: DataTypes.STRING,
        coefficient: DataTypes.INTEGER,
        scale: DataTypes.INTEGER
    }, {});
    Question.associate = function (models) {
        // associations can be defined here
        Question.belongsTo(models.Category);
        Question.hasOne(Answer);
    };
    return Question;
};