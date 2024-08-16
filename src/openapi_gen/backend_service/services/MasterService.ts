/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResultMaster } from '../models/ResultMaster';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MasterService {
    /**
     * @returns ResultMaster OK
     * @throws ApiError
     */
    public static getApiMasterGender(): CancelablePromise<ResultMaster> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/gender',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @returns ResultMaster OK
     * @throws ApiError
     */
    public static getApiMasterFamilyStatus(): CancelablePromise<ResultMaster> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/family_status',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @returns ResultMaster OK
     * @throws ApiError
     */
    public static getApiMasterEducationLevel(): CancelablePromise<ResultMaster> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/education_level',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @returns ResultMaster OK
     * @throws ApiError
     */
    public static getApiMasterProvince(): CancelablePromise<ResultMaster> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/province',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @returns ResultMaster OK
     * @throws ApiError
     */
    public static getApiMasterMemberType(): CancelablePromise<ResultMaster> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/master/member_type',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }
}
