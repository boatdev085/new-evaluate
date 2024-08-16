/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnswerEvaluate } from '../models/AnswerEvaluate';
import type { ResultAnswerEvaluate } from '../models/ResultAnswerEvaluate';
import type { ResultEvaluates } from '../models/ResultEvaluates';
import type { ResultSuccess } from '../models/ResultSuccess';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EvaluateService {
    /**
     * @returns ResultEvaluates OK
     * @throws ApiError
     */
    public static getApiEvaluateEvaluate(): CancelablePromise<ResultEvaluates> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/evaluate/evaluate',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @param obj
     * @returns ResultSuccess OK
     * @throws ApiError
     */
    public static postApiEvaluateAnswerEvaluate(
        obj?: AnswerEvaluate,
    ): CancelablePromise<ResultSuccess> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/evaluate/answer_evaluate',
            body: obj,
            errors: {
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @returns ResultAnswerEvaluate OK
     * @throws ApiError
     */
    public static getApiEvaluateAnswerEvaluate(): CancelablePromise<ResultAnswerEvaluate> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/evaluate/answer_evaluate',
            errors: {
                500: `Internal Server Error`,
            },
        });
    }
}
