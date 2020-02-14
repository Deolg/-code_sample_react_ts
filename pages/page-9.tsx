import React, { useState } from 'react';
import { connect } from 'react-redux';
import { RootStore } from 'store/store.reducer';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ReactComponent as UploadSlaSvg } from 'images/UploadSla.svg';
import {
    LabeledControl,
    SimpleInput,
    SimpleCheckbox,
    SelectInput,
    SimpleDropdown,
    SmallDropdown,
    YesNoControl,
    SimpleRadio,
    SimplePopup,
} from 'controls';
import { ReactComponent as SuccessSvg } from 'images/SuccessLarge.svg';
import {
    TemplateWrapper,
    RangeSelectWrapper,
} from 'controls/popup-DC-parameters/popup-DC-parameters.styled';
import InputRange from 'react-input-range';
import DatePicker from 'react-datepicker';
import { DASHBOARD_LISTINGS_ROUTE } from 'constants/routes';
import {
    CenterPageBody,
    NextButton,
    FlexRowWrapper,
    FullFlexRowWrapper,
    WrrapRadioDiv,
    SubTitle,
    PercentInputDiv,
    Persent,
    DiscoutOptionLabel,
    WrrapDiv,
    RadioCheckWrrap,
    Form,
    YesNo,
    YesNoMobileLabelControl,
    SimpleCheckboxResponsive,
    SaveAndContinueLabel,
    PageSmallTitle,
    Picker,
    DatePickersBlock,
    DoubleWrapper,
    SimpleLine,
    WithLine,
    SmallSelectWrapper,
    LabeledControlLarge,
    CenterPageOuter,
    TemplateTitle,
    PowerPriceWrapper,
    Line,
    TripleWrapper,
    DiscoutOptionTitle,
    CustomSlaTitle,
    Page2MediaUpload,
    MediaUploadWrapper,
    PageSubtitle,
    SlaUploadWrapper,
    ButtonsWrapper,
    ProceedTitle,
    ProceedLargeTitle,
    ProceedSubtitle,
    PaymentTitle,
    PaymentPriceLabel,
    PaymentWrapper,
    SuccessTitle,
    SuccessWrapper,
    GrayButton,
} from '../dashboard-dc-registration.styled';

import { Tab } from 'controls/popup-card-details/popup-card-details.styled';

import {
    DCRegistrationActionType,
    dcRegistrationSetCurrPage,
    dcRegistrationFinish,
    dcRegistrationSetPricePerKwt,
} from 'store/store.actions';
import { DCRegistrationPageNum } from 'store/store.types';

interface IPage9Props {
    pricePerKwt: string;
    dcRegistrationSetCurrPage: (
        currPage: DCRegistrationPageNum
    ) => DCRegistrationActionType;
    dcRegistrationSetPricePerKwt: (
        pricePerKwt: string
    ) => DCRegistrationActionType;
    dcRegistrationFinish: (
        onError: (message: string) => void,
        onSuccess: () => void
    ) => void;
}

const Page9Component = (props: IPage9Props) => {
    const [customSla, setCustomSla] = useState(false);
    const [proceed, setProceed] = useState(false);
    const [payment, setPayment] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const history = useHistory();

    const handleFinish = () => {
        setProceed(true);
        const handleSuccess = () => {
            toast.success('Successfully Created!');
            history.push(DASHBOARD_LISTINGS_ROUTE);
        };
        props.dcRegistrationFinish((message: string) => {
            toast.error(message);
        }, handleSuccess);
        props.dcRegistrationSetCurrPage(DCRegistrationPageNum.Page1);
    };

    const handleCustomSla = () => {
        setCustomSla(true);
    };
    const handlePay = () => {
        setProceed(false);
        setPayment(true);
    };
    const handleCompletePayment = () => {
        setPayment(false);
        setPaymentSuccess(true);
    };
    const handleFinishPayment = () => {
        setPaymentSuccess(false);
    };

    const handlePricePreKwtChange = (
        evt: React.ChangeEvent<HTMLInputElement>
    ) => {
        props.dcRegistrationSetPricePerKwt(evt.target.value);
    };

    return (
        <CenterPageOuter>
            <PageSmallTitle>Pricing</PageSmallTitle>
            <FlexRowWrapper justifyContent="flex-start">
                <CenterPageBody>
                    <TemplateWrapper>
                        <TemplateTitle>Power Price</TemplateTitle>
                        <PowerPriceWrapper>
                            <LabeledControl label="A Power*:">
                                {/* <SimpleInput
                                    placeholder="Number"
                                /> */}
                                <SimpleInput
                                    placeholder="Number"
                                    value={props.pricePerKwt}
                                    onChange={handlePricePreKwtChange}
                                />
                            </LabeledControl>
                            {/* <LabeledControl label="&nbsp;">
                                or/and
                            </LabeledControl>
                            <LabeledControl label="A + B Power:">
                                <SimpleInput placeholder="Number" />
                            </LabeledControl> */}
                            {/* <LabeledControl label="&nbsp;">
                                <SimpleLine placeholder="Select..." />
                            </LabeledControl>
                            <LabeledControl label="Units:">
                                <SimpleDropdown />
                            </LabeledControl> */}
                        </PowerPriceWrapper>
                    </TemplateWrapper>
                    <TemplateWrapper>
                        <TemplateTitle>
                            Other pricing options available
                        </TemplateTitle>
                        <DoubleWrapper>
                            <div>
                                <LabeledControl label="Floor space (/sq. Ft ):">
                                    <SimpleInput placeholder="Number" />
                                </LabeledControl>
                                <LabeledControl label="Cage (/sq. Ft):">
                                    <SimpleInput placeholder="Number" />
                                </LabeledControl>
                                <LabeledControl label="Locked cabinets (/ea):">
                                    <SimpleInput placeholder="Number" />
                                </LabeledControl>
                            </div>
                            <div>
                                <LabeledControl label="Floor space (/rack space):">
                                    <SimpleInput placeholder="Number" />
                                </LabeledControl>
                                <LabeledControl label="Open racks (/ea):">
                                    <SimpleInput placeholder="Number" />
                                </LabeledControl>
                                <LabeledControl label="Private suite (/sq. Ft):">
                                    <SimpleInput placeholder="Number" />
                                </LabeledControl>
                            </div>
                        </DoubleWrapper>
                    </TemplateWrapper>
                    <TemplateWrapper>
                        <TemplateTitle>Discount Model</TemplateTitle>
                        <DoubleWrapper>
                            <LabeledControl label="Tiered pricing:">
                                <YesNoControl />
                            </LabeledControl>
                            <LabeledControl label="Number of tiers:">
                                <SimpleInput placeholder="Number" />
                            </LabeledControl>
                        </DoubleWrapper>
                    </TemplateWrapper>
                </CenterPageBody>
                <CenterPageBody>
                    <TemplateWrapper>
                        <TemplateTitle>Discount Options</TemplateTitle>
                        <div>
                            <DiscoutOptionLabel>
                                Purchase Volume
                            </DiscoutOptionLabel>
                            <FullFlexRowWrapper>
                                <WrrapDiv className="flexCol">
                                    <DiscoutOptionTitle>
                                        0-$10k
                                    </DiscoutOptionTitle>
                                    <PercentInputDiv>
                                        <SimpleInput
                                            placeholder="Type"
                                            type="number"
                                            width="100%"
                                        />
                                        <Persent>%</Persent>
                                    </PercentInputDiv>
                                </WrrapDiv>
                                <WrrapDiv className="flexCol">
                                    <DiscoutOptionTitle>
                                        $101k-$1M
                                    </DiscoutOptionTitle>
                                    <PercentInputDiv>
                                        <SimpleInput
                                            placeholder="Type"
                                            type="number"
                                            width="100%"
                                        />
                                        <Persent>%</Persent>
                                    </PercentInputDiv>
                                </WrrapDiv>
                                <WrrapDiv className="flexCol">
                                    <DiscoutOptionTitle>
                                        $1M+
                                    </DiscoutOptionTitle>
                                    <PercentInputDiv>
                                        <SimpleInput
                                            placeholder="Type"
                                            type="number"
                                            width="100%"
                                        />
                                        <Persent>%</Persent>
                                    </PercentInputDiv>
                                </WrrapDiv>
                            </FullFlexRowWrapper>
                            <br />
                            <DiscoutOptionLabel>
                                Company business size
                            </DiscoutOptionLabel>
                            <FullFlexRowWrapper>
                                <WrrapDiv className="flexCol">
                                    <DiscoutOptionTitle>
                                        1-100
                                    </DiscoutOptionTitle>
                                    <PercentInputDiv>
                                        <SimpleInput
                                            placeholder="Type"
                                            type="number"
                                            width="100%"
                                        />
                                        <Persent>%</Persent>
                                    </PercentInputDiv>
                                </WrrapDiv>
                                <WrrapDiv className="flexCol">
                                    <DiscoutOptionTitle>
                                        101-1000
                                    </DiscoutOptionTitle>
                                    <PercentInputDiv>
                                        <SimpleInput
                                            placeholder="Type"
                                            type="number"
                                            width="100%"
                                        />
                                        <Persent>%</Persent>
                                    </PercentInputDiv>
                                </WrrapDiv>
                                <WrrapDiv className="flexCol">
                                    <DiscoutOptionTitle>
                                        1000+
                                    </DiscoutOptionTitle>
                                    <PercentInputDiv>
                                        <SimpleInput
                                            placeholder="Type"
                                            type="number"
                                            width="100%"
                                        />
                                        <Persent>%</Persent>
                                    </PercentInputDiv>
                                </WrrapDiv>
                            </FullFlexRowWrapper>
                            <br />
                            <DiscoutOptionLabel>
                                Terms of lease (years)
                            </DiscoutOptionLabel>
                            <FullFlexRowWrapper>
                                <WrrapDiv className="flexCol">
                                    <DiscoutOptionTitle>1-3</DiscoutOptionTitle>
                                    <PercentInputDiv>
                                        <SimpleInput
                                            placeholder="Number"
                                            type="number"
                                            width="100%"
                                        />
                                        <Persent>%</Persent>
                                    </PercentInputDiv>
                                </WrrapDiv>
                                <WrrapDiv className="flexCol">
                                    <DiscoutOptionTitle>3-5</DiscoutOptionTitle>
                                    <PercentInputDiv>
                                        <SimpleInput
                                            placeholder="Number"
                                            type="number"
                                            width="100%"
                                        />
                                        <Persent>%</Persent>
                                    </PercentInputDiv>
                                </WrrapDiv>
                                <WrrapDiv className="flexCol">
                                    <DiscoutOptionTitle>5+</DiscoutOptionTitle>
                                    <PercentInputDiv>
                                        <SimpleInput
                                            placeholder="Number"
                                            type="number"
                                            width="100%"
                                        />
                                        <Persent>%</Persent>
                                    </PercentInputDiv>
                                </WrrapDiv>
                            </FullFlexRowWrapper>
                        </div>
                    </TemplateWrapper>
                    <LabeledControlLarge label="SLA:">
                        <SimpleRadio name="sla" label="No" />
                        <SimpleRadio name="sla" label="Standard" />
                        <SimpleRadio name="sla" label="Custom">
                            <UploadSlaSvg onClick={handleCustomSla} />
                        </SimpleRadio>
                    </LabeledControlLarge>
                    <LabeledControlLarge label="Lease agreement/contract:">
                        <SimpleRadio
                            name="lease"
                            label="Edgevana standard lease agreement"
                        />
                        <SimpleRadio
                            name="lease"
                            label="Modified Edgevana standard lease agreement"
                        />
                    </LabeledControlLarge>
                </CenterPageBody>
            </FlexRowWrapper>
            <NextButton onClick={handleFinish}>Finish</NextButton>
            <SaveAndContinueLabel>Save and continue later</SaveAndContinueLabel>
            <SimplePopup
                open={proceed}
                onClose={() => {
                    setProceed(false);
                }}
            >
                <ProceedTitle>
                    Thanks for listing your data center with Edgevana
                </ProceedTitle>
                <ProceedLargeTitle>Proceed to payment</ProceedLargeTitle>
                <ProceedSubtitle>
                    Payment is required to activate your listing
                </ProceedSubtitle>
                <ButtonsWrapper>
                    <Tab>Pay later</Tab>
                    <Tab onClick={handlePay} isActive>
                        Pay
                    </Tab>
                </ButtonsWrapper>
            </SimplePopup>
            <SimplePopup
                open={payment}
                onClose={() => {
                    setPayment(false);
                }}
            >
                <PaymentTitle>Payment</PaymentTitle>
                <PaymentWrapper>
                    <DiscoutOptionLabel>
                        Listing committment fee:
                    </DiscoutOptionLabel>
                    <PaymentPriceLabel>$5,000.00</PaymentPriceLabel>

                    <LabeledControl label="Credit Card Number:">
                        <SimpleInput />
                    </LabeledControl>
                    <LabeledControl label="Name of Credit Card:">
                        <SimpleInput />
                    </LabeledControl>
                    <DoubleWrapper>
                        <LabeledControl label="Expiring Date:">
                            <SimpleInput />
                        </LabeledControl>
                        <LabeledControl label="Security Code:">
                            <SimpleInput />
                        </LabeledControl>
                    </DoubleWrapper>
                </PaymentWrapper>
                <ButtonsWrapper>
                    <Tab onClick={handleCompletePayment} isActive>
                        Pay
                    </Tab>
                </ButtonsWrapper>
            </SimplePopup>
            <SimplePopup
                open={paymentSuccess}
                onClose={() => {
                    setPaymentSuccess(false);
                }}
            >
                <SuccessTitle>Payment completed succesfully!</SuccessTitle>
                <SuccessWrapper>
                    <SuccessSvg />
                    <DiscoutOptionLabel>Paid:</DiscoutOptionLabel>
                    <PaymentPriceLabel>$5000</PaymentPriceLabel>
                </SuccessWrapper>
                <ButtonsWrapper>
                    <GrayButton onClick={handleFinishPayment}>Close</GrayButton>
                </ButtonsWrapper>
            </SimplePopup>
            <SimplePopup
                open={customSla}
                onClose={() => {
                    setCustomSla(false);
                }}
            >
                <CustomSlaTitle>Upload Custom SLA</CustomSlaTitle>
                <SlaUploadWrapper>
                    <PageSubtitle>
                        Upload photos and videos of your DC
                    </PageSubtitle>
                    <Page2MediaUpload label="Upload Media" />
                </SlaUploadWrapper>
                <ButtonsWrapper>
                    <Tab>Cancel</Tab>
                    <Tab isActive>Save</Tab>
                </ButtonsWrapper>
            </SimplePopup>
        </CenterPageOuter>
    );
};

const mapStateToProps = (state: RootStore) => ({
    pricePerKwt: state.dcRegistration.pricingPricePreKwt,
});

const dispatchProps = {
    dcRegistrationSetCurrPage,
    dcRegistrationFinish,
    dcRegistrationSetPricePerKwt,
};
export const Page9 = connect(mapStateToProps, dispatchProps)(Page9Component);
