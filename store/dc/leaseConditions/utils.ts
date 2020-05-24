import { ILeaseConditionsItem, ILeaseConditionsPost } from 'api/api.types';

export const serializeLeaseConditions = (
    data: ILeaseConditionsItem
): ILeaseConditionsPost => {
    const convertToArrOfStrings = (val: any) =>
        typeof val === 'string' ? val : String(val.id);

    return {
        term: data.term,
        min_power_capacity: data.min_power_capacity,
        min_floor_space: data.min_floor_space,
        max_power: data.max_power,
        max_cooling_capacity: data.max_cooling_capacity,
        max_floor_space: data.max_floor_space,
        preferred_business_size: data.preferred_business_size,
        pricing: data.pricing,
        industry_id: data.industry_exclusions.map(convertToArrOfStrings),
        country_exclusions_ids: data.country_exclusions.map(
            convertToArrOfStrings
        ),
        preferred_industries_ids: data.preferred_industries.map(
            convertToArrOfStrings
        ),
    };
};
