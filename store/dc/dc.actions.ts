import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { toast } from 'react-toastify';

import { DataCenters, Photos, Videos } from 'api';
import {
    IDataCenterFacility,
    ICapacityItem,
    ILeaseConditionsItem,
    ILeaseConditionsPost,
} from 'api/api.types';

import {
    DataCentersActionType,
    DCEditActionType,
    Range,
    IPhoto,
    IVideo,
} from './dc.types';

import {
    DC_PURCHASE_REQUEST_SET_MESSAGE,
    DC_PURCHASE_REQUEST_SET_POWER,
    DC_PURCHASE_REQUEST_SET_SPACE,
    DC_PURCHASE_REQUEST_SET_PRICE,
    DC_PURCHASE_REQUEST_RESET,
    DC_EDIT_START,
    DC_REGISTRATION_SET,
    DC_EDIT_SET_LOADING,
    DC_EDIT_SET_DC,
    DC_EDIT_SET_DC_NAME,
    DC_EDIT_SET_DC_PHONE,
    DC_EDIT_SET_DC_ADDRESS,
    DC_EDIT_SET_DC_DESCRIPTION,
    DC_EDIT_SET_DC_PHOTOS,
    DC_EDIT_SET_DC_VIDEOS,
    DC_EDIT_REMOVE_DC_PHOTOS,
    DC_EDIT_REMOVE_DC_VIDEOS,
    DC_EDIT_SET_GONE_DARK_12_MONTH,
    DC_EDIT_SET_GONE_DARK_24_MONTH,
    DC_EDIT_SET_GONE_DARK_36_MONTH,
    DC_EDIT_SET_GONE_DARK_RECOVERY_TIME,
    DC_EDIT_SET_FACILITY,
    DC_EDIT_UPDATE_FACILITY_BUILT_YEAR,
    DC_EDIT_UPDATE_FACILITY_COMPLIANCE,
    DC_EDIT_UPDATE_FACILITY_SECURITY_PHYSICAL_MONITORING,
    DC_EDIT_UPDATE_FACILITY_SECURITY_GUARDS,
    DC_EDIT_UPDATE_FACILITY_SECURITY_FACILITY_ACCESS,
    DC_EDIT_UPDATE_FACILITY_SECURITY_COMP_ROOM_ACCESS,
    DC_EDIT_UPDATE_FACILITY_SECURITY_TENANT_EQUIP_ACCESS,
    DC_EDIT_UPDATE_FACILITY_SECURITY_VISITOR_ACCESS,
    DC_EDIT_UPDATE_FACILITY_SECURITY_CCTV,
    DC_EDIT_SET_CAPACITY,
    DC_EDIT_UPDATE_CAPACITY_AVAILABLE_FLOOR_SPACE,
    DC_EDIT_UPDATE_CAPACITY_TOTAL_FLOOR_SPACE,
    DC_EDIT_UPDATE_CAPACITY_AVAILABLE_COOLING_CAPACITY,
    DC_EDIT_UPDATE_CAPACITY_TOTAL_COOLING_CAPACITY,
    DC_EDIT_UPDATE_CAPACITY_TOTAL_POWER,
    DC_EDIT_UPDATE_CAPACITY_AVAILABLE_POWER,
    DC_EDIT_UPDATE_CAPACITY_POWER_DENSITY,
    DC_EDIT_UPDATE_CAPACITY_POWER_DENSITY_TYPE,
    DC_EDIT_UPDATE_CAPACITY_POWER_VOLTAGE,
    DC_EDIT_UPDATE_WORK_AREAS_LOADING_DOCK,
    DC_EDIT_UPDATE_WORK_AREAS_SHIPPING_RECEIVING,
    DC_EDIT_UPDATE_WORK_AREAS_STAGING,
    DC_EDIT_UPDATE_WORK_AREAS_CLIENT_WORK,
    DC_EDIT_SET_LEASE_CONDITIONS,
    DC_EDIT_SET_FACILITY_SPACE_TYPE,
    DC_EDIT_SET_FACILITY_RAISED_FLOORS,
    DC_EDIT_SET_FACILITY_HW_PROVIDED,
    DC_EDIT_SET_FACILITY_EFFICIENCY,
    DC_EDIT_SET_FACILITY_UPS_BACKED,
    DC_EDIT_SET_FACILITY_UPS_RUNTIME,
    DC_EDIT_SET_FACILITY_UPS_TYPE,
    DC_EDIT_SET_FACILITY_UPS_CONFIGURATION,
    DC_EDIT_SET_FACILITY_GENERATOR_BACKED,
    DC_EDIT_SET_FACILITY_GENERATOR_TYPE,
    DC_EDIT_SET_FACILITY_GENERATOR_CAPACITY,
    DC_EDIT_SET_FACILITY_FUEL_DELIVERY,
    DC_EDIT_SET_FACILITY_GENERATOR_CONFIGURATION,
    DC_EDIT_SET_FACILITY_GENERATOR_RUNTIME,
    DC_EDIT_SET_FACILITY_COOLING_TYPE,
    DC_EDIT_SET_FACILITY_COOLING_CONFIGURATION,
    DC_EDIT_SET_NP_NAME,
    DC_EDIT_SET_NP_TYPE,
    DC_EDIT_SET_NP_CAPACITY,
    DC_EDIT_SET_TRANCHING_DISTANCE_NP_NAME,
    DC_EDIT_SET_TRANCHING_DISTANCE_NP_TYPE,
    DC_EDIT_SET_TRANCHING_DISTANCE_NP_CAPACITY,
    DC_EDIT_SET_CAPACITY_SUPPORT_AVAIL,
    DC_EDIT_SET_CAPACITY_CLIENT_ACCESS,
    DC_EDIT_SET_CAPACITY_CLIENT_AREA_OPTIONS,
    DC_EDIT_SET_CAPACITY_COOLING_DENSITY,
    DC_EDIT_SET_CAPACITY_COOLING_DENSITY_TYPE,
    DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_AVAILABLE,
    DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_CAPACITY,
    DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_DEDICATION_PORTION,
    DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_BURSTABLE,
    DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_CELLING,
    DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_COST,
    DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_BLEND,
    DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_AVAILABLE,
    DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_CAPACITY,
    DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_DEDICATION_PORTION,
    DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_BURSTABLE,
    DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_CELLING,
    DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_COST,
    DC_EDIT_SET_CURR_PAGE,
} from './dc.constants';

import { history } from 'utils/history';
import { RootStore } from '../store.reducer';

import { DASHBOARD_DC_EDIT_ROUTE } from 'constants/routes';
import { DataCenter } from 'api';
import { IDataCenter } from './dc.types';
import { serializeLeaseConditions } from './leaseConditions/utils';
import { DCRegistrationPageNum } from 'store/store.types';

export const dcPurchaseRequestUpdateMsg = (
    dcPurchaseRequestMessage: string
): DataCentersActionType => ({
    type: DC_PURCHASE_REQUEST_SET_MESSAGE,
    dcPurchaseRequestMessage,
});

export const dcPurchaseRequestUpdatePower = (
    dcPurchaseRequestPower: number | Range
): DataCentersActionType => ({
    type: DC_PURCHASE_REQUEST_SET_POWER,
    dcPurchaseRequestPower,
});

export const dcPurchaseRequestUpdateSpace = (
    dcPurchaseRequestSpace: number | Range
): DataCentersActionType => ({
    type: DC_PURCHASE_REQUEST_SET_SPACE,
    dcPurchaseRequestSpace,
});

export const dcPurchaseRequestUpdatePrice = (
    dcPurchaseRequestPrice: number
): DataCentersActionType => ({
    type: DC_PURCHASE_REQUEST_SET_PRICE,
    dcPurchaseRequestPrice,
});

export const dcPurchaseRequestReset = (): DataCentersActionType => ({
    type: DC_PURCHASE_REQUEST_RESET,
});

export const addDCPurchaseRequest = (
    onError: (message: string) => void,
    onSuccess: () => void,
    dcId?: number
): ThunkAction<void, RootStore, null, Action> => async (dispatch, getStore) => {
    const { dataCenters } = getStore();

    try {
        const purchaseRequest = {
            power: dataCenters.dcPurchaseRequestPower,
            space: dataCenters.dcPurchaseRequestSpace,
            price: dataCenters.dcPurchaseRequestPrice,
            message: dataCenters.dcPurchaseRequestMessage,
        };
        if (dcId) {
            await DataCenters.makePurchaseRequest(dcId, purchaseRequest);
            dispatch(dcPurchaseRequestReset);
            onSuccess();
        }
    } catch (e) {
        onError && onError(e.message);
    }
};

export const dcSetEditMode = (
    dcId: number,
    mode: string
): DCEditActionType => ({
    dcId,
    mode,
    type: DC_EDIT_START,
});

export const dcSetRegistrationMode = (): DCEditActionType => ({
    mode: 'registration',
    dcId: 0,
    type: DC_REGISTRATION_SET,
});

export const dcEditSetLoading = (isLoading: boolean): DCEditActionType => ({
    type: DC_EDIT_SET_LOADING,
    isLoading,
});

export const dcEditSetSelectedDC = (
    selectedDC: IDataCenter
): DCEditActionType => ({
    type: DC_EDIT_SET_DC,
    selectedDC,
});

export const dcEditSetCurrPage = (
    currPage: DCRegistrationPageNum
): DCEditActionType => ({
    type: DC_EDIT_SET_CURR_PAGE,
    currPage,
});

export const dcEditSetDCName = (dcName: string): DCEditActionType => ({
    type: DC_EDIT_SET_DC_NAME,
    dcName,
});

export const dcEditSetDCPhone = (dcPhone: string): DCEditActionType => ({
    type: DC_EDIT_SET_DC_PHONE,
    dcPhone,
});

export const dcEditSetDCDescription = (
    description: string
): DCEditActionType => ({
    type: DC_EDIT_SET_DC_DESCRIPTION,
    description,
});

export const dcEditSetDCNameAddress = (
    dcAddress: string
): DCEditActionType => ({
    type: DC_EDIT_SET_DC_ADDRESS,
    dcAddress,
});

const dcEditSetDCphotos = (photos: IPhoto[]): DCEditActionType => ({
    type: DC_EDIT_SET_DC_PHOTOS,
    photos,
});

const dcEditSetDCvideos = (videos: IVideo[]): DCEditActionType => ({
    type: DC_EDIT_SET_DC_VIDEOS,
    videos,
});

const dcEditRemovePhoto = (imageId: number): DCEditActionType => ({
    type: DC_EDIT_REMOVE_DC_PHOTOS,
    imageId,
});

const dcEditRemoveVideo = (videoId: number): DCEditActionType => ({
    type: DC_EDIT_REMOVE_DC_VIDEOS,
    videoId,
});

export const dcEditUpdateGoneDark12Month = (
    goneDark12Month: number
): DCEditActionType => ({
    type: DC_EDIT_SET_GONE_DARK_12_MONTH,
    goneDark12Month,
});

export const dcEditUpdateGoneDark24Month = (
    goneDark24Month: number
): DCEditActionType => ({
    type: DC_EDIT_SET_GONE_DARK_24_MONTH,
    goneDark24Month,
});

export const dcEditUpdateGoneDark36Month = (
    goneDark36Month: number
): DCEditActionType => ({
    type: DC_EDIT_SET_GONE_DARK_36_MONTH,
    goneDark36Month,
});

export const dcEditUpdateGoneDarkRecoveryTime = (
    recoveryTime: string
): DCEditActionType => ({
    type: DC_EDIT_SET_GONE_DARK_RECOVERY_TIME,
    recoveryTime,
});

// facility actions
export const dcEditUpdateFacilityBuiltYear = (
    facilityBuiltYear: string
): DCEditActionType => ({
    type: DC_EDIT_UPDATE_FACILITY_BUILT_YEAR,
    facilityBuiltYear,
});

export const dcEditUpdateFacilityCompliance = (
    facilityCompliance: string
): DCEditActionType => ({
    type: DC_EDIT_UPDATE_FACILITY_COMPLIANCE,
    facilityCompliance,
});

export const dcEditUpdateFacilityCoolingType = (
    facilityCoolingType: string
): DCEditActionType => ({
    type: DC_EDIT_SET_FACILITY_COOLING_TYPE,
    facilityCoolingType,
});

export const dcEditUpdateFacilityCoolingConfiguration = (
    facilityCoolingConfiguration: string
): DCEditActionType => ({
    type: DC_EDIT_SET_FACILITY_COOLING_CONFIGURATION,
    facilityCoolingConfiguration,
});

// facility --> security actions

export const dcEditSetSecurityGuards = (
    securityGuards: boolean
): DCEditActionType => ({
    type: DC_EDIT_UPDATE_FACILITY_SECURITY_GUARDS,
    securityGuards,
});

export const dcEditSetSecurityFacilityAccess = (
    securityFacilityAccess: string[]
): DCEditActionType => ({
    type: DC_EDIT_UPDATE_FACILITY_SECURITY_FACILITY_ACCESS,
    securityFacilityAccess,
});

export const dcEditSetSecurityCompRoomAccess = (
    securityCompRoomAccess: string[]
): DCEditActionType => ({
    type: DC_EDIT_UPDATE_FACILITY_SECURITY_COMP_ROOM_ACCESS,
    securityCompRoomAccess,
});

export const dcEditSetSecurityTenantEquipmentAccess = (
    securityTenantEquipmentAccess: string[]
): DCEditActionType => ({
    type: DC_EDIT_UPDATE_FACILITY_SECURITY_TENANT_EQUIP_ACCESS,
    securityTenantEquipmentAccess,
});

export const dcEditSetSecurityVisitorAccess = (
    securityVisitorAccess: string[]
): DCEditActionType => ({
    type: DC_EDIT_UPDATE_FACILITY_SECURITY_VISITOR_ACCESS,
    securityVisitorAccess,
});

export const dcEditSetSecurityPhysicalMonitoring = (
    securityPhysicalMonitoring: string
): DCEditActionType => ({
    type: DC_EDIT_UPDATE_FACILITY_SECURITY_PHYSICAL_MONITORING,
    securityPhysicalMonitoring,
});

export const dcEditSetSecurityCCTV = (
    securityCCTV: string[]
): DCEditActionType => ({
    type: DC_EDIT_UPDATE_FACILITY_SECURITY_CCTV,
    securityCCTV,
});

// work areas

export const dcEditSetLoadingDock = (
    loadingDock: boolean
): DCEditActionType => ({
    type: DC_EDIT_UPDATE_WORK_AREAS_LOADING_DOCK,
    loadingDock,
});

export const dcEditSetShippingAndReceiving = (
    shippingAndReceiving: boolean
): DCEditActionType => ({
    type: DC_EDIT_UPDATE_WORK_AREAS_SHIPPING_RECEIVING,
    shippingAndReceiving,
});

export const dcEditSetStagingArea = (
    stagingArea: boolean
): DCEditActionType => ({
    type: DC_EDIT_UPDATE_WORK_AREAS_STAGING,
    stagingArea,
});

export const dcEditSetClientWorkArea = (
    clientWorkArea: boolean
): DCEditActionType => ({
    type: DC_EDIT_UPDATE_WORK_AREAS_CLIENT_WORK,
    clientWorkArea,
});

// capacity actions
export const dcEditUpdateCapacityAvailFloorSpace = (
    capacityAvailableFloorSpace: string
): DCEditActionType => ({
    type: DC_EDIT_UPDATE_CAPACITY_AVAILABLE_FLOOR_SPACE,
    capacityAvailableFloorSpace,
});

export const dcEditUpdateCapacityTotalFloorSpace = (
    capacityTotalFloorSpace: string
): DCEditActionType => ({
    type: DC_EDIT_UPDATE_CAPACITY_TOTAL_FLOOR_SPACE,
    capacityTotalFloorSpace,
});

export const dcEditUpdateCapacityAvailCoolingCapacity = (
    capacityAvailableCoolingCapacity: string
): DCEditActionType => ({
    type: DC_EDIT_UPDATE_CAPACITY_AVAILABLE_COOLING_CAPACITY,
    capacityAvailableCoolingCapacity,
});

export const dcEditUpdateCapacityTotalCoolingCapacity = (
    capacityTotalCoolingCapacity: string
): DCEditActionType => ({
    type: DC_EDIT_UPDATE_CAPACITY_TOTAL_COOLING_CAPACITY,
    capacityTotalCoolingCapacity,
});

export const dcEditUpdateCapacityTotalPower = (capacityTotalPower: number) => ({
    type: DC_EDIT_UPDATE_CAPACITY_TOTAL_POWER,
    capacityTotalPower,
});

export const dcEditUpdateCapacityAvailablePower = (
    capacityAvailablePower: string
) => ({
    type: DC_EDIT_UPDATE_CAPACITY_AVAILABLE_POWER,
    capacityAvailablePower,
});

export const dcEditUpdateCapacityPowerDensity = (
    capacityPowerDensity: string
) => ({
    type: DC_EDIT_UPDATE_CAPACITY_POWER_DENSITY,
    capacityPowerDensity,
});

export const dcEditUpdateCapacityPowerDensityType = (
    capacityPowerDensityType: string
) => ({
    type: DC_EDIT_UPDATE_CAPACITY_POWER_DENSITY_TYPE,
    capacityPowerDensityType,
});

export const dcEditUpdateCapacityPowerVoltage = (
    capacityPowerVoltage: string
) => ({
    type: DC_EDIT_UPDATE_CAPACITY_POWER_VOLTAGE,
    capacityPowerVoltage,
});

export const dcEditStart = (
    dcId: number,
    mode: string
): ThunkAction<void, RootStore, null, Action> => async dispatch => {
    if (mode === 'edit') {
        dispatch(dcSetEditMode(dcId, 'edit'));
        history.push(`${DASHBOARD_DC_EDIT_ROUTE}/${dcId}`);
    } else {
        dispatch(dcSetRegistrationMode());
    }
};

export const dcEditSetDC = (dcId: number) => async (dispatch: any) => {
    try {
        const dcInfo = await DataCenter.get(dcId);
        dispatch(dcEditSetSelectedDC(dcInfo));
    } catch (e) {
        toast.error(e.message);
    }
};

export const dcEditSendMediaFiles = (mediaFiles: {
    images: File[];
    videos: File[];
}) => async (dispatch: any) => {
    if (mediaFiles.images.length) {
        try {
            const photos = await Promise.all(
                mediaFiles.images.map(async (file: File) => {
                    let formData = new FormData();
                    formData.append('photo', file, file.name);
                    return await Photos.post(formData);
                })
            );
            dispatch(dcEditSetDCphotos(photos));
        } catch (err) {
            toast.error(err.message);
        }
    }

    if (mediaFiles.videos.length) {
        try {
            const videos = await Promise.all(
                mediaFiles.videos.map(async (file: File) => {
                    let formData = new FormData();
                    formData.append('video', file, file.name);
                    return await Videos.post(formData);
                })
            );
            dispatch(dcEditSetDCvideos(videos));
        } catch (err) {
            toast.error(err.message);
        }
    }
};

export const dcEditRemoveMediaFiles = (file: {
    image?: number;
    video?: number;
}) => async (dispatch: any) => {
    if (file.image) {
        try {
            await Photos.delete(file.image);
            dispatch(dcEditRemovePhoto(file.image));
        } catch (err) {
            toast.error(err.message);
        }
    }

    if (file.video) {
        try {
            await Videos.delete(file.video);
            dispatch(dcEditRemoveVideo(file.video));
        } catch (err) {
            toast.error(err.message);
        }
    }
};

export const updateDataCenter = async (dispatch: any, store: any) => {
    const {
        dcEdit: { dataCenter },
    } = store.getState();
    try {
        const updatedDC = {
            ...dataCenter,
            photos_ids: dataCenter.photos.map((photo: IPhoto) => photo.id),
            videos_ids: dataCenter.videos.map((video: IVideo) => video.id),
        };

        await DataCenter.update(updatedDC);
        /** TODO: CORRECT HOOKS REFS */
        // toast.success(`Successfully updated Data Center # ${dataCenter.id}`);
    } catch (e) {
        toast.error(e.message);
    }
};

export const dcEditFinishUpdate = (
    onError: (message: string) => void,
    onSuccess: (message: string) => void
): ThunkAction<void, RootStore, null, Action> => async (dispatch, getStore) => {
    const {
        dcEdit: { dcCapacity, dcFacility, dcLeaseConditions, dcId },
    } = getStore();
    console.log(dcLeaseConditions);
    try {
        dispatch(dcEditSetLoading(true));
        const dataCenterFacility = await DataCenter.facilityUpdate(
            dcId,
            dcFacility
        );
        if (!dataCenterFacility) {
            await DataCenter.facilityPost(dcId, dcFacility);
        }
        const dataCenterCapacity = await DataCenter.capacityUpdate(
            dcId,
            dcCapacity
        );
        if (!dataCenterCapacity) {
            await DataCenter.capacityPost(dcId, dcCapacity);
        }

        const dataCenterLeaseConditions = await DataCenter.leaseConditionsUpdate(
            dcId,
            serializeLeaseConditions(dcLeaseConditions)
        );
        if (!dataCenterLeaseConditions) {
            await DataCenter.leaseConditionsPost(
                dcId,
                serializeLeaseConditions(dcLeaseConditions)
            );
        }
        dispatch(dcEditSetLoading(false));
        onSuccess('Successfully updated');
    } catch (e) {
        onError(String(e));
        dispatch(dcEditSetLoading(false));
    }
};

export const updateDCfacility = (
    dcFacility: IDataCenterFacility
): DCEditActionType => ({
    type: DC_EDIT_SET_FACILITY,
    dcFacility,
});

export const dcEditUpdateDCcapacity = (
    dcCapacity: ICapacityItem
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY,
    dcCapacity,
});

export const dcEditUpdateDCLeaseConditions = (
    dcLeaseConditions: ILeaseConditionsItem
): DCEditActionType => ({
    type: DC_EDIT_SET_LEASE_CONDITIONS,
    dcLeaseConditions,
});

export const dcEditGetDCFacility = (
    dcId: number
): ThunkAction<void, RootStore, null, Action> => async dispatch => {
    try {
        const dcFacility = await DataCenter.facilityGet(dcId);
        if (dcFacility) {
            dispatch(updateDCfacility(dcFacility));
        }
    } catch (e) {
        toast.error(e.message);
    }
};

export const dcEditGetDCCapacity = (
    dcId: number
): ThunkAction<void, RootStore, null, Action> => async dispatch => {
    try {
        const dcCapacity = await DataCenter.capacityGet(dcId);
        if (dcCapacity) {
            dispatch(dcEditUpdateDCcapacity(dcCapacity));
        }
    } catch (e) {
        toast.error(e.message);
    }
};

export const dcEditGetDCLeaseConditions = (
    dcId: number
): ThunkAction<void, RootStore, null, Action> => async dispatch => {
    try {
        const dcLeaseConditions = await DataCenter.leaseConditionsGet(dcId);
        if (dcLeaseConditions) {
            dispatch(dcEditUpdateDCLeaseConditions(dcLeaseConditions));
        }
    } catch (e) {
        toast.error(e.message);
    }
};

// page-4 actions

export const dcEditUpdateFacilitySpaceType = (
    facilitySpaceType: string
): DCEditActionType => ({
    type: DC_EDIT_SET_FACILITY_SPACE_TYPE,
    facilitySpaceType,
});

export const dcEditUpdateFacilityRaisedFloors = (
    facilityRaisedFloors: boolean
): DCEditActionType => ({
    type: DC_EDIT_SET_FACILITY_RAISED_FLOORS,
    facilityRaisedFloors,
});

export const dcEditUpdateFacilityHWProvided = (
    facilityHWProvided: string
): DCEditActionType => ({
    type: DC_EDIT_SET_FACILITY_HW_PROVIDED,
    facilityHWProvided,
});

export const dcEditUpdateFacilityEfficiency = (
    facilityEfficiency: string
): DCEditActionType => ({
    type: DC_EDIT_SET_FACILITY_EFFICIENCY,
    facilityEfficiency,
});

export const dcEditUpdateFacilityUpsBacked = (
    facilityUpsBacked: boolean
): DCEditActionType => ({
    type: DC_EDIT_SET_FACILITY_UPS_BACKED,
    facilityUpsBacked,
});

export const dcEditUpdateFacilityUpsRuntime = (
    facilityUpsRuntime: string
): DCEditActionType => ({
    type: DC_EDIT_SET_FACILITY_UPS_RUNTIME,
    facilityUpsRuntime,
});

export const dcEditUpdateFacilityUpsType = (
    facilityUpsType: string
): DCEditActionType => ({
    type: DC_EDIT_SET_FACILITY_UPS_TYPE,
    facilityUpsType,
});

export const dcEditUpdateFacilityUpsConfiguration = (
    facilityUpsConfiguration: string
): DCEditActionType => ({
    type: DC_EDIT_SET_FACILITY_UPS_CONFIGURATION,
    facilityUpsConfiguration,
});

export const dcEditUpdateFacilityGeneratorBacked = (
    facilityGeneratorBacked: boolean
): DCEditActionType => ({
    type: DC_EDIT_SET_FACILITY_GENERATOR_BACKED,
    facilityGeneratorBacked,
});

export const dcEditUpdateFacilityGeneratorType = (
    facilityGeneratorType: string
): DCEditActionType => ({
    type: DC_EDIT_SET_FACILITY_GENERATOR_TYPE,
    facilityGeneratorType,
});

export const dcEditUpdateFacilityGeneratorCapacity = (
    facilityGeneratorCapacity: number
): DCEditActionType => ({
    type: DC_EDIT_SET_FACILITY_GENERATOR_CAPACITY,
    facilityGeneratorCapacity,
});

export const dcEditUpdateFacilityFuelDelivery = (
    facilityFuelDelivery: boolean
): DCEditActionType => ({
    type: DC_EDIT_SET_FACILITY_FUEL_DELIVERY,
    facilityFuelDelivery,
});

export const dcEditUpdateFacilityGeneratorConfiguration = (
    facilityGeneratorConfiguration: string
): DCEditActionType => ({
    type: DC_EDIT_SET_FACILITY_GENERATOR_CONFIGURATION,
    facilityGeneratorConfiguration,
});

export const dcEditUpdateFacilityGeneratorRuntime = (
    facilityGeneratorRuntime: string
): DCEditActionType => ({
    type: DC_EDIT_SET_FACILITY_GENERATOR_RUNTIME,
    facilityGeneratorRuntime,
});

export const dcEditUpdateFacilityProviderName = (
    networkProviderName: string
): DCEditActionType => ({
    type: DC_EDIT_SET_NP_NAME,
    networkProviderName,
});

export const dcEditUpdateProviderNetworkType = (
    networkProviderNetworkType: string
): DCEditActionType => ({
    type: DC_EDIT_SET_NP_TYPE,
    networkProviderNetworkType,
});

export const dcEditUpdateProviderNetworkCapacity = (
    networkProviderNetworkCapacity: string
): DCEditActionType => ({
    type: DC_EDIT_SET_NP_CAPACITY,
    networkProviderNetworkCapacity,
});

export const dcEditUpdateFacilityTranchingDistanceNPName = (
    npTranchingDistanceName: string
): DCEditActionType => ({
    type: DC_EDIT_SET_TRANCHING_DISTANCE_NP_NAME,
    npTranchingDistanceName,
});

export const dcEditUpdateFacilityTranchingDistanceNPNetworkType = (
    npTranchingDistanceNetworkType: string
): DCEditActionType => ({
    type: DC_EDIT_SET_TRANCHING_DISTANCE_NP_TYPE,
    npTranchingDistanceNetworkType,
});

export const dcEditUpdateFacilityTranchingDistanceNPNetworkCapacity = (
    npTranchingDistanceNetworkCapacity: string
): DCEditActionType => ({
    type: DC_EDIT_SET_TRANCHING_DISTANCE_NP_CAPACITY,
    npTranchingDistanceNetworkCapacity,
});

export const dcEditUpdateCapacitySuppportAvailable = (
    capacitySuppportAvailable: string
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_SUPPORT_AVAIL,
    capacitySuppportAvailable,
});

export const dcEditUpdateCapacityClientAccess = (
    capacityClientAccess: string
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_CLIENT_ACCESS,
    capacityClientAccess,
});

export const dcEditUpdateCapacityClientAreaOptions = (
    capacityClientAreaOptions: string
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_CLIENT_AREA_OPTIONS,
    capacityClientAreaOptions,
});

export const dcEditUpdateCoolingDensity = (
    capacityCoolingDensity: string
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_COOLING_DENSITY,
    capacityCoolingDensity,
});

export const dcEditUpdateCoolingDensityType = (
    capacityCoolingDensityType: string
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_COOLING_DENSITY_TYPE,
    capacityCoolingDensityType,
});

export const dcEditUpdateCapacityBlendedIPTrafficAvailable = (
    capacityBlendedIPTrafficAvailable: boolean
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_AVAILABLE,
    capacityBlendedIPTrafficAvailable,
});

export const dcEditUpdateCapacityBlendedIpTrafficCapacity = (
    capacityBlendedIpTrafficCapacity: number
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_CAPACITY,
    capacityBlendedIpTrafficCapacity,
});

export const dcEditUpdateCapacityBlendedIpTrafficDedicationPortion = (
    capacityBlendedIpTrafficDedicationPortion: number
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_DEDICATION_PORTION,
    capacityBlendedIpTrafficDedicationPortion,
});

export const dcEditUpdateCapacityBlendedIpTrafficBurstable = (
    capacityBlendedIpTrafficBurstable: boolean
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_BURSTABLE,
    capacityBlendedIpTrafficBurstable,
});

export const dcEditUpdateCapacityBlendedIpTrafficCelling = (
    capacityBlendedIpTrafficCelling: number
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_CELLING,
    capacityBlendedIpTrafficCelling,
});

export const dcEditUpdateCapacityBlendedIpTrafficCost = (
    capacityBlendedIpTrafficCost: string
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_COST,
    capacityBlendedIpTrafficCost,
});

export const dcEditUpdateCapacityBlendedIpTrafficBlend = (
    capacityBlendedIpTrafficBlend: string
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_BLEND,
    capacityBlendedIpTrafficBlend,
});

export const dcEditUpdateCapacitySharedIPTrafficAvailable = (
    capacitySharedIPTrafficAvailable: boolean
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_AVAILABLE,
    capacitySharedIPTrafficAvailable,
});

export const dcEditUpdateCapacitySharedIpTrafficCapacity = (
    capacitySharedIpTrafficCapacity: number
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_CAPACITY,
    capacitySharedIpTrafficCapacity,
});

export const dcEditUpdateCapacitySharedIpTrafficDedicatedPortion = (
    capacitySharedIpTrafficDedicatedPortion: number
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_DEDICATION_PORTION,
    capacitySharedIpTrafficDedicatedPortion,
});

export const dcEditUpdateCapacitySharedIpTrafficBurstable = (
    capacitySharedIpTrafficBurstable: boolean
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_BURSTABLE,
    capacitySharedIpTrafficBurstable,
});

export const dcEditUpdateCapacitySharedIpTrafficCelling = (
    capacitySharedIpTrafficCelling: number
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_CELLING,
    capacitySharedIpTrafficCelling,
});

export const dcEditUpdateCapacitySharedIpTrafficCost = (
    capacitySharedIpTrafficCost: string
): DCEditActionType => ({
    type: DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_COST,
    capacitySharedIpTrafficCost,
});
