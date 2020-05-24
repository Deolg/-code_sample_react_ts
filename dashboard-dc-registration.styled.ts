import styled from 'styled-components';
import buttonCloseSvg from 'images/CloseButton.svg';

import {
    LabeledControl,
    SimpleButton,
    MediaUpload,
    SimpleDropdown,
    YesNoControl,
    SimpleCheckbox,
} from 'controls';
import arrow from 'images/SelectArrow.svg';

export const PageNumberBox = styled.div`
    margin-top: 36px;

    align-self: stretch;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media (max-width: 640px) {
        justify-content: center;
    }
`;

export const PageNumberBody = styled.div`
    font-size: 14px;
    line-height: 16px;

    color: #323159;
`;

export const PageNumberArrowBox = styled.div`
    margin-left: 12px;
`;

export const CenterPageOuter = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CenterPageBody = styled.div`
    width: 464px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    &:last-child {
        margin-left: 40px;
    }
    @media (max-width: 1400px) {
        /* width: 48%; */
    }
    @media (max-width: 640px) {
        width: 100%;
        &:last-child {
            margin-left: 0;
        }
    }
`;
export const YesNo = styled(YesNoControl)``;

export const FlexRowWrapper = styled.div<{ justifyContent?: string }>`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: ${props => props.justifyContent || 'space-between'};
    align-self: flex-start;
    .justifyStart {
        justify-content: flex-start;
    }
    .alignCenter {
        align-items: center;
    }
    @media (max-width: 1100px) {
        .columnStart {
            flex-direction: column;
            align-items: flex-start;
        }
    }
    @media (max-width: 992px) {
        width: 100%;
    }
    @media (max-width: 640px) {
        flex-direction: column;
        justify-content: center;
        .justifyStart {
            justify-content: flex-start;
            flex-direction: row;
        }
    }
    @media (max-width: 640px) {
        div${YesNo} {
            width: 100%;
            > div {
                width: 50%;
                margin-right: 0;
                margin-left: 0;
            }
        }
    }
    > div.selectRight {
        width: 123px;
    }
    &.triple > p {
        font-style: normal;
        font-weight: normal;
        font-size: 14.4px;
        line-height: 20px;
        text-align: center;
        color: #979797;
        width: 36px;
        margin: 0;
    }
    > div.alignCenter {
        margin: 0 10px 0 20px;
    }
`;
export const SimpleCheckboxResponsive = styled(SimpleCheckbox)`
    @media (max-width: 640px) {
        width: 50%;
    }
`;
export const SimpleLink = styled.span`
    text-decoration: underline;
    cursor: pointer;
    font-size: 9.4px;
    color: #4a90e2;
    margin-left: 10px;
    margin-top: 10px;
`;

export const WrrapDiv = styled.div<{ width?: string }>`
    width: ${props => props.width || '60%'};
    justify-content: center;
`;
export const WrrapRadioDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    &:first-child {
        width: 45%;
        margin-right: 5%;
    }
`;
export const WrrapRadioYN = styled.div`
    @media (max-width: 640px) {
        width: 50%;
    }
`;

export const Form = styled.form`
    display: flex;
`;
export const FullFlexRowWrapper = styled.div<{ justifyContent?: string }>`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: ${props => props.justifyContent || 'space-between'};
    @media (max-width: 640px) {
        div${YesNo} {
            width: 100%;
            > div {
                width: 50%;
                margin-right: 0;
                margin-left: 0;
            }
        }
    }
    @media (max-width: 800px) {
        .columnStart {
            flex-direction: column;
            align-items: flex-start;
        }
    }
`;

export const RadioCheckWrrap = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 640px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const PageTitle = styled.div`
    width: 100%;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    color: #323159;
    margin-top: 75px;
    margin-bottom: 56px;
`;

export const Page2Title = styled(PageTitle)`
    margin-bottom: 40px;
`;

export const PageSubtitle = styled.div`
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    margin-top: 30px;
    color: #323159;
`;
export const SubTitle = styled.div`
    font-size: 19.4px;
    line-height: 23px;
    text-align: center;
    margin-bottom: 20px;
    color: #000;
    @media (max-width: 640px) {
        margin-top: 40px;
    }
`;

export const PercentInputDiv = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
`;
export const Persent = styled.i`
    position: absolute;
    right: 10%;
`;
export const DiscoutOptionLabel = styled.p`
    font-size: 9.4px;
    text-align: center;
    margin: 5px 0;
    font-weight: 600;
`;
export const DiscoutOptionTitle = styled.p`
    font-size: 10.4px;
    text-align: center;
    margin: 5px 0;
`;

export const CenterControl = styled(LabeledControl)`
    align-self: center;
    text-align: center;
`;
export const YesNoMobileLabelControl = styled(LabeledControl)`
    width: 100%;
`;
export const NextButton = styled(SimpleButton)`
    align-self: center;
    margin-top: 36px;
`;

export const Page2MediaUpload = styled(MediaUpload)`
    margin-top: 28px;
    margin-bottom: 30px;
`;

export const ColumnsPageOuter = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 640px) {
        flex-direction: column;
    }
`;

export const ColumnBody = styled(CenterPageBody)`
    &:not(:first-child) {
        margin-left: 40px;
    }
    @media (max-width: 640px) {
        &:not(:first-child) {
            margin-left: 0;
        }
    }
`;

export const ColumnTitle = styled(PageTitle)`
    margin-top: 32px;
    margin-bottom: 34px;

    font-size: 19.4px;
    line-height: 23px;

    &:first-child {
        margin-top: 0;
    }
`;

export const TimesListBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TimesListItem = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 1200px) {
        flex-direction: column;
    }
`;

export const TimesListLabel = styled.div`
    font-size: 9.4px;
    line-height: 12px;

    color: #000000;

    margin-left: 10px;
`;

export const TimesListDropdown = styled(SimpleDropdown)`
    width: 65px;
    height: 32px;
`;
export const Picker = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 26px;
    width: fit-content;
    color: #1a1a1a;
    &:last-child {
        margin-right: 0;
    }
    .react-datepicker-wrapper {
        position: relative;
        &:after {
            content: '';
            position: absolute;
            right: 13px;
            top: 50%;
            transform: translateY(-50%);
            width: 12px;
            height: 8px;
            background: url(${arrow});
            background-size: 12px 8px;
            background-repeat: no-repeat;
        }
    }
    input {
        border: 1px solid #4a90e2;
        border-radius: 18px;
        padding: 3px 13px;
        width: 187px;
        font-size: 16px;
        line-height: 26px;
        color: #1a1a1a;
        text-align: left;
        cursor: pointer;
        &:focus {
            outline: none;
        }
    }
    @media (max-width: 768px) {
        margin: 0;
        font-size: 17px;
        line-height: 20px;
        color: #1a1a1a;
        margin-bottom: 10px;
    }
`;
export const DatePickersBlock = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        justify-content: space-between;
    }
`;

export const Page4Body = styled(CenterPageBody)`
    margin-top: 68px;
`;

export const MonitoringBody = styled.div`
    display: flex;
    align-items: center;
`;

export const MonitoringDropdownBox = styled.div`
    flex: 1;
`;

export const DensityInputBox = styled.div`
    flex: 1;
    margin-right: 16px;
`;

export const DensityDropdownBox = styled.div`
    flex: 2;
`;

export const OtherOptionsBox = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const OtherOptionsItem = styled(LabeledControl)`
    width: 155px;
`;
export const SliderPageTitle = styled.div`
    text-align: left;
    width: 100%;
    font-size: 35px;
    line-height: 41px;
    color: #4a90e2;
    margin-bottom: 30px;
`;
export const SliderBlock = styled.div`
    width: calc(100vw - 363px);
    margin-bottom: 50px;
    &:last-child {
        margin-bottom: 0;
    }
`;
export const SliderTitle = styled.div`
    font-size: 17px;
    line-height: 20px;
    color: #494949;
    margin-bottom: 7px;
`;
export const Slide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    padding: 3px 3px;
    position: relative;
    border: 6px solid transparent;
    box-sizing: border-box;
    border-radius: 5px;
    margin: 10px 10px 0 0;

    &:hover {
        border-color: #4a90e2;
    }
    img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        padding: 0;
        margin: 0;
    }
    & > * {
        user-select: none;
    }
    @media (max-width: 576px) {
        margin: 0;
    }
`;

export const UploadImgSrc = styled.img.attrs(props => ({
    src: props.src,
}))`
    padding-right: 10px;
    /* max-height: 282px; */
    max-width: 406px;
`;

export const SelectRadioWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 992px) {
        & > div:first-child > div > div:last-child {
            margin-left: 20px;
        }
    }
    @media (max-width: 400px) {
        flex-direction: column;
        & > div {
            width: 100%;
        }
        & > div:first-child > div > div:last-child {
            margin-left: 40px;
        }
    }
`;

export const MediaUploadWrapper = styled.div`
    width: 100%;
    background: #fff;
    border: 1px dashed #4a90e2;
    margin-bottom: 60px;
`;
export const Page2SubTitle = styled.div`
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    color: #323159;
    margin: 0;
`;
export const DoubleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    & > * {
        width: 48%;
    }
`;
export const TripleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    & > * {
        width: 30%;
    }
`;
export const PageSmallTitle = styled.div`
    width: 100%;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    color: #323159;
    margin-top: 45px;
    margin-bottom: 33px;
`;

export const TemplateWrapper = styled.div`
    width: 100%;
    background: #f9f9f9;
    border: 1px solid #e0e0e0;
    border-radius: 6.4px;
    padding: 24px 30px;
    margin: 10px 0;
`;
export const TemplateTitle = styled.div`
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
    color: #000000;
`;
export const Line = styled.div`
    width: 12px;
    height: 1px;
    background: #c4c4c4;
    position: absolute;
    margin-top: 32px;
`;
export const Card = styled.div`
    > h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 33px;
        color: #000000;
    }
    background: #f9f9f9;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 6.4px;
    padding: 30px;
`;
export const ThreeOneWrapper = styled.div`
    display: flex;
    & > *:first-child {
        width: 70%;
        margin-right: 5%;
    }
    & > *:nth-child(2) {
        width: 25%;
    }
`;

export const SaveAndContinueLabel = styled.a`
    font-weight: 500;
    font-size: 12.8px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.8px;
    text-decoration-line: underline;
    color: #4a90e2;
    margin-top: 15px;
    cursor: pointer;
`;

export const OtherWrap = styled.div`
    width: 370px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const WithLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > *:first-child {
        width: 50%;
    }
    & > *:nth-child(2) {
        width: 4%;
    }
    & > *:last-child {
        width: 44%;
    }
`;
export const SimpleLine = styled.div`
    width: 12px;
    height: 1px;
    background: #c4c4c4;
`;

export const SmallSelectWrapper = styled.div`
    width: 45px;
    height: 16px;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LabeledControlLarge = styled(LabeledControl)`
    & > *:first-child {
        margin-bottom: 10px;
    }
`;

export const PowerPriceWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: normal;
    font-size: 14.4px;
    line-height: 20px;
    color: #979797;
    & > * {
        margin-left: 3px;
        margin-right: 3px;
    }
    & > *:first-child {
        margin-left: 0;
    }
    & > *:last-child {
        margin-right: 0;
    }
`;

export const CustomSlaTitle = styled.p`
    width: 100%;
    font-weight: 500;
    font-size: 35px;
    line-height: 48px;
    color: #000000;
    text-align: center;
    margin: 10px 0 30px;
`;

export const SlaUploadWrapper = styled(MediaUploadWrapper)`
    width: 604px;
    background: #f9f9f9;
    margin-bottom: 40px;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`;

export const ProceedTitle = styled.div`
    width: 100%;
    text-align: center;
    font-weight: 500;
    font-size: 35px;
    line-height: 48px;
    color: #4a90e2;
`;

export const ProceedLargeTitle = styled.div`
    width: 100%;
    text-align: center;
    font-weight: 500;
    font-size: 64px;
    line-height: 87px;
    text-align: center;
    color: #3e3e3e;
    margin-top: 140px;
`;
export const ProceedSubtitle = styled.div`
    font-weight: normal;
    font-size: 20px;
    line-height: 26px;
    width: 100%;
    text-align: center;
    color: #656d78;
    margin-bottom: 140px;
`;
export const PaymentWrapper = styled.div`
    width: 220px;
    margin: 0 70px;
    margin-bottom: 35px;
`;
export const PaymentTitle = styled.div`
    font-weight: 500;
    font-size: 35px;
    line-height: 1;
    color: #000000;
    margin-bottom: 40px;
    width: 100%;
    text-align: center;
`;
export const PaymentPriceLabel = styled.div`
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    color: #4a90e2;
    mix-blend-mode: normal;
    opacity: 0.96;
    margin-bottom: 30px;
`;

export const SuccessTitle = styled.div`
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    color: #000000;
    margin-bottom: 54px;
    width: 314px;
`;

export const SuccessWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
        margin-bottom: 15px;
    }
`;
export const GrayButton = styled(SimpleButton)`
    background: #979797;
    font-weight: 500;
    font-size: 12.8px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.8px;
    color: #ffffff;
`;

export const StepperWrapper = styled.div<{ page?: number }>`
    width: 100%;
    display: flex;
    margin-left: -48px;
    width: calc(100% + 92px);
    border-bottom: 1px solid #c4c4c4;
    border-color: ${props => (props.page === 8 ? '#4A90E2' : '#c4c4c4')};
    border-top: 1px solid #c4c4c4;
`;
export const Step = styled.div<{ stepState?: string; cursor: boolean }>`
    padding: 15px 15px;
    font-weight: 500;
    font-size: 17px;
    line-height: 23px;
    cursor: ${props => (props.cursor ? 'pointer' : 'auto')}
    color: ${props =>
        props.stepState === 'done'
            ? '#0FB269'
            : props.stepState === 'active'
            ? '#4A90E2'
            : '#323159'};
    position: relative;
    margin-bottom: -1px;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 1px;
        width: 50%;
        background: ${props =>
            props.stepState === 'done'
                ? '#0FB269'
                : props.stepState === 'active'
                ? '#0FB269'
                : props.stepState === 'next'
                ? '#4A90E2'
                : '#C4C4C4'};
    }
    &:after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        height: 1px;
        width: 50%;
        background: ${props =>
            props.stepState === 'done'
                ? '#0FB269'
                : props.stepState === 'active'
                ? '#4A90E2'
                : '#C4C4C4'};
    }
    & > div {
        background: ${props =>
            props.stepState === 'done'
                ? '#0FB269'
                : props.stepState === 'active'
                ? '#fff'
                : '#C4C4C4'};
        border-color: ${props =>
            props.stepState === 'done'
                ? '#0FB269'
                : props.stepState === 'active'
                ? '#4A90E2'
                : '#C4C4C4'};
    }
`;

export const SmallCircle = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 10px;
    height: 10px;
    border: 1px solid #4a90e2;
    background: #fff;
    border-radius: 50%;
    transform: translate(-50%, 50%);
    z-index: 1;
`;

export const SlideCloseBtn = styled.button`
    position: absolute;
    right: -13px;
    top: -13px;
    border: none;
    width: 26px;
    height: 26px;
    background: url(${buttonCloseSvg});
    background-size: 100% 100%;
    background-position: center;
    cursor: pointer;
`;

export const LoadingBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 2;
    left: 0;
    right: 0;
`;

export const StyledButtonsBlock = styled.div`
    display: flex;
    flex-direction: column;
`;
