import * as express from 'express';
import { http } from '@google-cloud/functions-framework'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import { environment } from './environments/environment';
import { Logger } from '@nestjs/common';

export const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressInstance));
  app.setGlobalPrefix('api');
  app.enableCors();

  return app.init();
}

const server = express();

createNestServer(server)
.then((v) => {
  if (environment.production) {
    Logger.log('🚀 Starting production server...')
  } else {
    Logger.log(`🚀 Starting development server on http://localhost:${process.env.PORT || 3333}`)
    v.listen(process.env.PORT || 3333)
  }
})
.catch((err) => Logger.error('Nest broken', err))

http('apiNEST', server)

// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app/app.module';

// async function bootstrap() {
//   const port = process.env.PORT || 3333;
//   const app = await NestFactory.create(AppModule, { cors: true });
//   app.setGlobalPrefix('/api');
//   await app.listen(port, '0.0.0.0');
// }
// bootstrap();



// import { Logger, ValidationPipe } from '@nestjs/common';
// import { NestFactory } from '@nestjs/core';
// import {
//   FastifyAdapter,
//   NestFastifyApplication,
// } from '@nestjs/platform-fastify';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// import { AppModule } from './app/app.module';

// async function bootstrap() {
//   const app = await NestFactory.create<NestFastifyApplication>(
//     AppModule,
//     new FastifyAdapter({
//       ignoreTrailingSlash: true
//     })
//   );
//   app.useGlobalPipes(new ValidationPipe());
//   app.setGlobalPrefix('/api');
//   app.enableCors();

//   const options = new DocumentBuilder()
//     .setTitle('Cats example')
//     .setDescription('The cats API description')
//     .setVersion('1.0')
//     .addTag('cats')
//     .addBearerAuth()
//     .build();
//   const document = SwaggerModule.createDocument(app, options);
//   SwaggerModule.setup('api', app, document);

//   const port = process.env.PORT || 3333;
//   await app.listen(port, '0.0.0.0');
//   Logger.log(`🚀 Application is running on: ${await app.getUrl()}`);
// }

// bootstrap();
