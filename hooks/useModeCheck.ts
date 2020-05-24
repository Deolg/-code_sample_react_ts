import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootStore } from 'store/store.reducer';

import {
    dcEditStart,
    dcEditGetDCFacility,
    dcEditGetDCCapacity,
    dcEditGetDCLeaseConditions,
} from 'store/dc/dc.actions';

export const useModeCheck = () => {
    const { dcId } = useParams();
    const dispatch = useDispatch();

    const selectedDCId = useSelector((state: RootStore) => state.dcEdit.dcId);

    useEffect(() => {
        const isDCsetInEditMode = dcId && !selectedDCId;
        const parsedDCId = Number(dcId);

        if (isDCsetInEditMode) {
            dispatch(dcEditStart(parsedDCId, 'edit'));
            dispatch(dcEditGetDCFacility(parsedDCId));
            dispatch(dcEditGetDCCapacity(parsedDCId));
            dispatch(dcEditGetDCLeaseConditions(parsedDCId));
        }
    }, [dcId, dispatch, selectedDCId]);
};
