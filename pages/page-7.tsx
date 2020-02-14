import React from 'react';
import { connect } from 'react-redux';

import { RootStore } from 'store/store.reducer';
import { DCRegistrationPageNum } from 'store/store.types';
import {
    DCRegistrationActionType,
    dcRegistrationSetCurrPage,
    dcRegistrationSetLoadingDock,
    dcRegistrationSetShippingAndReceiving,
    dcRegistrationSetStagingArea,
    dcRegistrationSetClientWorkArea,
} from 'store/store.actions';
import { LabeledControl, YesNoControl } from 'controls';
import {
    CenterPageOuter,
    CenterPageBody,
    NextButton,
    FlexRowWrapper,
    PageTitle,
    OtherWrap,
    SaveAndContinueLabel,
    PageSmallTitle,
} from '../dashboard-dc-registration.styled';

export interface IPage7Props {
    loadingDock: boolean;
    shippingAndReceiving: boolean;
    stagingArea: boolean;
    clientWorkArea: boolean;
    dcRegistrationSetCurrPage: (
        currPage: DCRegistrationPageNum
    ) => DCRegistrationActionType;
    dcRegistrationSetLoadingDock: (
        loadingDock: boolean
    ) => DCRegistrationActionType;
    dcRegistrationSetShippingAndReceiving: (
        shippingAndReceiving: boolean
    ) => DCRegistrationActionType;
    dcRegistrationSetStagingArea: (
        stagingArea: boolean
    ) => DCRegistrationActionType;
    dcRegistrationSetClientWorkArea: (
        stagingArea: boolean
    ) => DCRegistrationActionType;
}

const Page7Component = (props: IPage7Props) => {
    const handleLoadingDockChange = (checked: boolean) => {
        props.dcRegistrationSetLoadingDock(checked);
    };

    const handleShippingAndReceivingChange = (checked: boolean) => {
        props.dcRegistrationSetShippingAndReceiving(checked);
    };

    const handleStagingAreaChange = (checked: boolean) => {
        props.dcRegistrationSetStagingArea(checked);
    };

    const handleClientWorkAreaChange = (checked: boolean) => {
        props.dcRegistrationSetClientWorkArea(checked);
    };

    const handleNext = () => {
        props.dcRegistrationSetCurrPage(DCRegistrationPageNum.Page8);
    };

    return (
        <CenterPageOuter>
            <CenterPageBody>
                <OtherWrap>
                    <PageSmallTitle>Other</PageSmallTitle>
                    <FlexRowWrapper>
                        <LabeledControl label="Loading dock:">
                            <YesNoControl
                                checked={props.loadingDock}
                                onChange={handleLoadingDockChange}
                            />
                        </LabeledControl>
                        <LabeledControl label="Clients shipping &amp; receiving:">
                            <YesNoControl
                                checked={props.shippingAndReceiving}
                                onChange={handleShippingAndReceivingChange}
                            />
                        </LabeledControl>
                    </FlexRowWrapper>
                    <FlexRowWrapper>
                        <LabeledControl label="Staging area:">
                            <YesNoControl
                                checked={props.stagingArea}
                                onChange={handleStagingAreaChange}
                            />
                        </LabeledControl>
                        <LabeledControl label="Client work area:">
                            <YesNoControl
                                checked={props.clientWorkArea}
                                onChange={handleClientWorkAreaChange}
                            />
                        </LabeledControl>
                    </FlexRowWrapper>
                </OtherWrap>
            </CenterPageBody>
            <NextButton onClick={handleNext}>Next</NextButton>
            <SaveAndContinueLabel>Save and continue later</SaveAndContinueLabel>
        </CenterPageOuter>
    );
};

const mapStateToProps = (state: RootStore) => ({
    loadingDock: state.dcRegistration.loadingDock,
    shippingAndReceiving: state.dcRegistration.shippingAndReceiving,
    stagingArea: state.dcRegistration.stagingArea,
    clientWorkArea: state.dcRegistration.clientWorkArea,
});

const dispatchProps = {
    dcRegistrationSetCurrPage,
    dcRegistrationSetLoadingDock,
    dcRegistrationSetShippingAndReceiving,
    dcRegistrationSetStagingArea,
    dcRegistrationSetClientWorkArea,
};

export const Page7 = connect(mapStateToProps, dispatchProps)(Page7Component);
