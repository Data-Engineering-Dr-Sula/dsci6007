import {S3Client, ListObjectsV2Command} from '@aws-sdk/client-s3';

const s3 = new S3Client({
    region: process.env.NEXT_PUBLIC_AWS_REGION,
    credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    },
});
const bucketName = process.env.NEXT_PUBLIC_S3_BUCKET_NAME;

export default async function getS3Objects(folderPath =  '') {
    try {


        console.log("getting data", bucketName)
        const params = {
            Bucket: bucketName,
            Prefix: folderPath ?? '',
            Delimiter: '/', // prevents listing nested folders
        };

        const command = new ListObjectsV2Command(params);
        const response = await s3.send(command);
        console.log("response", response)

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
        console.log(error);
        return []
    }
}