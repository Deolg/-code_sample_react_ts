import { DCRegistrationActionType } from 'store/store.actions';
import { CapacityActionType } from 'store/capacity/capacity.types';
import { DCRegistrationPageNum } from 'store/store.types';

export interface IPage5Props {
    // securityGuards: string;
    // securityFacilityAccess: string;
    // securityCompRoomAccess: string;
    // securityTenantEquipmentAccess: string;
    // securityVisitorAccess: string;
    // securityNetworkMonitoring: string;
    // securityNetworkMonitoringPhysical: boolean;
    // securityTotalCoolingCapacity: string;
    capacityTotalPower: number;
    capacityAvailablePower: string;
    capacityPowerDensity: string;
    capacityPowerDensityType: string;
    capacityPowerVoltage: string;
    facilityCompliance: string;
    dcRegistrationSetCurrPage: (
        currPage: DCRegistrationPageNum
    ) => DCRegistrationActionType;
    // dcRegistrationSetSecurityFacilityAccess: (
    //     securityFacilityAccess: string
    // ) => DCRegistrationActionType;
    // dcRegistrationSetSecurityCompRoomAccess: (
    //     securityCompRoomAccess: string
    // ) => DCRegistrationActionType;
    // dcRegistrationSetSecurityTenantEquipmentAccess: (
    //     securityTenantEquipmentAccess: string
    // ) => DCRegistrationActionType;
    // dcRegistrationSetSecurityVisitorAccess: (
    //     securityVisitorAccess: string
    // ) => DCRegistrationActionType;
    // dcRegistrationSetSecurityNetworkMonitoring: (
    //     securityNetworkMonitoring: string
    // ) => DCRegistrationActionType;
    // dcRegistrationSetSecurityNetworkMonitoringPhysical: (
    //     securityNetworkMonitoringPhysical: boolean
    // ) => DCRegistrationActionType;
    // dcRegistrationSetSecurityTotalCoolingCapacity: (
    //     securityTotalCoolingCapacity: string
    // ) => DCRegistrationActionType;
    // dcRegistrationSetCapacityPowerDensity: (
    //     capacityPowerDensity: string
    // ) => DCRegistrationActionType;
    dcRegistrationSetCapacityTotalPower: (
        capacityTotalPower: number
    ) => DCRegistrationActionType;
    updateCapacityAvailablePower: (
        CapacityAvailablePower: string
    ) => CapacityActionType;
    dcRegistrationSetCapacityPowerDensityType: (
        capacityPowerDensityType: string
    ) => DCRegistrationActionType;
    dcRegistrationSetCapacityPowerVoltage: (
        capacityPowerVoltage: string
    ) => DCRegistrationActionType;
    dcRegistrationSetFacilityCompliance: (
        facilityCompliance: string
    ) => DCRegistrationActionType;
}
