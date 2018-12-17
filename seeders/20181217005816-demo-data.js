'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Auditers', [
            {
                id:1,
                firstName: "Auditer1",
                lastName: "Security",
                email: "auditer1@security.com",
                password: "12341",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id:2,
                firstName: "Auditer2",
                lastName: "Security",
                email: "auditer2@security.com",
                password: "22342",
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ], {})
            .then(()=>{
                return queryInterface.bulkInsert('Audits',[
                    {
                        id: 1,
                        name: "Audit of "+Date.now(),
                        auditedCompanyName: "ENSAs",
                        dateOfAudit: Date.now(),

                        // Timestamps
                        createdAt: new Date(),
                        updatedAt: new  Date(),

                        AuditerId:1
                    },
                    {
                        id: 2,
                        name: "Audit Of "+Date.now(),
                        auditedCompanyName: "ENSAs",
                        dateOfAudit: Date.now(),

                        // Timestamps
                        createdAt: new Date(),
                        updatedAt: new  Date(),

                        AuditerId:2
                    }
                ])
            })
            .then(()=>{
                return queryInterface.bulkInsert('Categories',[
                    {
                        id: 1,
                        name: "Category N° "+Date.now(),

                        // Timestamps
                        createdAt: new Date(),
                        updatedAt: new  Date(),
                    },
                    {
                        id: 2,
                        name: "Category N° "+Date.now(),

                        // Timestamps
                        createdAt: new Date(),
                        updatedAt: new  Date(),
                    }
                ])
            })
            .then(()=>{
                return queryInterface.bulkInsert('Questions',[
                    {
                        id: 1,
                        intitled: "Question N° "+Date.now(),
                        details:"Details of question "+Date.now(),
                        coefficient:1,
                        scale:20,
                        AuditId:1,
                        CategoryId:1,

                        // Timestamps
                        createdAt: new Date(),
                        updatedAt: new  Date(),
                    },
                    {
                        id: 2,
                        intitled: "Question N° "+Date.now(),
                        details:"Details of question "+Date.now(),
                        coefficient:2,
                        scale:20,
                        AuditId:1,
                        CategoryId:1,

                        // Timestamps
                        createdAt: new Date(),
                        updatedAt: new  Date(),
                    },
                    {
                        id: 3,
                        intitled: "Question N° "+Date.now(),
                        details:"Details of question "+Date.now(),
                        coefficient:3,
                        scale:20,
                        AuditId:2,
                        CategoryId:2,

                        // Timestamps
                        createdAt: new Date(),
                        updatedAt: new  Date(),
                    },
                    {
                        id: 4,
                        intitled: "Question N° "+Date.now(),
                        details:"Details of question "+Date.now(),
                        coefficient:4,
                        scale:20,
                        AuditId:2,
                        CategoryId:2,


                        // Timestamps
                        createdAt: new Date(),
                        updatedAt: new  Date(),
                    }]
            )})
            .then(()=>{
                return queryInterface.bulkInsert('Answers',[
                    {
                        id: 1,
                        recommendation: "Recommendation N° "+Date.now(),
                        comment:"Comment of question "+Date.now(),
                        failureNumber:1,
                        score:10,
                        QuestionId:1,

                        // Timestamps
                        createdAt: new Date(),
                        updatedAt: new  Date(),
                    },
                    {
                        id: 2,
                        recommendation: "Recommendation N° "+Date.now(),
                        comment:"Comment of question "+Date.now(),
                        failureNumber:2,
                        score:12,
                        QuestionId:2,

                        // Timestamps
                        createdAt: new Date(),
                        updatedAt: new  Date(),
                    },
                    {
                        id: 3,
                        recommendation: "Recommendation N° "+Date.now(),
                        comment:"Comment of question "+Date.now(),
                        failureNumber:3,
                        score:15,
                        QuestionId:3,

                        // Timestamps
                        createdAt: new Date(),
                        updatedAt: new  Date(),
                    },
                    {
                        id: 4,
                        recommendation: "Recommendation N° "+Date.now(),
                        comment:"Comment of question "+Date.now(),
                        failureNumber:5,
                        score:18,
                        QuestionId:4,


                        // Timestamps
                        createdAt: new Date(),
                        updatedAt: new  Date(),
                    }]
                )})
            ;

    },

    down: (queryInterface, Sequelize) => {

          return queryInterface.bulkDelete('Auditers', null, {})
              .then(()=>{
                  return queryInterface.bulkDelete('Audits',null,{})
              })
              .then(()=>{
                  return queryInterface.bulkDelete('Categories',null,{})
              })
              .then(()=>{
                  return queryInterface.bulkDelete('Questions',null,{})
              })
              .then(()=>{
                  return queryInterface.bulkDelete('Answers',null,{})
              })
              ;

    }
};
