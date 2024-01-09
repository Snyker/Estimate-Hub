import type {ConfigFile} from '@rtk-query/codegen-openapi';

const estimateApiConfig: ConfigFile = {
    schemaFile: '../docs.json', // TODO put this in the .env file
    apiFile: './index', //Nom du fichier
    apiImport: 'estimateApi', //Nom de la constante
    outputFile: '../index.ts',
    exportName: 'EstimateHubApi',
    useEnumType: true,
    hooks: true,
};

export default estimateApiConfig;
