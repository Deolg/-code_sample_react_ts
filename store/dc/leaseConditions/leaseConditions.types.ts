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
    DC_EDIT_SET_PRICING_FLOOR_SPACE,
    DC_EDIT_SET_PRICING_CAGE_PRICE,
    DC_EDIT_SET_PRICING_RACK,
    DC_EDIT_SET_PRICING_PRIVATE_SUITE,
    DC_EDIT_SET_PRICING_TIERED,
    DC_EDIT_SET_PRICING_NUMBER_OF_TIERS,
    DC_EDIT_SET_PRICING_CUSTOM_SLA_FILE,
    DC_EDIT_SET_PRICING_CHOSEN_SLA,
    DC_EDIT_SET_PRICING_LEASE_AGREEMENT,
    DC_EDIT_SET_PRICING_PRICE_PER_KWT,
    DC_EDIT_SET_PURCHASE_FROM_1_TO_10K,
    DC_EDIT_SET_PURCHASE_FROM_101K_TO_1M,
    DC_EDIT_SET_PURCHASE_GREATER_THAN_1M,
    DC_EDIT_SET_COMPANY_BUSINESS_SIZE_FROM_1_TO_10,
    DC_EDIT_SET_COMPANY_BUSINESS_SIZE_FROM_101_TO_1000,
    DC_EDIT_SET_COMPANY_GREATER_THAN_1000,
    DC_EDIT_SET_TERMS_OF_LEASE_FROM_1_TO_3,
    DC_EDIT_SET_TERMS_OF_LEASE_FROM_3_TO_5,
    DC_EDIT_SET_TERMS_OF_LEASE_GREATER_THAN_5,
} from './leaseConditions.constants';

export interface IDCEditSetCapacityTerm {
    type: typeof DC_EDIT_SET_CAPACITY_TERM;
    capacityTerm: string;
}

export interface IDCEditSetCapacityAvailableDate {
    type: typeof DC_EDIT_SET_CAPACITY_AVAIL_DATE;
    capacityAvailableDate: Date;
}

export interface IDCEditSetCapacityMinPower {
    type: typeof DC_EDIT_SET_CAPACITY_MIN_POWER;
    capacityMinPower: number;
}

export interface IDCEditSetCapacityMaxPower {
    type: typeof DC_EDIT_SET_CAPACITY_MAX_POWER;
    capacityMaxPower: number;
}

export interface IDCEditSetCapacityMinFloorSpace {
    type: typeof DC_EDIT_SET_CAPACITY_MIN_FLOOR_SPACE;
    capacityMinFloorSpace: number;
}

export interface IDCEditSetCapacityMaxFloorSpace {
    type: typeof DC_EDIT_SET_CAPACITY_MAX_FLOOR_SPACE;
    capacityMaxFloorSpace: number;
}

export interface IDCEditSetCapacityMinCooling {
    type: typeof DC_EDIT_SET_CAPACITY_MIN_COOLING;
    capacityMinCooling: number;
}

export interface IDCEditSetCapacityMaxCooling {
    type: typeof DC_EDIT_SET_CAPACITY_MAX_COOLING;
    capacityMaxCooling: number;
}

export interface IDCEditSetCapacityPreferredIndustries {
    type: typeof DC_EDIT_SET_CAPACITY_PREFERRED_INDUSTRIES;
    capacityPreferredIndustries: string[];
}

export interface IDCEditSetCapacityIndustryExclusions {
    type: typeof DC_EDIT_SET_CAPACITY_INDUSTRY_EXCLUSIONS;
    capacityIndustryExclusions: string[];
}

export interface IDCEditSetCapacityCountryExclusions {
    type: typeof DC_EDIT_SET_CAPACITY_COUNTRY_EXCLUSIONS;
    capacityCountryExclusions: string[];
}

export interface IDCEDITSetCapacityPreferredBuyerBusinessSize {
    type: typeof DC_EDIT_SET_CAPACITY_PREFERRED_BUYER_BUSINESS_SIZE;
    capacityPreferredBuyerBusinessSize: string;
}

// pricing
export interface IDCEditSetPricePerKWT {
    type: typeof DC_EDIT_SET_PRICING_PRICE_PER_KWT;
    pricePerKwt: string;
}

export interface IDCEditSetPricingFloorSpace {
    type: typeof DC_EDIT_SET_PRICING_FLOOR_SPACE;
    pricingFloorSpace: string;
}

export interface IDCEditSetPricingRack {
    type: typeof DC_EDIT_SET_PRICING_RACK;
    pricingRack: string;
}

export interface IDCEditSetPricingCagePrice {
    type: typeof DC_EDIT_SET_PRICING_CAGE_PRICE;
    pricingCage: string;
}

export interface IDCEditSetPricingPrivateSuite {
    type: typeof DC_EDIT_SET_PRICING_PRIVATE_SUITE;
    pricingPrivateSuite: string;
}

export interface IDCEditSetPricingTiered {
    type: typeof DC_EDIT_SET_PRICING_TIERED;
    pricingTiered: boolean;
}

export interface IDCEditSetPricingNumberOfTiers {
    type: typeof DC_EDIT_SET_PRICING_NUMBER_OF_TIERS;
    pricingNumberOfTiers: number;
}

export interface IDCRegistrationSetPurchaseFrom101kTo1M {
    type: typeof DC_EDIT_SET_PURCHASE_FROM_1_TO_10K;
    purchaseFrom1To10k: number;
}

export interface IDCEditSetPurchaseFrom1To10k {
    type: typeof DC_EDIT_SET_PURCHASE_FROM_101K_TO_1M;
    purchaseFrom101kTo1M: number;
}

export interface IDCEditSetPurchaseGreaterThan1M {
    type: typeof DC_EDIT_SET_PURCHASE_GREATER_THAN_1M;
    purchaseGreaterThan1M: number;
}

export interface IDCEditSetCompanyBusinessSizeFrom1To10 {
    type: typeof DC_EDIT_SET_COMPANY_BUSINESS_SIZE_FROM_1_TO_10;
    companyBusinessSizeFrom1To10: number;
}

export interface IDCEditSetCompanyBusinessSizeFrom101To1000 {
    type: typeof DC_EDIT_SET_COMPANY_BUSINESS_SIZE_FROM_101_TO_1000;
    companyBusinessSizeFrom101To1000: number;
}

export interface IDCRegistrationSetCompanyBusinessSizeGreaterThan1000 {
    type: typeof DC_EDIT_SET_COMPANY_GREATER_THAN_1000;
    companyBusinessSizeGreaterThan1000: number;
}

export interface IDCEditSetTermsOfLeaseFrom1To3 {
    type: typeof DC_EDIT_SET_TERMS_OF_LEASE_FROM_1_TO_3;
    termsOfLeaseFrom1To3: number;
}

export interface IDCEditSetTermsOfLeaseFrom3To5 {
    type: typeof DC_EDIT_SET_TERMS_OF_LEASE_FROM_3_TO_5;
    termsOfLeaseFrom3To5: number;
}

export interface IDCEditSetTermsOfLeaseGreaterThan5 {
    type: typeof DC_EDIT_SET_TERMS_OF_LEASE_GREATER_THAN_5;
    termsOfLeaseGreaterThan5: number;
}

export interface IDCEditSetPricingCustomSLAFile {
    type: typeof DC_EDIT_SET_PRICING_CUSTOM_SLA_FILE;
    pricingCustomSLAFile: File | null;
}

export interface IDCEditSetPricingLeaseAgreement {
    type: typeof DC_EDIT_SET_PRICING_LEASE_AGREEMENT;
    pricingLeaseAgreement: string;
}

export interface IDCEditSetPricingChosenSLA {
    type: typeof DC_EDIT_SET_PRICING_CHOSEN_SLA;
    chosenSLA: string;
}
