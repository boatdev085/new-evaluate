/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Login } from '../models/Login';
import type { LoginWithSocial } from '../models/LoginWithSocial';
import type { RegisterMember } from '../models/RegisterMember';
import type { RegisterMemberWithSocial } from '../models/RegisterMemberWithSocial';
import type { ResultLogin } from '../models/ResultLogin';
import type { ResultMemberDetail } from '../models/ResultMemberDetail';
import type { ResultMembers } from '../models/ResultMembers';
import type { ResultSuccess } from '../models/ResultSuccess';
import type { UpdateProfile } from '../models/UpdateProfile';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MemberService {
    /**
     * @param obj
     * @returns ResultLogin OK
     * @throws ApiError
     */
    public static postApiMemberLogin(
        obj?: Login,
    ): CancelablePromise<ResultLogin> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/member/login',
            body: obj,
            errors: {
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @param obj
     * @returns ResultLogin OK
     * @throws ApiError
     */
    public static postApiMemberLoginWithSocial(
        obj?: LoginWithSocial,
    ): CancelablePromise<ResultLogin> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/member/login_with_social',
            body: obj,
            errors: {
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @param obj
     * @returns ResultLogin OK
     * @throws ApiError
     */
    public static postApiMemberRegister(
        obj?: RegisterMember,
    ): CancelablePromise<ResultLogin> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/member/register',
            body: obj,
            errors: {
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @param obj
     * @returns ResultLogin OK
     * @throws ApiError
     */
    public static postApiMemberRegisterWithSocial(
        obj?: RegisterMemberWithSocial,
    ): CancelablePromise<ResultLogin> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/member/register_with_social',
            body: obj,
            errors: {
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @param authorization
     * @returns ResultMembers OK
     * @throws ApiError
     */
    public static getApiMemberMember(
        authorization?: string,
    ): CancelablePromise<ResultMembers> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/member/member',
            headers: {
                'authorization': authorization,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @param authorization
     * @returns ResultMemberDetail OK
     * @throws ApiError
     */
    public static getApiMemberMemberById(
        authorization?: string,
    ): CancelablePromise<ResultMemberDetail> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/member/member_by_id',
            headers: {
                'authorization': authorization,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @param authorization
     * @param obj
     * @returns ResultSuccess OK
     * @throws ApiError
     */
    public static putApiMemberUpdateProfile(
        authorization?: string,
        obj?: UpdateProfile,
    ): CancelablePromise<ResultSuccess> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/member/update_profile',
            headers: {
                'authorization': authorization,
            },
            body: obj,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Internal Server Error`,
            },
        });
    }
}
