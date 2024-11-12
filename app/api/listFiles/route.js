import {NextResponse} from 'next/server';
import {S3Client, ListObjectsV2Command} from '@aws-sdk/client-s3';

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

async function listS3Objects(bucketName, folderPath) {
    const params = {
        Bucket: bucketName,
        Prefix: folderPath ? `${folderPath}/` : '',
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
}

export async function GET(request) {
    try {
        const bucketName = process.env.S3_BUCKET_NAME;
        const {searchParams} = new URL(request.url);
        const folderPath = searchParams.get('folder') || '';

        const items = await listS3Objects(bucketName, folderPath);
        return NextResponse.json({items});
    } catch (error) {
        // console.error('Error fetching S3 files:', error);
        return NextResponse.json({error: 'Failed to list S3 files'}, {status: 500});
    }
}
