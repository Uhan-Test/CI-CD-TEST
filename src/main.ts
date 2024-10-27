import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { trackClientHellos } from 'read-tls-client-hello';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  const https = require('https');

  const server = new https.Server();
  trackClientHellos(server);

  server.on('request', (request, response) => {
    // In your normal request handler, check `tlsClientHello` on the request's socket:
    console.log(
      'Received request with TLS client hello:',
      request.socket?.tlsClientHello,
    );
  });

  await app.listen(3000);
}

bootstrap();
