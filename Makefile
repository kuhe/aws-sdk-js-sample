install:
	yarn add -D typescript @types/node --registry https://registry.npmjs.org
	yarn add -D esbuild --registry https://registry.npmjs.org
	yarn add -D prettier --registry https://registry.npmjs.org
	yarn add aws-sdk --registry https://registry.npmjs.org
	yarn add @aws-sdk/client-apigatewaymanagementapi@3.377.0 @aws-sdk/client-cloudwatch@3.377.0 @aws-sdk/client-dynamodb@3.377.0 @aws-sdk/client-glue@3.377.0 @aws-sdk/client-kinesis@3.377.0 @aws-sdk/client-lambda@3.377.0 @aws-sdk/client-personalize-events@3.377.0 @aws-sdk/client-personalize-runtime@3.377.0 @aws-sdk/client-quicksight@3.377.0 @aws-sdk/client-rds-data@3.377.0 @aws-sdk/client-s3@3.377.0 @aws-sdk/client-ses@3.377.0 @aws-sdk/client-sns@3.377.0 @aws-sdk/client-sqs@3.377.0 @aws-sdk/client-sts@3.377.0 @aws-sdk/credential-providers@3.377.0 @aws-sdk/lib-dynamodb@3.377.0 @aws-sdk/lib-storage@3.377.0 @aws-sdk/s3-request-presigner@3.377.0 @aws-sdk/types@3.370.0 @aws-sdk/util-dynamodb@3.377.0 @aws-sdk/util-utf8@3.374.0 --registry https://registry.npmjs.org

tsconfig.json: install
	(npx tsc --init || exit 0)
	echo "export default {}" > credentials.ts

compile:
	time npx tsc index-v2.ts
	time npx tsc index-v3.ts

bundle:
	npx esbuild index-v2.ts --bundle --outdir=dist --platform=node
	npx esbuild index-v3.ts --bundle --outdir=dist --platform=node

run:
	time node dist/index-v2.js
	time node dist/index-v3.js