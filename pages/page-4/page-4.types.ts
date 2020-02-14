import { DCRegistrationActionType } from 'store/store.actions';
import { CapacityActionType } from 'store/capacity/capacity.types';
import { DCRegistrationPageNum } from 'store/store.types';

export interface IPage4Props {
    facilityBuiltYear: string;
    facilitySpaceType: string;
    facilityRaisedFloors: boolean;
    facilityHWProvided: string;
    facilityEfficiency: string;
    capacityTotalFloorSpace: string;
    capacityAvailableFloorSpace: string;
    facilityUpsBacked: boolean;
    facilityUpsRuntime: string;
    facilityUpsType: string;
    facilityUpsConfiguration: string;
    facilityGeneratorBacked: boolean;
    facilityGeneratorType: string;
    facilityGeneratorCapacity: string;
    facilityFuelDelivery: boolean;
    facilityGeneratorConfiguration: string;
    dcNetworkProviderName: string;
    dcNetworkProviderNetworkType: string;
    dcNetworkProviderNetworkCapacity: string;
    capacitySuppportAvailable: string;
    capacityClientAccess: string;
    capacityClientAreaOptions: string;
    capacityTotalCoolingCapacity: string;
    capacityAvailableCoolingCapacity: string;
    capacityCoolingDensity: string;
    capacityCoolingDensityType: string;
    capacityBlendedIPTrafficAvailable: boolean;
    capacitySharedIPTrafficAvailable: boolean;
    capacitySharedIpTrafficCapacity: number;
    capacitySharedIpTrafficDedicatedPortion: number;
    capacitySharedIpTrafficBurstable: boolean;
    capacitySharedIpTrafficCelling: number;
    capacitySharedIpTrafficCost: string;
    capacityBlendedIpTrafficCapacity: number;
    capacityBlendedIpTrafficDedicatedPortion: number;
    capacityBlendedIpTrafficBurstable: boolean;
    capacityBlendedIpTrafficCelling: number;
    capacityBlendedIpTrafficCost: string;
    capacityBlendedIpTrafficBlend: string;
    dcRegistrationSetCurrPage: (
        currPage: DCRegistrationPageNum
    ) => DCRegistrationActionType;
    dcRegistrationSetFacilityBuiltYear: (
        facilityBuiltYear: string
    ) => DCRegistrationActionType;
    dcRegistrationSetFacilitySpaceType: (
        facilitySpaceType: string
    ) => DCRegistrationActionType;
    dcRegistrationSetFacilityRaisedFloors: (
        facilityRaisedFloors: boolean
    ) => DCRegistrationActionType;
    dcRegistrationSetFacilityHWProvided: (
        facilityHWProvided: string
    ) => DCRegistrationActionType;
    dcRegistrationSetFacilityEfficiency: (
        facilityEfficiency: string
    ) => DCRegistrationActionType;
    dcRegistrationSetCapacityTotalFloorSpace: (
        capacityTotalFloorSpace: string
    ) => DCRegistrationActionType;
    dcRegistrationSetCapacityAvailableFloorSpace: (
        capacityAvailableFloorSpace: string
    ) => DCRegistrationActionType;
    dcRegistrationSetFacilityUpsBacked: (
        facilityUpsBacked: boolean
    ) => DCRegistrationActionType;
    dcRegistrationSetFacilityUpsRuntime: (
        facilityUpsRuntime: string
    ) => DCRegistrationActionType;
    dcRegistrationSetFacilityUpsType: (
        facilityUpsType: string
    ) => DCRegistrationActionType;
    dcRegistrationSetFacilityUpsConfiguration: (
        facilityUpsConfiguration: string
    ) => DCRegistrationActionType;
    dcRegistrationSetFacilityGeneratorBacked: (
        facilityGeneratorBacked: boolean
    ) => DCRegistrationActionType;
    dcRegistrationSetFacilityGeneratorType: (
        facilityGeneratorType: string
    ) => DCRegistrationActionType;
    dcRegistrationSetFacilityGeneratorCapacity: (
        facilityGeneratorCapacity: string
    ) => DCRegistrationActionType;
    dcRegistrationSetFacilityFuelDelivery: (
        facilityFuelDelivery: boolean
    ) => DCRegistrationActionType;
    dcRegistrationSetFacilityGeneratorConfiguration: (
        facilityGeneratorConfiguration: string
    ) => DCRegistrationActionType;
    dcRegistrationSetNPName: (
        networkProviderName: string
    ) => DCRegistrationActionType;
    dcRegistrationSetNPType: (
        networkProviderNetworkType: string
    ) => DCRegistrationActionType;
    dcRegistrationSetNPCapacity: (
        networkProviderNetworkCapacity: string
    ) => DCRegistrationActionType;
    dcRegistrationSetCapacitySuppportAvailable: (
        capacitySuppportAvailable: string
    ) => DCRegistrationActionType;
    dcRegistrationSetCapacityClientAccess: (
        capacityClientAccess: string
    ) => DCRegistrationActionType;
    dcRegistrationSetCapacityClientAreaOptions: (
        capacityClientAreaOptions: string
    ) => DCRegistrationActionType;
    dcRegistrationSetCapacityTotalCoolingCapacity: (
        capacityTotalCoolingCapacity: string
    ) => DCRegistrationActionType;
    dcRegistrationSetCapacityAvailableCoolingCapacity: (
        capacityAvailableCoolingCapacity: string
    ) => DCRegistrationActionType;
    dcRegistrationSetCapacityCoolingDensity: (
        capacityCoolingDensity: string
    ) => DCRegistrationActionType;
    dcRegistrationSetCapacityCoolingDensityType: (
        capacityCoolingDensityType: string
    ) => DCRegistrationActionType;
    dcRegistrationSetCapacityBlendedIPTrafficAvailable: (
        capacityBlendedIPTrafficAvailable: boolean
    ) => DCRegistrationActionType;
    dcRegistrationSetCapacitySharedIPTrafficAvailable: (
        capacitySharedIPTrafficAvailable: boolean
    ) => DCRegistrationActionType;

    updateCapacitySharedIpTrafficCapacity: (
        capacitySharedIpTrafficCapacity: number
    ) => CapacityActionType;
    updateCapacitySharedIpTrafficDedicationPortion: (
        capacitySharedIpTrafficDedicatedPortion: number
    ) => CapacityActionType;
    updateCapacitySharedIpTrafficBurstable: (
        capacitySharedIpTrafficBurstable: boolean
    ) => CapacityActionType;
    updateCapacitySharedIpTrafficCelling: (
        capacitySharedIpTrafficCelling: number
    ) => CapacityActionType;
    updateCapacitySharedIpTrafficCost: (
        capacitySharedIpTrafficCost: string
    ) => CapacityActionType;
    updateCapacityBlendedIpTrafficCapacity: (
        capacityBlendedIpTrafficCapacity: number
    ) => CapacityActionType;
    updateCapacityBlendedIpTrafficDedicationPortion: (
        capacityBlendedIpTrafficDedicatedPortion: number
    ) => CapacityActionType;
    updateCapacityBlendedIpTrafficBurstable: (
        capacityBlendedIpTrafficBurstable: boolean
    ) => CapacityActionType;
    updateCapacityBlendedIpTrafficCelling: (
        capacityBlendedIpTrafficCelling: number
    ) => CapacityActionType;
    updateCapacityBlendedIpTrafficCost: (
        capacityBlendedIpTrafficCost: string
    ) => CapacityActionType;
    updateCapacityBlendedIpTrafficBlend: (
        capacityBlendedIpTrafficBlend: string
    ) => CapacityActionType;
}
