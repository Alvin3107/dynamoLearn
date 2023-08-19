import AWS from 'aws-sdk'

AWS.config.update({
    region: "ap-south-1",
    accessKeyId: "AKIA2Q2EQLX6VULJTE7V",
    secretAccessKey: "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"
})

const db = new AWS.DynamoDB.DocumentClient()

const Table = 'users'

export {
    db,
    Table
}