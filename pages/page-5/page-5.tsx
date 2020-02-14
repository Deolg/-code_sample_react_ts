import React from 'react';
import { connect } from 'react-redux';

import { RootStore } from 'store/store.reducer';
import { DCRegistrationPageNum } from 'store/store.types';
import {
    dcRegistrationSetCurrPage,
    dcRegistrationSetCapacityTotalPower,
    dcRegistrationSetCapacityPowerDensity,
    dcRegistrationSetCapacityPowerDensityType,
    dcRegistrationSetCapacityPowerVoltage,
    dcRegistrationSetFacilityCompliance,
} from 'store/store.actions';

import { updateCapacityAvailablePower } from 'store/capacity/capacity.actions';

import {
    CenterPageOuter,
    ColumnBody,
    NextButton,
    SaveAndContinueLabel,
    PageSmallTitle,
} from '../../dashboard-dc-registration.styled';
import { LabeledControl, SimpleDropdown, SimpleInput } from 'controls';
import { POWER_DENSITY_OPTIONS, POWER_VOLTAGE_OPTIONS } from './page-5.options';

import { IPage5Props } from './page-5.types';

const Page5Component = (props: IPage5Props) => {
    const handleCapacityTotalPowerChange = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (!isNaN(Number(evt.target.value))) {
            props.dcRegistrationSetCapacityTotalPower(Number(evt.target.value));
        }
    };

    const handleCapacityAvailablePowerChange = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => {
        props.updateCapacityAvailablePower(evt.target.value);
    };

    const handleCapacityPowerDensityTypeChange = (value?: string) => {
        if (value) {
            props.dcRegistrationSetCapacityPowerDensityType(value);
        } else {
            props.dcRegistrationSetCapacityPowerDensityType('');
        }
    };

    const handleCapacityPowerVoltageChange = (value?: string) => {
        if (value) {
            props.dcRegistrationSetCapacityPowerVoltage(value);
        } else {
            props.dcRegistrationSetCapacityPowerVoltage('');
        }
    };

    const handleFacilityComplianceChange = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => {
        props.dcRegistrationSetFacilityCompliance(evt.target.value);
    };

    const handleNext = () => {
        props.dcRegistrationSetCurrPage(DCRegistrationPageNum.Page6);
    };

    return (
        <CenterPageOuter>
            <ColumnBody>
                <PageSmallTitle>Power Capacity</PageSmallTitle>
                <LabeledControl label="Total power capacity:">
                    <SimpleInput
                        placeholder="Type your text"
                        value={props.capacityTotalPower}
                        onChange={handleCapacityTotalPowerChange}
                    />
                </LabeledControl>
                <LabeledControl label="Available power capacity:">
                    <SimpleInput
                        placeholder="Type your text"
                        value={props.capacityAvailablePower}
                        onChange={handleCapacityAvailablePowerChange}
                    />
                </LabeledControl>
                <LabeledControl label="Power density:">
                    <SimpleDropdown
                        placeholder="Select..."
                        options={POWER_DENSITY_OPTIONS}
                        value={props.capacityPowerDensityType}
                        onChange={handleCapacityPowerDensityTypeChange}
                    />
                </LabeledControl>
                <LabeledControl label="Power voltage available:">
                    <SimpleDropdown
                        placeholder="Select..."
                        options={POWER_VOLTAGE_OPTIONS}
                        value={props.capacityPowerVoltage}
                        onChange={handleCapacityPowerVoltageChange}
                    />
                </LabeledControl>
                <LabeledControl label="Compliance:">
                    <SimpleInput
                        placeholder="Type your text"
                        value={props.facilityCompliance}
                        onChange={handleFacilityComplianceChange}
                    />
                </LabeledControl>
                <NextButton onClick={handleNext}>Next</NextButton>
                <SaveAndContinueLabel>
                    Save and continue later
                </SaveAndContinueLabel>
            </ColumnBody>
        </CenterPageOuter>
    );
};

const mapStateToProps = (state: RootStore) => ({
    capacityTotalPower: state.dcRegistration.capacityTotalPower,
    capacityAvailablePower: state.capacity.capacityAvailablePower,
    capacityPowerDensity: state.dcRegistration.capacityPowerDensity,
    capacityPowerDensityType: state.dcRegistration.capacityPowerDensityType,
    capacityPowerVoltage: state.dcRegistration.capacityPowerVoltage,
    facilityCompliance: state.dcRegistration.facilityCompliance,
});

const dispatchProps = {
    dcRegistrationSetCurrPage,
    dcRegistrationSetCapacityTotalPower,
    updateCapacityAvailablePower,
    dcRegistrationSetCapacityPowerDensity,
    dcRegistrationSetCapacityPowerDensityType,
    dcRegistrationSetCapacityPowerVoltage,
    dcRegistrationSetFacilityCompliance,
};

export const Page5 = connect(mapStateToProps, dispatchProps)(Page5Component);
