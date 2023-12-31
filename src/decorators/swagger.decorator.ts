import { SwaggerEndpoint } from '../models/endpoint.model';
import { SwaggerService } from '../services/swagger.service';

export function Swagger(endpoint: SwaggerEndpoint) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        SwaggerService.addEndpoint(endpoint);
    };
}
