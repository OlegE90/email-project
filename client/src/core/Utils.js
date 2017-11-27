import {STATUS} from './Consts';

export const getPayloadFailure = (error) => ({status: STATUS.FAILURE, data: null, errors: error.message, _fromSaga: true});
export const getPayloadSuccess = (data) => ({status: STATUS.SUCCESS, data, _fromSaga: true});

export const isFinalStatus = (status) => [STATUS.FAILURE, STATUS.SUCCESS].indexOf(status) !== -1;