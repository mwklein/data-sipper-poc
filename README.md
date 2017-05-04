# Data Sipper (Proof of Concept)
A simple proof of concept application to send connect to distributed data sources across multiple organizations, and send to a centralized database in a public cloud. 

# Serverless Framework
## Install serverless framework
```
npm install serverless -g
```

## Configure Serverless Framework
```
# Configure dev credentials
serverless config credentials --provider aws --profile data-sipper-dev --key AKIAIOSFODNN7EXAMPLE --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEYser

# Configure test credentials
serverless config credentials --provider aws --profile data-sipper-test --key AKIAIOSFODNN7EXAMPLE --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEYser

# Configure production credentials
serverless config credentials --provider aws --profile data-sipper-prod --key AKIAIOSFODNN7EXAMPLE --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEYser
```

## Deploy Serverless Functions
```
# Deploy dev services
serverless deploy

# Deploy test services
serverless deploy --stage test

# Deploy prod services
serverless deploy --stage prod
```

## Usage of Serverless functions
```
curl -X POST -H "Content-Type:application/json" https://{endpoint}/{stage}/data/append --data '{ "text": "Learn Serverless" }'
```