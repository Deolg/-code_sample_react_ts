import {
    DC_PURCHASE_REQUEST_SET_MESSAGE,
    DC_PURCHASE_REQUEST_SET_POWER,
    DC_PURCHASE_REQUEST_SET_SPACE,
    DC_PURCHASE_REQUEST_RESET,
    DC_EDIT_START,
    DC_EDIT_SET_LOADING,
    DC_EDIT_SET_DC,
    DC_REGISTRATION_SET,
    DC_EDIT_SET_DC_NAME,
    DC_EDIT_SET_DC_PHONE,
    DC_EDIT_SET_DC_ADDRESS,
    DC_EDIT_SET_DC_DESCRIPTION,
    DC_EDIT_SET_DC_PHOTOS,
    DC_EDIT_SET_DC_VIDEOS,
    DC_EDIT_REMOVE_DC_PHOTOS,
    DC_EDIT_REMOVE_DC_VIDEOS,
    DC_EDIT_SET_GONE_DARK_12_MONTH,
    DC_EDIT_SET_GONE_DARK_24_MONTH,
    DC_EDIT_SET_GONE_DARK_36_MONTH,
    DC_EDIT_SET_GONE_DARK_RECOVERY_TIME,
    DC_EDIT_SET_FACILITY,
    DC_EDIT_UPDATE_FACILITY_BUILT_YEAR,
    DC_EDIT_UPDATE_FACILITY_COMPLIANCE,
    DC_EDIT_UPDATE_FACILITY_SECURITY_PHYSICAL_MONITORING,
    DC_EDIT_UPDATE_FACILITY_SECURITY_GUARDS,
    DC_EDIT_UPDATE_FACILITY_SECURITY_FACILITY_ACCESS,
    DC_EDIT_UPDATE_FACILITY_SECURITY_COMP_ROOM_ACCESS,
    DC_EDIT_UPDATE_FACILITY_SECURITY_TENANT_EQUIP_ACCESS,
    DC_EDIT_UPDATE_FACILITY_SECURITY_VISITOR_ACCESS,
    DC_EDIT_UPDATE_FACILITY_SECURITY_CCTV,
    DC_EDIT_SET_CAPACITY,
    DC_EDIT_UPDATE_CAPACITY_AVAILABLE_FLOOR_SPACE,
    DC_EDIT_UPDATE_CAPACITY_TOTAL_FLOOR_SPACE,
    DC_EDIT_UPDATE_CAPACITY_AVAILABLE_COOLING_CAPACITY,
    DC_EDIT_UPDATE_CAPACITY_TOTAL_COOLING_CAPACITY,
    DC_EDIT_UPDATE_CAPACITY_TOTAL_POWER,
    DC_EDIT_UPDATE_CAPACITY_AVAILABLE_POWER,
    DC_EDIT_UPDATE_CAPACITY_POWER_DENSITY,
    DC_EDIT_UPDATE_CAPACITY_POWER_DENSITY_TYPE,
    DC_EDIT_UPDATE_CAPACITY_POWER_VOLTAGE,
    DC_EDIT_UPDATE_WORK_AREAS_LOADING_DOCK,
    DC_EDIT_UPDATE_WORK_AREAS_SHIPPING_RECEIVING,
    DC_EDIT_UPDATE_WORK_AREAS_STAGING,
    DC_EDIT_UPDATE_WORK_AREAS_CLIENT_WORK,
    DC_EDIT_SET_LEASE_CONDITIONS,
    // page-4
    DC_EDIT_SET_FACILITY_SPACE_TYPE,
    DC_EDIT_SET_FACILITY_RAISED_FLOORS,
    DC_EDIT_SET_FACILITY_HW_PROVIDED,
    DC_EDIT_SET_FACILITY_EFFICIENCY,
    DC_EDIT_SET_FACILITY_UPS_BACKED,
    DC_EDIT_SET_FACILITY_UPS_RUNTIME,
    DC_EDIT_SET_FACILITY_UPS_TYPE,
    DC_EDIT_SET_FACILITY_UPS_CONFIGURATION,
    DC_EDIT_SET_FACILITY_GENERATOR_BACKED,
    DC_EDIT_SET_FACILITY_GENERATOR_TYPE,
    DC_EDIT_SET_FACILITY_GENERATOR_CAPACITY,
    DC_EDIT_SET_FACILITY_FUEL_DELIVERY,
    DC_EDIT_SET_FACILITY_GENERATOR_CONFIGURATION,
    DC_EDIT_SET_FACILITY_GENERATOR_RUNTIME,
    DC_EDIT_SET_NP_NAME,
    DC_EDIT_SET_NP_TYPE,
    DC_EDIT_SET_NP_CAPACITY,
    DC_EDIT_SET_TRANCHING_DISTANCE_NP_NAME,
    DC_EDIT_SET_TRANCHING_DISTANCE_NP_TYPE,
    DC_EDIT_SET_TRANCHING_DISTANCE_NP_CAPACITY,
    DC_EDIT_SET_CAPACITY_SUPPORT_AVAIL,
    DC_EDIT_SET_CAPACITY_CLIENT_ACCESS,
    DC_EDIT_SET_CAPACITY_CLIENT_AREA_OPTIONS,
    DC_EDIT_SET_CAPACITY_COOLING_DENSITY,
    DC_EDIT_SET_CAPACITY_COOLING_DENSITY_TYPE,
    // colling
    DC_EDIT_SET_FACILITY_COOLING_TYPE,
    DC_EDIT_SET_FACILITY_COOLING_CONFIGURATION,
    DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_AVAILABLE,
    DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_CAPACITY,
    DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_DEDICATION_PORTION,
    DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_BURSTABLE,
    DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_CELLING,
    DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_COST,
    DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_BLEND,
    DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_AVAILABLE,
    DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_CAPACITY,
    DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_DEDICATION_PORTION,
    DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_BURSTABLE,
    DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_CELLING,
    DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_COST,
    DC_EDIT_SET_CURR_PAGE,
    DC_PURCHASE_REQUEST_SET_PRICE,
} from './dc.constants';

import { DCRegistrationPageNum } from 'store/store.types';
import {
    IDataCenterStructureAddress,
    IGoneDarkTimes,
    IDataCenterFacility,
    ICapacityItem,
    ILeaseConditionsItem,
} from 'api/api.types';
import {
    IDCEditSetCapacityTerm,
    IDCEditSetCapacityAvailableDate,
    IDCEditSetCapacityMinPower,
    IDCEditSetCapacityMaxPower,
    IDCEditSetCapacityMinFloorSpace,
    IDCEditSetCapacityMaxFloorSpace,
    IDCEditSetCapacityMinCooling,
    IDCEditSetCapacityMaxCooling,
    IDCEditSetCapacityPreferredIndustries,
    IDCEditSetCapacityIndustryExclusions,
    IDCEditSetCapacityCountryExclusions,
    IDCEDITSetCapacityPreferredBuyerBusinessSize,
    // pricing
    IDCEditSetPricePerKWT,
    IDCEditSetPricingFloorSpace,
    IDCEditSetPricingRack,
    IDCEditSetPricingCagePrice,
    IDCEditSetPricingPrivateSuite,
    IDCEditSetPricingTiered,
    IDCEditSetPricingNumberOfTiers,
    IDCRegistrationSetPurchaseFrom101kTo1M,
    IDCEditSetPurchaseFrom1To10k,
    IDCEditSetPurchaseGreaterThan1M,
    IDCEditSetCompanyBusinessSizeFrom1To10,
    IDCEditSetCompanyBusinessSizeFrom101To1000,
    IDCRegistrationSetCompanyBusinessSizeGreaterThan1000,
    IDCEditSetTermsOfLeaseFrom1To3,
    IDCEditSetTermsOfLeaseFrom3To5,
    IDCEditSetTermsOfLeaseGreaterThan5,
    IDCEditSetPricingCustomSLAFile,
    IDCEditSetPricingLeaseAgreement,
    IDCEditSetPricingChosenSLA,
} from './leaseConditions/leaseConditions.types';

export interface IDCpurchaseRequestData {
    dcPurchaseRequestMessage: string;
    dcPurchaseRequestPower: number | Range;
    dcPurchaseRequestSpace: number | Range;
    dcPurchaseRequestPrice: number;
}

export type DataCentersActionType =
    | IDCpurchaseRequestSetMsg
    | IDCpurchaseRequestSetPower
    | IDCpurchaseRequestSetSpace
    | IDCpurchaseRequestSetPrice
    | IDCpurchaseRequestReset;

export type DCEditActionType =
    | IDCEditStart
    | IDCREgistrationSet
    | IDCEditSetUpdateLoading
    | IDCEditSetSelectedDC
    | IDCEditSetCurrPage
    | IDCEditSetDCName
    | IDCEditSetDCPhone
    | IDCEditSetDCNameAddress
    | IDCEditSetDCDescription
    | IDCEditSetPhotos
    | IDCEditSetVideos
    | IDCEditRemovePhotos
    | IDCEditRemoveVideos
    | IDCEditUpdateGoneDark12Month
    | IDCEditUpdateGoneDark24Month
    | IDCEditUpdateGoneDark36Month
    | IDCEditUpdateGoneDarkRecoveryTime
    | IDCEditSetFacility
    | IDCEditUpdateFacilityBuiltYear
    | IDCEditUpdateFacilityCompliance
    | IDCEditUpdateSecurityPhysicalMonitoring
    | IDCEditUpdateSecurityGuards
    | IDCEditUpdateSecurityFacilityAccess
    | DCEditUpdateSecurityCompRoomAccess
    | DCEditUpdateSecurityTenantEquipAccess
    | DCEditUpdateSecurityVisitorAccess
    | DCEditUpdateSecurityCCTV
    | IDCEditSetCapacity
    | IDCEditUpdateCapacityAvailFloorSpace
    | IDCEditUpdateCapacityTotalFloorSpace
    | IDCEditUpdateCapacityTotalCoolingCapacity
    | IDCEditUpdateCapacityAvailableCoolingCapacity
    | IDCEditUpdateCapacityTotalPower
    | IDCEditUpdateCapacityAvailPower
    | IDCEditUpdateCapacityPowerDensity
    | IDCEditUpdateCapacityPowerDensityType
    | IDCEditUpdateCapacityPowerVoltage
    | DCEditUpdateWorkAreasLoadingDock
    | DCEditUpdateWorkAreasShippingReceiving
    | DCEditUpdateWorkAreasStaging
    | DCEditUpdateWorkAreasClientWork
    | IDCEditSetLeaseConditions
    | IDCEditSetCapacityTerm
    | IDCEditSetCapacityAvailableDate
    | IDCEditSetCapacityMinPower
    | IDCEditSetCapacityMaxPower
    | IDCEditSetCapacityMinFloorSpace
    | IDCEditSetCapacityMaxFloorSpace
    | IDCEditSetCapacityMinCooling
    | IDCEditSetCapacityMaxCooling
    | IDCEditSetCapacityPreferredIndustries
    | IDCEditSetCapacityIndustryExclusions
    | IDCEditSetCapacityCountryExclusions
    | IDCEDITSetCapacityPreferredBuyerBusinessSize
    | IDCEditSetPricePerKWT
    | IDCEditSetPricingFloorSpace
    | IDCEditSetPricingRack
    | IDCEditSetPricingCagePrice
    | IDCEditSetPricingPrivateSuite
    | IDCEditSetPricingTiered
    | IDCEditSetPricingNumberOfTiers
    | IDCEditSetPricingChosenSLA
    | IDCRegistrationSetPurchaseFrom101kTo1M
    | IDCEditSetPurchaseFrom1To10k
    | IDCEditSetPurchaseGreaterThan1M
    | IDCEditSetCompanyBusinessSizeFrom1To10
    | IDCEditSetCompanyBusinessSizeFrom101To1000
    | IDCRegistrationSetCompanyBusinessSizeGreaterThan1000
    | IDCEditSetTermsOfLeaseFrom1To3
    | IDCEditSetTermsOfLeaseFrom3To5
    | IDCEditSetTermsOfLeaseGreaterThan5
    | IDCEditSetPricingCustomSLAFile
    | IDCEditSetPricingLeaseAgreement
    | IDCEditUpdateFacilitySpaceType
    | IDCEditUpdateFacilityRaisedFloors
    | IDCEditUpdateFacilityHWProvided
    | IDCEditUpdateFacilityEfficiency
    | IDCEditUpdateFacilityUpsBacked
    | IDCEditUpdateFacilityUpsRuntime
    | IDCEditUpdateFacilityUpsType
    | IDCEditUpdateFacilityUpsConfiguration
    | IDCEditUpdateFacilityGeneratorBacked
    | IDCEditUpdateFacilityGeneratorType
    | IDCEditUpdateFacilityGeneratorCapacity
    | IDCEditUpdateFacilityFuelDelivery
    | IDCEditUpdateFacilityGeneratorConfiguration
    | IDCEditUpdateFacilityGeneratorRuntime
    | IDCEditUpdateFacilityCoolingType
    | IDCEditUpdateFacilityCoolingConfiguration
    | IDCEditUpdateFacilityProviderName
    | IDCEditUpdateFacilityProviderType
    | IDCEditUpdateFacilityProviderCapacity
    | IDCEditUpdateFacilityTranchingDistanceName
    | IDCEditUpdateFacilityTranchingDistanceType
    | IDCEditUpdateFacilityTranchingDistanceCapacity
    | IDCEditUpdateCapacitySuppportAvailable
    | IDCEditUpdateCapacityClientAccess
    | IDCEditUpdateCapacityClientAreaOptions
    | IDCEditUpdateCoolingDensity
    | IDCEditUpdateCoolingDensityType
    | IDCEditUpdateCapacityBlendedIPTrafficAvailable
    | IDCEditUpdateCapacityBlendedIpTrafficCapacity
    | IDCEditUpdateCapacityBlendedIpTrafficDedicationPortion
    | IDCEditUpdateCapacityBlendedIpTrafficBurstable
    | IDCEditUpdateCapacityBlendedIpTrafficCelling
    | IDCEditUpdateCapacityBlendedIpTrafficCost
    | IDCEditUpdateCapacityBlendedIpTrafficBlend
    | IDCEditUpdateCapacitySharedIPTrafficAvailable
    | IDCEditUpdateCapacitySharedIpTrafficCapacity
    | IDCEditUpdateCapacitySharedIpTrafficDedicatedPortion
    | IDCEditUpdateCapacitySharedIpTrafficBurstable
    | IDCEditUpdateCapacitySharedIpTrafficCelling
    | IDCEditUpdateCapacitySharedIpTrafficCost;

interface IDCpurchaseRequestSetMsg {
    type: typeof DC_PURCHASE_REQUEST_SET_MESSAGE;
    dcPurchaseRequestMessage: string;
}

interface IDCpurchaseRequestSetPower {
    type: typeof DC_PURCHASE_REQUEST_SET_POWER;
    dcPurchaseRequestPower: number | Range;
}

interface IDCpurchaseRequestSetSpace {
    type: typeof DC_PURCHASE_REQUEST_SET_SPACE;
    dcPurchaseRequestSpace: number | Range;
}

interface IDCpurchaseRequestSetPrice {
    type: typeof DC_PURCHASE_REQUEST_SET_PRICE;
    dcPurchaseRequestPrice: number;
}

interface IDCpurchaseRequestReset {
    type: typeof DC_PURCHASE_REQUEST_RESET;
}

interface IDCEditSetSelectedDC {
    type: typeof DC_EDIT_SET_DC;
    selectedDC: IDataCenter;
}

interface IDCEditSetCurrPage {
    type: typeof DC_EDIT_SET_CURR_PAGE;
    currPage: DCRegistrationPageNum;
}

interface IDCEditSetUpdateLoading {
    type: typeof DC_EDIT_SET_LOADING;
    isLoading: boolean;
}

interface IDCEditSetDCName {
    type: typeof DC_EDIT_SET_DC_NAME;
    dcName: string;
}

interface IDCEditSetDCDescription {
    type: typeof DC_EDIT_SET_DC_DESCRIPTION;
    description: string;
}

interface IDCEditSetDCNameAddress {
    type: typeof DC_EDIT_SET_DC_ADDRESS;
    dcAddress: string;
}

interface IDCEditSetDCPhone {
    type: typeof DC_EDIT_SET_DC_PHONE;
    dcPhone: string;
}

interface IDCEditSetPhotos {
    type: typeof DC_EDIT_SET_DC_PHOTOS;
    photos: IPhoto[];
}

interface IDCEditSetVideos {
    type: typeof DC_EDIT_SET_DC_VIDEOS;
    videos: IVideo[];
}

interface IDCEditRemovePhotos {
    type: typeof DC_EDIT_REMOVE_DC_PHOTOS;
    imageId: number;
}

interface IDCEditRemoveVideos {
    type: typeof DC_EDIT_REMOVE_DC_VIDEOS;
    videoId: number;
}

interface IDCEditUpdateGoneDark12Month {
    type: typeof DC_EDIT_SET_GONE_DARK_12_MONTH;
    goneDark12Month: number;
}

interface IDCEditUpdateGoneDark24Month {
    type: typeof DC_EDIT_SET_GONE_DARK_24_MONTH;
    goneDark24Month: number;
}

interface IDCEditUpdateGoneDark36Month {
    type: typeof DC_EDIT_SET_GONE_DARK_36_MONTH;
    goneDark36Month: number;
}

interface IDCEditUpdateGoneDarkRecoveryTime {
    type: typeof DC_EDIT_SET_GONE_DARK_RECOVERY_TIME;
    recoveryTime: string;
}

// facility interfaces
interface IDCEditSetFacility {
    type: typeof DC_EDIT_SET_FACILITY;
    dcFacility: IDataCenterFacility;
}

interface IDCEditUpdateFacilityBuiltYear {
    type: typeof DC_EDIT_UPDATE_FACILITY_BUILT_YEAR;
    facilityBuiltYear: string;
}

interface IDCEditUpdateFacilityCompliance {
    type: typeof DC_EDIT_UPDATE_FACILITY_COMPLIANCE;
    facilityCompliance: string;
}

interface IDCEditUpdateFacilityCoolingType {
    type: typeof DC_EDIT_SET_FACILITY_COOLING_TYPE;
    facilityCoolingType: string;
}

interface IDCEditUpdateFacilityCoolingConfiguration {
    type: typeof DC_EDIT_SET_FACILITY_COOLING_CONFIGURATION;
    facilityCoolingConfiguration: string;
}

// facility security interfaces
interface IDCEditUpdateSecurityPhysicalMonitoring {
    type: typeof DC_EDIT_UPDATE_FACILITY_SECURITY_PHYSICAL_MONITORING;
    securityPhysicalMonitoring: string;
}

interface IDCEditUpdateSecurityGuards {
    type: typeof DC_EDIT_UPDATE_FACILITY_SECURITY_GUARDS;
    securityGuards: boolean;
}

interface IDCEditUpdateSecurityFacilityAccess {
    type: typeof DC_EDIT_UPDATE_FACILITY_SECURITY_FACILITY_ACCESS;
    securityFacilityAccess: string[];
}

interface DCEditUpdateSecurityCompRoomAccess {
    type: typeof DC_EDIT_UPDATE_FACILITY_SECURITY_COMP_ROOM_ACCESS;
    securityCompRoomAccess: string[];
}

interface DCEditUpdateSecurityTenantEquipAccess {
    type: typeof DC_EDIT_UPDATE_FACILITY_SECURITY_TENANT_EQUIP_ACCESS;
    securityTenantEquipmentAccess: string[];
}

interface DCEditUpdateSecurityVisitorAccess {
    type: typeof DC_EDIT_UPDATE_FACILITY_SECURITY_VISITOR_ACCESS;
    securityVisitorAccess: string[];
}

interface DCEditUpdateSecurityCCTV {
    type: typeof DC_EDIT_UPDATE_FACILITY_SECURITY_CCTV;
    securityCCTV: string[];
}

// work areas

interface DCEditUpdateWorkAreasLoadingDock {
    type: typeof DC_EDIT_UPDATE_WORK_AREAS_LOADING_DOCK;
    loadingDock: boolean;
}

interface DCEditUpdateWorkAreasShippingReceiving {
    type: typeof DC_EDIT_UPDATE_WORK_AREAS_SHIPPING_RECEIVING;
    shippingAndReceiving: boolean;
}

interface DCEditUpdateWorkAreasStaging {
    type: typeof DC_EDIT_UPDATE_WORK_AREAS_STAGING;
    stagingArea: boolean;
}

interface DCEditUpdateWorkAreasClientWork {
    type: typeof DC_EDIT_UPDATE_WORK_AREAS_CLIENT_WORK;
    clientWorkArea: boolean;
}

// capacity interfaces
interface IDCEditSetCapacity {
    type: typeof DC_EDIT_SET_CAPACITY;
    dcCapacity: ICapacityItem;
}

interface IDCEditUpdateCapacityAvailFloorSpace {
    type: typeof DC_EDIT_UPDATE_CAPACITY_AVAILABLE_FLOOR_SPACE;
    capacityAvailableFloorSpace: string;
}

interface IDCEditUpdateCapacityTotalFloorSpace {
    type: typeof DC_EDIT_UPDATE_CAPACITY_TOTAL_FLOOR_SPACE;
    capacityTotalFloorSpace: string;
}

export interface IDCEditUpdateCapacityTotalCoolingCapacity {
    type: typeof DC_EDIT_UPDATE_CAPACITY_TOTAL_COOLING_CAPACITY;
    capacityTotalCoolingCapacity: string;
}

export interface IDCEditUpdateCapacityAvailableCoolingCapacity {
    type: typeof DC_EDIT_UPDATE_CAPACITY_AVAILABLE_COOLING_CAPACITY;
    capacityAvailableCoolingCapacity: string;
}

export interface IDCEditUpdateCapacityTotalPower {
    type: typeof DC_EDIT_UPDATE_CAPACITY_TOTAL_POWER;
    capacityTotalPower: number;
}

export interface IDCEditUpdateCapacityAvailPower {
    type: typeof DC_EDIT_UPDATE_CAPACITY_AVAILABLE_POWER;
    capacityAvailablePower: string;
}

export interface IDCEditUpdateCapacityPowerDensity {
    type: typeof DC_EDIT_UPDATE_CAPACITY_POWER_DENSITY;
    capacityPowerDensity: string;
}

export interface IDCEditUpdateCapacityPowerDensityType {
    type: typeof DC_EDIT_UPDATE_CAPACITY_POWER_DENSITY_TYPE;
    capacityPowerDensityType: string;
}

export interface IDCEditUpdateCapacityPowerVoltage {
    type: typeof DC_EDIT_UPDATE_CAPACITY_POWER_VOLTAGE;
    capacityPowerVoltage: string;
}

// lease conditions interfaces
interface IDCEditSetLeaseConditions {
    type: typeof DC_EDIT_SET_LEASE_CONDITIONS;
    dcLeaseConditions: ILeaseConditionsItem;
}

// page-4
interface IDCEditUpdateFacilitySpaceType {
    type: typeof DC_EDIT_SET_FACILITY_SPACE_TYPE;
    facilitySpaceType: string;
}

interface IDCEditUpdateFacilityRaisedFloors {
    type: typeof DC_EDIT_SET_FACILITY_RAISED_FLOORS;
    facilityRaisedFloors: boolean;
}

interface IDCEditUpdateFacilityHWProvided {
    type: typeof DC_EDIT_SET_FACILITY_HW_PROVIDED;
    facilityHWProvided: string;
}

interface IDCEditUpdateFacilityEfficiency {
    type: typeof DC_EDIT_SET_FACILITY_EFFICIENCY;
    facilityEfficiency: string;
}

interface IDCEditUpdateFacilityUpsBacked {
    type: typeof DC_EDIT_SET_FACILITY_UPS_BACKED;
    facilityUpsBacked: boolean;
}

interface IDCEditUpdateFacilityUpsRuntime {
    type: typeof DC_EDIT_SET_FACILITY_UPS_RUNTIME;
    facilityUpsRuntime: string;
}

interface IDCEditUpdateFacilityUpsType {
    type: typeof DC_EDIT_SET_FACILITY_UPS_TYPE;
    facilityUpsType: string;
}

interface IDCEditUpdateFacilityUpsConfiguration {
    type: typeof DC_EDIT_SET_FACILITY_UPS_CONFIGURATION;
    facilityUpsConfiguration: string;
}

interface IDCEditUpdateFacilityGeneratorBacked {
    type: typeof DC_EDIT_SET_FACILITY_GENERATOR_BACKED;
    facilityGeneratorBacked: boolean;
}

interface IDCEditUpdateFacilityGeneratorType {
    type: typeof DC_EDIT_SET_FACILITY_GENERATOR_TYPE;
    facilityGeneratorType: string;
}

interface IDCEditUpdateFacilityGeneratorCapacity {
    type: typeof DC_EDIT_SET_FACILITY_GENERATOR_CAPACITY;
    facilityGeneratorCapacity: number;
}

interface IDCEditUpdateFacilityFuelDelivery {
    type: typeof DC_EDIT_SET_FACILITY_FUEL_DELIVERY;
    facilityFuelDelivery: boolean;
}

interface IDCEditUpdateFacilityGeneratorConfiguration {
    type: typeof DC_EDIT_SET_FACILITY_GENERATOR_CONFIGURATION;
    facilityGeneratorConfiguration: string;
}

interface IDCEditUpdateFacilityGeneratorRuntime {
    type: typeof DC_EDIT_SET_FACILITY_GENERATOR_RUNTIME;
    facilityGeneratorRuntime: string;
}

interface IDCEditUpdateFacilityProviderName {
    type: typeof DC_EDIT_SET_NP_NAME;
    networkProviderName: string;
}

interface IDCEditUpdateFacilityProviderType {
    type: typeof DC_EDIT_SET_NP_TYPE;
    networkProviderNetworkType: string;
}

interface IDCEditUpdateFacilityProviderCapacity {
    type: typeof DC_EDIT_SET_NP_CAPACITY;
    networkProviderNetworkCapacity: string;
}

interface IDCEditUpdateFacilityTranchingDistanceName {
    type: typeof DC_EDIT_SET_TRANCHING_DISTANCE_NP_NAME;
    npTranchingDistanceName: string;
}

interface IDCEditUpdateFacilityTranchingDistanceType {
    type: typeof DC_EDIT_SET_TRANCHING_DISTANCE_NP_TYPE;
    npTranchingDistanceNetworkType: string;
}

interface IDCEditUpdateFacilityTranchingDistanceCapacity {
    type: typeof DC_EDIT_SET_TRANCHING_DISTANCE_NP_CAPACITY;
    npTranchingDistanceNetworkCapacity: string;
}

interface IDCEditUpdateCapacitySuppportAvailable {
    type: typeof DC_EDIT_SET_CAPACITY_SUPPORT_AVAIL;
    capacitySuppportAvailable: string;
}

interface IDCEditUpdateCapacityClientAccess {
    type: typeof DC_EDIT_SET_CAPACITY_CLIENT_ACCESS;
    capacityClientAccess: string;
}

interface IDCEditUpdateCapacityClientAreaOptions {
    type: typeof DC_EDIT_SET_CAPACITY_CLIENT_AREA_OPTIONS;
    capacityClientAreaOptions: string;
}

interface IDCEditUpdateCoolingDensity {
    type: typeof DC_EDIT_SET_CAPACITY_COOLING_DENSITY;
    capacityCoolingDensity: string;
}

interface IDCEditUpdateCoolingDensityType {
    type: typeof DC_EDIT_SET_CAPACITY_COOLING_DENSITY_TYPE;
    capacityCoolingDensityType: string;
}

interface IDCEditUpdateCapacityBlendedIPTrafficAvailable {
    type: typeof DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_AVAILABLE;
    capacityBlendedIPTrafficAvailable: boolean;
}

interface IDCEditUpdateCapacityBlendedIpTrafficCapacity {
    type: typeof DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_CAPACITY;
    capacityBlendedIpTrafficCapacity: number;
}

interface IDCEditUpdateCapacityBlendedIpTrafficDedicationPortion {
    type: typeof DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_DEDICATION_PORTION;
    capacityBlendedIpTrafficDedicationPortion: number;
}

interface IDCEditUpdateCapacityBlendedIpTrafficBurstable {
    type: typeof DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_BURSTABLE;
    capacityBlendedIpTrafficBurstable: boolean;
}

interface IDCEditUpdateCapacityBlendedIpTrafficCelling {
    type: typeof DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_CELLING;
    capacityBlendedIpTrafficCelling: number;
}

interface IDCEditUpdateCapacityBlendedIpTrafficCost {
    type: typeof DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_COST;
    capacityBlendedIpTrafficCost: string;
}

interface IDCEditUpdateCapacityBlendedIpTrafficBlend {
    type: typeof DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_BLEND;
    capacityBlendedIpTrafficBlend: string;
}

interface IDCEditUpdateCapacitySharedIPTrafficAvailable {
    type: typeof DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_AVAILABLE;
    capacitySharedIPTrafficAvailable: boolean;
}

interface IDCEditUpdateCapacitySharedIpTrafficCapacity {
    type: typeof DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_CAPACITY;
    capacitySharedIpTrafficCapacity: number;
}

interface IDCEditUpdateCapacitySharedIpTrafficDedicatedPortion {
    type: typeof DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_DEDICATION_PORTION;
    capacitySharedIpTrafficDedicatedPortion: number;
}

interface IDCEditUpdateCapacitySharedIpTrafficBurstable {
    type: typeof DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_BURSTABLE;
    capacitySharedIpTrafficBurstable: boolean;
}

interface IDCEditUpdateCapacitySharedIpTrafficCelling {
    type: typeof DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_CELLING;
    capacitySharedIpTrafficCelling: number;
}

interface IDCEditUpdateCapacitySharedIpTrafficCost {
    type: typeof DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_COST;
    capacitySharedIpTrafficCost: string;
}

export interface IPhoto {
    id: number;
    photo: string;
    small_photo: string;
    sort_order: string | null;
    description: string | null;
    enabled: boolean;
}

export interface IVideo extends IPhoto {
    video: string;
}

export interface IDataCenter {
    id: number;
    name: string;
    phone_number: string;
    address: IDataCenterStructureAddress | any;
    description: string;
    uptime_tier_classification: string;
    rating: string;
    active: boolean;
    status: string;
    enabled: boolean;
    photos: IPhoto[];
    videos: IVideo[];
    certificates: string[];
    gone_dark: IGoneDarkTimes;
    payment_status: string | null;
}

interface IWorkAreas {
    loading_dock: boolean;
    shipping_and_receiving: boolean;
    staging_area: boolean;
    client_work_area: boolean;
}

export interface IDCEditData {
    mode: string;
    dcId: number;
    capacityBlendedIPTrafficAvail: boolean;
    capacitySharedIPTrafficAvail: boolean;
    isFacilityUpsBacked: boolean;
    isFacilityGeneratorBacked: boolean;
    isFuelDeliveryAvailable: boolean;
    currPage: DCRegistrationPageNum;
    isLoading: boolean;
    dcFacility: IDataCenterFacility;
    dcCapacity: ICapacityItem;
    dataCenter: IDataCenter;
    workAreas: IWorkAreas;
    dcLeaseConditions: ILeaseConditionsItem;
}

export interface IDCEditStart {
    dcId: number;
    mode: string;
    type: typeof DC_EDIT_START;
}

export interface IDCREgistrationSet {
    dcId: number;
    mode: string;
    type: typeof DC_REGISTRATION_SET;
}

export interface Range {
    min: number;
    max: number;
}

export function isRange(item: any): item is Range {
    return (item as Range).min !== undefined;
}
