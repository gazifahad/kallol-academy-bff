import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  port: parseInt(process.env.SERVER_PORT, 10) || 8080,
  mongo: {
    url: `${process.env.MONGO_URL}-${process.env.NODE_ENV}`,
  },
}));
