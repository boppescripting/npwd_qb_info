import { atom, selector, useRecoilValue } from 'recoil';
import { Info } from '../types/info';
import { MockInfo } from '../utils/constants';
import { isEnvBrowser } from '../utils/misc';
import fetchNui from '../utils/fetchNui';
import { ServerPromiseResp } from '../types/common';

export const infoStates = {
    information: atom({
        key: 'information',
        default: selector<Info[]>({
            key: 'defaultInformation',
            get: async () => {
                try {
                    const resp = await fetchNui<ServerPromiseResp<Info[]>>('npwd:infoapp:getPlayerInformation');
                    if (!resp.data) {
                        console.log('no response data');
                        return [];
                    }
                    return resp.data;
                } catch (e) {
                    if (isEnvBrowser()) {
                        return MockInfo;
                    }
                    console.error(e);
                    return [];
                }
            }
        })
    })
};

export const useInfoValues = () => useRecoilValue(infoStates.information);