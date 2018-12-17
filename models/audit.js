'use strict';
module.exports = (sequelize, DataTypes) => {
  const Audit = sequelize.define('Audit', {
    id: DataTypes.UUID,
    name: DataTypes.STRING,
    auditedCompanyName: DataTypes.STRING,
    dateOfAudit: DataTypes.DATE,

      // Timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
  }, {});
  Audit.associate = function(models) {
    // associations can be defined here
      Audit.belongsTo(models.Auditer);
      Audit.hasMany(models.Question);
  };
  return Audit;
};