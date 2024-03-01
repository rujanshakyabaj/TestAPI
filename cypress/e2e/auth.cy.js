const { expect } = require("chai")

describe("Different types of Auth Testing", () => {
    it("Basic Authentication", () => {
        cy.request(
            {
                url: "https://postman-echo.com/basic-auth",
                method: "GET",
                auth: {
                    user: "postman",
                    pass: "password"
                }
            }
        ).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true)
        })
    })
    it("Digest Authentication", () => {
        cy.request(
            {
                method: "GET",
                url: "https://postman-echo.com/basic-auth",
                auth: {
                    username: "postman",
                    password: "password",
                    method: 'digest'
                }
            }
        ).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.authenticated).to.eq(true)
        })
    })
    // const bearerToken = "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"
    // it("Bearer Token for Github Account", () => {
    //     cy.request(
    //         {
    //             method: "GET",
    //             url: "https://api.github.com/user/repos",
    //             headers: {
    //                 "Authorization": "Bearer " + bearerToken
    //             }
    //         }
    //     ).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log(response.body[0].name)
    //     })
    // })
    const weatherapikey = "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"
    it("API Token for OpenWeatherApi", () => {
        cy.request(
            {
                method: "GET",
                url: "https://api.openweathermap.org/data/2.5/weather",
                headers: {
                },
                qs:{
                    q:"Kathmandu",
                    apikey:"a50de9168879b068511e2d5ceffbacc6"
                }
            }
        ).then((response) => {
            expect(response.status).to.eq(200)
            cy.log(response.body)
        })
    })

})