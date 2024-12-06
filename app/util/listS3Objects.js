import {S3Client, ListObjectsV2Command} from '@aws-sdk/client-s3';

const saKey= "vytwAON9akER5EzLQLPedWL1/KBxHHcMN8ooPJsS";
const akId= "AKIA3ISBVVAAIZ5HZRUR";
const bucketName = "dsci6007site";

const s3 = new S3Client({
    region: "us-east-2",
    credentials: {
        accessKeyId: akId,
        secretAccessKey: saKey,
    },
});

export default async function getS3Objects(folderPath =  '') {
    console.log(bucketName)
    try {
        const params = {
            Bucket: bucketName,
            Prefix: folderPath ?? '',
            Delimiter: '/', // prevents listing nested folders
        };

        const command = new ListObjectsV2Command(params);
        const response = await s3.send(command);

        const folders = response.CommonPrefixes?.map((prefix) => ({
            name: prefix.Prefix.slice(0, -1),
            path: prefix.Prefix,
            isFolder: true,
        })) || [];

        const files = response.Contents?.map((item) => ({
            name: item.Key,
            url: `https://${bucketName}.s3.amazonaws.com/${item.Key}`,
            isFolder: false,
        })) || [];

        return [...folders, ...files];
    } catch (error) {
        return []
    }
}