import AWS from 'aws-sdk'

AWS.config.update({
    region: "ap-south-1",
    accessKeyId: "EXAMPLEKEY",
    secretAccessKey: "EXAMPLESECRETKEY"
})

const db = new AWS.DynamoDB.DocumentClient()

const Table = 'users'

export {
    db,
    Table
}