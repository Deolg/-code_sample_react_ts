import styled from 'styled-components';

export const UploadImgWrapper = styled.div`
    margin: 0 50px 20px;
    height: 100px;
    width: 100px;
`;

export const ImageUploadBody = styled.div`
    display: flex;
    align-items: center;

    cursor: pointer;
`;

export const UploadTextBox = styled.div`
    font-size: 14.4px;
    line-height: 17px;
    text-decoration-line: underline;

    color: #000000;
`;

export const UploadIconBox = styled.div`
    margin-left: 13px;
`;

export const UploadInputFile = styled.input.attrs({
    type: 'file',
    accept: 'image/x-png,image/gif,image/jpeg',
})`
    display: none;
`;

export const UploadImgSrc = styled.img.attrs(props => ({
    src: props.src,
}))`
    max-width: 100px;
    display: block;
    height: 100px;
    width: 100px;
    border-radius: 50%;
`;
