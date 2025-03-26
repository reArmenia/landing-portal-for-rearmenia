#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment process..."

# Build the frontend
echo "📦 Building frontend..."
yarn build

# Upload to S3
echo "📤 Uploading to S3..."
aws s3 sync dist/ s3://ai.rearmenia.com/ --profile rearmenia --delete

# Invalidate CloudFront cache
echo "🔄 Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
    --distribution-id EB7141NMU6AWM \
    --profile rearmenia \
    --invalidation-batch '{"CallerReference":"'"$(date +%s)"'","Paths":{"Quantity":1,"Items":["/*"]}}'

echo "✅ Deployment completed successfully!"
