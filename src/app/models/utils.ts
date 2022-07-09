import { HttpParams } from "@angular/common/http";

export function getCleanParams(filter: any) {
    let queryParams = new HttpParams();
    Object.keys(filter).forEach(
        key => filter[key] && (queryParams = queryParams.append(key, filter[key]))
    );
    return queryParams;
}