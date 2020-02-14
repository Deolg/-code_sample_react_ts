import { DCRegistrationActionType } from 'store/store.actions';
import { DCRegistrationPageNum } from 'store/store.types';

export interface IPage6Props {
    securityGuards: boolean;
    securityPhysicalMonitoring: string;
    securityFacilityAccess: string[];
    securityCompRoomAccess: string[];
    securityTenantEquipmentAccess: string[];
    securityVisitorAccess: string[];
    securityCCTV: string[];
    dcRegistrationSetSecurityGuards: (
        checked: boolean
    ) => DCRegistrationActionType;
    dcRegistrationSetCurrPage: (
        currPage: DCRegistrationPageNum
    ) => DCRegistrationActionType;
    dcRegistrationSetSecurityPhysicalMonitoring: (
        securityPhysicalMonitoring: string
    ) => DCRegistrationActionType;
    dcRegistrationSetSecurityFacilityAccess: (
        securityFacility: any
    ) => DCRegistrationActionType;
    dcRegistrationSetSecurityCompRoomAccess: (
        securityCompRoom: any
    ) => DCRegistrationActionType;
    dcRegistrationSetSecurityTenantEquipmentAccess: (
        securityTenantEquipment: any
    ) => DCRegistrationActionType;
    dcRegistrationSetSecurityVisitorAccess: (
        securityVisitor: any
    ) => DCRegistrationActionType;
    dcRegistrationSetSecurityCCTV: (
        securityCCTV: any
    ) => DCRegistrationActionType;
}
