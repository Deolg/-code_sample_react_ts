import React, { useState } from 'react';
import { connect } from 'react-redux';

import { RootStore } from 'store/store.reducer';
import { DCRegistrationPageNum } from 'store/store.types';
import { IDataCenterStructureAddress } from 'api/api.types';
import {
    DCRegistrationActionType,
    dcRegistrationSetCurrPage,
    dcRegistrationSetDCName,
    dcRegistrationSetDCPhone,
    dcRegistrationSetDCNameAddress,
    dcRegistrationSetDCDescription,
} from 'store/store.actions';

import {
    LabeledControl,
    SimpleInput,
    AddressInput,
    MultilineInput,
    SimplePopup,
    InputPhone,
} from 'controls';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
    CenterPageOuter,
    CenterPageBody,
    PageTitle,
    CenterControl,
    NextButton,
    Picker,
    DatePickersBlock,
    SaveAndContinueLabel,
} from '../dashboard-dc-registration.styled';
import { PopupContract } from 'controls/popup-contract/popup-contract';

export interface IPage1Props {
    dcName: string;
    dcPhone: string;
    dcAddress?: string | IDataCenterStructureAddress;
    dcDescription: string;
    dcRegistrationSetCurrPage: (
        currPage: DCRegistrationPageNum
    ) => DCRegistrationActionType;
    dcRegistrationSetDCName: (dcName: string) => DCRegistrationActionType;
    dcRegistrationSetDCPhone: (dcPhone: string) => DCRegistrationActionType;
    dcRegistrationSetDCNameAddress: (
        address: string
    ) => DCRegistrationActionType;
    dcRegistrationSetDCDescription: (
        dcDescription: string
    ) => DCRegistrationActionType;
}
const Page1Component = (props: IPage1Props) => {
    const handleNameChanged = (evt: React.ChangeEvent<HTMLInputElement>) => {
        props.dcRegistrationSetDCName(evt.target.value);
    };

    const handlePhoneChange = (phone: string) => {
        props.dcRegistrationSetDCPhone(phone || '');
    };

    const handleAddressChanged = (value?: object) => {
        const result = Object(value);
        if (Object.keys(result).length !== 0) {
            props.dcRegistrationSetDCNameAddress(result);
        } else {
            props.dcRegistrationSetDCNameAddress('');
        }
    };

    const handleDescriptionChanged = (
        evt: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        props.dcRegistrationSetDCDescription(evt.target.value);
    };

    const handleNext = () => {
        props.dcRegistrationSetCurrPage(DCRegistrationPageNum.Page2);
    };
    const [purchaseRequestPopup, setPurchaseRequestPopup] = useState(false);
    const [contractPopup, setContractPopup] = useState(false);

    const [SLAPopup, setSLAPopup] = useState(false);
    const [startDate, setStartDate] = useState<Date>(new Date());
    return (
        <CenterPageOuter>
            <CenterPageBody>
                <PageTitle>Basic Info</PageTitle>
                <LabeledControl label="Data center name">
                    <SimpleInput
                        placeholder="DC-1"
                        value={props.dcName}
                        onChange={handleNameChanged}
                    />
                </LabeledControl>
                <LabeledControl label="Data center address">
                    <AddressInput handleAddressChanged={handleAddressChanged} />
                </LabeledControl>
                <LabeledControl label="Data center phone number">
                    <InputPhone
                        value={props.dcPhone}
                        onChange={handlePhoneChange}
                        placeholder="+1 213 373 4253"
                    />
                </LabeledControl>
                <LabeledControl label="Data center description">
                    <MultilineInput
                        placeholder="Text"
                        rows={3}
                        value={props.dcDescription}
                        onChange={handleDescriptionChanged}
                    />
                </LabeledControl>
                <CenterControl label="Listing start date">
                    <DatePickersBlock>
                        <Picker>
                            <DatePicker
                                selected={startDate}
                                onChange={(date: Date) => setStartDate(date)}
                                dateFormat="MMMM yyyy"
                                showMonthYearPicker
                            />
                        </Picker>
                    </DatePickersBlock>
                </CenterControl>
                <NextButton onClick={handleNext}>Next</NextButton>
                <SaveAndContinueLabel>
                    Save and continue later
                </SaveAndContinueLabel>
                {/* <NextButton onClick={() => setPurchaseRequestPopup(true)}>
                    Request
                </NextButton>
                <NextButton onClick={() => setContractPopup(true)}>
                    Contract
                </NextButton>
                <NextButton onClick={() => setSLAPopup(true)}>
                    SLA Modal
                </NextButton> */}
            </CenterPageBody>
            <SimplePopup
                open={contractPopup}
                onClose={() => {
                    setContractPopup(false);
                }}
                title="Contract"
            >
                <PopupContract />
            </SimplePopup>
            <SimplePopup
                open={SLAPopup}
                onClose={() => {
                    setSLAPopup(false);
                }}
                title="SLA"
            >
                <NextButton>Sign</NextButton>
            </SimplePopup>
        </CenterPageOuter>
    );
};

const mapStateToProps = (state: RootStore) => ({
    dcName: state.dcRegistration.dcName,
    dcPhone: state.dcRegistration.dcPhone,
    dcAddress: state.dcRegistration.address,
    dcDescription: state.dcRegistration.dcDescription,
});

const dispatchProps = {
    dcRegistrationSetCurrPage,
    dcRegistrationSetDCName,
    dcRegistrationSetDCPhone,
    dcRegistrationSetDCNameAddress,
    dcRegistrationSetDCDescription,
};

export const Page1 = connect(mapStateToProps, dispatchProps)(Page1Component);
