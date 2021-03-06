import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Api } from '../providers/api/api';
import { TodaydealModel } from './models/todaydeal.model';
import { ProductListRequest } from './models/request/product-list.request';

@Injectable()
export class ListsService extends Api {
  private base: string;

  public getCountryList(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'list/country-list', { params: params });
  }

  /* get product list api*/

  public getProductList(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    const reqOpts: any = {};
    const reqQuery = new ProductListRequest(params);
    if (reqQuery) {
      reqOpts.params = new HttpParams();
      for (const k in reqQuery) {
        if (k && reqQuery[k] != null) {
          reqOpts.params = reqOpts.params.set(k, reqQuery[k]);
        }
      }
    }
    return this.http.get(this.base + 'list/custom-product-list', reqOpts);
  }

  /* get product list api*/

  public getProductCount(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    const reqOpts: any = {};
    params.count = 1;
    const reqQuery = new ProductListRequest(params);
    reqOpts.params = new HttpParams();
    for (const k in reqQuery) {
      if (k && reqQuery[k] != null) {
        reqOpts.params = reqOpts.params.set(k, reqQuery[k]);
      }
    }

    return this.http.get(this.base + 'list/custom-product-list', reqOpts);
  }

  /* get category list api*/

  public getCategoryList(params: any): Observable<any> {
    this.base = this.getBaseUrl();

    const reqOpts: any = {};
    if (params) {
      reqOpts.params = new HttpParams();
      for (const k in params) {
        if (k) {
          reqOpts.params = reqOpts.params.set(k, params[k]);
        }
      }
    }
    return this.http.get(this.base + 'list/category-list', reqOpts);
  }

  /* get banner list api*/

  public getBannerList(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    const reqOpts: any = {};
    if (params) {
      reqOpts.params = new HttpParams();
      for (const k in params) {
        if (k) {
          reqOpts.params = reqOpts.params.set(k, params[k]);
        }
      }
    }
    return this.http.get(this.base + 'list/banner-list', reqOpts);
  }

  /* get featured product list api*/

  public getFeaturedListList(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    const reqOpts: any = {};
    if (params) {
      reqOpts.params = new HttpParams();
      for (const k in params) {
        if (k) {
          reqOpts.params = reqOpts.params.set(k, params[k]);
        }
      }
    }
    return this.http.get(this.base + 'product-store/featureproduct-list', reqOpts);
  }

  /* get related product list api*/

  public getRelatedProducts(params: any): Observable<any> {
    this.base = this.getBaseUrl();

    const reqOpts: any = {};
    if (params) {
      reqOpts.params = new HttpParams();
      for (const k in params) {
        if (k) {
          reqOpts.params = reqOpts.params.set(k, params[k]);
        }
      }
    }
    return this.http.get(this.base + 'list/related-product-list', reqOpts);
  }

  /* get brand list api*/

  public getManufacturer(params: any): Observable<any> {
    this.base = this.getBaseUrl();

    const reqOpts: any = {};
    if (params) {
      reqOpts.params = new HttpParams();
      for (const k in params) {
        if (k) {
          reqOpts.params = reqOpts.params.set(k, params[k]);
        }
      }
    }
    return this.http.get(this.base + 'manufacturers/manufacturerlist', reqOpts);
  }

  /* get  product detail api*/

  public getProductDetail(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'product-store/product-detail/' + params.id);
  }
  /* get  product detail mandatory api*/

  public getProductDetailMandatory(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'product-store/product-detail/' + params.id);
  }

  /* get  page list api*/

  public getPageList(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'pages/pagelist', { params: params });
  }

  /* get  settings api*/

  public getsettings(): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'settings/get-settings');
  }

  /* contact us detail api*/

  public contacUs(params): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.post(this.base + 'list/contact-us', params);
  }

  /* page detail api*/

  public pageDetails(orderId): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'pages/get_pagedetails/' + orderId);
  }

  /* zone list api*/
  public getZoneList(params: any): Observable<any> {
    this.base = this.getBaseUrl();
    return this.http.get(this.base + 'list/zone-list', { params: params });
  }

  /* today deals list api*/
  public getTodayDealsList(params: TodaydealModel): Observable<any> {
    this.base = this.getBaseUrl();
    let reqOpts: any = {};
    reqOpts = params;
    return this.http.get(this.base + 'product-store/todayDeals-list', {
      params: reqOpts,
    });
  }
  /* subcategory list api*/
  getSubCategoryList(params) {
    this.base = this.getBaseUrl();
    let reqOpts: any = {};
    reqOpts = params;
    return this.http.get(this.base + 'product-store/Get-Category', {
      params: reqOpts,
    });
  }
}
