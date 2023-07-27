export {ApiGatewayManagementApi} from '@aws-sdk/client-apigatewaymanagementapi'
export {CloudWatch} from '@aws-sdk/client-cloudwatch'
export {DynamoDB} from '@aws-sdk/client-dynamodb'
export {Glue} from '@aws-sdk/client-glue'
export {Kinesis} from '@aws-sdk/client-kinesis'
export {Lambda} from '@aws-sdk/client-lambda'
export {PersonalizeEvents} from '@aws-sdk/client-personalize-events'
export {PersonalizeRuntime} from '@aws-sdk/client-personalize-runtime'
export {QuickSight} from '@aws-sdk/client-quicksight'
export {RDSData} from '@aws-sdk/client-rds-data'
import {S3} from '@aws-sdk/client-s3'
export {SES} from '@aws-sdk/client-ses'
export {SNS} from '@aws-sdk/client-sns'
export {SQS} from '@aws-sdk/client-sqs'
export {SSO} from '@aws-sdk/client-sso'
export {SSOOIDC} from '@aws-sdk/client-sso-oidc'
import {STS} from '@aws-sdk/client-sts'

import credentials from "./credentials"

(async () => {

    const sts = new STS({credentials});
    const id = await sts.getCallerIdentity({});

    const s3 = new S3({credentials});
    const promises = [];
    for (let i = 0; i < 40; ++i) {
        promises.push(await s3.listBuckets({}))
    }
    await Promise.all(promises);

})()