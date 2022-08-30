// environment-config.interface.ts
import {InjectionToken} from "@angular/core";

export interface EnvironmentConfig {
  environment: {
    baseUrl: string;
  };
}

export const ENV_CONFIG = new InjectionToken<EnvironmentConfig>('EnvironmentConfig');
