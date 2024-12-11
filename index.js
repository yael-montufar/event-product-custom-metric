import 'dotenv/config';

const env = process.env.APP_ENV;

switch (env) {
  case 'development':
    console.log(process.env.DEVELOPMENT_MESSAGE || '[Default] Running in development mode...');
    break;
  case 'staging':
    console.log(process.env.STAGING_MESSAGE || '[Default] Running in staging mode...');
    break;
  default:
    console.log(process.env.PRODUCTION_MESSAGE || '[Default] Running in production mode...');
}

console.log(`Environment: ${env}`);
