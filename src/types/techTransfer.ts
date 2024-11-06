export interface TechTransferData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  links: {
    moreInfo: string;
    application: string;
  };
}