import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import { RootStore } from 'store/store.reducer';
import { DCRegistrationPageNum } from 'store/store.types';
import {
    DCRegistrationActionType,
    dcRegistrationSetCurrPage,
    dcRegistrationSetGoneDark12Month,
    dcRegistrationSetGoneDark24Month,
    dcRegistrationSetGoneDark36Month,
    dcRegistrationSetAvgRecoveryTime,
    registerNewDC,
} from 'store/store.actions';

import { LabeledControl, SimpleInput, SimplePopup } from 'controls';

import { PopupPower } from 'controls/popup-power';

import {
    TimesListBody,
    TimesListLabel,
    TimesListItem,
    TimesListDropdown,
    CenterPageOuter,
    NextButton,
    CenterPageBody,
    TripleWrapper,
    SaveAndContinueLabel,
    PageSmallTitle,
} from '../dashboard-dc-registration.styled';

const TEST_TIMES_OPTIONS = [
    {
        label: '0',
        value: '0',
    },
    {
        label: '1',
        value: '1',
    },
    {
        label: '2',
        value: '2',
    },
    {
        label: '3',
        value: '3',
    },
    {
        label: '4',
        value: '4',
    },
    {
        label: '5',
        value: '5',
    },
];

export interface IPage3Props {
    goneDark12Month: number;
    goneDark24Month: number;
    goneDark36Month: number;
    avgRecoveryTime: string;
    newDCId: number;
    dcRegistrationSetCurrPage: (
        currPage: DCRegistrationPageNum
    ) => DCRegistrationActionType;
    dcRegistrationSetGoneDark12Month: (
        goneDark12Month: number
    ) => DCRegistrationActionType;
    dcRegistrationSetGoneDark24Month: (
        goneDark24Month: number
    ) => DCRegistrationActionType;
    dcRegistrationSetGoneDark36Month: (
        goneDark36Month: number
    ) => DCRegistrationActionType;
    dcRegistrationSetAvgRecoveryTime: (
        avgRecoveryTime: string
    ) => DCRegistrationActionType;
    registerNewDC: (onError: (message: string) => void) => void;
}

const Page3Component = (props: IPage3Props) => {
    const [powerPopup, setPowerPopup] = useState(false);

    const handleGoneDark12MonthChanged = (value?: string) => {
        if (value) {
            props.dcRegistrationSetGoneDark12Month(Number(value));
        } else {
            props.dcRegistrationSetGoneDark12Month(0);
        }
    };

    const handleGoneDark24MonthChanged = (value?: string) => {
        if (value) {
            props.dcRegistrationSetGoneDark24Month(Number(value));
        } else {
            props.dcRegistrationSetGoneDark24Month(0);
        }
    };

    const handleGoneDark36MonthChanged = (value?: string) => {
        if (value) {
            props.dcRegistrationSetGoneDark36Month(Number(value));
        } else {
            props.dcRegistrationSetGoneDark36Month(0);
        }
    };

    const handleAvgRecoveryTimeChanged = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => {
        props.dcRegistrationSetAvgRecoveryTime(evt.target.value);
    };

    const handleNext = async () => {
        const handleError = (e: string) => toast.error(e);
        if (!props.newDCId) {
            try {
                await props.registerNewDC(handleError);
            } catch (e) {
                handleError(e);
            }
        }
        props.dcRegistrationSetCurrPage(DCRegistrationPageNum.Page4);
    };

    return (
        <CenterPageOuter>
            <CenterPageBody>
                <PageSmallTitle>Availability</PageSmallTitle>
                <LabeledControl label="Number of times DC has gone dark">
                    <TimesListBody>
                        <TimesListItem>
                            <TimesListDropdown
                                options={TEST_TIMES_OPTIONS}
                                value={String(props.goneDark12Month)}
                                onChange={handleGoneDark12MonthChanged}
                            />
                            <TimesListLabel>In 12 month</TimesListLabel>
                        </TimesListItem>
                        <TimesListItem>
                            <TimesListDropdown
                                options={TEST_TIMES_OPTIONS}
                                value={String(props.goneDark24Month)}
                                onChange={handleGoneDark24MonthChanged}
                            />
                            <TimesListLabel>In 24 month</TimesListLabel>
                        </TimesListItem>
                        <TimesListItem>
                            <TimesListDropdown
                                options={TEST_TIMES_OPTIONS}
                                value={String(props.goneDark36Month)}
                                onChange={handleGoneDark36MonthChanged}
                            />
                            <TimesListLabel>In 36 month</TimesListLabel>
                        </TimesListItem>
                    </TimesListBody>
                </LabeledControl>
                <LabeledControl label="Average time to recovery:">
                    <TripleWrapper>
                        <SimpleInput
                            placeholder="Type your text"
                            value={props.avgRecoveryTime}
                            onChange={handleAvgRecoveryTimeChanged}
                        />
                    </TripleWrapper>
                </LabeledControl>
            </CenterPageBody>

            <NextButton onClick={handleNext}>Next</NextButton>
            <SaveAndContinueLabel>Save and continue later</SaveAndContinueLabel>
            <SimplePopup
                open={powerPopup}
                onClose={() => {
                    setPowerPopup(false);
                }}
                title="Power"
            >
                <PopupPower />
            </SimplePopup>
        </CenterPageOuter>
    );
};

const mapStateToProps = (state: RootStore) => ({
    goneDark12Month: state.dcRegistration.goneDark12Month,
    goneDark24Month: state.dcRegistration.goneDark24Month,
    goneDark36Month: state.dcRegistration.goneDark36Month,
    avgRecoveryTime: state.dcRegistration.avgRecoveryTime,
    newDCId: state.dcRegistration.newDCId,
});

const dispatchProps = {
    dcRegistrationSetCurrPage,
    dcRegistrationSetGoneDark12Month,
    dcRegistrationSetGoneDark24Month,
    dcRegistrationSetGoneDark36Month,
    dcRegistrationSetAvgRecoveryTime,
    registerNewDC,
};

export const Page3 = connect(mapStateToProps, dispatchProps)(Page3Component);
