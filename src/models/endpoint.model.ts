import { SwaggerParameter } from './parameter.model';
import { SwaggerResponses } from './responses.model';

export interface SwaggerEndpoint {
    method: string;
    path: string;
    tags: Array<string>;
    summary: string;
    description: string;
    produces: Array<string>;
    parameters: Array<SwaggerParameter>;
    responses: SwaggerResponses;
}
