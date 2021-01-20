import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  PLATFORM_ID,
  Inject,
  SimpleChanges,
  OnChanges,
  OnDestroy,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ListsSandbox } from '../../../../core/lists/lists.sandbox';
import { ConfigService } from '../../../../core/service/config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-iian-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent implements OnInit, OnChanges, OnDestroy {
  // price filter
  public priceFrom = '';
  public priceTo: any = '';
  // filter used new
  public conditions = [
    { option: 'All', value: '' },
    { option: 'New', value: 1 },
    { option: 'Used', value: 2 },
  ];
  // filter with brand
  // public brandId = '';
  // product list
  // private category: any = '';
  private keyword: any = '';
  public condition = 0;
  public rupees: any;
  private oneTimeAssignValue = 1;
  @Input() isClickedData: string;
  @Input() brandId: string;
  @Input() category: string;
  @Output() progressEmit = new EventEmitter<string>();
  // radio form variable
  public radioForm: FormGroup;
  public radio: FormControl;
  // image
  public imagePath: string;

  private subscriptions: Array<Subscription> = [];
  constructor(
    private router: Router,
    public listSandbox: ListsSandbox,
    private configService: ConfigService,
    @Inject(PLATFORM_ID) private platformId: Record<string, unknown>,
    public route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.route.params.subscribe(data => {
      if (data.id) {
        this.category = data.id;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.getCategories();
  }
  // Initially calls getCategories,getBrands function.
  ngOnInit() {
    // this.imagePath = this.configService.get('resize').imageUrl;
    this.imagePath = this.configService.getImageUrl();
    this.brandId = localStorage.getItem('brandSelectionKey');
    if (this.brandId == null) {
      this.brandId = '';
    }
    this.getCategories();
    this.getBrands();

    /**               INITIALLY SET VALUE  (FROM PRICE) AND  (TO PRICE)
     * subscribe listSandbox maxProductPrice$  to get  maximum product price and as well as set default minimum price.
     * priceTo gets value from listSandbox.maxProductPrice$ and  convert string to number format
     * priceFrom gets value from listSandbox.maxProductPrice$ and  convert string to number format
     * **/
    this.subscriptions.push(
      this.listSandbox.maxProductPrice$.subscribe(maximumPrice => {
        if (maximumPrice && this.oneTimeAssignValue === 1) {
          const tempPriceTo = JSON.parse(maximumPrice);
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('priceTo', tempPriceTo);
            this.priceTo = localStorage.getItem('priceTo');
          }
          const initialToPrice = '1';
          this.priceFrom = JSON.parse(initialToPrice);
          this.oneTimeAssignValue++;
        }
      })
    );
    // subscribe subject getting value from MenuComponent
    this.subscriptions.push(
      this.listSandbox.productFilterData.subscribe(productId => {
        if (productId) {
          this.brandId = '';
        }
      })
    );

    this.listSandbox.productFilterData.subscribe(productId => {
      if (productId) {
        // reset the form Controls value
        this.radioForm.controls['radio'].reset();
        this.brandId = '';
      }
    });
    this.loadForm();
  }

  // build a form for radiobutton by gouping the form control
  loadForm() {
    this.radioForm = this.fb.group({
      radio: [''],
    });
  }

  // TODO New // calls getProducts for filter
  // public onChangeCategory(categoryId) {
  //   this.category = categoryId;
  //   this.getProducts();
  // }

  // calls getProducts for filter
  public onChangeCategory(categoryId) {
    const id: number = categoryId;
    const objStrId = JSON.stringify(id);
    localStorage.setItem('categoryIdDataKey', objStrId);
    this.getProducts();
    this.router.navigate(['/products', id]);
  }

  // calls listSandbox getManufacturerList for getting brand list
  public getBrands() {
    const params: any = {};
    params.limit = 10;
    params.offset = 0;
    params.keyword = '';
    this.listSandbox.getManufacturerList(params);
  }

  //  TODO New
  //    selecting brand in the brand list.
  //    Then calls getProducts to refresh the product list,
  //   set ,get,remove local storage for brandId.
  //    remove brandSelectionKey local storage.

  // public selectBrand(brandId) {
  //   if (brandId === +this.brandId) {
  //     this.brandId = '';
  //   } else {
  //     this.brandId = brandId;
  //   }
  //   this.getProducts();
  // }

  /**
   *  selecting brand in the brand list.
   *  Then calls getProducts to refresh the product list,
   *  set ,get,remove local storage for brandId.
   *  remove brandSelectionKey local storage.
   *  **/
  public selectBrand(brandId) {
    if (this.brandId !== brandId && !localStorage.getItem('brandSelectionKey')) {
      this.brandId = brandId;
      localStorage.setItem('brandKey', this.brandId);
      this.getProduct();
    } else {
      this.radioForm.controls['radio'].reset();
      this.brandId = '';
      localStorage.removeItem('brandKey');
      localStorage.removeItem('brandSelectionKey');
      const param: any = {};
      param.allproducts = 0;
      this.getProduct();
      if (!localStorage.getItem('categoryIdKey')) {
        this.router.navigate(['/products', param]);
      }
    }
  }

  // calls listSandbox getCategoryList with default param values
  public getCategories() {
    const params: any = {};
    params.limit = 10;
    params.offset = 0;
    params.keyword = '';
    params.sortOrder = 1;
    this.listSandbox.getCategoryList(params);
  }

  /**
   * Emit param to product component
   * @param manufacturerId to product component
   * */
  getProduct() {
    const params: any = {};
    params.manufacturerId = this.brandId;
    params.priceFrom = this.priceFrom;
    params.priceTo = this.priceTo;
    this.progressEmit.emit(params);
  }
  /** calls getProducts event changed,
   * @param id from condition event **/
  changeCondition(event, id) {
    this.condition = id;
    this.getProducts();
  }

  //TODO New /**calls getProducts for price filter
  //  * **/
  // selectPrice() {
  //   this.getProducts();
  // }

  /** calls getProducts after the price value changed.
   * And set local storage for pagination purpose **/
  selectPrice() {
    localStorage.removeItem('fromPrice');
    localStorage.removeItem('priceTo');
    localStorage.setItem('fromPrice', this.priceFrom);
    const objStr = JSON.stringify(this.priceTo);
    localStorage.setItem('priceTo', objStr);
    this.priceFrom = localStorage.getItem('fromPrice');
    this.getProducts();
  }

  /** set local storage value,
   *  after the price value changed based on the slider.
   *  @param event from priceFrom slider
   * **/
  priceFromValue(event) {
    this.priceFrom = event.value;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('fromPrice');
      localStorage.setItem('fromPrice', this.priceFrom);
      this.priceFrom = localStorage.getItem('fromPrice');
    }
  }

  /** set local storage value,
   *  after the price value changed based on the slider.
   *  @param event from priceTo slider
   * **/
  priceToValue(event) {
    this.priceTo = event.value;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('priceTo');
      const objStr = JSON.stringify(this.priceTo);
      localStorage.setItem('priceTo', this.priceTo);
      this.priceTo = localStorage.getItem('priceTo');
    }
  }

  /**
   * calls listSandbox getProductList.Then calls listSandbox getProductCount
   *And also emits the param to product list for correct pagination.
   * */
  getProducts() {
    const params: any = {};
    params.limit = 10;
    params.offset = 0;
    /**  during removing local storage it assigns null string
     * this condition will handle that.**/
    params.refresh = false;
    if (this.brandId === 'null' || this.brandId == null) {
      this.brandId = '';
      params.manufacturerId = this.brandId;
    } else {
      params.manufacturerId = this.brandId;
    }
    /**  during removing local storage it assigns null string
     * this condition will handle that.**/
    this.keyword = localStorage.getItem('keywordData');
    if (this.keyword === 'null' || this.keyword === 'empty' || this.keyword == null) {
      this.keyword = '';
      params.keyword = this.keyword;
    } else {
      params.keyword = this.keyword;
    }
    if (localStorage.getItem('categoryIdDataKey')) {
    }
    this.category = localStorage.getItem('categoryIdDataKey');
    /**  during removing local storage it assigns null string
     * this condition will handle that.**/
    if (this.category === 'null' || this.category == null) {
      this.category = '';
      params.categoryId = this.category;
    } else {
      params.categoryId = this.category;
    }
    /**  during removing local storage it assigns null string
     * this condition will handle that.**/
    if (this.priceFrom === 'null' || this.priceFrom == null) {
      this.priceFrom = '';
      params.priceFrom = this.priceFrom;
    } else {
      params.priceFrom = this.priceFrom;
    }
    if (isPlatformBrowser(this.platformId)) {
      if (!localStorage.getItem('priceTo')) {
        this.priceTo = '';
        params.priceTo = this.priceTo;
      } else {
        params.priceTo = this.priceTo;
      }
    }
    params.condition = this.condition;
    // this.progressEmit.emit(params);
    this.progressEmit.emit(params);
    this.listSandbox.getProductList(params);
    params.count = true;
    this.listSandbox.getProductCount(params);
  }
  ngOnDestroy() {
    this.subscriptions.forEach(each => {
      each.unsubscribe();
    });
  }
}
