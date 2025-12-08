//　專門存放並使用　SERVICE 相關的資料處理
import {
    PROCESS_STEP,
    PRICE_SET,
    CUSTOMER_CASE,
    COMMON_QUESTION,
    SERVICES_SET,
} from "../data/services_set.js";

// 全 PROCESS_STEP 的資料
export const getProcessStep = () => {
    return PROCESS_STEP;
}
// 全 PRICE_SET 的資料
export const getPriceSet = () => {
    return PRICE_SET;
}
// 全 CUSTOMER_CASE 的資料
export const getCustomerCase = () => {
    return CUSTOMER_CASE;
}
// 全 COMMON_QUESTION 的資料
export const getCommonQuestion = () => {
    return COMMON_QUESTION;
}
// 全 SERVICES_SET 的資料
export const getServicesSet = () => {
    return SERVICES_SET;
}

