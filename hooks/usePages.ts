import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from 'store/store.reducer';
import { DCRegistrationPageNum } from 'store/store.types';
import { dcEditSetCurrPage, dcEditSetDC } from 'store/dc/dc.actions';

import { dcRegistrationSetCurrPage } from 'store/store.actions';

interface IPagesState {
    currPage: DCRegistrationPageNum;
    mode: string;
}

interface IPagesActions {
    dcSetCurrPage: (currPage: DCRegistrationPageNum) => void;
}

export const usePages = (): [IPagesState, IPagesActions] => {
    const dispatch = useDispatch();

    const dcId = useSelector((state: RootStore) => state.dcEdit.dcId);

    const currRegistrationPage = useSelector(
        (state: RootStore) => state.dcRegistration.currPage
    );

    const currEditPage = useSelector(
        (state: RootStore) => state.dcEdit.currPage
    );

    const dcFormMode = useSelector((state: RootStore) => state.dcEdit.mode);

    const isRegistrationMode = dcFormMode === 'registration';
    const isEditMode = dcFormMode === 'edit';

    useEffect(() => {
        const isEditModeSet = dcId && isEditMode;
        (async () => {
            try {
                if (isEditModeSet) await dcEditSetDC(dcId)(dispatch);
            } catch (e) {
                console.error(e);
            }
        })();
    }, [dcId, dispatch, isEditMode]);

    const dcSetCurrPage = (currPage: DCRegistrationPageNum) => {
        isRegistrationMode && dispatch(dcRegistrationSetCurrPage(currPage));
        isEditMode && dispatch(dcEditSetCurrPage(currPage));
    };

    const currPage = isRegistrationMode ? currRegistrationPage : currEditPage;

    const api: IPagesActions = { dcSetCurrPage };
    const state: IPagesState = { currPage, mode: dcFormMode };

    return [state, api];
};
