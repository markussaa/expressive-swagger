export interface SwaggerSetup {
    swagger: string;
    info: SwaggerInfo;
    basePath: string;
}

export interface SwaggerInfo {
    version: string;
    title: string;
    description: string;
    contact: SwaggerContact;
    license: SwaggerLicense;
}

export interface SwaggerContact {
    name: string;
    url: string;
    email: string;
}

export interface SwaggerLicense {
    name: string;
}
