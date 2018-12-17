'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'Audits',
            'AuditerId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Auditers',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            }
        )
            .then(() => {
                return queryInterface.addColumn(
                    'Questions',
                    'AuditId',
                    {
                        type: Sequelize.UUID,
                        references: {
                            model: 'Audits',
                            key: 'id',
                        },
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL',
                    }
                );
            })
            .then(() => {
                return queryInterface.addColumn(
                    'Questions',
                    'CategoryId',
                    {
                        type: Sequelize.UUID,
                        references: {
                            model: 'Categories',
                            key: 'id',
                        },
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL',
                    }
                );
            })
            .then(() => {
                return queryInterface.addColumn(
                    'Answers',
                    'QuestionId',
                    {
                        type: Sequelize.UUID,
                        references: {
                            model: 'Questions',
                            key: 'id',
                        },
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL',
                    }
                );
            })
            ;
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'Audits', // name of Source model
            'AuditerId' // key we want to remove
        )
            .then(()=>{
                return queryInterface.removeColumn(
                    'Questions',
                    'AuditId'
                );
            })
            .then(()=>{
                return queryInterface.removeColumn(
                    'Questions',
                    'CategoryId'
                );
            })
            .then(()=>{
                return queryInterface.removeColumn(
                    'Answers',
                    'QuestionId'
                );
            })
            ;
    }
};


