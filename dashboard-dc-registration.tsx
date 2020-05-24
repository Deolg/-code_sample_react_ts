import React from 'react';
import { useHistory } from 'react-router-dom';

import { LeftMenuIndices } from 'constants/menus';
import { DASHBOARD_LISTINGS_ROUTE } from 'constants/routes';

import { DCRegistrationPageNum } from 'store/store.types';

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
import { usePages } from './hooks/usePages';

const registrationTitlesList = [
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

export const DCRegistrationPage = () => {
    const history = useHistory();
    const [state, api] = usePages();

    const handleBack = () => {
        if (state.currPage === DCRegistrationPageNum.Page1) {
            history.push(DASHBOARD_LISTINGS_ROUTE);
        } else {
            api.dcSetCurrPage(state.currPage - 1);
        }
    };

    const stepCounter = (stepPosition: number) => {
        if (stepPosition - 1 === state.currPage) {
            return 'active';
        }
        if (stepPosition - 1 < state.currPage) {
            return 'done';
        }
        if (stepPosition - 1 === state.currPage + 1) {
            return 'next';
        }
        return '';
    };

    const title =
        state.mode === 'registration'
            ? registrationTitlesList[state.currPage]
            : 'Data Center Edit';

    return (
        <DashboardBase
            title={title}
            currMenuIndex={LeftMenuIndices.Listings}
            onBack={handleBack}
        >
            <StepperWrapper page={state.currPage}>
                <Step
                    stepState={stepCounter(1)}
                    cursor={state.mode === 'edit'}
                    onClick={() =>
                        state.mode === 'edit' &&
                        api.dcSetCurrPage(DCRegistrationPageNum.Page1)
                    }
                >
                    Basic Info
                    <SmallCircle />{' '}
                </Step>
                <Step
                    stepState={stepCounter(2)}
                    cursor={state.mode === 'edit'}
                    onClick={() =>
                        state.mode === 'edit' &&
                        api.dcSetCurrPage(DCRegistrationPageNum.Page2)
                    }
                >
                    Photos & Videos
                    <SmallCircle />
                </Step>
                <Step
                    stepState={stepCounter(3)}
                    cursor={state.mode === 'edit'}
                    onClick={() =>
                        state.mode === 'edit' &&
                        api.dcSetCurrPage(DCRegistrationPageNum.Page3)
                    }
                >
                    Availability
                    <SmallCircle />
                </Step>
                <Step
                    stepState={stepCounter(4)}
                    cursor={state.mode === 'edit'}
                    onClick={() =>
                        state.mode === 'edit' &&
                        api.dcSetCurrPage(DCRegistrationPageNum.Page4)
                    }
                >
                    Facility
                    <SmallCircle />
                </Step>
                <Step
                    stepState={stepCounter(5)}
                    cursor={state.mode === 'edit'}
                    onClick={() =>
                        state.mode === 'edit' &&
                        api.dcSetCurrPage(DCRegistrationPageNum.Page5)
                    }
                >
                    Power Capacity
                    <SmallCircle />
                </Step>
                <Step
                    stepState={stepCounter(6)}
                    cursor={state.mode === 'edit'}
                    onClick={() =>
                        state.mode === 'edit' &&
                        api.dcSetCurrPage(DCRegistrationPageNum.Page6)
                    }
                >
                    Security
                    <SmallCircle />
                </Step>
                <Step
                    stepState={stepCounter(7)}
                    cursor={state.mode === 'edit'}
                    onClick={() =>
                        state.mode === 'edit' &&
                        api.dcSetCurrPage(DCRegistrationPageNum.Page7)
                    }
                >
                    Other
                    <SmallCircle />
                </Step>
                <Step
                    stepState={stepCounter(8)}
                    cursor={state.mode === 'edit'}
                    onClick={() =>
                        state.mode === 'edit' &&
                        api.dcSetCurrPage(DCRegistrationPageNum.Page8)
                    }
                >
                    Lease Conditions
                    <SmallCircle />
                </Step>
                <Step
                    stepState={stepCounter(9)}
                    cursor={state.mode === 'edit'}
                    onClick={() =>
                        state.mode === 'edit' &&
                        api.dcSetCurrPage(DCRegistrationPageNum.Page9)
                    }
                >
                    Pricing
                    <SmallCircle />
                </Step>
            </StepperWrapper>
            {pagesList[state.currPage]}
            <PageNumberBox>
                <PageNumberBody>{state.currPage + 1} of 9</PageNumberBody>
                <PageNumberArrowBox>
                    <ArrowRight />
                </PageNumberArrowBox>
            </PageNumberBox>
        </DashboardBase>
    );
};
