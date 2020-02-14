import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { LeftMenuIndices } from 'constants/menus';
import { DASHBOARD_LISTINGS_ROUTE } from 'constants/routes';

import { RootStore } from 'store/store.reducer';
import { DCRegistrationPageNum } from 'store/store.types';
import {
    DCRegistrationActionType,
    dcRegistrationSetCurrPage,
} from 'store/store.actions';

import { DashboardBase } from 'base-pages/dashboard-base';
import {
    PageNumberBox,
    PageNumberBody,
    PageNumberArrowBox,
    StepperWrapper,
    Step,
    SmallCircle,
} from './dashboard-dc-registration.styled';

import { Page1 } from './pages/page-1';
import { Page2 } from './pages/page-2';
import { Page3 } from './pages/page-3';
import { Page4 } from './pages/page-4';
import { Page5 } from './pages/page-5';
import { Page6 } from './pages/page-6';
import { Page7 } from './pages/page-7';
import { Page8 } from './pages/page-8';
import { Page9 } from './pages/page-9';

import { ReactComponent as ArrowRight } from 'images/ArrowRight.svg';

export interface IDCRegistrationPageProps {
    currPage: DCRegistrationPageNum;
    dcRegistrationSetCurrPage: (
        currPage: DCRegistrationPageNum
    ) => DCRegistrationActionType;
}

const DCRegistrationPageComponent = (props: IDCRegistrationPageProps) => {
    const history = useHistory();

    const handleBack = () => {
        if (props.currPage === DCRegistrationPageNum.Page1) {
            history.push(DASHBOARD_LISTINGS_ROUTE);
        } else {
            props.dcRegistrationSetCurrPage(props.currPage - 1);
        }
    };

    const titlesList = [
        'Data Center registration',
        'Data Center registration',
        'Data Center registration',
        'Data Center registration',
        'Data Center registration',
        'Data Center registration',
        'Data Center registration',
        'Data Center registration',
        'Data Center registration',
    ];

    const pagesList = [
        <Page1 />,
        <Page2 />,
        <Page3 />,
        <Page4 />,
        <Page5 />,
        <Page6 />,
        <Page7 />,
        <Page8 />,
        <Page9 />,
    ];
    const stepCounter = (stepPosition: number) => {
        if (stepPosition - 1 === props.currPage) {
            return 'active';
        }
        if (stepPosition - 1 < props.currPage) {
            return 'done';
        }
        if (stepPosition - 1 === props.currPage + 1) {
            return 'next';
        }
        return '';
    };
    return (
        <DashboardBase
            title={titlesList[props.currPage]}
            currMenuIndex={LeftMenuIndices.Listings}
            onBack={handleBack}
        >
            <StepperWrapper page={props.currPage}>
                <Step stepState={stepCounter(1)}>
                    Basic Info
                    <SmallCircle />{' '}
                </Step>
                <Step stepState={stepCounter(2)}>
                    Photos & Videos
                    <SmallCircle />
                </Step>
                <Step stepState={stepCounter(3)}>
                    Availability
                    <SmallCircle />
                </Step>
                <Step stepState={stepCounter(4)}>
                    Facility
                    <SmallCircle />
                </Step>
                <Step stepState={stepCounter(5)}>
                    Power Capacity
                    <SmallCircle />
                </Step>
                <Step stepState={stepCounter(6)}>
                    Security
                    <SmallCircle />
                </Step>
                <Step stepState={stepCounter(7)}>
                    Other
                    <SmallCircle />
                </Step>
                <Step stepState={stepCounter(8)}>
                    Lease Conditions
                    <SmallCircle />
                </Step>
                <Step stepState={stepCounter(9)}>
                    Pricing
                    <SmallCircle />
                </Step>
            </StepperWrapper>
            {pagesList[props.currPage]}
            <PageNumberBox>
                <PageNumberBody>{props.currPage + 1} of 9</PageNumberBody>
                <PageNumberArrowBox>
                    <ArrowRight />
                </PageNumberArrowBox>
            </PageNumberBox>
        </DashboardBase>
    );
};

const mapStateToProps = (state: RootStore) => ({
    currPage: state.dcRegistration.currPage,
});

const dispatchProps = {
    dcRegistrationSetCurrPage,
};

export const DCRegistrationPage = connect(
    mapStateToProps,
    dispatchProps
)(DCRegistrationPageComponent);
