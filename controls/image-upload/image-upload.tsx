import React, { useState, useRef } from 'react';

import {
    ImageUploadBody,
    UploadIconBox,
    UploadTextBox,
    UploadInputFile,
    UploadImgSrc,
    UploadImgWrapper,
} from './image-upload.styled';

import { ReactComponent as UploadIconSmall } from 'images/UploadIconSmall.svg';

export interface IImageUploadProps {
    text: string;
    className?: string;
    handleImageChange?: (value?: string | ArrayBuffer | null) => void;
    value?: string | null
}

export const ImageUpload = (props: IImageUploadProps) => {
    let refFileInput = useRef(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState<any>(props.value);

    const handleClick = () => {
        if (refFileInput && refFileInput.current) {
            // @ts-ignore: Object is possibly 'null'.
            refFileInput.current.click();
        }
    };

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        // @ts-ignore: Object is possibly 'null'.
        let file = e.currentTarget.files[0];
        if (file) {
            let fileReader: FileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onloadend = evt => {
                setImagePreviewUrl(fileReader.result);
                if (evt && evt.target) {
                    if (props.handleImageChange) {
                        props.handleImageChange(evt.target.result);
                    }
                }
            };
        }
    };

    return (
        <ImageUploadBody onClick={handleClick} className={props.className}>
            <UploadTextBox>{props.text}</UploadTextBox>
            <UploadInputFile ref={refFileInput} onChange={handleChange} />
            <UploadIconBox>
                <UploadIconSmall />
            </UploadIconBox>
            <UploadImgWrapper>
                <UploadImgSrc src={imagePreviewUrl} />
            </UploadImgWrapper>
        </ImageUploadBody>
    );
};
