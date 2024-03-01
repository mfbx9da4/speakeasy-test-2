/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type ShowPetByIdRequest = {
    /**
     * The id of the pet to retrieve
     */
    petId: string;
};

export type ShowPetByIdResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Expected response to a valid request
     */
    pet?: components.Pet | undefined;
    /**
     * unexpected error
     */
    error?: components.ErrorT | undefined;
};

/** @internal */
export namespace ShowPetByIdRequest$ {
    export type Inbound = {
        petId: string;
    };

    export const inboundSchema: z.ZodType<ShowPetByIdRequest, z.ZodTypeDef, Inbound> = z
        .object({
            petId: z.string(),
        })
        .transform((v) => {
            return {
                petId: v.petId,
            };
        });

    export type Outbound = {
        petId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ShowPetByIdRequest> = z
        .object({
            petId: z.string(),
        })
        .transform((v) => {
            return {
                petId: v.petId,
            };
        });
}

/** @internal */
export namespace ShowPetByIdResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        Pet?: components.Pet$.Inbound | undefined;
        Error?: components.ErrorT$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<ShowPetByIdResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Pet: components.Pet$.inboundSchema.optional(),
            Error: components.ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.Pet === undefined ? null : { pet: v.Pet }),
                ...(v.Error === undefined ? null : { error: v.Error }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Pet?: components.Pet$.Outbound | undefined;
        Error?: components.ErrorT$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ShowPetByIdResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            pet: components.Pet$.outboundSchema.optional(),
            error: components.ErrorT$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.pet === undefined ? null : { Pet: v.pet }),
                ...(v.error === undefined ? null : { Error: v.error }),
            };
        });
}
