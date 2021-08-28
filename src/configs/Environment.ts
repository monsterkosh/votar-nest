import { EnvironmentConstants } from "src/constants/EnvironmentConstants";
import { config } from 'dotenv';
import * as path from 'path';

const PROD = EnvironmentConstants.PROD;
const DEV = EnvironmentConstants.DEV;
const TEST = EnvironmentConstants.TEST;
let envData = {};
export class Environment {
    constructor(){}

    static async getEnvironment() {
        switch (process.env.NODE_ENV) {
            case DEV:
            envData = config({path: path.resolve(__dirname, '../../.env.dev') }).parsed;
            break;
            case PROD:
            envData = config({path: path.resolve(__dirname, '../../.env') });
            break;
            case TEST:
            envData = config({path: path.resolve(__dirname, '../../.env.test') });
            break;
            default:
            envData = config().parsed;
        }
    }
}

export {envData};