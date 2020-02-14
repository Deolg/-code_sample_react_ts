import React from 'react';

import ReactPlayer from 'react-player';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { connect } from 'react-redux';

import { RootStore } from 'store/store.reducer';

import { DCRegistrationPageNum } from 'store/store.types';
import {
    DCRegistrationActionType,
    dcRegistrationSetCurrPage,
    dcSendMediaFiles,
    dcRemoveMediaFiles,
} from 'store/store.actions';

import { SimpleButton } from 'controls';

import {
    CenterPageOuter,
    CenterPageBody,
    PageTitle,
    PageSubtitle,
    Page2MediaUpload,
    SliderPageTitle,
    SliderBlock,
    SliderTitle,
    Slide,
    UploadImgSrc,
    MediaUploadWrapper,
    Page2SubTitle,
    SaveAndContinueLabel,
    SlideCloseBtn,
} from '../dashboard-dc-registration.styled';
import {
    ButtonsBlock,
    PopupButton,
} from 'controls/popup-provider-info/popup-provider-info.styled';

export interface IPage2Props {
    dcRegistrationSetCurrPage: (
        currPage: DCRegistrationPageNum
    ) => DCRegistrationActionType;
    dcSendMediaFiles: (mediaFiles: any) => void;
    dcRemoveMediaFiles: (file: any) => void;
    photos: any;
    videos: any;
}

const Page2Component = (props: IPage2Props) => {
    const handleNext = () => {
        props.dcRegistrationSetCurrPage(DCRegistrationPageNum.Page3);
    };

    const handleChangeInputFile = (value?: { images: []; videos: [] }) => {
        if (value) {
            props.dcSendMediaFiles(value);
        }
    };

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 769 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 768, min: 577 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 576, min: 320 },
            items: 1,
        },
    };
    return (
        <CenterPageOuter>
            <PageTitle>Photos and Videos</PageTitle>
            <MediaUploadWrapper>
                <PageSubtitle>Upload photos and videos of your DC</PageSubtitle>
                <Page2MediaUpload
                    handleChangeInputFile={handleChangeInputFile}
                    label="Upload Media"
                />
            </MediaUploadWrapper>
            {(props.photos || props.videos) &&
                (props.photos.length > 0 || props.videos.length > 0) && (
                    <div>
                        <Page2SubTitle>Photos and Videos</Page2SubTitle>
                        <SliderBlock>
                            <SliderTitle>Photos</SliderTitle>
                            {props.photos && props.photos.length > 0 ? (
                                <Carousel
                                    // autoPlay
                                    removeArrowOnDeviceType={[
                                        'tablet',
                                        'mobile',
                                        'desktop',
                                    ]}
                                    infinite={true}
                                    responsive={responsive}
                                >
                                    {props.photos.map(
                                        (item: {
                                            photo: string;
                                            id: number;
                                        }) => (
                                            <Slide key={item.id}>
                                                <UploadImgSrc
                                                    src={item.photo}
                                                />
                                                <SlideCloseBtn
                                                    onClick={() => {
                                                        props.dcRemoveMediaFiles(
                                                            { image: item.id }
                                                        );
                                                    }}
                                                />
                                            </Slide>
                                        )
                                    )}
                                </Carousel>
                            ) : (
                                <p>Upload Photos</p>
                            )}
                        </SliderBlock>
                        <SliderBlock>
                            <SliderTitle>Videos</SliderTitle>

                            {props.videos.length > 0 ? (
                                <Carousel
                                    autoPlay
                                    removeArrowOnDeviceType={[
                                        'tablet',
                                        'mobile',
                                        'desktop',
                                    ]}
                                    infinite={true}
                                    responsive={responsive}
                                >
                                    {props.videos.map(
                                        (item: {
                                            video: string;
                                            id: number;
                                        }) => (
                                            <Slide key={item.id}>
                                                <ReactPlayer
                                                    url={item.video}
                                                    controls={true}
                                                    width="400"
                                                    height="200"
                                                />
                                                <SlideCloseBtn
                                                    onClick={() => {
                                                        props.dcRemoveMediaFiles(
                                                            { video: item.id }
                                                        );
                                                    }}
                                                />
                                            </Slide>
                                        )
                                    )}
                                </Carousel>
                            ) : (
                                <p>Upload Videos</p>
                            )}
                        </SliderBlock>
                        <ButtonsBlock>
                            <PopupButton onClick={handleNext} isActive>
                                Save
                            </PopupButton>
                        </ButtonsBlock>
                    </div>
                )}
            <SimpleButton onClick={handleNext}>Next</SimpleButton>
            <SaveAndContinueLabel>Save and continue later</SaveAndContinueLabel>
        </CenterPageOuter>
    );
};

const mapStateToProps = (state: RootStore) => ({
    photos: state.dcRegistration.photos,
    videos: state.dcRegistration.videos,
});

const dispatchProps = {
    dcRegistrationSetCurrPage,
    dcSendMediaFiles,
    dcRemoveMediaFiles,
};

export const Page2 = connect(mapStateToProps, dispatchProps)(Page2Component);
