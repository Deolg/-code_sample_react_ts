import React from 'react';
import { connect } from 'react-redux';

import { RootStore } from 'store/store.reducer';
import { DCRegistrationPageNum } from 'store/store.types';
import {
    dcRegistrationSetCurrPage,
    dcRegistrationSetSecurityGuards,
    dcRegistrationSetSecurityPhysicalMonitoring,
    dcRegistrationSetSecurityFacilityAccess,
    dcRegistrationSetSecurityCompRoomAccess,
    dcRegistrationSetSecurityTenantEquipmentAccess,
    dcRegistrationSetSecurityVisitorAccess,
    dcRegistrationSetSecurityCCTV,
} from 'store/store.actions';

import {
    LabeledControl,
    SelectInput,
    SimpleDropdown,
    YesNoControl,
} from 'controls';

import {
    CenterPageOuter,
    CenterPageBody,
    NextButton,
    FlexRowWrapper,
    Card,
    SaveAndContinueLabel,
    PageSmallTitle,
} from '../../dashboard-dc-registration.styled';
import { IPage6Props } from './page-6.types';
import {
    CCTV_OPTIONS,
    PHYSICAL_MONITORING_OPTIONS,
    FACILITY_ACCESS_OPTIONS,
    COMP_ROOM_ACCESS_OPTIONS,
    TENANT_EQUIPMENT_ACCESS_OPTIONS,
    VISITOR_ACCESS_OPTIONS,
} from './page-6.options';

const Page6Component = (props: IPage6Props) => {
    const handleSecurityGuardsChange = (checked: boolean) => {
        props.dcRegistrationSetSecurityGuards(checked);
    };

    const handleSecurityPhysicalMonitoringChange = (value?: string) => {
        if (value) {
            props.dcRegistrationSetSecurityPhysicalMonitoring(value);
        } else {
            props.dcRegistrationSetSecurityPhysicalMonitoring('');
        }
    };

    const handleFacilityAccessChange = (
        value: string[] | string | undefined
    ) => {
        if (value) {
            props.dcRegistrationSetSecurityFacilityAccess(value);
        } else {
            props.dcRegistrationSetSecurityFacilityAccess([]);
        }
    };

    const handleCCTVChange = (value: string[] | string | undefined) => {
        if (value) {
            props.dcRegistrationSetSecurityCCTV(value);
        } else {
            props.dcRegistrationSetSecurityCCTV([]);
        }
    };

    const handleCompRoomAccessChange = (
        value: string[] | string | undefined
    ) => {
        if (value) {
            props.dcRegistrationSetSecurityCompRoomAccess(value);
        } else {
            props.dcRegistrationSetSecurityCompRoomAccess([]);
        }
    };

    const handleTenantEquipmentAccessChange = (
        value: string[] | string | undefined
    ) => {
        if (value) {
            props.dcRegistrationSetSecurityTenantEquipmentAccess(value);
        } else {
            props.dcRegistrationSetSecurityTenantEquipmentAccess([]);
        }
    };

    const handleVisitorAccessChange = (
        value: string[] | string | undefined
    ) => {
        if (value) {
            props.dcRegistrationSetSecurityVisitorAccess(value);
        } else {
            props.dcRegistrationSetSecurityVisitorAccess([]);
        }
    };

    const handleNext = () => {
        props.dcRegistrationSetCurrPage(DCRegistrationPageNum.Page7);
    };

    return (
        <CenterPageOuter>
            <PageSmallTitle>Security</PageSmallTitle>
            <FlexRowWrapper justifyContent="flex-start">
                <CenterPageBody>
                    <Card>
                        <h1>Guards</h1>
                        <LabeledControl label="Security Guards:">
                            <YesNoControl
                                checked={props.securityGuards}
                                onChange={handleSecurityGuardsChange}
                            />
                        </LabeledControl>
                        <LabeledControl label="Physical security monitoring:">
                            <SimpleDropdown
                                placeholder="Select..."
                                options={PHYSICAL_MONITORING_OPTIONS}
                                value={props.securityPhysicalMonitoring}
                                onChange={
                                    handleSecurityPhysicalMonitoringChange
                                }
                            />
                        </LabeledControl>
                        <LabeledControl label="CCTV:">
                            <SelectInput
                                isMulti
                                options={CCTV_OPTIONS}
                                value={props.securityCCTV}
                                onChange={handleCCTVChange}
                            />
                        </LabeledControl>
                    </Card>
                </CenterPageBody>
                <CenterPageBody>
                    <LabeledControl label="Facility access:">
                        <SelectInput
                            isMulti
                            options={FACILITY_ACCESS_OPTIONS}
                            value={props.securityFacilityAccess}
                            onChange={handleFacilityAccessChange}
                        />
                    </LabeledControl>
                    <LabeledControl label="Computer room access:">
                        <SelectInput
                            isMulti
                            options={COMP_ROOM_ACCESS_OPTIONS}
                            value={props.securityCompRoomAccess}
                            onChange={handleCompRoomAccessChange}
                        />
                    </LabeledControl>
                    <LabeledControl label="Tenant equipment access:">
                        <SelectInput
                            isMulti
                            options={TENANT_EQUIPMENT_ACCESS_OPTIONS}
                            value={props.securityTenantEquipmentAccess}
                            onChange={handleTenantEquipmentAccessChange}
                        />
                    </LabeledControl>
                    <LabeledControl label="Visitor access:">
                        <SelectInput
                            isMulti
                            options={VISITOR_ACCESS_OPTIONS}
                            value={props.securityVisitorAccess}
                            onChange={handleVisitorAccessChange}
                        />
                    </LabeledControl>
                </CenterPageBody>
            </FlexRowWrapper>
            <NextButton onClick={handleNext}>Next</NextButton>
            <SaveAndContinueLabel>Save and continue later</SaveAndContinueLabel>
        </CenterPageOuter>
    );
};

const mapStateToProps = (state: RootStore) => ({
    securityPhysicalMonitoring: state.dcRegistration.securityPhysicalMonitoring,
    securityGuards: state.dcRegistration.securityGuards,
    securityFacilityAccess: state.dcRegistration.securityFacilityAccess,
    securityCompRoomAccess: state.dcRegistration.securityCompRoomAccess,
    securityTenantEquipmentAccess:
        state.dcRegistration.securityTenantEquipmentAccess,
    securityVisitorAccess: state.dcRegistration.securityVisitorAccess,
    securityCCTV: state.dcRegistration.securityCCTV,
});

const dispatchProps = {
    dcRegistrationSetCurrPage,
    dcRegistrationSetSecurityGuards,
    dcRegistrationSetSecurityPhysicalMonitoring,
    dcRegistrationSetSecurityFacilityAccess,
    dcRegistrationSetSecurityCompRoomAccess,
    dcRegistrationSetSecurityTenantEquipmentAccess,
    dcRegistrationSetSecurityVisitorAccess,
    dcRegistrationSetSecurityCCTV,
};

export const Page6 = connect(mapStateToProps, dispatchProps)(Page6Component);
