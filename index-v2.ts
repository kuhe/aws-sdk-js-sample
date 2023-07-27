export {
    ApiGatewayManagementApi,
    CloudWatch,
    DynamoDB,
    Glue,
    Kinesis,
    Lambda,
    PersonalizeEvents,
    PersonalizeRuntime,
    QuickSight,
    RDSDataService,
    S3,
    SES,
    SNS,
    SQS,
    SSO,
    SSOOIDC,
    STS,
  } from "aws-sdk";
import { S3, STS} from "aws-sdk";
import credentials from "./credentials"

(async () => {

    const sts = new STS({credentials});
    const id = await sts.getCallerIdentity({}).promise();

    const s3 = new S3({credentials});
    const promises = [];
    for (let i = 0; i < 40; ++i) {
        promises.push(await s3.listBuckets().promise())
    }
    await Promise.all(promises);

})()