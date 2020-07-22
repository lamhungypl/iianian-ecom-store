export class PagelistResponseModel {
  public content: string;
  public isActive: string;
  public metaTagContent: string;
  public metaTagKeyword: string;
  public metaTagTitle: string;
  public pageId: string;
  public title: string;

  constructor(detailResponse: any) {
    this.content = detailResponse.content || '';
    this.isActive = detailResponse.isActive || '';
    this.metaTagContent = detailResponse.metaTagContent || '';
    this.metaTagKeyword = detailResponse.metaTagKeyword || '';
    this.metaTagTitle = detailResponse.metaTagTitle || '';
    this.pageId = detailResponse.pageId || '';
    this.title = detailResponse.title || '';
  }
}
