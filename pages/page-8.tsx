import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { RootStore } from 'store/store.reducer';
import {
    DCRegistrationPageNum,
    IDCIndustries,
    IDCCountries,
} from 'store/store.types';
import {
    getIndustries,
    getCountries,
    DCRegistrationActionType,
    dcRegistrationSetCurrPage,
    dcRegistrationSetCapacityTerm,
    dcRegistrationSetCapacityPreferredIndustries,
    dcRegistrationSetCapacityIndustryExclusions,
    dcRegistrationSetCapacityCountryExclusions,
} from 'store/store.actions';

import {
    LabeledControl,
    SimpleInput,
    SelectInput,
    SmallDropdown,
} from 'controls';
import {
    TemplateWrapper,
    RangeSelectWrapper,
} from 'controls/popup-DC-parameters/popup-DC-parameters.styled';
import InputRange from 'react-input-range';
import DatePicker from 'react-datepicker';
import {
    CenterPageOuter,
    CenterPageBody,
    NextButton,
    FlexRowWrapper,
    SaveAndContinueLabel,
    PageSmallTitle,
    Picker,
    DatePickersBlock,
    DoubleWrapper,
    SmallSelectWrapper,
    LabeledControlLarge,
} from '../dashboard-dc-registration.styled';

interface IPage8Props {
    capacityTerm: string;
    capacityPreferredIndustries: string[];
    capacityIndustryExclusions: string[];
    capacityCountryExclusions: string[];
    capacityIndustryList: IDCIndustries[];
    capacityCountryList: IDCCountries[];
    dcRegistrationSetCurrPage: (
        currPage: DCRegistrationPageNum
    ) => DCRegistrationActionType;
    dcRegistrationSetCapacityTerm: (
        capacityTerm: string
    ) => DCRegistrationActionType;
    dcRegistrationSetCapacityPreferredIndustries: (
        capacityPreferredIndustries: string[]
    ) => DCRegistrationActionType;
    dcRegistrationSetCapacityIndustryExclusions: (
        capacityIndustryExclusions: string[]
    ) => DCRegistrationActionType;
    dcRegistrationSetCapacityCountryExclusions: (
        capacityCountryExclusions: string[]
    ) => DCRegistrationActionType;
    getIndustries: (onError: (message: string) => void) => void;
    getCountries: (onError: (message: string) => void) => void;
}

interface Options {
    min: number;
    max: number;
}

const serializeServerValues = (
    values: { id: number; name: string; description?: string }[]
) => {
    return values.map(val => ({
        id: val.id,
        label: val.name,
        value: val.name,
    }));
};

const Page8Component = (props: IPage8Props) => {
    const [startDate, setStartDate] = useState<Date>(new Date());

    const [optionsCapacity, setOptionsCapacity] = useState<Options | number>({
        min: 10,
        max: 500,
    });

    const [optionsFloor, setOptionsFloor] = useState<Options | number>({
        min: 10,
        max: 500,
    });

    const [optionsCooling, setOptionsCooling] = useState<Options | number>({
        min: 10,
        max: 500,
    });

    const {
        getIndustries,
        getCountries,
        capacityIndustryList,
        capacityCountryList,
    } = props;

    useEffect(() => {
        const handleError = (message: string) => {
            toast.error(message);
        };

        getIndustries(handleError);
        getCountries(handleError);
    }, [getIndustries, getCountries]);

    const handleCapacityTermChange = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => {
        props.dcRegistrationSetCapacityTerm(evt.target.value);
    };

    const handlePreferredIndustriesChange = (ids: string[]) => {
        console.log(ids);
        if (ids) {
            props.dcRegistrationSetCapacityPreferredIndustries(ids);
        } else {
            props.dcRegistrationSetCapacityPreferredIndustries([]);
        }
    };

    const handleNext = () => {
        props.dcRegistrationSetCurrPage(DCRegistrationPageNum.Page9);
    };

    return (
        <CenterPageOuter>
            <PageSmallTitle>Lease Conditions</PageSmallTitle>
            <FlexRowWrapper>
                <LabeledControl label="Date available">
                    <DatePickersBlock>
                        <Picker>
                            <DatePicker
                                selected={startDate}
                                onChange={(date: Date) => setStartDate(date)}
                                dateFormat="MMMM dd, yyyy"
                                showMonthYearPicker
                            />
                        </Picker>
                    </DatePickersBlock>
                </LabeledControl>
                <div></div>
            </FlexRowWrapper>

            <FlexRowWrapper justifyContent="flex-start">
                <CenterPageBody>
                    <DoubleWrapper>
                        <LabeledControl label="Term:">
                            <SimpleInput
                                placeholder="Number"
                                value={props.capacityTerm}
                                onChange={handleCapacityTermChange}
                            />
                        </LabeledControl>
                        {/* <LabeledControl label="Time to move-in:">
                            <WithLine>
                                <SimpleInput placeholder="Number" />
                                <SimpleLine />
                                <SimpleDropdown placeholder="Days" />
                            </WithLine>
                        </LabeledControl> */}
                    </DoubleWrapper>
                    <LabeledControl label="Preferred industries:">
                        <SelectInput
                            isMulti
                            options={serializeServerValues(
                                capacityIndustryList
                            )}
                            value={props.capacityPreferredIndustries}
                            onChange={handlePreferredIndustriesChange}
                        />
                    </LabeledControl>
                    <LabeledControl label="Industry exclusions:">
                        <SelectInput
                            isMulti
                            options={serializeServerValues(
                                capacityIndustryList
                            )}
                            // value={props.capacityIndustryExclusions}
                        />
                    </LabeledControl>
                    <LabeledControl label="Country exclusions:">
                        <SelectInput
                            isMulti
                            options={serializeServerValues(capacityCountryList)}
                            // value={props.capacityCountryExclusions}
                        />
                    </LabeledControl>
                    <LabeledControl label="Preferred Buyer business size:">
                        <SelectInput isMulti />
                    </LabeledControl>
                </CenterPageBody>
                <CenterPageBody>
                    <LabeledControl label="&nbsp;">
                        <TemplateWrapper>
                            <LabeledControlLarge label="Power capacity:">
                                <SmallSelectWrapper>
                                    <SmallDropdown />
                                </SmallSelectWrapper>
                                <RangeSelectWrapper>
                                    <InputRange
                                        formatLabel={value => `${value}`}
                                        maxValue={200}
                                        minValue={10}
                                        value={optionsCapacity}
                                        onChange={value =>
                                            setOptionsCapacity(value)
                                        }
                                    />
                                </RangeSelectWrapper>
                            </LabeledControlLarge>
                        </TemplateWrapper>
                        <TemplateWrapper>
                            <LabeledControlLarge label="Floor space:">
                                <RangeSelectWrapper>
                                    <InputRange
                                        formatLabel={value =>
                                            `${value} sq. ft.`
                                        }
                                        maxValue={200}
                                        minValue={10}
                                        value={optionsFloor}
                                        onChange={value =>
                                            setOptionsFloor(value)
                                        }
                                    />
                                </RangeSelectWrapper>
                            </LabeledControlLarge>
                        </TemplateWrapper>
                        <TemplateWrapper>
                            <LabeledControlLarge label="Cooling capacity:">
                                <SmallSelectWrapper>
                                    <SmallDropdown />
                                </SmallSelectWrapper>
                                <RangeSelectWrapper>
                                    <InputRange
                                        formatLabel={value => `${value}`}
                                        maxValue={200}
                                        minValue={10}
                                        value={optionsCooling}
                                        onChange={value =>
                                            setOptionsCooling(value)
                                        }
                                    />
                                </RangeSelectWrapper>
                            </LabeledControlLarge>
                        </TemplateWrapper>
                    </LabeledControl>
                </CenterPageBody>
            </FlexRowWrapper>
            <NextButton onClick={handleNext}>Next</NextButton>
            <SaveAndContinueLabel>Save and continue later</SaveAndContinueLabel>
        </CenterPageOuter>
    );
};

const mapStateToProps = (state: RootStore) => ({
    capacityTerm: state.dcRegistration.capacityTerm,
    capacityPreferredIndustries:
        state.dcRegistration.capacityPreferredIndustries,
    capacityIndustryExclusions: state.dcRegistration.capacityIndustryExclusions,
    capacityCountryExclusions: state.dcRegistration.capacityCountryExclusions,
    capacityIndustryList: state.dcRegistration.capacityIndustryList,
    capacityCountryList: state.dcRegistration.capacityCountryList,
});

const dispatchProps = {
    dcRegistrationSetCurrPage,
    dcRegistrationSetCapacityTerm,
    dcRegistrationSetCapacityPreferredIndustries,
    dcRegistrationSetCapacityIndustryExclusions,
    dcRegistrationSetCapacityCountryExclusions,
    getIndustries,
    getCountries,
};

export const Page8 = connect(mapStateToProps, dispatchProps)(Page8Component);
