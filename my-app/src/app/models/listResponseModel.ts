import { ResponseModel } from "./responseModel";
import { Car } from "./car";
import { Brand } from "./brand";

export interface ListResponseModel<T>{
    data:T[];
    
}