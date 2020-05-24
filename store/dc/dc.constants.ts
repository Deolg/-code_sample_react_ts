import { IDCpurchaseRequestData, IDCEditData } from './dc.types';
import { DCRegistrationPageNum } from 'store/store.types';

export const DC_ADD_PURCHASE_REQUEST = 'DC_ADD_PURCHASE_REQUEST';

export const DC_PURCHASE_REQUEST_SET_MESSAGE =
    'DC_PURCHASE_REQUEST_SET_MESSAGE';
export const DC_PURCHASE_REQUEST_SET_POWER = 'DC_PURCHASE_REQUEST_SET_POWER';
export const DC_PURCHASE_REQUEST_SET_SPACE = 'DC_PURCHASE_REQUEST_SET_SPACE';
export const DC_PURCHASE_REQUEST_SET_PRICE = 'DC_PURCHASE_REQUEST_SET_PRICE';
export const DC_PURCHASE_REQUEST_RESET = 'DC_PURCHASE_REQUEST_RESET';

export const DC_EDIT_START = 'dc_edit/START';
export const DC_EDIT_SET_LOADING = 'dc_edit/SET_LOADING';
export const DC_REGISTRATION_SET = 'dc_edit/REGISTRATION';
export const DC_EDIT_SET_CURR_PAGE = 'dc_edit/SET_CURR_PAGE';
export const DC_EDIT_SET_DC = 'dc_edit/SET_DC';
export const DC_EDIT_SET_DC_NAME = 'dc_edit/SET_DC_NAME';
export const DC_EDIT_SET_DC_PHONE = 'dc_edit/SET_DC_PHONE';
export const DC_EDIT_SET_DC_ADDRESS = 'dc_edit/SET_DC_ADDRESS';
export const DC_EDIT_SET_DC_DESCRIPTION = 'dc_edit/SET_DC_DESCRIPTION';

export const DC_EDIT_SET_DC_PHOTOS = 'dc_edit/SET_DC_PHOTOS';
export const DC_EDIT_SET_DC_VIDEOS = 'dc_edit/SET_DC_VIDEOS';
export const DC_EDIT_REMOVE_DC_PHOTOS = 'dc_edit/REMOVE_DC_PHOTOS';
export const DC_EDIT_REMOVE_DC_VIDEOS = 'dc_edit/REMOVE_DC_VIDEOS';

export const DC_EDIT_SET_GONE_DARK_12_MONTH = 'dc_edit/SET_GONE_DARK_12_MONTH';
export const DC_EDIT_SET_GONE_DARK_24_MONTH = 'dc_edit/SET_GONE_DARK_24_MONTH';
export const DC_EDIT_SET_GONE_DARK_36_MONTH = 'dc_edit/SET_GONE_DARK_36_MONTH';
export const DC_EDIT_SET_GONE_DARK_RECOVERY_TIME =
    'dc_edit/SET_GONE_DARK_RECOVERY_TIME';

// facility
export const DC_EDIT_SET_FACILITY = 'dc_edit/SET_FACILITY';
export const DC_EDIT_UPDATE_FACILITY_BUILT_YEAR =
    'dc_edit/UPDATE_FACILITY_BUILT_YEAR';
export const DC_EDIT_UPDATE_FACILITY_COMPLIANCE =
    'dc_edit/UPDATE_FACILITY_COMPLIANCE';
// facility --> security
export const DC_EDIT_UPDATE_FACILITY_SECURITY_PHYSICAL_MONITORING =
    'dc_edit/UPDATE_FACILITY_SECURITY_PHYSICAL_MONITORING';
export const DC_EDIT_UPDATE_FACILITY_SECURITY_GUARDS =
    'dc_edit/UPDATE_FACILITY_SECURITY_GUARDS';
export const DC_EDIT_UPDATE_FACILITY_SECURITY_FACILITY_ACCESS =
    'dc_edit/UPDATE_FACILITY_SECURITY_FACILITY_ACCESS';
export const DC_EDIT_UPDATE_FACILITY_SECURITY_COMP_ROOM_ACCESS =
    'dc_edit/UPDATE_FACILITY_SECURITY_COMP_ROOM_ACCESS';
export const DC_EDIT_UPDATE_FACILITY_SECURITY_TENANT_EQUIP_ACCESS =
    'dc_edit/UPDATE_FACILITY_SECURITY_TENANT_EQUIP_ACCESS';
export const DC_EDIT_UPDATE_FACILITY_SECURITY_VISITOR_ACCESS =
    'dc_edit/UPDATE_FACILITY_SECURITY_VISITOR_ACCESS';
export const DC_EDIT_UPDATE_FACILITY_SECURITY_CCTV =
    'dc_edit/UPDATE_FACILITY_SECURITY_CCTV';
// capacity
export const DC_EDIT_SET_CAPACITY = 'dc_edit/SET_CAPACITY';
export const DC_EDIT_UPDATE_CAPACITY_AVAILABLE_FLOOR_SPACE =
    'dc_edit/UPDATE_CAPACITY_AVAILABLE_FLOOR_SPACE';
export const DC_EDIT_UPDATE_CAPACITY_TOTAL_FLOOR_SPACE =
    'dc_edit/UPDATE_CAPACITY_TOTAL_FLOOR_SPACE';
export const DC_EDIT_UPDATE_CAPACITY_AVAILABLE_COOLING_CAPACITY =
    'dc_edit/UPDATE_CAPACITY_AVAILABLE_COOLING_CAPACITY';
export const DC_EDIT_UPDATE_CAPACITY_TOTAL_COOLING_CAPACITY =
    'dc_edit/UPDATE_CAPACITY_TOTAL_COOLING_CAPACITY';

export const DC_EDIT_UPDATE_CAPACITY_TOTAL_POWER =
    'dc_edit/UPDATE_CAPACITY_TOTAL_POWER';
export const DC_EDIT_UPDATE_CAPACITY_AVAILABLE_POWER =
    'dc_edit/UPDATE_CAPACITY_AVAILABLE_POWER';
export const DC_EDIT_UPDATE_CAPACITY_POWER_DENSITY =
    'dc_edit/UPDATE_CAPACITY_POWER_DENSITY';
export const DC_EDIT_UPDATE_CAPACITY_POWER_DENSITY_TYPE =
    'dc_edit/UPDATE_CAPACITY_POWER_DENSITY_TYPE';
export const DC_EDIT_UPDATE_CAPACITY_POWER_VOLTAGE =
    'dc_edit/UPDATE_CAPACITY_POWER_VOLTAGE';

// page-4 start

export const DC_EDIT_SET_FACILITY_SPACE_TYPE =
    'dc_edit/SET_FACILITY_SPACE_TYPE';
export const DC_EDIT_SET_FACILITY_RAISED_FLOORS =
    'dc_edit/SET_FACILITY_RAISED_FLOORS';
export const DC_EDIT_SET_FACILITY_UPS_BACKED =
    'dc_edit/SET_FACILITY_UPS_BACKED';
export const DC_EDIT_SET_FACILITY_UPS_TYPE = 'dc_edit/SET_FACILITY_UPS_TYPE';
export const DC_EDIT_SET_FACILITY_UPS_RUNTIME =
    'dc_edit/SET_FACILITY_UPS_RUNTIME';
export const DC_EDIT_SET_FACILITY_UPS_CONFIGURATION =
    'dc_edit/SET_FACILITY_UPS_CONFIGURATION';
export const DC_EDIT_SET_FACILITY_GENERATOR_BACKED =
    'dc_edit/SET_FACILITY_GENERATOR_BACKED';
export const DC_EDIT_SET_FACILITY_GENERATOR_TYPE =
    'dc_edit/SET_FACILITY_GENERATOR_TYPE';
export const DC_EDIT_SET_FACILITY_GENERATOR_CAPACITY =
    'dc_edit/SET_FACILITY_GENERATOR_CAPACITY';
export const DC_EDIT_SET_FACILITY_FUEL_DELIVERY =
    'dc_edit/SET_FACILITY_FUEL_DELIVERY';
export const DC_EDIT_SET_FACILITY_GENERATOR_CONFIGURATION =
    'dc_edit/SET_FACILITY_GENERATOR_CONFIGURATION';
export const DC_EDIT_SET_FACILITY_GENERATOR_RUNTIME =
    'dc_edit/SET_FACILITY_GENERATOR_RUNTIME';
export const DC_EDIT_SET_FACILITY_POWER_SOURCES =
    'dc_edit/SET_FACILITY_POWER_SOURCES';
export const DC_EDIT_SET_FACILITY_COOLING = 'dc_edit/SET_FACILITY_COOLING';
// colling
export const DC_EDIT_SET_FACILITY_COOLING_TYPE =
    'dc_edit/SET_FACILITY_COOLING_TYPE';
export const DC_EDIT_SET_FACILITY_COOLING_TOTAL_CAPACITY =
    'dc_edit/SET_FACILITY_COOLING_TOTAL_CAPACITY';
export const DC_EDIT_SET_FACILITY_COOLING_AVAIL_CAPACITY =
    'dc_edit/SET_FACILITY_COOLING_AVAIL_CAPACITY';
export const DC_EDIT_SET_FACILITY_COOLING_CONFIGURATION =
    'dc_edit/SET_FACILITY_COOLING_CONFIGURATION';

export const DC_EDIT_SET_NP_NAME = 'dc_edit/SET_NP_NAME';
export const DC_EDIT_SET_NP_TYPE = 'dc_edit/SET_NP_TYPE';
export const DC_EDIT_SET_NP_CAPACITY = 'dc_edit/SET_NP_CAPACITY';
export const DC_EDIT_SET_TRANCHING_DISTANCE_NP_NAME =
    'dc_edit/SET_TRANCHING_DISTANCE_NP_NAME';
export const DC_EDIT_SET_TRANCHING_DISTANCE_NP_TYPE =
    'dc_edit/SET_TRANCHING_DISTANCE_NP_TYPE';
export const DC_EDIT_SET_TRANCHING_DISTANCE_NP_CAPACITY =
    'dc_edit/SET_TRANCHING_DISTANCE_NP_CAPACITY';
export const DC_EDIT_SET_CAPACITY_SUPPORT_AVAIL =
    'dc_edit/SET_CAPACITY_SUPPORT_AVAIL';
export const DC_EDIT_SET_CAPACITY_CLIENT_ACCESS =
    'dc_edit/SET_CAPACITY_CLIENT_ACCESS';
export const DC_EDIT_SET_CAPACITY_CLIENT_AREA_OPTIONS =
    'dc_edit/SET_CAPACITY_CLIENT_AREA_OPTIONS';
export const DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_AVAILABLE =
    'dc_edit/SET_CAPACITY_SHARED_IP_TRAFFIC_AVAILABLE';
export const DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_CAPACITY =
    'dc_edit/SET_CAPACITY_SHARED_IP_TRAFFIC_CAPACITY';
export const DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_DEDICATION_PORTION =
    'dc_edit/SET_CAPACITY_SHARED_IP_TRAFFIC_DEDICATION_PORTION';
export const DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_BURSTABLE =
    'dc_edit/SET_CAPACITY_SHARED_IP_TRAFFIC_BURSTABLE';
export const DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_CELLING =
    'dc_edit/SET_CAPACITY_SHARED_IP_TRAFFIC_CELLING';
export const DC_EDIT_SET_CAPACITY_SHARED_IP_TRAFFIC_COST =
    'dc_edit/SET_CAPACITY_SHARED_IP_TRAFFIC_COST';

export const DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_AVAILABLE =
    'dc_edit/SET_CAPACITY_BLENDED_IP_TRAFFIC_AVAILABLE';
export const DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_CAPACITY =
    'dc_edit/SET_CAPACITY_BLENDED_IP_TRAFFIC_CAPACITY';
export const DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_DEDICATION_PORTION =
    'dc_edit/SET_CAPACITY_BLENDED_IP_TRAFFIC_DEDICATION_PORTION';
export const DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_BURSTABLE =
    'dc_edit/SET_CAPACITY_BLENDED_IP_TRAFFIC_BURSTABLE';
export const DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_CELLING =
    'dc_edit/SET_CAPACITY_BLENDED_IP_TRAFFIC_CELLING';
export const DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_COST =
    'dc_edit/SET_CAPACITY_BLENDED_IP_TRAFFIC_COST';
export const DC_EDIT_SET_CAPACITY_BLENDED_IP_TRAFFIC_BLEND =
    'dc_edit/SET_CAPACITY_BLENDED_IP_TRAFFIC_BLEND';
export const DC_EDIT_SET_CAPACITY_AVAILABLE_POWER =
    'dc_edit/SET_CAPACITY_AVAILABLE_POWER';

export const DC_EDIT_SET_FACILITY_HW_PROVIDED =
    'dc_edit/SET_FACILITY_HW_PROVIDED';
export const DC_EDIT_SET_FACILITY_EFFICIENCY =
    'dc_edit/SET_FACILITY_EFFICIENCY';
export const DC_EDIT_SET_CAPACITY_TOTAL_POWER =
    'dc_edit/SET_CAPACITY_TOTAL_POWER';
export const DC_EDIT_SET_CAPACITY_POWER_DENSITY =
    'dc_edit/SET_CAPACITY_POWER_DENSITY';
export const DC_EDIT_SET_CAPACITY_POWER_DENSITY_TYPE =
    'dc_edit/SET_CAPACITY_POWER_DENSITY_TYPE';
export const DC_EDIT_SET_CAPACITY_POWER_VOLTAGE =
    'dc_edit/SET_CAPACITY_POWER_VOLTAGE';
export const DC_EDIT_SET_CAPACITY_TOTAL_COOLING_CAPACITY =
    'dc_edit/SET_CAPACITY_TOTAL_COOLING_CAPACITY';
export const DC_EDIT_SET_CAPACITY_AVAIL_COOLING_CAPACITY =
    'dc_edit/SET_CAPACITY_AVAIL_COOLING_CAPACITY';
export const DC_EDIT_SET_CAPACITY_COOLING_DENSITY =
    'dc_edit/SET_CAPACITY_COOLING_DENSITY';
export const DC_EDIT_SET_CAPACITY_COOLING_DENSITY_TYPE =
    'dc_edit/SET_CAPACITY_COOLING_DENSITY_TYPE';
export const DC_EDIT_SET_CAPACITY_COOLING_CONFIGURATION =
    'dc_edit/SET_CAPACITY_COOLING_CONFIGURATION';
export const DC_EDIT_SET_CAPACITY_TOTAL_FLOOR_SPACE =
    'dc_edit/SET_CAPACITY_TOTAL_FLOOR_SPACE';
export const DC_EDIT_SET_CAPACITY_AVAIL_FLOOR_SPACE =
    'dc_edit/SET_CAPACITY_AVAILABLE_FLOOR_SPACE';
// page-4 end

export const DC_EDIT_UPDATE_WORK_AREAS_LOADING_DOCK =
    'dc_edit/UPDATE_WORK_AREAS_LOADING_DOCK';
export const DC_EDIT_UPDATE_WORK_AREAS_SHIPPING_RECEIVING =
    'dc_edit/UPDATE_WORK_AREAS_SHIPPING_RECEIVING';
export const DC_EDIT_UPDATE_WORK_AREAS_STAGING =
    'dc_edit/UPDATE_WORK_AREAS_STAGING';
export const DC_EDIT_UPDATE_WORK_AREAS_CLIENT_WORK =
    'dc_edit/UPDATE_WORK_AREAS_CLIENT_WORK';
export const DC_EDIT_SET_LEASE_CONDITIONS = 'dc_edit/SET_LEASE_CONDITIONS';

export const DC_PURCHASE_REQUEST_DATA: IDCpurchaseRequestData = {
    dcPurchaseRequestMessage: '',
    dcPurchaseRequestPower: 10,
    dcPurchaseRequestSpace: 0,
    dcPurchaseRequestPrice: 0,
};

const DATA_CENTER_DATA = {
    id: 0,
    name: '',
    phone_number: '',
    address: {
        label: '',
    },
    description: '',
    uptime_tier_classification: '',
    rating: '',
    active: false,
    status: '',
    enabled: false,
    photos: [],
    videos: [],
    certificates: [],
    gone_dark: {
        in_12_month: 0,
        in_24_month: 0,
        in_36_month: 0,
        time_to_recovery: '',
    },
    payment_status: null,
};

const DC_FACILITY_DATA = {
    built_year: '',
    space_type: '',
    raised_floor: false,
    hardware_provided: '',
    efficiency: '',
    compliance: '',
    ups: [
        {
            id: null,
            runtime: '00:00:00',
            capacity: 0,
            type: '',
            configuration: '',
        },
    ],
    generator: [
        {
            id: null,
            runtime: '00:00:00',
            capacity: 0,
            type: '',
            configuration: '',
        },
    ],
    power_sources: [],
    colling: [
        {
            id: null,
            type: '',
            total_capacity: 0,
            available_capacity: 0,
            configuration: '',
        },
    ],
    security: {
        guards: false,
        facility_access: [],
        computer_room_access: [],
        tenant_equipment_access: [],
        visitor_access: [],
        physical_monitoring: '',
        cctv: [],
    },
};

const DC_CAPACITY_DATA = {
    total_power: 1,
    available_power_capacity: '',
    power_density: '',
    power_voltage: '',
    total_cooling_capacity: '',
    available_cooling_capacity: '',
    cooling_density: 'Kw/sq. Ft',
    total_floor_space: '',
    available_floor_space: '',
    date_available: new Date(),
    time_to_move_in: '11:12:22',
    support_available: '',
    client_access: '',
    client_area_options: '',
    shared_ip_traffic: {
        id: null,
        capacity_available: 0,
        dedication_portion: 0,
        burstable: false,
        celling: 0,
        cost_per_mbps: '',
    },
    blended_ip_traffic: {
        id: null,
        capacity_available: 0,
        dedication_portion: 0,
        burstable: false,
        celling: 0,
        cost_per_mbps: '',
        blend: '',
    },
    np_tranching_distance: [
        { id: null, name: '', network_type: '', network_capacity: '' },
    ],
    np_in_dc: [{ id: null, name: '', network_type: '', network_capacity: '' }],
};

const DATA_WORK_AREAS = {
    loading_dock: false,
    shipping_and_receiving: false,
    staging_area: false,
    client_work_area: false,
};

const DC_LEASE_CONDITIONS_DATA = {
    term: '',
    min_power_capacity: 100,
    min_floor_space: 200,
    max_power: 300,
    max_cooling_capacity: 300,
    max_floor_space: 300,
    industry_exclusions: [],
    country_exclusions: [],
    preferred_industries: [],
    preferred_business_size: '',
    pricing: {
        price_per_kwt: '',
        floor_space: '',
        cage: '',
        rack: '',
        private_suite: '',
        tiered_pricing: false,
        number_of_tiers: 0,
        purchase_volume: 20,
        client_business_size: 'Small',
        term: 5,
        tier_threshold: '',
        sla: false,
        chose_sla: 'Standart',
        sla_upload_file: null,
        lease_agreement: '',
        purchase_volume_discount: {
            id: null,
            small_discount: 0,
            medium_discount: 0,
            large_discount: 0,
        },
        company_size_discount: {
            id: null,
            small_discount: 0,
            medium_discount: 0,
            large_discount: 0,
        },
        terms_of_lease_discount: {
            id: null,
            small_discount: 0,
            medium_discount: 0,
            large_discount: 0,
        },
    },
};

export const DC_EDIT_DATA: IDCEditData = {
    dcId: 0,
    mode: 'registration',
    capacityBlendedIPTrafficAvail: false,
    capacitySharedIPTrafficAvail: false,
    isFacilityUpsBacked: false,
    isFacilityGeneratorBacked: false,
    isFuelDeliveryAvailable: false,
    currPage: DCRegistrationPageNum.Page1,
    isLoading: false,
    dcFacility: DC_FACILITY_DATA,
    dcCapacity: DC_CAPACITY_DATA,
    dataCenter: DATA_CENTER_DATA,
    workAreas: DATA_WORK_AREAS,
    dcLeaseConditions: DC_LEASE_CONDITIONS_DATA,
};
