import {
    DC_EDIT_DATA,
    DC_EDIT_REMOVE_DC_PHOTOS,
    DC_EDIT_REMOVE_DC_VIDEOS,
    DC_EDIT_SET_CAPACITY,
    DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_AVAILABLE,
    DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_BLEND,
    DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_BURSTABLE,
    DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_CAPACITY,
    DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_CELLING,
    DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_COST,
    DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_DEDICATION_PORTION,
    DC_EDIT_SET_CAPACITY_CLIENT_ACCESS,
    DC_EDIT_SET_CAPACITY_CLIENT_AREA_OPTIONS,
    DC_EDIT_SET_CAPACITY_COOLING_DENSITY,
    DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_AVAILABLE,
    DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_BURSTABLE,
    DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_CAPACITY,
    DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_CELLING,
    DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_COST,
    DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_DEDICATION_PORTION,
    DC_EDIT_SET_CAPACITY_SUPPORT_AVAIL,
    DC_EDIT_SET_LOADING,
    DC_EDIT_SET_CURR_PAGE,
    DC_EDIT_SET_DC,
    DC_EDIT_SET_DC_ADDRESS,
    DC_EDIT_SET_DC_DESCRIPTION,
    DC_EDIT_SET_DC_NAME,
    DC_EDIT_SET_DC_PHONE,
    DC_EDIT_SET_DC_PHOTOS,
    DC_EDIT_SET_DC_VIDEOS,
    DC_EDIT_SET_FACILITY,
    DC_EDIT_SET_FACILITY_COOLING_CONFIGURATION,
    DC_EDIT_SET_FACILITY_COOLING_TYPE,
    DC_EDIT_SET_FACILITY_EFFICIENCY,
    DC_EDIT_SET_FACILITY_FUEL_DELIVERY,
    DC_EDIT_SET_FACILITY_GENERATOR_BACKED,
    DC_EDIT_SET_FACILITY_GENERATOR_CAPACITY,
    DC_EDIT_SET_FACILITY_GENERATOR_CONFIGURATION,
    DC_EDIT_SET_FACILITY_GENERATOR_RUNTIME,
    DC_EDIT_SET_FACILITY_GENERATOR_TYPE,
    DC_EDIT_SET_FACILITY_HW_PROVIDED,
    DC_EDIT_SET_FACILITY_RAISED_FLOORS,
    DC_EDIT_SET_FACILITY_SPACE_TYPE,
    DC_EDIT_SET_FACILITY_UPS_BACKED,
    DC_EDIT_SET_FACILITY_UPS_CONFIGURATION,
    DC_EDIT_SET_FACILITY_UPS_RUNTIME,
    DC_EDIT_SET_FACILITY_UPS_TYPE,
    DC_EDIT_SET_GONE_DARK_12_MONTH,
    DC_EDIT_SET_GONE_DARK_24_MONTH,
    DC_EDIT_SET_GONE_DARK_36_MONTH,
    DC_EDIT_SET_GONE_DARK_RECOVERY_TIME,
    DC_EDIT_SET_LEASE_CONDITIONS,
    DC_EDIT_SET_NP_CAPACITY,
    DC_EDIT_SET_NP_NAME,
    DC_EDIT_SET_NP_TYPE,
    DC_EDIT_SET_TRANCHING_DISTANCE_NP_CAPACITY,
    DC_EDIT_SET_TRANCHING_DISTANCE_NP_NAME,
    DC_EDIT_SET_TRANCHING_DISTANCE_NP_TYPE,
    DC_EDIT_START,
    DC_EDIT_UPDATE_CAPACITY_AVAILABLE_COOLING_CAPACITY,
    DC_EDIT_UPDATE_CAPACITY_AVAILABLE_FLOOR_SPACE,
    DC_EDIT_UPDATE_CAPACITY_AVAILABLE_POWER,
    DC_EDIT_UPDATE_CAPACITY_POWER_DENSITY,
    DC_EDIT_UPDATE_CAPACITY_POWER_VOLTAGE,
    DC_EDIT_UPDATE_CAPACITY_TOTAL_COOLING_CAPACITY,
    DC_EDIT_UPDATE_CAPACITY_TOTAL_FLOOR_SPACE,
    DC_EDIT_UPDATE_CAPACITY_TOTAL_POWER,
    DC_EDIT_UPDATE_FACILITY_BUILT_YEAR,
    DC_EDIT_UPDATE_FACILITY_COMPLIANCE,
    DC_EDIT_UPDATE_FACILITY_SECURITY_CCTV,
    DC_EDIT_UPDATE_FACILITY_SECURITY_COMP_ROOM_ACCESS,
    DC_EDIT_UPDATE_FACILITY_SECURITY_FACILITY_ACCESS,
    DC_EDIT_UPDATE_FACILITY_SECURITY_GUARDS,
    DC_EDIT_UPDATE_FACILITY_SECURITY_PHYSICAL_MONITORING,
    DC_EDIT_UPDATE_FACILITY_SECURITY_TENANT_EQUIP_ACCESS,
    DC_EDIT_UPDATE_FACILITY_SECURITY_VISITOR_ACCESS,
    DC_EDIT_UPDATE_WORK_AREAS_CLIENT_WORK,
    DC_EDIT_UPDATE_WORK_AREAS_LOADING_DOCK,
    DC_EDIT_UPDATE_WORK_AREAS_SHIPPING_RECEIVING,
    DC_EDIT_UPDATE_WORK_AREAS_STAGING,
    DC_PURCHASE_REQUEST_DATA,
    DC_PURCHASE_REQUEST_RESET,
    DC_PURCHASE_REQUEST_SET_MESSAGE,
    DC_PURCHASE_REQUEST_SET_POWER,
    DC_PURCHASE_REQUEST_SET_PRICE,
    DC_PURCHASE_REQUEST_SET_SPACE,
    DC_REGISTRATION_SET,
} from './dc.constants';

import {
    DC_EDIT_SET_CAPACITY_AVAIL_DATE,
    DC_EDIT_SET_CAPACITY_COUNTRY_EXCLUSIONS,
    DC_EDIT_SET_CAPACITY_INDUSTRY_EXCLUSIONS,
    DC_EDIT_SET_CAPACITY_MAX_COOLING,
    DC_EDIT_SET_CAPACITY_MAX_FLOOR_SPACE,
    DC_EDIT_SET_CAPACITY_MAX_POWER,
    DC_EDIT_SET_CAPACITY_MIN_FLOOR_SPACE,
    DC_EDIT_SET_CAPACITY_MIN_POWER,
    DC_EDIT_SET_CAPACITY_PREFERRED_BUYER_BUSINESS_SIZE,
    DC_EDIT_SET_CAPACITY_PREFERRED_INDUSTRIES,
    DC_EDIT_SET_CAPACITY_TERM,
    DC_EDIT_SET_COMPANY_BUSINESS_SIZE_FROM_101_TO_1000,
    DC_EDIT_SET_COMPANY_BUSINESS_SIZE_FROM_1_TO_10,
    DC_EDIT_SET_COMPANY_GREATER_THAN_1000,
    DC_EDIT_SET_PRICING_CAGE_PRICE,
    DC_EDIT_SET_PRICING_CHOSEN_SLA,
    DC_EDIT_SET_PRICING_CUSTOM_SLA_FILE,
    DC_EDIT_SET_PRICING_FLOOR_SPACE,
    DC_EDIT_SET_PRICING_LEASE_AGREEMENT,
    DC_EDIT_SET_PRICING_NUMBER_OF_TIERS,
    DC_EDIT_SET_PRICING_PRICE_PER_KWT,
    DC_EDIT_SET_PRICING_PRIVATE_SUITE,
    DC_EDIT_SET_PRICING_RACK,
    DC_EDIT_SET_PRICING_TIERED,
    DC_EDIT_SET_PURCHASE_FROM_101K_TO_1M,
    DC_EDIT_SET_PURCHASE_FROM_1_TO_10K,
    DC_EDIT_SET_PURCHASE_GREATER_THAN_1M,
    DC_EDIT_SET_TERMS_OF_LEASE_FROM_1_TO_3,
    DC_EDIT_SET_TERMS_OF_LEASE_FROM_3_TO_5,
    DC_EDIT_SET_TERMS_OF_LEASE_GREATER_THAN_5,
} from './leaseConditions/leaseConditions.constants';

import {
    DataCentersActionType,
    DCEditActionType,
    IDCEditData,
    IDCpurchaseRequestData,
    IPhoto,
    IVideo,
} from './dc.types';

export function dataCentersReducer(
    state = DC_PURCHASE_REQUEST_DATA,
    action: DataCentersActionType
): IDCpurchaseRequestData {
    switch (action.type) {
        case DC_PURCHASE_REQUEST_SET_MESSAGE:
            return {
                ...state,
                dcPurchaseRequestMessage: action.dcPurchaseRequestMessage,
            };
        case DC_PURCHASE_REQUEST_SET_POWER:
            return {
                ...state,
                dcPurchaseRequestPower: action.dcPurchaseRequestPower,
            };
        case DC_PURCHASE_REQUEST_SET_SPACE:
            return {
                ...state,
                dcPurchaseRequestSpace: action.dcPurchaseRequestSpace,
            };
        case DC_PURCHASE_REQUEST_SET_PRICE:
            return {
                ...state,
                dcPurchaseRequestPrice: action.dcPurchaseRequestPrice,
            };
        case DC_PURCHASE_REQUEST_RESET:
            return {
                ...DC_PURCHASE_REQUEST_DATA,
            };
        default:
            return state;
    }
}

export function dcEditReducer(
    state = DC_EDIT_DATA,
    action: DCEditActionType
): IDCEditData {
    switch (action.type) {
        case DC_EDIT_START:
            return {
                ...state,
                dcId: action.dcId,
                mode: action.mode,
            };
        case DC_REGISTRATION_SET:
            return {
                ...state,
                dcId: action.dcId,
                mode: action.mode,
            };
        case DC_EDIT_SET_DC:
            return {
                ...state,
                dataCenter: action.selectedDC,
            };
        case DC_EDIT_SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case DC_EDIT_SET_DC_NAME:
            return {
                ...state,
                dataCenter: { ...state.dataCenter, name: action.dcName },
            };
        case DC_EDIT_SET_DC_PHONE:
            return {
                ...state,
                dataCenter: {
                    ...state.dataCenter,
                    phone_number: action.dcPhone,
                },
            };
        case DC_EDIT_SET_DC_ADDRESS:
            return {
                ...state,
                dataCenter: {
                    ...state.dataCenter,
                    address: action.dcAddress,
                },
            };
        case DC_EDIT_SET_DC_DESCRIPTION:
            return {
                ...state,
                dataCenter: {
                    ...state.dataCenter,
                    description: action.description,
                },
            };
        case DC_EDIT_SET_DC_PHOTOS:
            return {
                ...state,
                dataCenter: {
                    ...state.dataCenter,
                    photos: [...state.dataCenter.photos, ...action.photos],
                },
            };

        case DC_EDIT_SET_DC_VIDEOS:
            return {
                ...state,
                dataCenter: {
                    ...state.dataCenter,
                    videos: [...state.dataCenter.videos, ...action.videos],
                },
            };
        case DC_EDIT_REMOVE_DC_PHOTOS:
            return {
                ...state,
                dataCenter: {
                    ...state.dataCenter,
                    photos: state.dataCenter.photos.filter(
                        (photo: IPhoto) => photo.id !== Number(action.imageId)
                    ),
                },
            };
        case DC_EDIT_REMOVE_DC_VIDEOS:
            return {
                ...state,
                dataCenter: {
                    ...state.dataCenter,
                    videos: state.dataCenter.videos.filter(
                        (video: IVideo) => video.id !== Number(action.videoId)
                    ),
                },
            };
        case DC_EDIT_SET_GONE_DARK_12_MONTH:
            return {
                ...state,
                dataCenter: {
                    ...state.dataCenter,
                    gone_dark: {
                        ...state.dataCenter.gone_dark,
                        in_12_month: action.goneDark12Month,
                    },
                },
            };
        case DC_EDIT_SET_GONE_DARK_24_MONTH:
            return {
                ...state,
                dataCenter: {
                    ...state.dataCenter,
                    gone_dark: {
                        ...state.dataCenter.gone_dark,
                        in_24_month: action.goneDark24Month,
                    },
                },
            };
        case DC_EDIT_SET_GONE_DARK_36_MONTH:
            return {
                ...state,
                dataCenter: {
                    ...state.dataCenter,
                    gone_dark: {
                        ...state.dataCenter.gone_dark,
                        in_36_month: action.goneDark36Month,
                    },
                },
            };
        case DC_EDIT_SET_GONE_DARK_RECOVERY_TIME:
            return {
                ...state,
                dataCenter: {
                    ...state.dataCenter,
                    gone_dark: {
                        ...state.dataCenter.gone_dark,
                        time_to_recovery: action.recoveryTime,
                    },
                },
            };
        case DC_EDIT_SET_FACILITY:
            return {
                ...state,
                dcFacility: action.dcFacility,
            };
        case DC_EDIT_UPDATE_FACILITY_BUILT_YEAR:
            return {
                ...state,
                dcFacility: {
                    ...state.dcFacility,
                    built_year: action.facilityBuiltYear,
                },
            };
        case DC_EDIT_UPDATE_FACILITY_COMPLIANCE:
            return {
                ...state,
                dcFacility: {
                    ...state.dcFacility,
                    compliance: action.facilityCompliance,
                },
            };

        case DC_EDIT_UPDATE_FACILITY_SECURITY_PHYSICAL_MONITORING:
            return {
                ...state,
                dcFacility: {
                    ...state.dcFacility,
                    security: {
                        ...state.dcFacility.security,
                        physical_monitoring: action.securityPhysicalMonitoring,
                    },
                },
            };
        case DC_EDIT_UPDATE_FACILITY_SECURITY_GUARDS:
            return {
                ...state,
                dcFacility: {
                    ...state.dcFacility,
                    security: {
                        ...state.dcFacility.security,
                        guards: action.securityGuards,
                    },
                },
            };
        case DC_EDIT_UPDATE_FACILITY_SECURITY_FACILITY_ACCESS:
            return {
                ...state,
                dcFacility: {
                    ...state.dcFacility,
                    security: {
                        ...state.dcFacility.security,
                        facility_access: action.securityFacilityAccess,
                    },
                },
            };
        case DC_EDIT_UPDATE_FACILITY_SECURITY_COMP_ROOM_ACCESS:
            return {
                ...state,
                dcFacility: {
                    ...state.dcFacility,
                    security: {
                        ...state.dcFacility.security,
                        computer_room_access: action.securityCompRoomAccess,
                    },
                },
            };
        case DC_EDIT_UPDATE_FACILITY_SECURITY_TENANT_EQUIP_ACCESS:
            return {
                ...state,
                dcFacility: {
                    ...state.dcFacility,
                    security: {
                        ...state.dcFacility.security,
                        tenant_equipment_access:
                            action.securityTenantEquipmentAccess,
                    },
                },
            };
        case DC_EDIT_UPDATE_FACILITY_SECURITY_VISITOR_ACCESS:
            return {
                ...state,
                dcFacility: {
                    ...state.dcFacility,
                    security: {
                        ...state.dcFacility.security,
                        visitor_access: action.securityVisitorAccess,
                    },
                },
            };
        case DC_EDIT_UPDATE_FACILITY_SECURITY_CCTV:
            return {
                ...state,
                dcFacility: {
                    ...state.dcFacility,
                    security: {
                        ...state.dcFacility.security,
                        cctv: action.securityCCTV,
                    },
                },
            };
        case DC_EDIT_SET_CAPACITY:
            return {
                ...state,
                dcCapacity: action.dcCapacity,
            };
        case DC_EDIT_UPDATE_CAPACITY_AVAILABLE_FLOOR_SPACE:
            return {
                ...state,
                dcCapacity: {
                    ...state.dcCapacity,
                    available_floor_space: action.capacityAvailableFloorSpace,
                },
            };
        case DC_EDIT_UPDATE_CAPACITY_TOTAL_FLOOR_SPACE:
            return {
                ...state,
                dcCapacity: {
                    ...state.dcCapacity,
                    total_floor_space: action.capacityTotalFloorSpace,
                },
            };
        case DC_EDIT_UPDATE_CAPACITY_AVAILABLE_COOLING_CAPACITY:
            return {
                ...state,
                dcCapacity: {
                    ...state.dcCapacity,
                    available_cooling_capacity:
                        action.capacityAvailableCoolingCapacity,
                },
            };
        case DC_EDIT_UPDATE_CAPACITY_TOTAL_COOLING_CAPACITY:
            return {
                ...state,
                dcCapacity: {
                    ...state.dcCapacity,
                    total_cooling_capacity: action.capacityTotalCoolingCapacity,
                },
            };
        case DC_EDIT_UPDATE_CAPACITY_TOTAL_POWER:
            return {
                ...state,
                dcCapacity: {
                    ...state.dcCapacity,
                    total_power: action.capacityTotalPower,
                },
            };
        case DC_EDIT_UPDATE_CAPACITY_AVAILABLE_POWER:
            return {
                ...state,
                dcCapacity: {
                    ...state.dcCapacity,
                    available_power_capacity: action.capacityAvailablePower,
                },
            };
        case DC_EDIT_UPDATE_CAPACITY_POWER_DENSITY:
            return {
                ...state,
                dcCapacity: {
                    ...state.dcCapacity,
                    power_density: action.capacityPowerDensity,
                },
            };
        case DC_EDIT_SET_FACILITY_SPACE_TYPE:
            return {
                ...state,
                dcFacility: {
                    ...state.dcFacility,
                    space_type: action.facilitySpaceType,
                },
            };
        case DC_EDIT_SET_FACILITY_RAISED_FLOORS:
            return {
                ...state,
                dcFacility: {
                    ...state.dcFacility,
                    raised_floor: action.facilityRaisedFloors,
                },
            };
        case DC_EDIT_SET_FACILITY_HW_PROVIDED:
            return {
                ...state,
                dcFacility: {
                    ...state.dcFacility,
                    hardware_provided: action.facilityHWProvided,
                },
            };
        case DC_EDIT_SET_FACILITY_EFFICIENCY:
            return {
                ...state,
                dcFacility: {
                    ...state.dcFacility,
                    efficiency: action.facilityEfficiency,
                },
            };

        case DC_EDIT_SET_FACILITY_UPS_BACKED:
            return {
                ...state,
                isFacilityUpsBacked: action.facilityUpsBacked,
                dcFacility: {
                    ...state.dcFacility,
                    ups: action.facilityUpsBacked ? state.dcFacility.ups : [],
                },
            };

        case DC_EDIT_SET_FACILITY_UPS_RUNTIME:
            if (state.dcFacility.ups.length) {
                const updatedUps = {
                    ...state.dcFacility.ups[0],
                    runtime: action.facilityUpsRuntime,
                };

                return {
                    ...state,
                    dcFacility: {
                        ...state.dcFacility,
                        ups: [updatedUps],
                    },
                };
            }
            return {
                ...state,
            };
        case DC_EDIT_SET_FACILITY_UPS_TYPE:
            if (state.dcFacility.ups.length) {
                const updatedUps = {
                    ...state.dcFacility.ups[0],
                    type: action.facilityUpsType,
                };

                return {
                    ...state,
                    dcFacility: {
                        ...state.dcFacility,
                        ups: [updatedUps],
                    },
                };
            }
            return {
                ...state,
            };
        case DC_EDIT_SET_FACILITY_UPS_CONFIGURATION:
            if (state.dcFacility.ups.length) {
                const updatedUps = {
                    ...state.dcFacility.ups[0],
                    configuration: action.facilityUpsConfiguration,
                };

                return {
                    ...state,
                    dcFacility: {
                        ...state.dcFacility,
                        ups: [updatedUps],
                    },
                };
            }
            return {
                ...state,
            };
        case DC_EDIT_SET_FACILITY_GENERATOR_BACKED:
            return {
                ...state,
                isFacilityGeneratorBacked: action.facilityGeneratorBacked,
                dcFacility: {
                    ...state.dcFacility,
                    generator: action.facilityGeneratorBacked
                        ? state.dcFacility.generator
                        : [],
                },
            };
        case DC_EDIT_SET_FACILITY_GENERATOR_TYPE:
            if (state.dcFacility.generator.length) {
                const updatedGenerator = {
                    ...state.dcFacility.generator[0],
                    type: action.facilityGeneratorType,
                };

                return {
                    ...state,
                    dcFacility: {
                        ...state.dcFacility,
                        generator: [updatedGenerator],
                    },
                };
            }
            return {
                ...state,
            };
        case DC_EDIT_SET_FACILITY_GENERATOR_CAPACITY:
            if (state.dcFacility.generator.length) {
                const updatedGenerator = {
                    ...state.dcFacility.generator[0],
                    capacity: action.facilityGeneratorCapacity,
                };

                return {
                    ...state,
                    dcFacility: {
                        ...state.dcFacility,
                        generator: [updatedGenerator],
                    },
                };
            }
            return {
                ...state,
            };
        case DC_EDIT_SET_FACILITY_FUEL_DELIVERY:
            return {
                ...state,
                isFuelDeliveryAvailable: action.facilityFuelDelivery,
            };
        case DC_EDIT_SET_FACILITY_GENERATOR_CONFIGURATION:
            if (state.dcFacility.generator.length) {
                const updatedGenerator = {
                    ...state.dcFacility.generator[0],
                    configuration: action.facilityGeneratorConfiguration,
                };

                return {
                    ...state,
                    dcFacility: {
                        ...state.dcFacility,
                        generator: [updatedGenerator],
                    },
                };
            }
            return {
                ...state,
            };
        case DC_EDIT_SET_FACILITY_GENERATOR_RUNTIME:
            if (state.dcFacility.generator.length) {
                const updatedGenerator = {
                    ...state.dcFacility.generator[0],
                    runtime: action.facilityGeneratorRuntime,
                };

                return {
                    ...state,
                    dcFacility: {
                        ...state.dcFacility,
                        generator: [updatedGenerator],
                    },
                };
            }
            return {
                ...state,
            };
        case DC_EDIT_SET_FACILITY_COOLING_TYPE:
            if (state.dcFacility.colling.length) {
                const updatedColling = {
                    ...state.dcFacility.colling[0],
                    type: action.facilityCoolingType,
                };

                return {
                    ...state,
                    dcFacility: {
                        ...state.dcFacility,
                        colling: [updatedColling],
                    },
                };
            }
            return {
                ...state,
            };
        case DC_EDIT_SET_FACILITY_COOLING_CONFIGURATION:
            if (state.dcFacility.colling.length) {
                const updatedColling = {
                    ...state.dcFacility.colling[0],
                    configuration: action.facilityCoolingConfiguration,
                };

                return {
                    ...state,
                    dcFacility: {
                        ...state.dcFacility,
                        colling: [updatedColling],
                    },
                };
            }
            return {
                ...state,
            };
        case DC_EDIT_SET_NP_NAME:
            if (state.dcCapacity.np_in_dc.length) {
                const updatedNetworkProviderName = {
                    ...state.dcCapacity.np_in_dc[0],
                    name: action.networkProviderName,
                };
                return {
                    ...state,
                    dcCapacity: {
                        ...state.dcCapacity,
                        np_in_dc: [updatedNetworkProviderName],
                    },
                };
            }
            return {
                ...state,
            };
        case DC_EDIT_SET_NP_TYPE:
            if (state.dcCapacity.np_in_dc.length) {
                const updatedNetworkProviderType = {
                    ...state.dcCapacity.np_in_dc[0],
                    network_type: action.networkProviderNetworkType,
                };
                return {
                    ...state,
                    dcCapacity: {
                        ...state.dcCapacity,
                        np_in_dc: [updatedNetworkProviderType],
                    },
                };
            }
            return {
                ...state,
            };
        case DC_EDIT_SET_NP_CAPACITY:
            if (state.dcCapacity.np_in_dc.length) {
                const updatedNetworkProviderCapacity = {
                    ...state.dcCapacity.np_in_dc[0],
                    network_capacity: action.networkProviderNetworkCapacity,
                };

                return {
                    ...state,
                    dcCapacity: {
                        ...state.dcCapacity,
                        np_in_dc: [updatedNetworkProviderCapacity],
                    },
                };
            }
            return {
                ...state,
            };
        case DC_EDIT_SET_TRANCHING_DISTANCE_NP_NAME:
            if (state.dcCapacity.np_tranching_distance.length) {
                const updatedNetworkProviderName = {
                    ...state.dcCapacity.np_tranching_distance[0],
                    name: action.npTranchingDistanceName,
                };
                return {
                    ...state,
                    dcCapacity: {
                        ...state.dcCapacity,
                        np_tranching_distance: [updatedNetworkProviderName],
                    },
                };
            }
            return {
                ...state,
            };
        case DC_EDIT_SET_TRANCHING_DISTANCE_NP_TYPE:
            if (state.dcCapacity.np_tranching_distance.length) {
                const updatedNetworkProviderName = {
                    ...state.dcCapacity.np_tranching_distance[0],
                    network_type: action.npTranchingDistanceNetworkType,
                };
                return {
                    ...state,
                    dcCapacity: {
                        ...state.dcCapacity,
                        np_tranching_distance: [updatedNetworkProviderName],
                    },
                };
            }
            return {
                ...state,
            };
        case DC_EDIT_SET_TRANCHING_DISTANCE_NP_CAPACITY:
            if (state.dcCapacity.np_tranching_distance.length) {
                const updatedNetworkProviderName = {
                    ...state.dcCapacity.np_tranching_distance[0],
                    network_capacity: action.npTranchingDistanceNetworkCapacity,
                };
                return {
                    ...state,
                    dcCapacity: {
                        ...state.dcCapacity,
                        np_tranching_distance: [updatedNetworkProviderName],
                    },
                };
            }
            return {
                ...state,
            };
        case DC_EDIT_SET_CAPACITY_SUPPORT_AVAIL:
            return {
                ...state,
                dcCapacity: {
                    ...state.dcCapacity,
                    support_available: action.capacitySuppportAvailable,
                },
            };
        case DC_EDIT_SET_CAPACITY_CLIENT_ACCESS:
            return {
                ...state,
                dcCapacity: {
                    ...state.dcCapacity,
                    client_access: action.capacityClientAccess,
                },
            };
        case DC_EDIT_SET_CAPACITY_CLIENT_AREA_OPTIONS:
            return {
                ...state,
                dcCapacity: {
                    ...state.dcCapacity,
                    client_area_options: action.capacityClientAreaOptions,
                },
            };
        case DC_EDIT_SET_CAPACITY_COOLING_DENSITY:
            return {
                ...state,
                dcCapacity: {
                    ...state.dcCapacity,
                    cooling_density: action.capacityCoolingDensity,
                },
            };
        // case DC_EDIT_SET_CAPACITY_COOLING_DENSITY_TYPE:
        //     return {
        //         ...state,
        //         dcCapacity: {
        //             ...state.dcCapacity,
        //             cooling_density: action.capacityCoolingDensityType,
        //         },
        //     };
        case DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_AVAILABLE:
            return {
                ...state,
                capacityBlendedIPTrafficAvail:
                    action.capacityBlendedIPTrafficAvailable,
            };
        case DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_CAPACITY:
            return {
                ...state,
                dcCapacity: {
                    ...state.dcCapacity,
                    blended_ip_traffic: {
                        ...state.dcCapacity.blended_ip_traffic,
                        capacity_available:
                            action.capacityBlendedIpTrafficCapacity,
                    },
                },
            };
        case DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_DEDICATION_PORTION:
            return {
                ...state,
                dcCapacity: {
                    ...state.dcCapacity,
                    blended_ip_traffic: {
                        ...state.dcCapacity.blended_ip_traffic,
                        dedication_portion:
                            action.capacityBlendedIpTrafficDedicationPortion,
                    },
                },
            };
        case DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_BURSTABLE:
            return {
                ...state,
                dcCapacity: {
                    ...state.dcCapacity,
                    blended_ip_traffic: {
                        ...state.dcCapacity.blended_ip_traffic,
                        burstable: action.capacityBlendedIpTrafficBurstable,
                    },
                },
            };
        case DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_CELLING:
            return {
                ...state,
                dcCapacity: {
                    ...state.dcCapacity,
                    blended_ip_traffic: {
                        ...state.dcCapacity.blended_ip_traffic,
                        celling: action.capacityBlendedIpTrafficCelling,
                    },
                },
            };
        case DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_COST:
            return {
                ...state,
                dcCapacity: {
                    ...state.dcCapacity,
                    blended_ip_traffic: {
                        ...state.dcCapacity.blended_ip_traffic,
                        cost_per_mbps: action.capacityBlendedIpTrafficCost,
                    },
                },
            };
        case DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_BLEND:
            return {
                ...state,
                dcCapacity: {
                    ...state.dcCapacity,
                    blended_ip_traffic: {
                        ...state.dcCapacity.blended_ip_traffic,
                        blend: action.capacityBlendedIpTrafficBlend,
                    },
                },
            };
        case DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_AVAILABLE:
            return {
                ...state,
                capacitySharedIPTrafficAvail:
                    action.capacitySharedIPTrafficAvailable,
            };
        case DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_CAPACITY:
            return {
                ...state,
                dcCapacity: {
                    ...state.dcCapacity,
                    shared_ip_traffic: {
                        ...state.dcCapacity.shared_ip_traffic,
                        capacity_available:
                            action.capacitySharedIpTrafficCapacity,
                    },
                },
            };
        case DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_DEDICATION_PORTION:
            return {
                ...state,
                dcCapacity: {
                    ...state.dcCapacity,
                    shared_ip_traffic: {
                        ...state.dcCapacity.shared_ip_traffic,
                        dedication_portion:
                            action.capacitySharedIpTrafficDedicatedPortion,
                    },
                },
            };
        case DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_BURSTABLE:
            return {
                ...state,
                dcCapacity: {
                    ...state.dcCapacity,
                    shared_ip_traffic: {
                        ...state.dcCapacity.shared_ip_traffic,
                        burstable: action.capacitySharedIpTrafficBurstable,
                    },
                },
            };
        case DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_CELLING:
            return {
                ...state,
                dcCapacity: {
                    ...state.dcCapacity,
                    shared_ip_traffic: {
                        ...state.dcCapacity.shared_ip_traffic,
                        celling: action.capacitySharedIpTrafficCelling,
                    },
                },
            };
        case DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_COST:
            return {
                ...state,
                dcCapacity: {
                    ...state.dcCapacity,
                    shared_ip_traffic: {
                        ...state.dcCapacity.shared_ip_traffic,
                        cost_per_mbps: action.capacitySharedIpTrafficCost,
                    },
                },
            };

        /** TODO: NO SERVER API */
        // case DC_EDIT_UPDATE_CAPACITY_POWER_DENSITY_TYPE:
        // return {
        //     ...state,
        //     dcCapacity: {
        //         ...state.dcCapacity,
        //         power_density_type: action.capacityPowerDensityType,
        //     },
        // };
        case DC_EDIT_UPDATE_CAPACITY_POWER_VOLTAGE:
            return {
                ...state,
                dcCapacity: {
                    ...state.dcCapacity,
                    power_voltage: action.capacityPowerVoltage,
                },
            };
        case DC_EDIT_UPDATE_WORK_AREAS_LOADING_DOCK:
            return {
                ...state,
                workAreas: {
                    ...state.workAreas,
                    loading_dock: action.loadingDock,
                },
            };
        case DC_EDIT_UPDATE_WORK_AREAS_SHIPPING_RECEIVING:
            return {
                ...state,
                workAreas: {
                    ...state.workAreas,
                    shipping_and_receiving: action.shippingAndReceiving,
                },
            };
        case DC_EDIT_UPDATE_WORK_AREAS_STAGING:
            return {
                ...state,
                workAreas: {
                    ...state.workAreas,
                    staging_area: action.stagingArea,
                },
            };
        case DC_EDIT_UPDATE_WORK_AREAS_CLIENT_WORK:
            return {
                ...state,
                workAreas: {
                    ...state.workAreas,
                    client_work_area: action.clientWorkArea,
                },
            };
        case DC_EDIT_SET_LEASE_CONDITIONS:
            return {
                ...state,
                dcLeaseConditions: action.dcLeaseConditions,
            };
        case DC_EDIT_SET_CAPACITY_TERM:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    term: action.capacityTerm,
                },
            };
        case DC_EDIT_SET_CAPACITY_AVAIL_DATE:
            return {
                ...state,
                dcCapacity: {
                    ...state.dcCapacity,
                    date_available: action.capacityAvailableDate,
                },
            };
        case DC_EDIT_SET_CAPACITY_MIN_POWER:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    min_power_capacity: action.capacityMinPower,
                },
            };
        case DC_EDIT_SET_CAPACITY_MAX_POWER:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    max_power: action.capacityMaxPower,
                },
            };
        case DC_EDIT_SET_CAPACITY_MIN_FLOOR_SPACE:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    min_floor_space: action.capacityMinFloorSpace,
                },
            };
        case DC_EDIT_SET_CAPACITY_MAX_FLOOR_SPACE:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    max_floor_space: action.capacityMaxFloorSpace,
                },
            };
        /** TODO: NO SERVER API */
        // case DC_EDIT_SET_CAPACITY_MIN_COOLING:
        //     return {
        //         ...state,
        //         dcLeaseConditions: {
        //             ...state.dcLeaseConditions,
        //         },
        //     };
        case DC_EDIT_SET_CAPACITY_MAX_COOLING:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    max_cooling_capacity: action.capacityMaxCooling,
                },
            };
        case DC_EDIT_SET_CAPACITY_PREFERRED_INDUSTRIES:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    preferred_industries: action.capacityPreferredIndustries,
                },
            };
        case DC_EDIT_SET_CAPACITY_INDUSTRY_EXCLUSIONS:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    industry_exclusions: action.capacityIndustryExclusions,
                },
            };
        case DC_EDIT_SET_CAPACITY_COUNTRY_EXCLUSIONS:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    country_exclusions: action.capacityCountryExclusions,
                },
            };
        case DC_EDIT_SET_CAPACITY_PREFERRED_BUYER_BUSINESS_SIZE:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    preferred_business_size:
                        action.capacityPreferredBuyerBusinessSize,
                },
            };
        case DC_EDIT_SET_PRICING_PRICE_PER_KWT:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    pricing: {
                        ...state.dcLeaseConditions.pricing,
                        price_per_kwt: action.pricePerKwt,
                    },
                },
            };
        case DC_EDIT_SET_PRICING_FLOOR_SPACE:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    pricing: {
                        ...state.dcLeaseConditions.pricing,
                        floor_space: action.pricingFloorSpace,
                    },
                },
            };
        case DC_EDIT_SET_PRICING_CAGE_PRICE:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    pricing: {
                        ...state.dcLeaseConditions.pricing,
                        cage: action.pricingCage,
                    },
                },
            };
        case DC_EDIT_SET_PRICING_RACK:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    pricing: {
                        ...state.dcLeaseConditions.pricing,
                        rack: action.pricingRack,
                    },
                },
            };
        case DC_EDIT_SET_PRICING_PRIVATE_SUITE:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    pricing: {
                        ...state.dcLeaseConditions.pricing,
                        private_suite: action.pricingPrivateSuite,
                    },
                },
            };
        case DC_EDIT_SET_PRICING_TIERED:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    pricing: {
                        ...state.dcLeaseConditions.pricing,
                        tiered_pricing: action.pricingTiered,
                    },
                },
            };
        case DC_EDIT_SET_PRICING_NUMBER_OF_TIERS:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    pricing: {
                        ...state.dcLeaseConditions.pricing,
                        number_of_tiers: action.pricingNumberOfTiers,
                    },
                },
            };
        case DC_EDIT_SET_PURCHASE_FROM_1_TO_10K:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    pricing: {
                        ...state.dcLeaseConditions.pricing,
                        purchase_volume_discount: {
                            ...state.dcLeaseConditions.pricing
                                .purchase_volume_discount,
                            small_discount: action.purchaseFrom1To10k,
                        },
                    },
                },
            };
        case DC_EDIT_SET_PURCHASE_FROM_101K_TO_1M:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    pricing: {
                        ...state.dcLeaseConditions.pricing,
                        purchase_volume_discount: {
                            ...state.dcLeaseConditions.pricing
                                .purchase_volume_discount,
                            medium_discount: action.purchaseFrom101kTo1M,
                        },
                    },
                },
            };
        case DC_EDIT_SET_PURCHASE_GREATER_THAN_1M:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    pricing: {
                        ...state.dcLeaseConditions.pricing,
                        purchase_volume_discount: {
                            ...state.dcLeaseConditions.pricing
                                .purchase_volume_discount,
                            large_discount: action.purchaseGreaterThan1M,
                        },
                    },
                },
            };
        case DC_EDIT_SET_COMPANY_BUSINESS_SIZE_FROM_1_TO_10:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    pricing: {
                        ...state.dcLeaseConditions.pricing,
                        company_size_discount: {
                            ...state.dcLeaseConditions.pricing
                                .company_size_discount,
                            small_discount: action.companyBusinessSizeFrom1To10,
                        },
                    },
                },
            };
        case DC_EDIT_SET_COMPANY_BUSINESS_SIZE_FROM_101_TO_1000:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    pricing: {
                        ...state.dcLeaseConditions.pricing,
                        company_size_discount: {
                            ...state.dcLeaseConditions.pricing
                                .company_size_discount,
                            medium_discount:
                                action.companyBusinessSizeFrom101To1000,
                        },
                    },
                },
            };
        case DC_EDIT_SET_COMPANY_GREATER_THAN_1000:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    pricing: {
                        ...state.dcLeaseConditions.pricing,
                        company_size_discount: {
                            ...state.dcLeaseConditions.pricing
                                .company_size_discount,
                            large_discount:
                                action.companyBusinessSizeGreaterThan1000,
                        },
                    },
                },
            };
        case DC_EDIT_SET_TERMS_OF_LEASE_FROM_1_TO_3:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    pricing: {
                        ...state.dcLeaseConditions.pricing,
                        terms_of_lease_discount: {
                            ...state.dcLeaseConditions.pricing
                                .terms_of_lease_discount,
                            small_discount: action.termsOfLeaseFrom1To3,
                        },
                    },
                },
            };
        case DC_EDIT_SET_TERMS_OF_LEASE_FROM_3_TO_5:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    pricing: {
                        ...state.dcLeaseConditions.pricing,
                        terms_of_lease_discount: {
                            ...state.dcLeaseConditions.pricing
                                .terms_of_lease_discount,
                            medium_discount: action.termsOfLeaseFrom3To5,
                        },
                    },
                },
            };
        case DC_EDIT_SET_TERMS_OF_LEASE_GREATER_THAN_5:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    pricing: {
                        ...state.dcLeaseConditions.pricing,
                        terms_of_lease_discount: {
                            ...state.dcLeaseConditions.pricing
                                .terms_of_lease_discount,
                            large_discount: action.termsOfLeaseGreaterThan5,
                        },
                    },
                },
            };
        case DC_EDIT_SET_PRICING_CUSTOM_SLA_FILE:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    pricing: {
                        ...state.dcLeaseConditions.pricing,
                        sla_upload_file: action.pricingCustomSLAFile,
                    },
                },
            };
        case DC_EDIT_SET_PRICING_LEASE_AGREEMENT:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    pricing: {
                        ...state.dcLeaseConditions.pricing,
                        lease_agreement: action.pricingLeaseAgreement,
                    },
                },
            };
        case DC_EDIT_SET_PRICING_CHOSEN_SLA:
            return {
                ...state,
                dcLeaseConditions: {
                    ...state.dcLeaseConditions,
                    pricing: {
                        ...state.dcLeaseConditions.pricing,
                        chose_sla: action.chosenSLA,
                    },
                },
            };
        case DC_EDIT_SET_CURR_PAGE:
            return {
                ...state,
                currPage: action.currPage,
            };

        default:
            return state;
    }
}
