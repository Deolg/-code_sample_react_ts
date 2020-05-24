import { useRef } from 'react';
import { useSelector } from 'react-redux';

import { RootStore } from 'store/store.reducer';

export const useDataCenterRefs = () => {
    const selectedDC = useSelector(
        (state: RootStore) => state.dcEdit.dataCenter
    );

    const selectedDCcapacity = useSelector(
        (state: RootStore) => state.dcEdit.dcCapacity
    );

    const selectedDCfacility = useSelector(
        (state: RootStore) => state.dcEdit.dcFacility
    );

    const selectedDCleaseConditions = useSelector(
        (state: RootStore) => state.dcEdit.dcLeaseConditions
    );

    const { current: initialDCvalues } = useRef(selectedDC);
    const { current: initialDCcapacityValues } = useRef(selectedDCcapacity);
    const { current: initialDCfacilityValues } = useRef(selectedDCfacility);
    const { current: initialDCleaseConditionsValues } = useRef(
        selectedDCleaseConditions
    );

    return {
        initialDCvalues,
        initialDCcapacityValues,
        initialDCfacilityValues,
        initialDCleaseConditionsValues,
    };
};
