import React, { useState } from 'react';
import { connect } from 'react-redux';
import { RootStore } from 'store/store.reducer';
import { DCRegistrationPageNum } from 'store/store.types';
import {
    dcRegistrationSetCurrPage,
    dcRegistrationSetFacilityBuiltYear,
    dcRegistrationSetFacilitySpaceType,
    dcRegistrationSetFacilityRaisedFloors,
    dcRegistrationSetFacilityHWProvided,
    dcRegistrationSetFacilityEfficiency,
    dcRegistrationSetCapacityTotalFloorSpace,
    dcRegistrationSetCapacityAvailableFloorSpace,
    dcRegistrationSetFacilityUpsBacked,
    dcRegistrationSetFacilityUpsRuntime,
    dcRegistrationSetFacilityUpsType,
    dcRegistrationSetFacilityUpsConfiguration,
    dcRegistrationSetFacilityGeneratorBacked,
    dcRegistrationSetFacilityGeneratorType,
    dcRegistrationSetFacilityGeneratorCapacity,
    dcRegistrationSetFacilityFuelDelivery,
    dcRegistrationSetFacilityGeneratorConfiguration,
    dcRegistrationSetNPName,
    dcRegistrationSetNPType,
    dcRegistrationSetNPCapacity,
    dcRegistrationSetCapacitySuppportAvailable,
    dcRegistrationSetCapacityClientAccess,
    dcRegistrationSetCapacityClientAreaOptions,
    dcRegistrationSetCapacityTotalCoolingCapacity,
    dcRegistrationSetCapacityAvailableCoolingCapacity,
    dcRegistrationSetCapacityCoolingDensity,
    dcRegistrationSetCapacityCoolingDensityType,
    dcRegistrationSetCapacityBlendedIPTrafficAvailable,
    dcRegistrationSetCapacitySharedIPTrafficAvailable,
} from 'store/store.actions';

import {
    updateCapacitySharedIpTrafficCapacity,
    updateCapacitySharedIpTrafficDedicationPortion,
    updateCapacitySharedIpTrafficBurstable,
    updateCapacitySharedIpTrafficCelling,
    updateCapacitySharedIpTrafficCost,
    updateCapacityBlendedIpTrafficCapacity,
    updateCapacityBlendedIpTrafficDedicationPortion,
    updateCapacityBlendedIpTrafficBurstable,
    updateCapacityBlendedIpTrafficCelling,
    updateCapacityBlendedIpTrafficCost,
    updateCapacityBlendedIpTrafficBlend,
} from 'store/capacity/capacity.actions';

import {
    LabeledControl,
    YesNoControl,
    SimpleInput,
    SimpleDropdown,
    SimplePopup,
} from 'controls';
import {
    CenterPageOuter,
    NextButton,
    ColumnsPageOuter,
    ColumnBody,
    PageSmallTitle,
    DoubleWrapper,
    TemplateWrapper,
    TemplateTitle,
    ThreeOneWrapper,
    SaveAndContinueLabel,
} from '../../dashboard-dc-registration.styled';
import { AddButton } from 'controls/add-button';
import { PopupProviderInfo } from 'controls/popup-provider-info';

import { IPage4Props } from './page-4.types';
import {
    SPACE_TYPE_OPTIONS,
    EFFICIENCY_OPTIONS,
    UPS_TYPE_OPTIONS,
    CONFIGURATION_OPTIONS,
    GENERATOR_TYPE_OPTIONS,
    SUPPORT_AVAILABLE_OPTIONS,
    CLIENT_ACCESS_OPTIONS,
    CLIENT_AREA_OPTIONS,
    HARDWARE_OPTIONS,
} from './page-4.options';

const Page4Component = (props: IPage4Props) => {
    const [isProviderInfoOpen, setProviderInfoOpen] = useState(false);

    const handleBuiltYearChange = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => {
        props.dcRegistrationSetFacilityBuiltYear(evt.target.value);
    };

    const handleSpaceTypeChange = (value?: string) => {
        if (value) {
            props.dcRegistrationSetFacilitySpaceType(value);
        } else {
            props.dcRegistrationSetFacilitySpaceType('');
        }
    };

    const handleRaisedFloorsChange = (checked: boolean) => {
        props.dcRegistrationSetFacilityRaisedFloors(checked);
    };

    const handlefacilityHWProvidedChange = (value?: string) => {
        if (value) {
            props.dcRegistrationSetFacilityHWProvided(value);
        } else {
            props.dcRegistrationSetFacilityHWProvided('');
        }
    };

    const handleEfficiencyChange = (value?: string) => {
        if (value) {
            props.dcRegistrationSetFacilityEfficiency(value);
        } else {
            props.dcRegistrationSetFacilityEfficiency('');
        }
    };

    const handleCapacityTotalFloorSpaceChange = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => {
        props.dcRegistrationSetCapacityTotalFloorSpace(evt.target.value);
    };

    const handleCapacityAvailableFloorSpaceChange = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => {
        props.dcRegistrationSetCapacityAvailableFloorSpace(evt.target.value);
    };

    const handleUpsBackedChange = (checked: boolean) => {
        props.dcRegistrationSetFacilityUpsBacked(checked);
    };

    const handleUpsRuntimeChange = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => {
        props.dcRegistrationSetFacilityUpsRuntime(evt.target.value);
    };

    const handleUpsTypeChange = (value?: string) => {
        if (value) {
            props.dcRegistrationSetFacilityUpsType(value);
        } else {
            props.dcRegistrationSetFacilityUpsType('');
        }
    };

    const handleUpsConfigurationChange = (value?: string) => {
        if (value) {
            props.dcRegistrationSetFacilityUpsConfiguration(value);
        } else {
            props.dcRegistrationSetFacilityUpsConfiguration('');
        }
    };

    const handleGeneratorBackedChange = (checked: boolean) => {
        props.dcRegistrationSetFacilityGeneratorBacked(checked);
    };

    const handleGeneratorTypeChange = (value?: string) => {
        if (value) {
            props.dcRegistrationSetFacilityGeneratorType(value);
        } else {
            props.dcRegistrationSetFacilityGeneratorType('');
        }
    };

    const handleGeneratorCapacityChange = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => {
        props.dcRegistrationSetFacilityGeneratorCapacity(evt.target.value);
    };

    const handleFuelDeliveryChange = (checked: boolean) => {
        props.dcRegistrationSetFacilityFuelDelivery(checked);
    };

    const handleGeneratorConfigurationChange = (value?: string) => {
        if (value) {
            props.dcRegistrationSetFacilityGeneratorConfiguration(value);
        } else {
            props.dcRegistrationSetFacilityGeneratorConfiguration('');
        }
    };

    const handleDCRegistrationSetNPName = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => props.dcRegistrationSetNPName(evt.target.value);

    const handleDCRegistrationSetNPType = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => props.dcRegistrationSetNPType(evt.target.value);

    const handleDCRegistrationSetNPCapacity = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => props.dcRegistrationSetNPCapacity(evt.target.value);

    const handleCapacitySuppportAvailableChange = (value?: string) => {
        if (value) {
            props.dcRegistrationSetCapacitySuppportAvailable(value);
        } else {
            props.dcRegistrationSetCapacitySuppportAvailable('');
        }
    };

    const handleCapacityClientAccessChange = (value?: string) => {
        if (value) {
            props.dcRegistrationSetCapacityClientAccess(value);
        } else {
            props.dcRegistrationSetCapacityClientAccess('');
        }
    };

    const handleCapacityClientAreaOptionsChange = (value?: string) => {
        if (value) {
            props.dcRegistrationSetCapacityClientAreaOptions(value);
        } else {
            props.dcRegistrationSetCapacityClientAreaOptions('');
        }
    };

    const handleCapacityTotalCoolingCapacityChange = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => {
        props.dcRegistrationSetCapacityTotalCoolingCapacity(evt.target.value);
    };

    const handleCapacityAvailableCoolingCapacityChange = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => {
        props.dcRegistrationSetCapacityAvailableCoolingCapacity(
            evt.target.value
        );
    };

    const handleCapacityCoolingDensityChange = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => {
        props.dcRegistrationSetCapacityCoolingDensity(evt.target.value);
    };

    const handleCapacityCoolingDensityTypeChange = (value?: string) => {
        if (value) {
            props.dcRegistrationSetCapacityCoolingDensityType(value);
        } else {
            props.dcRegistrationSetCapacityCoolingDensityType('');
        }
    };

    const handleCapacityBlendedIPTrafficChange = (checked: boolean) => {
        props.dcRegistrationSetCapacityBlendedIPTrafficAvailable(checked);
    };

    const handleCapacitySharedIPTrafficChange = (checked: boolean) => {
        props.dcRegistrationSetCapacitySharedIPTrafficAvailable(checked);
    };

    const handleCapacityBlendedIpTrafficBlendChange = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => {
        props.updateCapacityBlendedIpTrafficBlend(evt.target.value);
    };

    const handleCapacityBlendedIpTrafficCapacityChange = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (!isNaN(Number(evt.target.value))) {
            props.updateCapacityBlendedIpTrafficCapacity(
                Number(evt.target.value)
            );
        }
    };

    const handleCapacityBlendedIpTrafficDedicationPortionChange = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (!isNaN(Number(evt.target.value))) {
            props.updateCapacityBlendedIpTrafficDedicationPortion(
                Number(evt.target.value)
            );
        }
    };

    const handleCapacityBlendedIpTrafficBurstableChange = (
        checked: boolean
    ) => {
        props.updateCapacityBlendedIpTrafficBurstable(checked);
    };

    const handleCapacityBlendedIpTrafficCellingChange = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (!isNaN(Number(evt.target.value))) {
            props.updateCapacityBlendedIpTrafficCelling(
                Number(evt.target.value)
            );
        }
    };

    const handleCapacityBlendedIpTrafficCostChange = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => {
        props.updateCapacityBlendedIpTrafficCost(evt.target.value);
    };

    //

    const handleCapacitySharedIpTrafficCapacityChange = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (!isNaN(Number(evt.target.value))) {
            props.updateCapacitySharedIpTrafficCapacity(
                Number(evt.target.value)
            );
        }
    };

    const handleCapacitySharedIpTrafficDedicationPortionChange = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (!isNaN(Number(evt.target.value))) {
            props.updateCapacitySharedIpTrafficDedicationPortion(
                Number(evt.target.value)
            );
        }
    };

    const handleCapacitySharedIpTrafficBurstableChange = (checked: boolean) => {
        props.updateCapacitySharedIpTrafficBurstable(checked);
    };

    const handleCapacitySharedIpTrafficCellingChange = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (!isNaN(Number(evt.target.value))) {
            props.updateCapacitySharedIpTrafficCelling(
                Number(evt.target.value)
            );
        }
    };

    const handleCapacitySharedIpTrafficCostChange = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => {
        props.updateCapacitySharedIpTrafficCost(evt.target.value);
    };

    const handleNext = () => {
        props.dcRegistrationSetCurrPage(DCRegistrationPageNum.Page5);
    };

    return (
        <CenterPageOuter>
            <PageSmallTitle>Facility</PageSmallTitle>
            <ColumnsPageOuter>
                <ColumnBody>
                    <DoubleWrapper>
                        <LabeledControl label="Built year:">
                            <SimpleInput
                                placeholder="YYYY-MM-DD"
                                value={props.facilityBuiltYear}
                                onChange={handleBuiltYearChange}
                            />
                        </LabeledControl>
                        <LabeledControl label="DC space type:">
                            <SimpleDropdown
                                options={SPACE_TYPE_OPTIONS}
                                value={props.facilitySpaceType}
                                onChange={handleSpaceTypeChange}
                            />
                        </LabeledControl>
                    </DoubleWrapper>
                    <DoubleWrapper>
                        <LabeledControl label="Raised floors:">
                            <YesNoControl
                                checked={props.facilityRaisedFloors}
                                onChange={handleRaisedFloorsChange}
                            />
                        </LabeledControl>
                        <LabeledControl label="DC tier classification:">
                            <SimpleInput placeholder="Type your text here" />
                        </LabeledControl>
                    </DoubleWrapper>
                    <DoubleWrapper>
                        <LabeledControl label="Number of primary power sources:">
                            <SimpleDropdown />
                        </LabeledControl>
                        <LabeledControl label="Hardware provided:">
                            <SimpleDropdown
                                placeholder="Select"
                                options={HARDWARE_OPTIONS}
                                value={props.facilityHWProvided}
                                onChange={handlefacilityHWProvidedChange}
                            />
                        </LabeledControl>
                    </DoubleWrapper>
                    <DoubleWrapper>
                        <LabeledControl label="Efficiency:">
                            <SimpleDropdown
                                placeholder="Select..."
                                options={EFFICIENCY_OPTIONS}
                                value={props.facilityEfficiency}
                                onChange={handleEfficiencyChange}
                            />
                        </LabeledControl>
                    </DoubleWrapper>
                    <DoubleWrapper>
                        <LabeledControl label="Total floor space (sq. ft):">
                            <SimpleInput
                                placeholder={'Type your text'}
                                value={props.capacityTotalFloorSpace}
                                onChange={handleCapacityTotalFloorSpaceChange}
                            />
                        </LabeledControl>
                        <LabeledControl label="Available floor space (sq. ft.):">
                            <SimpleInput
                                placeholder={'Type your text'}
                                value={props.capacityAvailableFloorSpace}
                                onChange={
                                    handleCapacityAvailableFloorSpaceChange
                                }
                            />
                        </LabeledControl>
                    </DoubleWrapper>
                    <TemplateWrapper>
                        <TemplateTitle>UPS</TemplateTitle>
                        <DoubleWrapper>
                            <LabeledControl label="UPS backed power:">
                                <YesNoControl
                                    checked={props.facilityUpsBacked}
                                    onChange={handleUpsBackedChange}
                                />
                            </LabeledControl>
                            <LabeledControl label="UPS Runtime (minutes):">
                                <SimpleInput
                                    placeholder="Type your text"
                                    value={props.facilityUpsRuntime}
                                    onChange={handleUpsRuntimeChange}
                                />
                            </LabeledControl>
                        </DoubleWrapper>
                        <DoubleWrapper>
                            <LabeledControl label="UPS type:">
                                <SimpleDropdown
                                    placeholder="Select..."
                                    options={UPS_TYPE_OPTIONS}
                                    value={props.facilityUpsType}
                                    onChange={handleUpsTypeChange}
                                />
                            </LabeledControl>
                            <LabeledControl label="UPS Configuration:">
                                <SimpleDropdown
                                    placeholder="Select..."
                                    options={CONFIGURATION_OPTIONS}
                                    value={props.facilityUpsConfiguration}
                                    onChange={handleUpsConfigurationChange}
                                />
                            </LabeledControl>
                        </DoubleWrapper>
                    </TemplateWrapper>
                    <TemplateWrapper>
                        <TemplateTitle>Generator</TemplateTitle>
                        <DoubleWrapper>
                            <LabeledControl label="Generator backed power:">
                                <YesNoControl
                                    checked={props.facilityGeneratorBacked}
                                    onChange={handleGeneratorBackedChange}
                                />
                            </LabeledControl>
                        </DoubleWrapper>
                        <DoubleWrapper>
                            <LabeledControl label="Generator Type:">
                                <SimpleDropdown
                                    placeholder="Select..."
                                    options={GENERATOR_TYPE_OPTIONS}
                                    value={props.facilityGeneratorType}
                                    onChange={handleGeneratorTypeChange}
                                />
                            </LabeledControl>
                            <LabeledControl label="Generator Capacity (KW):">
                                <SimpleInput
                                    placeholder="Type your text"
                                    value={props.facilityGeneratorCapacity}
                                    onChange={handleGeneratorCapacityChange}
                                />
                            </LabeledControl>
                        </DoubleWrapper>
                        <LabeledControl label="Do you have a contract for continuous delivery of fuel:">
                            <YesNoControl
                                checked={props.facilityFuelDelivery}
                                onChange={handleFuelDeliveryChange}
                            />
                        </LabeledControl>
                        <DoubleWrapper>
                            <LabeledControl label="Generator Configuration:">
                                <SimpleDropdown
                                    placeholder="Select..."
                                    options={CONFIGURATION_OPTIONS}
                                    value={props.facilityGeneratorConfiguration}
                                    onChange={
                                        handleGeneratorConfigurationChange
                                    }
                                />
                            </LabeledControl>
                        </DoubleWrapper>
                    </TemplateWrapper>
                </ColumnBody>
                <ColumnBody>
                    <LabeledControl label="List of network providers in DC - for each provider:">
                        <AddButton onClick={() => setProviderInfoOpen(true)} />
                    </LabeledControl>
                    <LabeledControl label="List of network providers in trenching distance - for each provider:">
                        <AddButton />
                    </LabeledControl>
                    <LabeledControl label="Support available:">
                        <SimpleDropdown
                            options={SUPPORT_AVAILABLE_OPTIONS}
                            value={props.capacitySuppportAvailable}
                            onChange={handleCapacitySuppportAvailableChange}
                        />
                    </LabeledControl>
                    <LabeledControl label="Client Access:">
                        <SimpleDropdown
                            options={CLIENT_ACCESS_OPTIONS}
                            value={props.capacityClientAccess}
                            onChange={handleCapacityClientAccessChange}
                        />
                    </LabeledControl>
                    <LabeledControl label="Client area options:">
                        <SimpleDropdown
                            options={CLIENT_AREA_OPTIONS}
                            value={props.capacityClientAreaOptions}
                            onChange={handleCapacityClientAreaOptionsChange}
                        />
                    </LabeledControl>
                    <TemplateWrapper>
                        <TemplateTitle>Cooling</TemplateTitle>
                        <DoubleWrapper>
                            <LabeledControl label="Cooling Type:">
                                <SimpleInput disabled />
                            </LabeledControl>
                            <LabeledControl label="Cooling Configuration:">
                                <SimpleDropdown />
                            </LabeledControl>
                        </DoubleWrapper>
                        <DoubleWrapper>
                            <LabeledControl label="Total Cooling Capacity (KW):">
                                <SimpleInput
                                    value={props.capacityTotalCoolingCapacity}
                                    onChange={
                                        handleCapacityTotalCoolingCapacityChange
                                    }
                                />
                            </LabeledControl>
                            <LabeledControl label="Available Cooling Capacity (KW):">
                                <SimpleInput
                                    value={
                                        props.capacityAvailableCoolingCapacity
                                    }
                                    onChange={
                                        handleCapacityAvailableCoolingCapacityChange
                                    }
                                />
                            </LabeledControl>
                        </DoubleWrapper>
                        <LabeledControl label="Cooling density:">
                            <ThreeOneWrapper>
                                <SimpleInput
                                    placeholder={'Type your text'}
                                    value={props.capacityCoolingDensity}
                                    onChange={
                                        handleCapacityCoolingDensityChange
                                    }
                                />
                            </ThreeOneWrapper>
                        </LabeledControl>
                    </TemplateWrapper>
                    <TemplateWrapper>
                        <LabeledControl label="Is blended IP traffic available:">
                            <YesNoControl
                                checked={
                                    props.capacityBlendedIPTrafficAvailable
                                }
                                onChange={handleCapacityBlendedIPTrafficChange}
                            />
                        </LabeledControl>
                        {props.capacityBlendedIPTrafficAvailable && (
                            <>
                                <LabeledControl label="Blend: ">
                                    <SimpleInput
                                        placeholder="Typer here..."
                                        value={
                                            props.capacityBlendedIpTrafficBlend
                                        }
                                        onChange={
                                            handleCapacityBlendedIpTrafficBlendChange
                                        }
                                    />
                                </LabeledControl>
                                <DoubleWrapper>
                                    <LabeledControl label="Capacity available:">
                                        <SimpleInput
                                            placeholder="Typer NUMBER here..."
                                            value={
                                                props.capacityBlendedIpTrafficCapacity
                                            }
                                            onChange={
                                                handleCapacityBlendedIpTrafficCapacityChange
                                            }
                                        />
                                    </LabeledControl>
                                    <LabeledControl label="Dedicated portion:">
                                        <SimpleInput
                                            value={
                                                props.capacityBlendedIpTrafficDedicatedPortion
                                            }
                                            onChange={
                                                handleCapacityBlendedIpTrafficDedicationPortionChange
                                            }
                                        />
                                    </LabeledControl>
                                </DoubleWrapper>
                                <LabeledControl label="Burstable:">
                                    <YesNoControl
                                        checked={
                                            props.capacityBlendedIpTrafficBurstable
                                        }
                                        onChange={
                                            handleCapacityBlendedIpTrafficBurstableChange
                                        }
                                    />
                                </LabeledControl>
                                <DoubleWrapper>
                                    <LabeledControl label="Celling:">
                                        <SimpleInput
                                            value={
                                                props.capacityBlendedIpTrafficCelling
                                            }
                                            onChange={
                                                handleCapacityBlendedIpTrafficCellingChange
                                            }
                                        />
                                    </LabeledControl>
                                    <LabeledControl label="Cost (/Mbps):">
                                        <SimpleInput
                                            value={
                                                props.capacityBlendedIpTrafficCost
                                            }
                                            onChange={
                                                handleCapacityBlendedIpTrafficCostChange
                                            }
                                        />
                                    </LabeledControl>
                                </DoubleWrapper>
                            </>
                        )}
                    </TemplateWrapper>
                    <TemplateWrapper>
                        <LabeledControl label="Is shared IP traffic available:">
                            <YesNoControl
                                checked={props.capacitySharedIPTrafficAvailable}
                                onChange={handleCapacitySharedIPTrafficChange}
                            />
                        </LabeledControl>
                        {props.capacitySharedIPTrafficAvailable && (
                            <>
                                <DoubleWrapper>
                                    <LabeledControl label="Capacity available:">
                                        <SimpleInput
                                            value={
                                                props.capacitySharedIpTrafficCapacity
                                            }
                                            onChange={
                                                handleCapacitySharedIpTrafficCapacityChange
                                            }
                                        />
                                    </LabeledControl>
                                    <LabeledControl label="Dedicated portion:">
                                        <SimpleInput
                                            value={
                                                props.capacitySharedIpTrafficDedicatedPortion
                                            }
                                            onChange={
                                                handleCapacitySharedIpTrafficDedicationPortionChange
                                            }
                                        />
                                    </LabeledControl>
                                </DoubleWrapper>
                                <LabeledControl label="Burstable:">
                                    <YesNoControl
                                        checked={
                                            props.capacitySharedIpTrafficBurstable
                                        }
                                        onChange={
                                            handleCapacitySharedIpTrafficBurstableChange
                                        }
                                    />
                                </LabeledControl>
                                <DoubleWrapper>
                                    <LabeledControl label="Celling:">
                                        <SimpleInput
                                            value={
                                                props.capacitySharedIpTrafficCelling
                                            }
                                            onChange={
                                                handleCapacitySharedIpTrafficCellingChange
                                            }
                                        />
                                    </LabeledControl>
                                    <LabeledControl label="Cost (/Mbps):">
                                        <SimpleInput
                                            value={
                                                props.capacitySharedIpTrafficCost
                                            }
                                            onChange={
                                                handleCapacitySharedIpTrafficCostChange
                                            }
                                        />
                                    </LabeledControl>
                                </DoubleWrapper>
                            </>
                        )}
                    </TemplateWrapper>
                </ColumnBody>
                <SimplePopup
                    open={isProviderInfoOpen}
                    onClose={() => {
                        setProviderInfoOpen(false);
                    }}
                    title="Provider info"
                >
                    <PopupProviderInfo
                        dcNetworkProviderName={props.dcNetworkProviderName}
                        dcNetworkProviderNetworkType={
                            props.dcNetworkProviderNetworkType
                        }
                        dcNetworkProviderNetworkCapacity={
                            props.dcNetworkProviderNetworkCapacity
                        }
                        dcRegistrationSetNPName={handleDCRegistrationSetNPName}
                        dcRegistrationSetNPType={handleDCRegistrationSetNPType}
                        dcRegistrationSetNPCapacity={
                            handleDCRegistrationSetNPCapacity
                        }
                    />
                </SimplePopup>
            </ColumnsPageOuter>

            <NextButton onClick={handleNext}>Next</NextButton>
            <SaveAndContinueLabel>Save and continue later</SaveAndContinueLabel>
        </CenterPageOuter>
    );
};

const mapStateToProps = (state: RootStore) => ({
    facilityBuiltYear: state.dcRegistration.facilityBuiltYear,
    facilitySpaceType: state.dcRegistration.facilitySpaceType,
    facilityRaisedFloors: state.dcRegistration.facilityRaisedFloors,
    facilityHWProvided: state.dcRegistration.facilityHWProvided,
    facilityEfficiency: state.dcRegistration.facilityEfficiency,
    capacityTotalFloorSpace: state.dcRegistration.capacityTotalFloorSpace,
    capacityAvailableFloorSpace:
        state.dcRegistration.capacityAvailableFloorSpace,
    facilityUpsBacked: state.dcRegistration.facilityUpsBacked,
    facilityUpsRuntime: state.dcRegistration.facilityUpsRuntime,
    facilityUpsType: state.dcRegistration.facilityUpsType,
    facilityUpsConfiguration: state.dcRegistration.facilityUpsConfiguration,
    facilityGeneratorBacked: state.dcRegistration.facilityGeneratorBacked,
    facilityGeneratorType: state.dcRegistration.facilityGeneratorType,
    facilityGeneratorCapacity: state.dcRegistration.facilityGeneratorCapacity,
    facilityFuelDelivery: state.dcRegistration.facilityFuelDelivery,
    facilityGeneratorConfiguration:
        state.dcRegistration.facilityGeneratorConfiguration,
    dcNetworkProviderName: state.dcRegistration.dcNetworkProviderName,
    dcNetworkProviderNetworkType:
        state.dcRegistration.dcNetworkProviderNetworkType,
    dcNetworkProviderNetworkCapacity:
        state.dcRegistration.dcNetworkProviderNetworkCapacity,
    capacitySuppportAvailable: state.dcRegistration.capacitySuppportAvailable,
    capacityClientAccess: state.dcRegistration.capacityClientAccess,
    capacityClientAreaOptions: state.dcRegistration.capacityClientAreaOptions,
    capacityTotalCoolingCapacity:
        state.dcRegistration.capacityTotalCoolingCapacity,
    capacityAvailableCoolingCapacity:
        state.dcRegistration.capacityAvailableCoolingCapacity,
    capacityCoolingDensity: state.dcRegistration.capacityCoolingDensity,
    capacityCoolingDensityType: state.dcRegistration.capacityCoolingDensityType,
    capacityBlendedIPTrafficAvailable:
        state.dcRegistration.capacityBlendedIPTrafficAvailable,
    capacitySharedIPTrafficAvailable:
        state.dcRegistration.capacitySharedIPTrafficAvailable,
    capacitySharedIpTrafficCapacity:
        state.capacity.capacitySharedIpTrafficCapacity,
    capacitySharedIpTrafficDedicatedPortion:
        state.capacity.capacitySharedIpTrafficDedicatedPortion,
    capacitySharedIpTrafficBurstable:
        state.capacity.capacitySharedIpTrafficBurstable,
    capacitySharedIpTrafficCelling:
        state.capacity.capacitySharedIpTrafficCelling,
    capacitySharedIpTrafficCost: state.capacity.capacitySharedIpTrafficCost,

    capacityBlendedIpTrafficCapacity:
        state.capacity.capacityBlendedIpTrafficCapacity,
    capacityBlendedIpTrafficDedicatedPortion:
        state.capacity.capacityBlendedIpTrafficDedicatedPortion,
    capacityBlendedIpTrafficBurstable:
        state.capacity.capacityBlendedIpTrafficBurstable,
    capacityBlendedIpTrafficCelling:
        state.capacity.capacityBlendedIpTrafficCelling,
    capacityBlendedIpTrafficCost: state.capacity.capacityBlendedIpTrafficCost,
    capacityBlendedIpTrafficBlend: state.capacity.capacityBlendedIpTrafficBlend,
});

const dispatchProps = {
    dcRegistrationSetCurrPage,
    dcRegistrationSetFacilityBuiltYear,
    dcRegistrationSetFacilitySpaceType,
    dcRegistrationSetFacilityRaisedFloors,
    dcRegistrationSetFacilityHWProvided,
    dcRegistrationSetFacilityEfficiency,
    dcRegistrationSetCapacityTotalFloorSpace,
    dcRegistrationSetCapacityAvailableFloorSpace,
    dcRegistrationSetFacilityUpsBacked,
    dcRegistrationSetFacilityUpsRuntime,
    dcRegistrationSetFacilityUpsType,
    dcRegistrationSetFacilityUpsConfiguration,
    dcRegistrationSetFacilityGeneratorBacked,
    dcRegistrationSetFacilityGeneratorType,
    dcRegistrationSetFacilityGeneratorCapacity,
    dcRegistrationSetFacilityFuelDelivery,
    dcRegistrationSetFacilityGeneratorConfiguration,
    dcRegistrationSetNPName,
    dcRegistrationSetNPType,
    dcRegistrationSetNPCapacity,
    dcRegistrationSetCapacitySuppportAvailable,
    dcRegistrationSetCapacityClientAccess,
    dcRegistrationSetCapacityClientAreaOptions,
    dcRegistrationSetCapacityTotalCoolingCapacity,
    dcRegistrationSetCapacityAvailableCoolingCapacity,
    dcRegistrationSetCapacityCoolingDensity,
    dcRegistrationSetCapacityCoolingDensityType,
    dcRegistrationSetCapacityBlendedIPTrafficAvailable,
    dcRegistrationSetCapacitySharedIPTrafficAvailable,

    updateCapacitySharedIpTrafficCapacity,
    updateCapacitySharedIpTrafficDedicationPortion,
    updateCapacitySharedIpTrafficBurstable,
    updateCapacitySharedIpTrafficCelling,
    updateCapacitySharedIpTrafficCost,
    updateCapacityBlendedIpTrafficCapacity,
    updateCapacityBlendedIpTrafficDedicationPortion,
    updateCapacityBlendedIpTrafficBurstable,
    updateCapacityBlendedIpTrafficCelling,
    updateCapacityBlendedIpTrafficCost,
    updateCapacityBlendedIpTrafficBlend,
};

export const Page4 = connect(mapStateToProps, dispatchProps)(Page4Component);
