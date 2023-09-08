import { MouseEventHandler } from "react";

export type TInputList = {
  list: string[];
};

export type TPropsIcon = {
  onClick: MouseEventHandler<HTMLElement>;
};

export type TParamRequest = {
  search: string;
  start: number;
  sorting: string;
};

export type TBookInfo = {
  allowAnonLogging: boolean;
  authors: string[];
  canonicalVolumeLink: string;
  categories: string[];
  contentVersion: string;
  comicsContent: boolean;
  description: string;
  industryIdentifiers: [{ type: string; identifier: string }];
  infoLink: string;
  imageLinks: { smallThumbnail: string; thumbnail: string };
  language: string;
  maturityRating: string;
  pageCount: number;
  panelizationSummary: {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
  previewLink: string;
  printType: string;
  publisher: string;
  publishedDate: string;
  readingModes: { text: boolean; image: boolean };
  title: string;
};

export type TBook = {
  accessInfo: {
    accessViewStatus: string;
    country: string;
    embeddable: boolean;
    epub: {
      isAvailable: boolean;
    };
    pdf: {
      isAvailable: boolean;
    };
    publicDomain: boolean;
    quoteSharingAllowed: boolean;
    textToSpeechPermission: string;
    viewability: string;
    webReaderLink: string;
  };
  etag: string;
  id: string;
  kind: string;
  saleInfo: {
    country: string;
    isEbook: boolean;
    saleability: string;
  };
  searchInfo: {
    textSnippet: string;
  };
  selfLink: string;
  volumeInfo: TBookInfo;
};
