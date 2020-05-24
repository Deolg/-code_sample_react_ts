import {
    DC_EDIT_SET_CAPACITY_TERM,
    DC_EDIT_SET_CAPACITY_AVAIL_DATE,
    DC_EDIT_SET_CAPACITY_MIN_POWER,
    DC_EDIT_SET_CAPACITY_MAX_POWER,
    DC_EDIT_SET_CAPACITY_MIN_FLOOR_SPACE,
    DC_EDIT_SET_CAPACITY_MAX_FLOOR_SPACE,
    DC_EDIT_SET_CAPACITY_MIN_COOLING,
    DC_EDIT_SET_CAPACITY_MAX_COOLING,
    DC_EDIT_SET_CAPACITY_PREFERRED_INDUSTRIES,
    DC_EDIT_SET_CAPACITY_INDUSTRY_EXCLUSIONS,
    DC_EDIT_SET_CAPACITY_COUNTRY_EXCLUSIONS,
    DC_EDIT_SET_CAPACITY_PREFERRED_BUYER_BUSINESS_SIZE,
    DC_EDIT_SET_PRICING_PRICE_PER_KWT,
    DC_EDIT_SET_PRICING_FLOOR_SPACE,
    DC_EDIT_SET_PRICING_CAGE_PRICE,
    DC_EDIT_SET_PRICING_RACK,
    DC_EDIT_SET_PRICING_PRIVATE_SUITE,
    DC_EDIT_SET_PRICING_TIERED,
    DC_EDIT_SET_PRICING_NUMBER_OF_TIERS,
    DC_EDIT_SET_PRICING_CHOSEN_SLA,
    DC_EDIT_SET_PURCHASE_FROM_1_TO_10K,
    DC_EDIT_SET_PURCHASE_FROM_101K_TO_1M,
    DC_EDIT_SET_PURCHASE_GREATER_THAN_1M,
    DC_EDIT_SET_COMPANY_BUSINESS_SIZE_FROM_1_TO_10,
    DC_EDIT_SET_COMPANY_BUSINESS_SIZE_FROM_101_TO_1000,
    DC_EDIT_SET_COMPANY_GREATER_THAN_1000,
    DC_EDIT_SET_TERMS_OF_LEASE_FROM_1_TO_3,
    DC_EDIT_SET_TERMS_OF_LEASE_FROM_3_TO_5,
    DC_EDIT_SET_TERMS_OF_LEASE_GREATER_THAN_5,
    DC_EDIT_SET_PRICING_CUSTOM_SLA_FILE,
    DC_EDIT_SET_PRICING_LEASE_AGREEMENT,
} from './leaseConditions.constants';

import { DCEditActionType } from '../dc.types';

export const dcEditSetCapacityTerm = (capacityTerm: string): any => ({
    type: DC_EDIT_SET_CAPACITY_TERM,
    capacityTerm,
});

export const dcEditSetCapacityDateAvailable = (
    capacityAvailableDate: Date
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_AVAIL_DATE,
    capacityAvailableDate,
});

export const dcEditSetCapacityMinPower = (
    capacityMinPower: number
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_MIN_POWER,
    capacityMinPower,
});

export const dcEditSetCapacityMaxPower = (
    capacityMaxPower: number
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_MAX_POWER,
    capacityMaxPower,
});

export const dcEditSetCapacityMinFloorSpace = (
    capacityMinFloorSpace: number
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_MIN_FLOOR_SPACE,
    capacityMinFloorSpace,
});

export const dcEditSetCapacityMaxFloorSpace = (
    capacityMaxFloorSpace: number
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_MAX_FLOOR_SPACE,
    capacityMaxFloorSpace,
});

export const dcEditSetCapacityMinCooling = (
    capacityMinCooling: number
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_MIN_COOLING,
    capacityMinCooling,
});

export const dcEditSetCapacityMaxCooling = (
    capacityMaxCooling: number
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_MAX_COOLING,
    capacityMaxCooling,
});

export const dcEditSetCapacityPreferredIndustries = (
    capacityPreferredIndustries: string[]
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_PREFERRED_INDUSTRIES,
    capacityPreferredIndustries,
});

export const dcEditSetCapacityIndustryExclusions = (
    capacityIndustryExclusions: string[]
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_INDUSTRY_EXCLUSIONS,
    capacityIndustryExclusions,
});

export const dcEditSetCapacityCountryExclusions = (
    capacityCountryExclusions: string[]
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_COUNTRY_EXCLUSIONS,
    capacityCountryExclusions,
});

export const dcEditSetCapacityPreferredBuyerBusinessSize = (
    capacityPreferredBuyerBusinessSize: string
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_PREFERRED_BUYER_BUSINESS_SIZE,
    capacityPreferredBuyerBusinessSize,
});

// pricing

export const dcEditSetPricePerKwt = (
    pricePerKwt: string
): DCEditActionType => ({
    type: DC_EDIT_SET_PRICING_PRICE_PER_KWT,
    pricePerKwt,
});

export const dcEditSetPricingFloorSpace = (
    pricingFloorSpace: string
): DCEditActionType => ({
    type: DC_EDIT_SET_PRICING_FLOOR_SPACE,
    pricingFloorSpace,
});

export const dcEditSetPricingRack = (
    pricingRack: string
): DCEditActionType => ({
    type: DC_EDIT_SET_PRICING_RACK,
    pricingRack,
});

export const dcEditSetPricingCage = (
    pricingCage: string
): DCEditActionType => ({
    type: DC_EDIT_SET_PRICING_CAGE_PRICE,
    pricingCage,
});

export const dcEditSetPricingPrivateSuite = (
    pricingPrivateSuite: string
): DCEditActionType => ({
    type: DC_EDIT_SET_PRICING_PRIVATE_SUITE,
    pricingPrivateSuite,
});

export const dcEditSetPricingTiered = (
    pricingTiered: boolean
): DCEditActionType => ({
    type: DC_EDIT_SET_PRICING_TIERED,
    pricingTiered,
});

export const dcEditSetPricingNumberOfTiers = (
    pricingNumberOfTiers: number
): DCEditActionType => ({
    type: DC_EDIT_SET_PRICING_NUMBER_OF_TIERS,
    pricingNumberOfTiers,
});

export const dcEditSetPurchaseFrom1To10k = (
    purchaseFrom1To10k: number
): DCEditActionType => ({
    type: DC_EDIT_SET_PURCHASE_FROM_1_TO_10K,
    purchaseFrom1To10k,
});

export const dcEditSetPurchaseFrom101kTo1M = (
    purchaseFrom101kTo1M: number
): DCEditActionType => ({
    type: DC_EDIT_SET_PURCHASE_FROM_101K_TO_1M,
    purchaseFrom101kTo1M,
});

export const dcEditSetPurchaseGreaterThan1M = (
    purchaseGreaterThan1M: number
): DCEditActionType => ({
    type: DC_EDIT_SET_PURCHASE_GREATER_THAN_1M,
    purchaseGreaterThan1M,
});

export const dcEditSetCompanyBusinessSizeFrom1To10 = (
    companyBusinessSizeFrom1To10: number
): DCEditActionType => ({
    type: DC_EDIT_SET_COMPANY_BUSINESS_SIZE_FROM_1_TO_10,
    companyBusinessSizeFrom1To10,
});

export const dcEditSetCompanyBusinessSizeFrom101To1000 = (
    companyBusinessSizeFrom101To1000: number
): DCEditActionType => ({
    type: DC_EDIT_SET_COMPANY_BUSINESS_SIZE_FROM_101_TO_1000,
    companyBusinessSizeFrom101To1000,
});

export const dcEditSetCompanyBusinessSizeGreaterThan1000 = (
    companyBusinessSizeGreaterThan1000: number
): DCEditActionType => ({
    type: DC_EDIT_SET_COMPANY_GREATER_THAN_1000,
    companyBusinessSizeGreaterThan1000,
});

export const dcEditSetTermsOfLeaseFrom1To3 = (
    termsOfLeaseFrom1To3: number
): DCEditActionType => ({
    type: DC_EDIT_SET_TERMS_OF_LEASE_FROM_1_TO_3,
    termsOfLeaseFrom1To3,
});

export const dcEditSetTermsOfLeaseFrom3To5 = (
    termsOfLeaseFrom3To5: number
): DCEditActionType => ({
    type: DC_EDIT_SET_TERMS_OF_LEASE_FROM_3_TO_5,
    termsOfLeaseFrom3To5,
});

export const dcEditSetTermsOfLeaseGreaterThan5 = (
    termsOfLeaseGreaterThan5: number
): DCEditActionType => ({
    type: DC_EDIT_SET_TERMS_OF_LEASE_GREATER_THAN_5,
    termsOfLeaseGreaterThan5,
});

export const dcEditSetCustomSLAFile = (
    pricingCustomSLAFile: File | null
): DCEditActionType => ({
    type: DC_EDIT_SET_PRICING_CUSTOM_SLA_FILE,
    pricingCustomSLAFile,
});

export const dcEditSetPricingLeaseAgreement = (
    pricingLeaseAgreement: string
): DCEditActionType => ({
    type: DC_EDIT_SET_PRICING_LEASE_AGREEMENT,
    pricingLeaseAgreement,
});

export const dcEditSetPricingChosenSLA = (
    chosenSLA: string
): DCEditActionType => ({
    type: DC_EDIT_SET_PRICING_CHOSEN_SLA,
    chosenSLA,
});
