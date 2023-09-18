export const hello = () => {
    console.log('Hello world');
};

export * from './decorators/swagger.decorator';

export * from './services/swagger.service';

export * from './models/endpoint.model';
export * from './models/parameter.model';
export * from './models/responses.model';
export * from './models/setup.model';
